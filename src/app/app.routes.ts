import { MyDashBoardComponent } from "./components/my-dash-board/my-dash-board.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LoginComponent } from "./components/login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./demo/view/dashboard.component";
import { SampleDemoComponent } from "./demo/view/sampledemo.component";
import { FormsDemoComponent } from "./demo/view/formsdemo.component";
import { DataDemoComponent } from "./demo/view/datademo.component";
import { PanelsDemoComponent } from "./demo/view/panelsdemo.component";
import { OverlaysDemoComponent } from "./demo/view/overlaysdemo.component";
import { MenusDemoComponent } from "./demo/view/menusdemo.component";
import { MessagesDemoComponent } from "./demo/view/messagesdemo.component";
import { MiscDemoComponent } from "./demo/view/miscdemo.component";
import { EmptyDemoComponent } from "./demo/view/emptydemo.component";
import { ChartsDemoComponent } from "./demo/view/chartsdemo.component";
import { FileDemoComponent } from "./demo/view/filedemo.component";
import { UtilsDemoComponent } from "./demo/view/utilsdemo.component";
import { DocumentationComponent } from "./demo/view/documentation.component";
import { AppMainComponent } from "./app.main.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { NewsRssComponent } from "./components/news-rss/news-rss.component";
import { NewsDatatableComponent } from "./components/news-datatable/news-datatable.component";

export const routes: Routes = [
    {
        path: "",
        component: AppMainComponent,
        children: [
            { path: "", component: DashboardComponent },
            { path: "sample", component: SampleDemoComponent },
            { path: "forms", component: FormsDemoComponent },
            { path: "data", component: DataDemoComponent },
            { path: "panels", component: PanelsDemoComponent },
            { path: "overlays", component: OverlaysDemoComponent },
            { path: "menus", component: MenusDemoComponent },
            { path: "messages", component: MessagesDemoComponent },
            { path: "misc", component: MiscDemoComponent },
            { path: "empty", component: EmptyDemoComponent },
            { path: "charts", component: ChartsDemoComponent },
            { path: "file", component: FileDemoComponent },
            { path: "utils", component: UtilsDemoComponent },
            { path: "documentation", component: DocumentationComponent },
        ],
    },
    { path: "error", component: AppErrorComponent },
    { path: "accessdenied", component: AppAccessdeniedComponent },
    { path: "404", component: AppNotfoundComponent },
    { path: "dashboard", component: MyDashBoardComponent },
    { path: "login", component: LoginComponent },
    { path: "signUp", component: SignUpComponent },
    { path: "news-rss", component: NewsRssComponent },
    { path: "news-table", component: NewsDatatableComponent },
    // ,{ path: "**", redirectTo: "/404" },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
});
