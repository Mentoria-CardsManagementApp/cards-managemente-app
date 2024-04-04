import { UserRepositoryInterface } from './../../repository/UserRepositoryInterface';

type Response = {
  accessToken: string;
  refreshToken: string;
};

interface TokenService {
  generateAccessToken(userId: string): string;
  genereateRefreshToken(userId: string): string;
}

type UserProps = {
  googleId: string;
  username: string;
  email: string;
};

export class GoogleAuthService {
  constructor(
    private readonly userRepository: UserRepositoryInterface,
    private readonly tokenService: TokenService
  ) {}

  async execute(userInput: UserProps): Promise<Response> {
    const user = await this.getOrCreateUser(userInput);
    const accessToken = this.tokenService.generateAccessToken(user.id);
    const refreshToken = this.tokenService.genereateRefreshToken(user.id);

    return {
      accessToken,
      refreshToken,
    };
  }

  private async getOrCreateUser(user: UserProps) {
    const userExists = await this.userRepository.findUserByGoogleId(
      user.googleId
    );
    if (userExists) {
      return userExists;
    }
    return await this.userRepository.createUser(user);
  }
}
