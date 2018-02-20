import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
   
    constructor(private http: Http) { }

    getUser() {
        let data;
       // data = this.http.get('../assets/userData.json')
        data = this.http.get('http://10.98.20.104/trackR/index.php/userprofile?token=$1$fTW.ZNjx$eNN5pOfymsVDr9Zc1esWS/&uid=2')
        .map((res:Response) => res.json());
        console.log(data);
        return data;
    }
/*
    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts/').map(result => result.json());
    }*/

}