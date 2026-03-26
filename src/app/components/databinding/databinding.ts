import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
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

  //Event
  count: number = 0;
  increment(){
    this.count++;
  }
  constructor(){
  }

  //Two-Way
  FullName: string = ""

  //whatever the fuck this is
  isVisible = false;
  toggle(){
   this.isVisible = !this.isVisible
  }
  list : string[] = ['Gun', 'Balls', 'Word'];
}
