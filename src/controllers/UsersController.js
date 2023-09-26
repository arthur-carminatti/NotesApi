const AppError = require("../utils/AppError")

class UsersController {
    create(request, response) {
        const { name, email, passworld } = request.body

        if (!name) {
            throw new AppError("O nome é obrigatório", 200)
        }

        response.status(201).json({ name, email, passworld })
    }
}

module.exports = UsersController;