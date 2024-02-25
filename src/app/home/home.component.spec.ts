import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HttpClientModule} from '@angular/common/http';
import {AccordionComponent} from '../shared/accordion/accordion.component';
import {PanelComponent} from '../shared/accordion/panel/panel.component';
import {DataService} from '../services/data.service';
import {of} from 'rxjs';
import {By} from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockSearchService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, AccordionComponent, PanelComponent],
      imports: [HttpClientModule],

    })
      .compileComponents();
  });

  beforeEach(() => {
    mockSearchService = TestBed.inject(DataService);
    mockSearchService.getFaqs = jasmine.createSpy().and.returnValue(of([{id: 1, question: 'test q', answer: 'answer'}]));
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display panels with title set', () => {
    component.ngOnInit();
    const childDebugElement = fixture.debugElement.query(By.directive(AccordionComponent));
    (childDebugElement.componentInstance as AccordionComponent).panels.notifyOnChanges();
    expect(fixture.nativeElement.querySelector('.card-header').innerText).toContain('test q');
    expect(fixture.nativeElement.querySelector('.card-body')).toBeFalsy();
  });

  it('should display panel body when show button triggered', () => {
    component.ngOnInit();
    const childDebugElement = fixture.debugElement.query(By.directive(AccordionComponent));
    (childDebugElement.componentInstance as AccordionComponent).panels.notifyOnChanges();
    const button = fixture.nativeElement.querySelector('.icon-btn');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.card-header').innerText).toContain('test q');
    expect(fixture.nativeElement.querySelector('.card-body').innerText).toContain('answer');
  });
});
