import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import {
  PreloadAllModules,
  provideRouter,
  Routes,
  withHashLocation,
  withPreloading,
  withRouterConfig
} from "@angular/router";

const routes: Routes = [];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withHashLocation(),
      withPreloading(PreloadAllModules),
      withRouterConfig({ onSameUrlNavigation: 'reload' })
    ),
  ],
}).catch(err => console.error(err));

