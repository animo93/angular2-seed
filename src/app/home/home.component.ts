import {Component} from '@angular/core';
import { Employee } from '../model/employee.model';
import { FormPoster } from '../services/form-poster.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  languages = ['English', 'Spanish' , 'Other'];
  model = new Employee('Darla','Smith',true,'w2','default');
  hasPrimaryLanguageError = false;

  constructor(private formPoster:FormPoster){}

  firstNameToUpperCase(value: string){
    if(value.length > 0 ){
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }else{
      this.model.firstName = value;
    }
  }

  isSelectValid(value){
    if(value === 'default'){
      this.hasPrimaryLanguageError = true;
    }else{
      this.hasPrimaryLanguageError = false;
    }
  }
}
