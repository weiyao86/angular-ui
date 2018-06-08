import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { GlobalConfigService } from './services/global-config.service';
import { SubjectService } from './services/subject.service';
import { AuthenticationService } from './services/authentication.service';


import { routing } from './app.routing';
import { LoginModule } from './pages/login/login.module';
import { CatalogModule } from './pages/catalog/catalog.module';
import { UsageModule } from './pages/usage/usage.module';
import { ErrorModule } from './pages/error/error.module';
import { LocaleService } from './services/locale.service';
import { BaseHttp } from './services/base-http.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        routing,
        LoginModule,
        CatalogModule,
        UsageModule,
        ErrorModule
    ],
    providers: [
        GlobalConfigService,
        LocaleService,
        SubjectService,
        BaseHttp,
        AuthenticationService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
