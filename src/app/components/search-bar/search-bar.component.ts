import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectElement} from "../../models/selectElement";
import {TesterMatchingService} from "../../services/tester-matching.service";
import {TesterExperience} from "../../models/testerExperience";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchResultChange = new EventEmitter<TesterExperience[]>();

  countries: SelectElement<string>[] = [];
  devices: SelectElement<number>[] = [];
  chosenDevices: number[] = [];
  chosenCountries: string[] = [];
  private subscriptions: Map<string, Subscription> = new Map<string, Subscription>();

  constructor(private service: TesterMatchingService) {
  }

  ngOnInit(): void {
    this.subscriptions.set(
      'devices',
      this.service.getDevices().subscribe(
        (devices) => {
          this.devices = devices;
        }
      )
    );
    this.subscriptions.set(
      'countries',
      this.service.getCountries().subscribe(
        (countries) => {
          this.countries = countries;
        }
      )
    );
  }

  onSearch() {
    this.subscriptions.set(
      "search",
      this.service.getTestersWithExperience(this.chosenCountries, this.chosenDevices).subscribe(
        (testersWithExperience: TesterExperience[]) => {

          this.searchResultChange.emit(testersWithExperience);

        }
      )
    );

  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscrtiption: Subscription) => {
      subscrtiption.unsubscribe();
    });
  }
}
