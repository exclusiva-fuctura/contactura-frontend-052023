import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TokenState {
  private token: string | null | undefined;

  public getToken(): string | null | undefined {
    return this.token;
  }


  public setToken(token: string | null): void {
    this.token = token;
  }
}
