import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from './components/service/backend.service';
import { ExploreComponent } from './components/explore/explore.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { authInterceptorProvider } from './components/service/auth.interceptor';
import { UserDashboardComponent } from './components/pages/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './components/pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './components/pages/admin/profile/profile.component';
import { WelcomeComponent } from './components/pages/admin/welcome/welcome.component';
import { DriversComponent } from './components/pages/admin/drivers/drivers.component';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { UserUpdateComponent } from './components/pages/user-update/user-update.component';
import { MatSelectModule } from '@angular/material/select';
import { DriverDetailsComponent } from './components/pages/admin/drivers/driver-details/driver-details.component';
import { AssignCabComponent } from './components/pages/admin/drivers/assign-cab/assign-cab.component';
import { DriverDashboardComponent } from './components/pages/driver/driver-dashboard/driver-dashboard.component';
import { DriverLogInComponent } from './components/pages/driver/driver-log-in/driver-log-in.component';
import { DriverSidebarComponent } from './components/pages/driver/sidebar/sidebar.component';
import { DriverProfileComponent } from './components/pages/driver/driver-profile/driver-profile.component';
import { HelpsComponent } from './components/pages/driver/helps/helps.component';
import { QueryComponent } from './components/pages/driver/query/query.component';
import { QueryStatusComponent } from './components/pages/driver/query-status/query-status.component';
import { PrivacyComponent } from './components/pages/driver/privacy/privacy.component';
import { QueriesComponent } from './components/pages/admin/queries/queries.component';
import { CheckQueryComponent } from './components/pages/admin/check-query/check-query.component';
import { CabBookingComponent } from './components/pages/admin/cab-booking/cab-booking.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CurrentBookingComponent } from './components/pages/admin/current-booking/current-booking.component';
import { UpdateTripComponent } from './components/pages/admin/trip/update-trip/update-trip.component';
import { PaymentComponent } from './components/pages/admin/trip/payment/payment.component';
import { AllTripsComponent } from './components/pages/admin/trip/all-trips/all-trips.component';
import { TripDetailComponent } from './components/pages/admin/trip/trip-detail/trip-detail.component';
import { DriverTripsComponent } from './components/pages/driver/trip/driver-trips/driver-trips.component';
import { AdminTripsComponent } from './components/pages/admin/trip/admin-trips/admin-trips.component';
import { AllCabsComponent } from './components/pages/admin/cab/all-cabs/all-cabs.component';
import { RegisterCabComponent } from './components/pages/admin/cab/register-cab/register-cab.component';
import { CabDetailComponent } from './components/pages/admin/cab/cab-detail/cab-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    ExploreComponent,
    LoginComponent,
    UserSignUpComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    DriversComponent,
    UsersComponent,
    UserUpdateComponent,
    DriverDetailsComponent,
    AssignCabComponent,
    DriverDashboardComponent,
    DriverLogInComponent,
    DriverSidebarComponent,
    DriverProfileComponent,
    HelpsComponent,
    QueryComponent,
    QueryStatusComponent,
    PrivacyComponent,
    QueriesComponent,
    CheckQueryComponent,
    CabBookingComponent,
    CurrentBookingComponent,
    UpdateTripComponent,
    PaymentComponent,
    AllTripsComponent,
    TripDetailComponent,
    DriverTripsComponent,
    AdminTripsComponent,
    RegisterCabComponent,
    AllCabsComponent,
    CabDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,






  ],
  providers: [MatSnackBar, BackendService, authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
