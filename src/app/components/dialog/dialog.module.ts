import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { SModalSubject } from './dialog-subject-service';
import { SModalService } from './dialog.service';
import { DialogComponent } from './dialog.component';

import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [DialogComponent],
  providers: [SModalService, SModalSubject],
  exports: [DialogComponent],
  entryComponents: [DialogComponent]
})

export class SModalModule{}
