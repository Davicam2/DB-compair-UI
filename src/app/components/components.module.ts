import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCardComponent } from './display-card/display-card.component';
import { ConnectionStringModalComponent } from './connection-string-modal/connection-string-modal.component';



@NgModule({
  declarations: [ DisplayCardComponent, ConnectionStringModalComponent],
  imports: [
    CommonModule
  ],
  exports:[ DisplayCardComponent]
})
export class ComponentsModule { }
