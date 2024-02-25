import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PanelComponent} from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title and body', () => {
    component.id = 1;
    component.title = 'Test title';
    component.body = 'Test body';
    component.hidden = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.card-header').innerText).toContain('Q1');
    expect(fixture.nativeElement.querySelector('.card-header').innerText).toContain('Test title');
    expect(fixture.nativeElement.querySelector('.card-body').innerText).toContain('Test body');
  });

  it('should show body on first run', () => {
    component.body = 'Test body';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.card-body')).toBeTruthy();
  });

  it('should change visibility and emit event when icon button clicked', () => {
    spyOn(component.btnClick, 'emit');
    component.id = 1;
    const button = fixture.nativeElement.querySelector('.icon-btn');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.btnClick.emit).toHaveBeenCalledWith({ id: 1, hidden: true });
  });
});
