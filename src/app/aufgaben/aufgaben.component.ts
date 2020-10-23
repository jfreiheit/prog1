import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-aufgaben',
  templateUrl: './aufgaben.component.html',
  styleUrls: ['./aufgaben.component.css']
})
export class AufgabenComponent implements OnInit {

  title: string;
  originalTitle: string;

  constructor(r: ActivatedRoute, private router: Router, private titleService: Title) {
  }


  ngOnInit() {
    this.originalTitle = this.titleService.getTitle();
    if (this.title) {
      this.titleService.setTitle(this.title);
    }
  }

}
