import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HousingComponent } from './housing/housing.component';
import { ArticalDetailComponent } from './artical-detail/artical-detail.component';
import { ArticalComponent } from './artical/artical.component';
import { PostsComponent } from './posts/posts.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { ProductComponent } from './product/product.component';
import { FoodComponent } from './food/food.component';
import { ServiceComponent } from './service/service.component';
import { PlantingComponent } from './planting/planting.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post', component: PostsComponent },
  { path: 'articles', component: ArticalComponent},
  { path: 'housing', component: HousingComponent},
  { path: 'travel', component: TravelComponent},
  { path: 'product', component: ProductComponent},
  { path: 'food', component: FoodComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'planting', component: PlantingComponent},
  // { path: 'details/:id', component: ArticalDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
