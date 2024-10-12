import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';



@NgModule({
  declarations: [
    EmptyDataComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    EmptyDataComponent
  ]
})
export class SharedModule { }
