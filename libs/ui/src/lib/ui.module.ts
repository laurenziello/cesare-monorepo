import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@cesare-monorepo/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class UiModule {}
