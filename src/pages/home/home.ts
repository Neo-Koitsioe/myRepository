import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  valueA = 0;
  valueB = 0;
  
  constructor(public navCtrl: NavController) {

  }


  onClick(x){
    switch(x) { 
      case '1': { 
         this.valueA +=3; 
         break; 
      } 
      case '2': { 
        this.valueA +=2; 
         break; 
      } 
      case '3': {
        this.valueA +=1; 
         break;    
      } 
      case '4': { 
        this.valueB +=3; 
         break; 
      }  
      case '5': { 
        this.valueB +=2;
        break; 
     }  
     case '6': { 
      this.valueB +=1;
      break; 
   }  
      case 'reset': { 
         this.valueA=0;
         this.valueB=0; 
         break;              
      } 
   }
      

  }

}
