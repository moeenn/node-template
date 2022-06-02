import SQL, { Row } from "@src/Infra/Database/Init"
import { User } from "@src/Domain/Entities/User"

async function List(): Promise<Row[]> {
  return SQL`
    SELECT * FROM users
  `
}

async function Find(id: string): Promise<Row[]> {
  return SQL`
    SELECT * FROM users
    WHERE id = ${id}
  `
}

async function Create(user: User): Promise<void> {
  const { id, name, email, password } = user

  await SQL`
    INSERT INTO users (id, name, email, password)
    VALUES (${id}, ${name}, ${email}, ${password})
  `
}

async function Delete(id: string): Promise<void> {
  await SQL`
    DELETE FROM users
    WHERE id = ${id}
  `
}

async function FindByEmail(email: string): Promise<Row[]> {
  return SQL`
    SELECT * FROM users
    WHERE email = ${email}
  `  
}

export default {
  List,
  Find,
  Create,
  Delete,
  FindByEmail,
}