import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'page-tdee',
  templateUrl: 'tdee.html'
})
export class TdeePage {

    myForm: FormGroup;

    height;
    weight;
    tdee = 0;

 onSubmit() {
     this.height = document.getElementById('form_height');
     this.weight = document.getElementById('form_weight');
     this.tdee = 66 + (12.7 * this.weight.value) + (5 *this.height.value);

    (<HTMLInputElement>document.getElementById("tdee_form")).value = (String(this.tdee));
    
  }
  constructor(public navCtrl: NavController) {



  }   

}

