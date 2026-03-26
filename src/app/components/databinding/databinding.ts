import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  //Interpolation
  Name: string = "Leon S. Keneddy"
  Age: number = 49
  Mission: string = "Rescue Ashcroft"
  ButtonName: string = "click me!"

  //Property
  isDisabled = false;
  count: number = 0;
  increment(){
    this.count++;
  }
  constructor(){
  }
}
