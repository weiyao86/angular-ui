import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
}, {
    path: 'login',
    component: LoginComponent
}, {
    path: 'catalog',
    loadChildren: './pages/catalog/catalog.module#CatalogModule',
    canActivate: [AuthGuard]
}, {
    path: 'ctest',
    loadChildren: './pages/cTest/cTest.module#CtestModule'
}, {
    path: 'usage',
    loadChildren: './pages/usage/usage.module#UsageModule',
    canActivate: [AuthGuard]
}, {
    path: 'parts-detail',
    loadChildren: './pages/parts-detail/parts-detail.module#PartsDetailModule',
    canActivate: [AuthGuard]
}, {
    path: 'shopping-cart',
    loadChildren: './pages/shopping-cart/shopping-cart.module#ShoppingCartModule',
    canActivate: [AuthGuard]
}, {
    path: 'purchase-history',
    loadChildren: './pages/purchase-history/purchase-history.module#PurchaseHistoryModule',
    canActivate: [AuthGuard]
}, {
    path: 'order-history',
    loadChildren: './pages/order-history/order-history.module#OrderHistoryModule',
    canActivate: [AuthGuard]
}, {
    path: '**',
    component: ErrorComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: false
});
