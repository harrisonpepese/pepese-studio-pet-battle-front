import { ILoginRequestDto, ILoginResponseDto } from "@/types/auth/login.dto";
import fetcher from "./fetch.service";

export default class AuthService {
  static async login(request: ILoginRequestDto): Promise<ILoginResponseDto> {
    const res = await fetcher.post<ILoginResponseDto>("auth", { ...request });
    console.log(res);
    return res.data;
  }
  static async logout(): Promise<any> {}
  static async register(email: string, password: string): Promise<any> {}
  static async refreshToken(refreshToken: string): Promise<any> {}
}
