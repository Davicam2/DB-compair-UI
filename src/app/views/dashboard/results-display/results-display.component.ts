import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.scss']
})
export class ResultsDisplayComponent implements OnInit {

  @Input() mongoTime: number;
  @Input() neoTime: number;

  constructor() { }

  ngOnInit(): void {
    
  }

}
