import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ListAddComponent } from './list-add/list-add.component';
import { ListSearchComponent } from './list-search/list-search.component';


import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    IndexComponent,
    ListAddComponent,
    ListSearchComponent
  ],
  exports: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class ListModule { }
