import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComboxComponent } from './combox.component';


@NgModule({
  imports: [CommonModule],
  declarations: [ComboxComponent],
  providers: [],
  exports: [ComboxComponent],
  entryComponents: []
})

export class ComboxModule { }
