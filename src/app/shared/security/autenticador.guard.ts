import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AutenticadorService } from "../services/autenticador.service";

@Injectable()
export class AutenticadorGuard implements CanActivate {

  constructor(private autenticadorService: AutenticadorService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.autenticadorService.getToken() !== null) {
      console.log("Você está autenticado!")

      return true;
    }

    console.error("Autenticação necessária!")
    this.router.navigate(['/login']);
    return false;
  }
}
