import { ObjectId } from "mongodb";
import db from "../db/db.js";

export async function getMaterias(req, res) {
  const { id } = req.params;

  try {
    const materias = await db
      .collection("materias")
      .find({ materiaId: new ObjectId(id) })
      .toArray();
    res.status(200).json(materias);
  } catch {
    res.status(500).send("Erro ao pegar as materias");
  }
}
