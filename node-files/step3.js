const fs = require('fs');
const axios = require('axios');
const argv = process.argv;
let argIndex = 2;
let filename, data;

readCmd();

async function readCmd() {
  if (argv[2] === '--out') {
    argIndex += 2;
    filename = argv[3];
  }
  if (argv[argIndex].startsWith('http')) {
    data = await webCat(argv[argIndex]);
  } else {
    data = cat(argv[argIndex]);
  }
  if (data && filename) {
    logResults(filename, data);
  }
}

function cat(path) {
  try {
    return fs.readFileSync(`${path}`, 'utf8');
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

async function webCat(url) {
  try {
    resp = await axios.get(url);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error.response.status);
    process.exit(1);
  }
}

function logResults(filename, data) {
  let path = `${process.cwd()}/${filename}`;
  // process.cwd or __dirname, depending on which location you want (process.cwd is current working directory, __dirname is the directory the module is located)
  fs.writeFile(path, data, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Wrote to file ${path}`);
  });
}
