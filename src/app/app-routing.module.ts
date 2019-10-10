import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InjectionToken } from '@angular/core';
const externalUrlProvider = new InjectionToken('ExternalUrlRedirectResolver');



const routes: Routes = [ 
{
  path: "login",
  resolve: 
  {
    url: externalUrlProvider

  },
  component: LoginComponent
},
{
		path: "",
		component: LoginComponent
	},
{
  path: "dashboard",
  component: DashboardComponent
}
];

@NgModule({
  providers: [
    {
      provide: externalUrlProvider,
      useValue:(route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      }
    }
  ],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
