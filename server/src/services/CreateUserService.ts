import { IUserCreate } from "../interfaces/IUserCreate";

class CreateUserService {
  constructor(private useRepository: IUserCreate) {}

  public async execute(name: string, email: string, password: string) {
    const user = await this.useRepository.create(name, email, password);
    return user;
  }
}

export { CreateUserService };
