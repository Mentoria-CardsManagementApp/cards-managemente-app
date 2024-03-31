import { createUser, findUserById } from '../../repository/user-repository';

type Params = {
  googleId: string;
};
type Result = {
  accessToken: string;
  refreshToken: string;
  userId: string;
};

export class GoogleAuthenticationService {
  async execute({ googleId }: Params): Promise<Result> {
    const userId = await this.getUserId(googleId);

    //* Create Tokens

    return {
      accessToken: 'create token',
      refreshToken: 'create token',
      userId,
    };
  }
  private async getUserId(googleId: string): Promise<string> {
    const user = await findUserById(googleId);
    if (!user) {
      const newuser = await createUser({
        id: 'any',
        email: 'any',
        username: 'any',
        birthDate: new Date('1988-09-02'),
        city: null,
        region: 'dsadsa',
        country: 'dssd',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return newuser.id;
    }
    return user.id;
  }
}
