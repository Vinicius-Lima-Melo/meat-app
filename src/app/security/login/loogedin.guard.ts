import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoogedinGuard implements CanLoad, CanActivate{
    
    constructor(private loginService: LoginService){}

    checkAuthentication(path: string):boolean{
        const loogedIn = this.loginService.isLoogedIn()
        if(!loogedIn){
            this.loginService.handleLogin(`/${path}`)
        }
        return loogedIn
    }

    canLoad(route: Route):boolean{
        console.log('canLoad')
        return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot):boolean{
        console.log('canActivated')
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }
}