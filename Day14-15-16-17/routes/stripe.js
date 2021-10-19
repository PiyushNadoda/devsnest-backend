const router = require('express').Router();
const path = require('path')
const {stripeKey} = require('../config/index')
const stripe = require('stripe')(stripeKey)

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/payment.html"));
})


router.post('/payment', async (req, res)=>{
    try{
        const session = await stripe.checkout.sessions.create({
            line_items: [{
                amount: req.body.price * 100,
                name: "Shopping",
                currency: "usd",
                quantity: 1
            }],
            payment_method_types: ["card"],
            success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}?canceled=true`
        })
        res.redirect(303, session.url)
    }catch(err){
        res.status(500).send({err})
    }
})

module.exports = router;