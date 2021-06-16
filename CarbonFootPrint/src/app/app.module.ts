import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from './shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './shared/widgets/card/card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticalComponent } from './artical/artical.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { ArticalDetailComponent } from './artical-detail/artical-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { HousingComponent } from './housing/housing.component';
import { TravelComponent } from './travel/travel.component';
import { ProductComponent } from './product/product.component';
import { FoodComponent } from './food/food.component';
import { ServiceComponent } from './service/service.component';
import { PlantingComponent } from './planting/planting.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ArticalComponent,
    LoginComponent,
    PostsComponent,
    RegisterComponent,
    ArticalDetailComponent,
    WelcomeComponent,
    HomeComponent,
    LandingComponent,
    HousingComponent,
    TravelComponent,
    ProductComponent,
    FoodComponent,
    ServiceComponent,
    PlantingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatListModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatGridListModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
