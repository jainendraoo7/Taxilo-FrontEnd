import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { LoginComponent } from './components/login/login.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { UserDashboardComponent } from './components/pages/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './components/pages/admin/profile/profile.component';
import { WelcomeComponent } from './components/pages/admin/welcome/welcome.component';
import { DriversComponent } from './components/pages/admin/drivers/drivers.component';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { UserUpdateComponent } from './components/pages/user-update/user-update.component';
import { DriverDetailsComponent } from './components/pages/admin/drivers/driver-details/driver-details.component';
import { AssignCabComponent } from './components/pages/admin/drivers/assign-cab/assign-cab.component';
import { DriverDashboardComponent } from './components/pages/driver/driver-dashboard/driver-dashboard.component';
import { DriverLogInComponent } from './components/pages/driver/driver-log-in/driver-log-in.component';
import { DriverProfileComponent } from './components/pages/driver/driver-profile/driver-profile.component';
import { HelpsComponent } from './components/pages/driver/helps/helps.component';
import { QueryComponent } from './components/pages/driver/query/query.component';
import { QueryStatusComponent } from './components/pages/driver/query-status/query-status.component';
import { PrivacyComponent } from './components/pages/driver/privacy/privacy.component';
import { QueriesComponent } from './components/pages/admin/queries/queries.component';
import { CheckQueryComponent } from './components/pages/admin/check-query/check-query.component';
import { CabBookingComponent } from './components/pages/admin/cab-booking/cab-booking.component';
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





const routes: Routes = [
  {
    path: "Signup",
    component: SignupComponent,
    pathMatch: "full"

  },
  {
    path: "userSignUp",
    component: UserSignUpComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "explore",
    component: ExploreComponent,
    pathMatch: "full"
  },
  {
    path: "user",
    component: UserDashboardComponent,
    pathMatch: "full"
  },
  {
    path: "admin",
    component: AdminDashboardComponent,

    children: [
      {
        path: "",
        component: WelcomeComponent
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "drivers",
        component: DriversComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "queries",
        component: QueriesComponent,
      },
      {
        path: "current-booking",
        component: CurrentBookingComponent,
      },
      {
        path: "allTrips",
        component: AllTripsComponent,
      },
      {
        path: "tripsbyall",
        component: AdminTripsComponent
      },
      {
        path: "cab",
        component: AllCabsComponent
      },
      {
          path: "help",
          component: HelpsComponent,
      },
      {
        path: "privacy",
        component: PrivacyComponent
      },
    ],
  },
  {
    path: "userUpdate",
    component: UserUpdateComponent,
    pathMatch: "full"
  },
  {
    path: "driverDetails",
    component: DriverDetailsComponent,
    pathMatch: "full"
  },
  {
    path: "assignCab",
    component: AssignCabComponent,
    pathMatch: "full"
  },
  {
    path: "registerCab",
    component: RegisterCabComponent,
    pathMatch: "full"
  },
  {
    path: "driverLogIn",
    component: DriverLogInComponent,
    pathMatch: "full",
  },
  {
    path: "driver",
    component: DriverDashboardComponent,
    children: [
      {
        path: "",
        component: WelcomeComponent
      },
      {
        path: "driverProfile",
        component: DriverProfileComponent
      },
      {
        path: "helps",
        component: HelpsComponent
      },
      {
        path: "current-booking",
        component: CurrentBookingComponent
      },
      {
        path: "driverTrips",
        component: DriverTripsComponent
      },
      {
        path: "privacy",
        component: PrivacyComponent
      }

    ]
  },
  {
    path: "query",
    component: QueryComponent,
    pathMatch: "full"
  },
  {
    path: "queryStatus",
    component: QueryStatusComponent,
    pathMatch: "full"
  },
  {
    path: "checkQuery",
    component: CheckQueryComponent,
    pathMatch: "full"
  },
  {
    path: "BookCab",
    component: CabBookingComponent,
    pathMatch: "full"

  },
  {
    path: "current-booking",
    component: CurrentBookingComponent,
    pathMatch: "full"
  },
  {
    path: "updateTrip",
    component: UpdateTripComponent,
    pathMatch: "full",
  },
  {
    path: "payment",
    component: PaymentComponent,
    pathMatch: "full",
  },
  {
    path: "tripDetail",
    component: TripDetailComponent,
    pathMatch: "full",
  },
  {
    path: "cabDetails",
    component: CabDetailComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
