const { Router } = require("express")

const NotesControler = require("../controllers/NotesControler")

const notesRoutes = Router()

const notesControler = new NotesControler()

notesRoutes.post("/:user_id", notesControler.create)

module.exports = notesRoutes;