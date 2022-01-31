import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@cesare-monorepo/material';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RoutingModule } from './routing.module';
import { WidgetsDetailsComponent } from './widgets/widgets-details/widgets-details.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets/widgets.component';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, WidgetsComponent, WidgetsListComponent, WidgetsDetailsComponent, HomeComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    RoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
