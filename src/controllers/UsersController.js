class UsersController {
    create(request, response) {
        const { name, email, passworld } = request.body

        response.status(201).json({ name, email, passworld })
    }
}

module.exports = UsersController;