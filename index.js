import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.get("/hoteis", (req, res) => {
  res.render("hoteis");
});

app.get("/reserva", (req, res) => {
  res.render("reserva");
});

const port = 8080;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Servidor rodando na porta ${port}.`);
  }
});
