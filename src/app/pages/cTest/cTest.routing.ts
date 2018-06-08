import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtestComponent } from './cTest.component';

const routes: Routes = [{
    path: '',
    component: CtestComponent
    // children: [{
    //     // 导航提示
    //     path: '',
    //     component:CtestComponent
    // }, {
    //     // 右边缩略图
    //     path: 'feature',
    //     component: CtestComponent
    // }]
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
