
const express = require('express');

const app = express();
const PORT = 7865;

// Middleware to parse JSON body
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Cart endpoint
app.get('/cart/:id(\\d+)', (req, res) => {
    const { id } = req.params;
    res.send(`Payment methods for cart ${id}`);
});

// Available payments endpoint
app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false,
        },
    });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { userName } = req.body;
    if (userName) {
        res.send(`Welcome ${userName}`);
    } else {
        res.status(400).send('Missing userName');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
