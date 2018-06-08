import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModule } from './component.module';
import { HeaderComponent } from '../pages/common/header/header.component';
import { HeaderMiddleComponent } from '../pages/common/header/header-middle/header-middle.component';
import { FooterComponent } from '../pages/common/footer/footer.component';

const components = [HeaderComponent, HeaderMiddleComponent, FooterComponent];

@NgModule({
  imports: [
    ComponentModule,
    CommonModule
  ],

  declarations: [
    ...components
  ],

  exports: [
    ...components
  ]
})

export class SectionModule {
}
