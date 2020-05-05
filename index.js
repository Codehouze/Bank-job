
const express = require ("express");
// Port Environment variable
const PORT = process.env.PORT || 5000;

// Creating the node server
const app = express();


// Firing up the server on selected port
app.listen(PORT,()=>{
    console.log("hello ");
});

app.on("listening", () => {
    console.log("[Server]::LISTEN:%s", PORT);
});

// Callback function for checking connecting or error
app.on("error", error => {
    throw new Error(`[Server]::ERROR:${error.message}`);
});