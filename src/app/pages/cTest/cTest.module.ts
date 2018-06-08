import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../../modules/component.module';
import { SectionModule } from '../../modules/section.module';
import { routing } from './cTest.routing';

// import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { CtestComponent } from './cTest.component';
import { CounterComponent } from './controlValue';


@NgModule({
    imports: [
        CommonModule,
        ComponentModule,
        SectionModule,
        routing
    ],
    declarations: [
        CtestComponent,
        CounterComponent
    ],
    // entryComponents: [PaginationComponent],
    providers: [],
    exports: []
})
export class CtestModule {
}
