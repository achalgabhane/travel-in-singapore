import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl:'./contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() {  }
  
  ngOnInit(): void { }
  private _userName: string = '';

// getter method: to to get value from database
  get userName(): string {
    return this._userName;
  }
// setter method:to save/set value to database
  set userName(val: string) {
    this._userName = val;
  }

  
  userEmail:string = '';
  userMob:number = NaN;
}
