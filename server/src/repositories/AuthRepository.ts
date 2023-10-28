import { User } from "@prisma/client";
import { IUserAuthenticate } from "../interfaces/IUserAuthenticate";
import prisma from "../database";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

class AuthRepository implements IUserAuthenticate {
  public async auth(email: string, password: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new Error("Error: usuário incorreta!");
    }

    const checkPassword = await compare(password, user.password);

    if (!password) {
      throw new Error("Error: senha incorreta!");
    }

    // onde esta secrete seria uma chave segura ao invés de "secrete"
    const token = jwt.sign({ id: user.id }, "secret", {
      expiresIn: "1d",
    });

    // deleta senha que veio
    delete user?.password;

    // pega todo dados do user e token
    const data = { ...user, token };

    return data;
  }
}
export { AuthRepository };
