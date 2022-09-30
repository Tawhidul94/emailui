import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-moreless',
  templateUrl: './moreless.component.html',
  styleUrls: ['./moreless.component.css']
})
export class MorelessComponent implements OnInit {
 text="bangladesh is our mother land"
   wordLimit=20;
  showmore:boolean;

  constructor() {
    this.showmore=false;
  }

  ngOnInit(): void {
  }

}
