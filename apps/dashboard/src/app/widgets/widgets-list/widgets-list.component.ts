import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@cesare-monorepo/api-interfaces';

@Component({
  selector: 'cesare-monorepo-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss'],
})
export class WidgetsListComponent {
  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
