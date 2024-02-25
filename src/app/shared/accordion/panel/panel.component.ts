import {Component, Input, OnInit, EventEmitter, ChangeDetectorRef, AfterContentChecked, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  id: number;
  hidden = false;
  @Input() body: string;
  @Input() title: string;
  btnClick = new EventEmitter();

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.hidden = !this.hidden;
    this.btnClick.emit({id: this.id, hidden: this.hidden});
  }

  setId(id): void {
    this.id = id;
    this.ref.detectChanges();
  }

  getId(): number {
    return this.id;
  }

  setHidden(hidden): void {
    this.hidden = hidden;
    this.ref.detectChanges();
  }
}
