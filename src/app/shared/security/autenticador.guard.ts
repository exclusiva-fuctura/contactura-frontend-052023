import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AutenticadorGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const token = "123";

    if (token !== null) {
      console.log("Você está autenticado!")

      return true;
    }

    console.error("Autenticação necessária!")
    this.router.navigate(['/login']);
    return false;
  }
}
