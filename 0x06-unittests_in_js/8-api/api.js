const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Start the server only if it's not already running
if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`API available on localhost port ${PORT}`);
    });
}

module.exports = app;
