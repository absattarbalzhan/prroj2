import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../app/log-in/log-in.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { SpecialistDetailComponent} from './specialist-detail/specialist-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {ProfileDetailComponent} from './profile-detail/profile-detail.component';
import {MySpecialistsComponent} from './my-specialists/my-specialists.component';
import {SavedComponent} from './saved/saved.component';
import {TestComponentComponent} from './test-component/test-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'test', component: TestComponentComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'main', component: MainComponent},
  { path: 'specialist/:specialistId/details', component: SpecialistDetailComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'profile/details', component: ProfileDetailComponent},
  { path: 'profile/my-specialists', component: MySpecialistsComponent},
  { path: 'profile/saved', component: SavedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
