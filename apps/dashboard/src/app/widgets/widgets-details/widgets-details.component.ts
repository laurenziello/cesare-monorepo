import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from '@cesare-monorepo/api-interfaces';

@Component({
  selector: 'cesare-monorepo-widgets-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.scss'],
})
export class WidgetsDetailsComponent {
  currentWidget: Widget;
  originalTitle = '';
  @Input() set widget(value: Widget) {
    if (value) this.originalTitle = value.title;
    this.currentWidget = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
