import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  defaultTitle: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private titleService: Title) {
  }

  ngOnInit() {
    this.defaultTitle = this.titleService.getTitle();
    this.router.events
    // .do(event => console.log(event))
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        console.log(event);
        this.setBrowserTitle();
      });
  }

  setBrowserTitle() {
    let title = this.defaultTitle;
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
      title = route.snapshot.data['title'] || title;
    }
    this.titleService.setTitle(title);
  }
}
