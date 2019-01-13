import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgReduxRouterModule } from '@angular-redux/router';
import { NgReduxModule } from '@angular-redux/store';
import { HttpModule } from '@angular/http';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatGridListModule, MatExpansionModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatDividerModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { StoreModule } from './store/module';
import { CounterComponent } from './counter/counter.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { NotifyService } from './notify.service';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanTileComponent } from './plan/plan-tile/plan-tile.component';
import { PlanDocumentComponent } from './plan/plan-document/plan-document.component';
import { PlanOverviewComponent } from './plan/plan-overview/plan-overview.component';
import { PlanAimComponent } from './plan/plan-aim/plan-aim.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    HeroesListComponent,
    CounterComponent,
    AdminComponent,
    DashboardComponent,
    PlanTileComponent,
    PlanDocumentComponent,
    PlanOverviewComponent,
    PlanAimComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    NgReduxModule,
    NgReduxRouterModule,
    HttpModule,
    StoreModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
  ],
  providers: [AuthGuard, AuthService, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
