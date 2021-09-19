import { Component } from '@angular/core';
import {TesterExperience} from "./models/testerExperience";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aaaa';
  searchResult: TesterExperience[] = [];


  searchResultChange($event: TesterExperience[]) {
    console.log("appComp: ",$event);
    this.searchResult = $event;
  }
}
