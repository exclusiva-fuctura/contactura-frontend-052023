import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AutenticadorGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const token = null;

    if (token !== null) {
      console.log("Você está autenticado!")

      return true;
    }

    console.error("Autenticação necessária!")
    this.router.navigate(['/login']);
    return false;
  }
}
