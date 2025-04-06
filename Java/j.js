const http = require('http');

const server = http.createServer();


app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Name: ${name}, Email: ${email}`);
});

const PORT = 3000;
request.listen(PORT, () => {
  console.log(body);
});
let body = "";
request.on("data",(chunk)) =>{
    body = body + chunk.toString();
    console.log(body);

}

