import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {

  newlistitem:string="";
  item: string[] = [];
  constructor() { }

  diaplayText: string="";
  displayIndex: number=-1;

  onSubmitClicked(){
    this.item.push(this.newlistitem);
    this.newlistitem="";
  }

  ngOnInit(): void {
  }
  newButtonClicked(singleItem: string){
    let arr=singleItem.split('#$%');
    this.displayIndex = parseInt(arr[0]);
    this.diaplayText = arr[1]
  }

}
