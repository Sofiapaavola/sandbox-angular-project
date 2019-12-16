import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  bootstrap: [CarouselComponent]
})
export class CarouselComponentModule {}
