import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { Title } from "@angular/platform-browser";
import { appRouting } from "./app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from "./shared/shared.module";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule.forRoot(),
        appRouting
    ],
    providers: [Title, { provide: LOCALE_ID, useValue: 'de' }],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}