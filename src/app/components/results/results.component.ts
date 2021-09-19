import {Component, Input} from '@angular/core';
import {TesterExperience} from "../../models/testerExperience";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent{
  @Input() searchResult: TesterExperience[] = [];
  displayedColumns: string[] = ['firstName', "lastName", "experience"];
}
