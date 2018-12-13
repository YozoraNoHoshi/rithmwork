const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let cart = [];
let id = 1;

app.get('/items', function(req, res, next) {
  return res.json({ cart });
});

app.post('/items', function(req, res, next) {
  let newItem = {
    name: req.body.name,
    price: req.body.price,
    id: id
  };
  cart.push(newItem);
  id += 1;
  return res.json(newItem);
});

app.get('/items/:id', function(req, res, next) {
  return res.json(cart[getItemId(req)]);
});

app.patch('/items/:id', function(req, res, next) {
  let { name, price } = req.body;
  let item = cart[getItemId(req)];
  if (name) {
    item.name = name;
  }
  if (price) {
    item.price = price;
  }
  return res.json(item);
});

app.delete('/items/:id', function(req, res, next) {
  let itemIndex = getItemId(req);
  return res.json(cart.splice(itemIndex, 1));
});

function getItemId(req) {
  let itemId = +req.params.id;

  let index = cart.findIndex((val, ind, arr) => {
    return val.id === itemId;
  });

  return index;
}

app.use(function(req, res, next) {
  let err = new Error('Page not found');
  err.status = 404;
  return next(err);
});

app.use(function(error, req, res, next) {
  let status = error.status || 500;
  return res.status(status).json({
    error: {
      message: error.message,
      status: status
    }
  });
});
app.listen(3000, () => console.log('App on port 3000'));
