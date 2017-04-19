import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController,IonicPage } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {TdeePage} from '../tdee/tdee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tdeePage = TdeePage; 
  meals: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, af: AngularFire, public actionSheetCtrl: ActionSheetController, private nav: NavController) {
    this.meals = af.database.list('/');
  }

  addMeal(){
  let prompt = this.alertCtrl.create({
    title: 'Meal Name',
    message: "Enter a name for this meal and the amount of calories in the meal",
    inputs: [
      {
        name: 'name',
        placeholder: 'Breakfast',
        
      },
      {
        name: 'calories',
        placeholder: '400'        
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.meals.push({
            name: data.name,
            calories: data.calories
            
          });
        }
      }
    ]
  });
  prompt.present();
}
showOptions(mealId, mealName) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete Meal',
        role: 'destructive',
        handler: () => {
          this.removeMeal(mealId);
        }
      },{
        text: 'Update Meal',
        handler: () => {
          this.updateMeal(mealId, mealName);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}
removeMeal(mealId: string){
  this.meals.remove(mealId);
}
updateMeal(mealId, mealName){
  let prompt = this.alertCtrl.create({
    title: 'Meal Name',
    message: "Update the name and calories for this meal",
    inputs: [
      {
        name: 'name',
        placeholder: 'Breakfast',
        value: mealName
      },
      {
        name: 'calories',
        placeholder: '400'        
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
            this.meals.update(mealId,{
            name: data.name,
            calories: data.calories
          });
        }
      }
    ]
  });
  prompt.present();
}
}


