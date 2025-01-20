import { Injectable } from '@nestjs/common';
import { AuthenticateDto } from './dto/authenticate.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async authenticate(authenticateDto: AuthenticateDto) {
    const { email } = authenticateDto;

    const users = await this.usersRepo.findUnique({
      where: { email },
    });

    return { users };
  }
}
