import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""

  contentCategory:string = ""
  contentAutor:string = ""
  contentProfession:string = ""
  contentDay:string = ""
  contentMonth:string = ""
  contentComments:string = ""
  contentIntegra:string = ""

  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    this.contentCategory = result.category
    this.contentAutor = result.autor
    this.contentProfession = result.profession
    this.contentDay = result.day
    this.contentMonth = result.month
    this.contentComments = result.comments
    this.contentIntegra = result.integra
  }

}
