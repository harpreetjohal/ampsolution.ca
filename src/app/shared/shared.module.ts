import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from "./components/footer.component";
import { IndexComponent } from "./components/index.component";
import { AboutComponent } from "./components/about.component";
import { PortfolioComponent } from "./components/portfolio.component";
import { TeamComponent } from "./components/team.component";
import { ContactComponent } from "./components/contact.component";
import { FeatureComponent } from "./components/feature.component";
import { ServicesComponent } from "./components/services.component";

@NgModule({
    imports: [
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    // dynamic components resolved by type
    entryComponents: [],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        IndexComponent,
        AboutComponent,
        PortfolioComponent,
        TeamComponent,
        ContactComponent,
        FeatureComponent,
        ServicesComponent
    ]
})
export class SharedModule {

    // providers will be singleton and when we use this module in other modules
    // they will not have information regarding providers
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
