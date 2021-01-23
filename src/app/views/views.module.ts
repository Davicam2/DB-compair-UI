import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent} from './dashboard/dashboard.component';
import {SwitchboardComponent} from './dashboard/switchboard/switchboard.component';
import {ViewsRoutingModule} from './views-routing.module';
import {ComponentsModule} from '../components/components.module';

import { AngularMatModule} from '../angular-material.module';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { CommunicationDisplayComponent } from './dashboard/communication-display/communication-display.component';
import { ResultsDisplayComponent } from './dashboard/results-display/results-display.component';
import { OptionsDisplayComponent } from './dashboard/options-display/options-display.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [DashboardComponent, SwitchboardComponent, CommunicationDisplayComponent, ResultsDisplayComponent, OptionsDisplayComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ComponentsModule,
    AngularMatModule,
    MatButtonToggleModule,
    FormsModule,
    MatDialogModule
   
  ],
  exports:[DashboardComponent]
})
export class ViewsModule { }
