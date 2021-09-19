import {Component, Input, OnInit} from '@angular/core';
import {TesterExperience} from "../../models/testerExperience";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
  @Input() searchResult: TesterExperience[] = [];
  displayedColumns: string[] = ['firstName', "lastName", "experience"];
  constructor() { }

  ngOnInit(): void {
  }

}
