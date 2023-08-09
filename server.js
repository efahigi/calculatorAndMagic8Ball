// Load express or Bringing in Express / Import
const express = require("express");

// Create our express app or Connects express instance to the variable 'app'
const app = express();

// //-{Middleware}
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


// // Item arry
const magics = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

// Define a "root" route directly on app
app.get('/',(req, res) => {
  res.send('<h1>Hello, World </h1>');
});

app.get('/greeting',(req, res) => {
    res.send('<h1>Hello, stranger</h1>');
  });
  
//   app.get('/magic', (req, res) => {
//     res.send(` <h1>Will I be a Millionaire?</h1>`);
//   });
app.get('/:indexOfMagicsArray',(req, res) => {
    res.send(magics[req.params.indexOfMagicsArray]);
});



app.get('/greeting/:name',(req,res)=>{
    console.log(req.params);
    console.log( req.query);
    res.send(`What's up, ${req.params.name}! It's so great to see you! wow hello there, ${req.params.name}`)
})
app.get('/tip/:total/:tipPercentage', (req,res)=>{
    console.log(req.params);
    res.send(`The total bill is ${req.params.total}. ${req.params.tipPercentage} is the tipPercentage.`)
})

app.get('/magic/:input', (req,res)=>{
    console.log(req.params);
    console.log( req.query);
    res.send(`${req.params.input}? : ${req.query.magics}`)
})


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, (req,res)=>{
  console.log('Listening on port 3000');
});