import { Injectable } from "@angular/core";
import { Http, Response ,RequestOptions } from "@angular/http";
import { Employee } from "../model/employee.model";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx"

@Injectable()
export class FormPoster {

    constructor(private http:Http){

    }

    postEmployeeForm(employee: Employee):Observable<any> {
        console.log('posting employee ',employee);
        let body = JSON.stringify(employee);
        let headers = new Headers({ 'Content-Type':'application/json'});
        //let options = new RequestOptions({headers: headers});

        return this.http.post('http://localhost:3100/postemployee',body)
        .map(this.extractData)
        .catch(this.handleError);
    }
    handleError(error: any): any {
        console.error('post error: ',error);
        return Observable.throw(error.statusText);
    }
    extractData(res: Response){
        let body = res.json;
        return body.fields || { };
    }

}