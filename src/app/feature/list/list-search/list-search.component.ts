import {Component, Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.css']
})
export class ListSearchComponent implements OnChanges {
  @Input() todoLists: string[]=[];
  @Output() clickEvent = new EventEmitter();

  searchItems: string[] = [];
  searchSpace: string[] = [];
  searchKey: string="";

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.searchItems = this.todoLists
    this.searchSpace = this.searchItems
  }
  onClicked(singleItem: string,index: number){
    let dumbObj= index+"#$%"+singleItem;
    this.clickEvent.emit(dumbObj);
  }

  onsearch(){
    console.log("change")
;    this.searchSpace = this.searchItems.filter(e => e.includes(this.searchKey) )
  }
}

