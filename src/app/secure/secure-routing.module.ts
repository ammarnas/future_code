import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
    path: "",
    component: SecureComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      // {
      //   path: "course-list",
      //   component: CourseListComponent
      // },
      {
        path: '',
        redirectTo: '/secure/dashboard',
        pathMatch: "full",
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
