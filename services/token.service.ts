import { ELocalStorageItems } from "@/types/localStorage/localStorageItems.enum";

export default class TokenService {
  static getToken(): string | null {
    return localStorage.getItem(ELocalStorageItems.token);
  }
  static updateToken(token: string): void {
    localStorage.setItem(ELocalStorageItems.token, token);
  }
  static removeToken(): void {
    localStorage.removeItem(ELocalStorageItems.token);
  }
  static hasToken(): boolean {
    return !!localStorage.getItem(ELocalStorageItems.token);
  }
  static getRefreshToken(): string | null {
    return localStorage.getItem(ELocalStorageItems.refreshToken);
  }
  static updateRefreshToken(token: string): void {
    localStorage.setItem(ELocalStorageItems.refreshToken, token);
  }
  static removeRefreshToken(): void {
    localStorage.removeItem(ELocalStorageItems.refreshToken);
  }
  static hasRefreshToken(): boolean {
    return !!localStorage.getItem(ELocalStorageItems.refreshToken);
  }
}
