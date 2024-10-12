import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const components = [
  EmptyDataComponent
];

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: components,
  imports: modules,
  exports: [
    ...components, ...modules
  ]
})
export class SharedModule { }
