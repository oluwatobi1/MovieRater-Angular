import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  myItem = "Computer"

  constructor(
    private route:ActivatedRoute,
    private locate:Location) { }

  ngOnInit() {
    let link = +this.route.snapshot.paramMap.get('id')
    console.log(link)
  }

  backFn(){
    this.locate.back()
  }

}
