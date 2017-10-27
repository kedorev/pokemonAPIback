import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit {

  id:number;
  name:string;
  url:string;

  constructor() { }

  ngOnInit() {
  }

}
