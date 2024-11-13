import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manage/manage.component';
import { ManagementComponent } from './management/management.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    ManageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
