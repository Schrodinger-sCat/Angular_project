import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  printToConsole(str:String){
    console.log(str);
  }
}
