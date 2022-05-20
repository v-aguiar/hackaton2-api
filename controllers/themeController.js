import db from "../db/db.js";

export async function getTheme(req, res) {
  const { name } = req.headers;

  try {
    const theme = await db.collection("temas").findOne({ name });
    res.status(200).json(theme);
  } catch {
    res.status(500).send("Erro ao pegar o tema");
  }
}

export async function getThemes(req, res) {
  try {
    const themes = await db.collection("temas").find();
    res.status(200).json(themes);
  } catch {
    res.status(500).send("Erro ao pegar os temas");
  }
}

export async function postThemes(req, res) {
  const { theme } = req.body;

  try {
    await db.collection("temas").insertOne({ theme });
    res.status(201).send("Tema adicionado com sucesso!");
  } catch {
    res.status(500).send("Erro ao adicionar tema");
  }
}
