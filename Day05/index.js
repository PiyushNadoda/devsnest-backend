const fs = require('fs');
const args = process.argv;

// for creating new directory
if(args[2] === '--mkdir'){
    fs.mkdirSync(args[3])
}

// for removing directory
if(args[2] === '--rmdir'){
    fs.rmdirSync(args[3])
}

// rename directory
if(args[2] === '--rename'){
    fs.renameSync(args[3], args[4])
}

// create new file
if(args[2] === '--touch'){
    fs.writeFileSync(args[3], args[4] || "")
}

// append file create new file if not exist
if(args[2] === '--append-text'){
    fs.appendFileSync(args[3], args[4])
}

// read the file
if(args[2] === '--read'){
    fs.readFileSync(args[3], 'utf-8')
}

// remove file
if(args[2] === '--remove'){
    fs.unlinkSync(args[3])
}