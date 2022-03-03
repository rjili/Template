import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../_metronic/partials';
import { TablesComponent } from 'src/app/modules/widgets-examples/tables/tables.component';
import { WidgetsExamplesModule } from 'src/app/modules/widgets-examples/widgets-examples.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    WidgetsModule
  ],
})
export class DashboardModule { }
