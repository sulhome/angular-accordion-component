import {ComponentFixture, TestBed, tick} from '@angular/core/testing';

import {AccordionComponent} from './accordion.component';
import {PanelComponent} from './panel/panel.component';
import {QueryList} from '@angular/core';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let panelComponent: PanelComponent;
  let panelFixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent, PanelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    panelFixture = TestBed.createComponent(PanelComponent);
    panelComponent = panelFixture.componentInstance;
    component.panels = new QueryList<PanelComponent>();
    component.panels.reset([panelComponent]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set panel id', () => {
    component.ngAfterContentInit();
    component.panels.notifyOnChanges();
    expect(component.panels.toArray()[0].id).toEqual(1);
    expect(component.panels.toArray()[0].hidden).toBeTrue();
  });

  it('should set panel to visible once triggered', () => {
    component.ngAfterContentInit();
    component.panels.notifyOnChanges();
    panelComponent.handleClick();
    expect(component.panels.toArray()[0].id).toEqual(1);
    expect(component.panels.toArray()[0].hidden).toBeFalse();
  });
});
