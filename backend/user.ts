export class User {
    constructor(
        public email: string,
        public name: string,
        private password: string
    ){}

    matches(another: User):boolean{
        return another != undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[key:string]:User} = {
    "viniciuslima@gmail.com": new User('viniciuslima@gmail.com', 'vinicius', '123'),
    "t@t": new User('t@t', 'Usuario', 't')
}

