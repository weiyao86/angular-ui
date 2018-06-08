import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputNumberComponent } from './input-number.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [InputNumberComponent],
  providers: [],
  exports: [InputNumberComponent],
  entryComponents: []
})

export class InputNumberModule { }
