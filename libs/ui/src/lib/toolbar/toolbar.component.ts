import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cesare-monorepo-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() toggleSideNav = new EventEmitter();
  @Output() toggleTheme = new EventEmitter();
  @Input() themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // ? notice this
}
