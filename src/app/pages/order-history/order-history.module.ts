import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModule } from '../../modules/component.module';
import { SectionModule } from '../../modules/section.module';

import { OrderHistoryComponent } from './order-history.component';
import { routing } from './order-history.routing';

@NgModule({
    imports: [
        ComponentModule,
        SectionModule,
        CommonModule,
        routing
    ],
    declarations: [
        OrderHistoryComponent
    ]
})
export class OrderHistoryModule {
}
