package repository

import (
	database "websocket_server/config"
	"websocket_server/model"
)

type UserRepository interface {
	CreateUserAccount(*model.User) error
}

type UserDB struct {
	sqlDB *database.PostgreDB
}

func InitUserRepository(db *database.PostgreDB) *UserDB {
	return &UserDB{
		sqlDB: db,
	}
}

func (userDb *UserDB) CreateUserAccount(user *model.User) error {
	query := `
        INSERT INTO users (user_id, email)
        VALUES ($1, $2)
    `

	_, err := userDb.sqlDB.Db.Exec(query, user.UserUID, user.Email)
	return err
}
