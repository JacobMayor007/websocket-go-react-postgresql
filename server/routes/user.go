package routes

import (
	"websocket_server/api"
	"websocket_server/repository"

	"github.com/gofiber/fiber/v2"
)

func UserRoutes(app *fiber.App, repo repository.UserRepository) {
	userApi := api.UserRepo{
		UserRepository: repo,
	}

	app.Post("/user", userApi.CreateUser)
}
