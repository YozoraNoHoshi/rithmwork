const fs = require('fs');
const axios = require('axios')
const argv = process.argv;


if (argv[2].startsWith('http')) {
  webCat(argv[2]);
} 
else: cat(argv[2])

function cat(path) {
  fs.readFile(`${path}`, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(data);
  });
}

function webCat(url) {
  axios.get(url).then(resp => {
    console.log(resp)
  }).catch(error => console.log(error))
}