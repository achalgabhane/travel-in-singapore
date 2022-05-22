import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  forDiv():void{
    alert('Div clicked');
  }

  forBtn():void{
    alert('Btn clicked');
  }

  forInt(age:any){
    console.log(age);   
  }
}
