import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModule } from '../../modules/component.module';
import { SectionModule } from '../../modules/section.module';

import { ShoppingCartComponent } from './shopping-cart.component';
import { routing } from './shopping-cart.routing';

@NgModule({
    imports: [
        SectionModule,
        ComponentModule,
        CommonModule,
        routing
    ],
    declarations: [
        ShoppingCartComponent
    ]
})
export class ShoppingCartModule {
}
