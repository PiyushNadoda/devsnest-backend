const fs = require("fs");
const args = process.argv;

switch (args[2]) {
  case "--mkdir":
    fs.mkdirSync(args[3]);
    break;

  case "--rmdir":
    fs.rmdirSync(args[3]);
    break;

  case "--rename":
    fs.renameSync(args[3], args[4]);
    break;

  case "--touch":
    fs.writeFileSync(args[3], args[4] || "");
    break;

  case "--append-text":
    fs.appendFileSync(args[3], args[4]);
    break;

  case "--read":
    fs.readFileSync(args[3], "utf-8");
    break;

  case "--remove":
    fs.unlinkSync(args[3]);
    break;
  default:
      console.log('Enter Valid arguemnet');
    break;
}
