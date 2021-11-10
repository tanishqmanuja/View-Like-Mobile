import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  title = '';
  url = '';
  bg = '';

  constructor(private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activedRoute.queryParams.subscribe((params) => {
      this.title = params['title'];
      this.url = params['url'] || 'https://www.example.com/';
      this.bg = params['bg'] || `#${params['bghex']}` || 'white';
    });
  }
}
