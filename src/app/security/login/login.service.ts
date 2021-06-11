import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";
import { User } from "./user.model";
import { NavigationEnd, Router } from "@angular/router";
import {tap, filter} from 'rxjs/operators'
 
@Injectable()
export class LoginService{
    
    user: User
    lastUrl :string

    constructor(private http: HttpClient, private router: Router){
        this.router.events.pipe(filter(e => e instanceof NavigationEnd))
                           .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
    }
    
    isLoogedIn():boolean {
        return this.user !== undefined
    }
    
    login(email: string, password:string): Observable<User>{
        return this.http.post<User>(`${MEAT_API}/login`, {email, password})
                                    .pipe(tap(user => this.user = user))
    }
    logout(){
        this.user = undefined
    }
    handleLogin(path: string = this.lastUrl){
        this.router.navigate(['/login', btoa(path)])
    }
}
