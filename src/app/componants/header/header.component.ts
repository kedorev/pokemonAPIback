import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'pokemon';

  counter:number = 0;
  constructor()
  {

  }

  increaseCounter()
  {
    this.counter = this.counter +1;
  }

  ngOnInit()
  {

  }

}
