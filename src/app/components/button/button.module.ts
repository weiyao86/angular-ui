import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';


@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  providers: [],
  exports: [ButtonComponent],
  entryComponents: []
})

export class ButtonModule { }
