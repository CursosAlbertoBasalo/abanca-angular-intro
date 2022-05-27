import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public subtitle = 'Welcome on board';
  public author = 'Alberto Basalo';
  public authorUrl = 'https://twitter.com/albertobasalo';

  constructor() {}

  ngOnInit(): void {}
}
