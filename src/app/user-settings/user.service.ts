import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
   
    constructor(private http: Http) { }

    getUser() {
        let data;
        data = this.http.get('../assets/userData.json')
    //    data = this.http.get('http://10.98.20.104/trackR/index.php/userprofile?token=param1&uid=param2')
        .map((res:Response) => res.json());
        console.log(data);
        return data;
    }
}