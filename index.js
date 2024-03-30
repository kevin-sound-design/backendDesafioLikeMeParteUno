const express = require('express');
const cors = require('cors');
const {agregarPosts, traerPosts} = require('./consultas');

const PORT = 3000;

const app = express();

app.use(express.json())
app.use(cors());

app.listen(PORT, ()=> console.log(`Servidor iniciado en puerto ${PORT}`));

app.get("/posts", async (req, res) =>{
  const posts = await traerPosts();
  res.json(posts);
})

app.post("/posts", async (req, res) =>{
  const data = req.body;
  await agregarPosts(data.titulo, data.url, data.descripcion);
  res.send("Post agregado")
})



