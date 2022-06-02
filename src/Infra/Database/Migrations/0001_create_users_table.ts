import SQL from "@src/Infra/Database/Init"

async function migration(): Promise<void> {
  await SQL`
    CREATE TABLE users (
      id VARCHAR (255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `
}

export default migration