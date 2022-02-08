import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '@cesare-monorepo/core-data';
import { Widget } from '@cesare-monorepo/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'cesare-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  themeColor: 'primary' | 'accent' | 'warn' = 'warn'; // ? notice this
  widgets$: Observable<Widget[]>;
  constructor(private widgetService: WidgetsService) {}

  ngOnInit(): void {
    this.widgets$ = this.widgetService.all();
  }
}
