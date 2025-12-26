package api

import (
	"fmt"
	"websocket_server/model"
	"websocket_server/repository"

	"github.com/gofiber/fiber/v2"
)

type UserRepo struct {
	UserRepository repository.UserRepository
}

func (ur *UserRepo) UserHandle(f *fiber.Ctx) error {
	switch f.Method() {
	case "POST":
		return ur.CreateUser(f)
	default:
		return fmt.Errorf("method now allowed: %v", f.Method())
	}
}

func (ur *UserRepo) CreateUser(f *fiber.Ctx) error {
	var user model.User

	if err := f.BodyParser(&user); err != nil {
		fmt.Printf("Create User API, Body Parser error: %s", err)

		return f.Status(400).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	if err := ur.UserRepository.CreateUserAccount(&user); err != nil {
		fmt.Printf("Create User API, error: %s", err)

		return f.Status(400).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return f.JSON(fiber.Map{
		"message": "User created successfully",
	})
}
