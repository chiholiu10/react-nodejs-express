const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 5000;

app.use(cors())
app.use(bodyParser.json());         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const stock = 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const getMockResponse = (id) => {
  const responses = {
    13: {
      responseCode: 201,
      body: {
        milk: 1104.48,
        skins: 3,
      },
    },
    14: {
      responseCode: 206,
      body: {
        milk: 1188.81,
        skins: 4,
      },
    },
  }
  return responses[id] ? responses[id] : { responseCode: 400, body: { error: "Item not found" } }
}

app.get("/web-shop/stock/:id", (req, res) => {
  const response = getMockResponse(req.params.id);
  res.status(response.responseCode).json(response.body);
})

const getMockResponseHerd = (id) => {
  const responses = {
    13: {
      responseCode: 201,
      body: {
        herd: [
          {
            "name": "Betty-1",
            "age": 4.13,
            "age_last_shaved": 4.0
          },
          {
            "name": "Betty-2",
            "age": 8.13,
            "age_last_shaved": 8.0
          },
          {
            "name": "Betty-3",
            "age": 9.63,
            "age_last_shaved": 9.5
          }
        ]
      },
    },
    14: {
      responseCode: 206,
      body: {
        herd: [
          {
            "name": "Betty-1",
            "age": 4.13,
            "age_last_shaved": 4.14
          },
          {
            "name": "Betty-2",
            "age": 8.13,
            "age_last_shaved": 8.14
          },
          {
            "name": "Betty-3",
            "age": 9.63,
            "age_last_shaved": 9.64
          }
        ]
      },
    },
  }
  return responses[id] ? responses[id] : { responseCode: 400, body: { error: "Item not found" } }
}

app.get("/web-shop/herd/:id", (req, res) => {
  const response = getMockResponseHerd(req.params.id);
  res.status(response.responseCode).json(response.body.herd);
})

app.post("/web-shop/load", (req, res) => {
  res.status(205).json(req.body)
})

app.post("/web-shop/order/14", (req, res) => {
  const stock = {
    milk: 500,
    skins: 10
  };

  const order = {
    milk: req.body.order.milk,
    skins: req.body.order.skins
  };

  const orderMoreThanStock = Object.entries(order).reduce((acc, curr) => {
    const [product, qty] = curr;
    if (qty <= stock[product]) acc.push({ [product]: qty });
    return acc;
  }, []);

  if (orderMoreThanStock.length == 2) {
    res.status(201).json(orderMoreThanStock)
  }
  if (orderMoreThanStock.length == 1) {
    res.status(206).json(orderMoreThanStock)
  }
  if (orderMoreThanStock.length == 0) {
    res.status(404).end()
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})