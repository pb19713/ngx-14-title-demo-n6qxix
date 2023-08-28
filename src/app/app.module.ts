import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextWithTooltipDirective } from './text-with-tooltip.directive';
import { RedColorDirective } from './red-color.directive';
import { RedColorComponent } from './red-color/red-color.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TextWithTooltipDirective,
    RedColorDirective,
    RedColorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
