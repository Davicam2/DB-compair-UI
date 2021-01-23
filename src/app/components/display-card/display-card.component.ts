import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})

export class DisplayCardComponent implements OnInit {
  @Input() cardTitle: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
