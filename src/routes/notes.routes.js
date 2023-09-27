const { Router } = require("express")

const NotesControler = require("../controllers/NotesControler")

const notesRoutes = Router()

const notesControler = new NotesControler()

notesRoutes.get("/", notesControler.index)
notesRoutes.post("/:user_id", notesControler.create)
notesRoutes.get("/:id", notesControler.show)
notesRoutes.delete("/:id", notesControler.delete)

module.exports = notesRoutes;