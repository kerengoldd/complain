import {Component, OnInit, Input} from '@angular/core';
import {Complain} from "../complain.model";

@Component({
  selector: 'app-complain-details',
  templateUrl: 'complain-details.component.html',
  styleUrls: ['complain-details.component.css']
})
export class ComplainDetailsComponent implements OnInit {
@Input() complain :Complain;
  constructor() { }

  ngOnInit() {
  }

}
