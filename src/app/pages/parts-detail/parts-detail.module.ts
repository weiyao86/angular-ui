import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModule } from '../../modules/component.module';
import { SectionModule } from '../../modules/section.module';

import { PartsDetailComponent } from './parts-detail.component';
import { routing } from './parts-detail.routing';

@NgModule({
    imports: [
        CommonModule,
        ComponentModule,
        SectionModule,
        routing
    ],
    declarations: [
        PartsDetailComponent
    ]
})
export class PartsDetailModule {
}
