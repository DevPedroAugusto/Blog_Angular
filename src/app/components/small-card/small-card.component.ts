import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  Id:string="0"

  @Input()
  photoCover:string = ""

  @Input()
  category:string=""

  @Input()
  cardTitle:string = ""

  @Input()
  decription:string=""

  @Input()
  autor:string = ""

  @Input()
  profession:string = ""

  @Input()
  day:string = ""

  @Input()
  month:string = ""

  @Input()
  comments:string = ""

  @Input()
  integra:string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
