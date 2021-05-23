import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./shared/components/index.component";
import { AboutComponent } from "./shared/components/about.component";
import { PortfolioComponent } from "./shared/components/portfolio.component";
import { TeamComponent } from "./shared/components/team.component";
import { ContactComponent } from "./shared/components/contact.component";
import { FeatureComponent } from "./shared/components/feature.component";
import { ServicesComponent } from "./shared/components/services.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: IndexComponent
    },
    {
        path: "index",
        component: IndexComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "feature",
        component: FeatureComponent
    },
    {
        path: "portfolio",
        component: PortfolioComponent
    },
    {
        path: "team",
        component: TeamComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "services",
        component: ServicesComponent
    },
    {
        path: "**", // 404
        redirectTo: "/404",
    }
];

export const appRouting: any = RouterModule.forRoot(routes);
