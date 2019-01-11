import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() subtitle: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
