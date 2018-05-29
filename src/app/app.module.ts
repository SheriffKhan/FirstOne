import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  imports: [MatToolbarModule],
  exports: [MatToolbarModule],
  bootstrap: [AppComponent],
})
export class AppModule { }

