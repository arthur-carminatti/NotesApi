const { Router } = require("express")

const usersRoutes = Router()

usersRoutes.post("/", (request, response) => {
    const { name, email, passworld } = request.body

    response.json({ name, email, passworld })
})

module.exports = usersRoutes;