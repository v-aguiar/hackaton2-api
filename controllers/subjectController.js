import db from "../db/db.js";

export async function getMaterias(req, res) {
  try {
    const materias = await db.collection("materias").find().toArray();
    res.status(200).json(materias);
  } catch {
    res.status(500).send("Erro ao pegar as materias");
  }
}
