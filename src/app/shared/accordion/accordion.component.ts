import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList
} from '@angular/core';
import {PanelComponent} from './panel/panel.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;

  constructor() {

  }

  ngAfterContentInit(): void {
    let panelIdCounter = 0;

    this.panels.changes.subscribe(updatedPanels => {
      updatedPanels.forEach(panel => {
        panel.setId(++panelIdCounter);
        panel.btnClick.subscribe(event => this.handleClick(event));
        panel.setHidden(true);
      });
    });
  }

  handleClick(event): void {
    if (!event.hidden) {
      this.panels.forEach(panel => {
        panel.setHidden(event.id !== panel.getId());
      });
    }
  }
}
