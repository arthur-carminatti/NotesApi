const { Router } = require("express")

const NotesControler = require("../controllers/NotesControler")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router()

const notesControler = new NotesControler()

notesRoutes.use(ensureAuthenticated)

notesRoutes.post("/", notesControler.create)
notesRoutes.get("/", notesControler.index)
notesRoutes.get("/:id", notesControler.show)
notesRoutes.delete("/:id", notesControler.delete)

module.exports = notesRoutes;