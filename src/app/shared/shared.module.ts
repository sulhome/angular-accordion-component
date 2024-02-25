import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { PanelComponent } from './accordion/panel/panel.component';



@NgModule({
  declarations: [AccordionComponent, PanelComponent],
  exports: [
    AccordionComponent,
    PanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
