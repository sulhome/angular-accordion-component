import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Faq} from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faqs: Array<Faq> = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getFaqs().subscribe(data => {
      this.faqs = data;
    });
  }
}
