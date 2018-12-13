const express = require('express');
const app = express();
const fs = require('fs');

const { convertAndValidateNumsArray, findMode } = require('./helpers');

app.get('/mean', function(req, res, next) {
  if (!req.query.nums) {
    return res
      .status(400)
      .send(
        'You must pass a query key of nums with a comma-separated list of numbers.'
      );
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    return res.send(nums.message);
  }

  let sum = nums.reduce(function(acc, cur) {
    return acc + cur;
  });

  let mean = sum / nums.length;

  let result = `The mean of ${nums.join(', ')} is ${mean}\n\n`;

  fs.appendFile('./results.txt', result, function(err) {
    if (err) {
      return res.send(
        `There was an error appending to the file: ${err.message}`
      );
    }
    return res.send(result);
  });
});

app.get('/median', function(req, res, next) {
  if (!req.query.nums) {
    return res
      .status(400)
      .send(
        'You must pass a query key of nums with a comma-separated list of numbers.'
      );
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    return res.send(nums.message);
  }

  // sort and get the middle element

  nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = nums[middleIndex] + nums[middleIndex - 1] / 2;
  } else {
    median = nums[middleIndex];
  }

  let result = `The median of ${nums.join(', ')} is ${median}\n`;

  fs.appendFile('./results.txt', result, function(err) {
    if (err) {
      return res.send(
        `There was an error appending to the file: ${err.message}`
      );
    }
    return res.send(result);
  });
});

app.get('/mode', function(req, res, next) {
  if (!req.query.nums) {
    return res
      .status(400)
      .send(
        'You must pass a query key of nums with a comma-separated list of numbers.'
      );
  }
  let numsAsStrings = req.query.nums.split(',');
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    return res.send(nums.message);
  }

  let mode = findMode(nums);

  let result = `The mode of ${nums.join(', ')} is ${mode}\n\n`;

  fs.appendFile('./results.txt', result, function(err) {
    if (err) {
      return res.send(
        `There was an error appending to the file: ${err.message}`
      );
    }
    return res.send(result);
  });
});

app.get('/results', function(req, res, next) {
  if (!fs.existsSync('./results.txt')) {
    return res.status(404).send(`Not Found! This file does not exist.`);
  }
  fs.readFile('./results.txt', 'utf8', function(err, data) {
    data = data.split('\n').join('<p>');
    return res.send(`${data}`);
  });
});

app.delete('/results', function(req, res, next) {
  if (!fs.existsSync('./results.txt')) {
    return res.status(404).send(`Not Found! This file does not exist.`);
  }
  fs.unlink('./results.txt', function(err) {
    return res.send('File deleted successfully.');
  });
});

app.listen(3000, function() {
  console.log(`Server starting on port 3000`);
});
