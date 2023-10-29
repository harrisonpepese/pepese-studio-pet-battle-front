export interface ILoginRequestDto {
  username: string;
  password: string;
}

export interface ILoginResponseDto {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  role: string;
  userId: string;
}
