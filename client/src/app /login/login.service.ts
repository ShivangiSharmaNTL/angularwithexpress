import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/User';
@Injectable()
export class LoginService {
  constructor(private http:Http) { }
  login(): Observable<any>{
  	const url="http://localhost:4011/register";
  	return this.http
  	.get(url)
  	.map((res:Response)=> res.json() as User);

  }
}
