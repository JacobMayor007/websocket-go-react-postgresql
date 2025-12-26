package routes

import (
	"websocket_server/repository"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App, user repository.UserRepository) {
	UserRoutes(app, user)
}
