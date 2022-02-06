import { Component, OnInit } from '@angular/core';
import { Widget } from '@cesare-monorepo/api-interfaces';
import { WidgetsService } from '@cesare-monorepo/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'cesare-monorepo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.all();
  }
}
