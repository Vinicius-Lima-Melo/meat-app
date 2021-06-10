import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import { User } from "./user.model";
import 'rxjs/operator/do'
import { Router } from "@angular/router";
 
@Injectable()
export class LoginService{
    
    user: User
    constructor(private http: HttpClient, private router: Router){}
    
    isLoogedIn():boolean {
        return this.user !== undefined
    }
    
    login(email: string, password:string): Observable<User>{
        return this.http.post<User>(`${MEAT_API}/login`, {email, password})
                                    .do(user => this.user = user)
    }
    handleLogin(path?: string){
        this.router.navigate(['/login', btoa(path)])
    }
}
