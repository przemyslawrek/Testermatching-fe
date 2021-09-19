import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import {SelectElement} from "../../models/selectElement";

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.css']
})
export class SelectMultipleComponent<T> implements OnInit, OnChanges {
  @Input() name: string = "";
  @Input() elements: SelectElement<T>[] = [];
  @Input() allValue!: T;
  @Input()  chosenElements: T[] = [];
  @Output() chosenElementsChange = new EventEmitter<T[]>();
  constructor() { }

  ngOnInit(): void {
    this.chosenElements=[this.allValue]
  }

  ngOnChanges():void{
    if(this.chosenElements.length===0) {
      this.chosenElements = [this.allValue]
    }
  }

  optionClicked(matOptionRef: any) {
    if (matOptionRef.value===this.allValue || this.chosenElements.length === 0){
      this.chosenElements=[this.allValue];
      this.chosenElementsChange.emit([]);
    }else {
      const chosenElementsWithoutAll = this.chosenElements.filter((el:T):boolean=>el!==this.allValue);
      this.chosenElements=chosenElementsWithoutAll;
      this.chosenElementsChange.emit(chosenElementsWithoutAll);
    }
  }
}
