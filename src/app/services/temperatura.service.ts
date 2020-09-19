import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TemperaturaService {

    constructor(private http: HttpClient){
        console.log("Service ready");
    }

    getDatos(){
        return this.http.get('http://18.212.104.18:3000/');
    }
}