import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Employee } from "../model/employee.model";

@Injectable()
export class FormPoster {

    constructor(private http:Http){

    }

    postEmployeeForm(employee: Employee){
        
    }

}