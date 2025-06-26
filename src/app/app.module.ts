import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { CreateTripComponent } from './create-trip/create-trip.component';

const routes: Routes = [
  { path: '', component: TravelListComponent },
  { path: 'edit/:id', component: EditTripComponent },
  { path: 'create', component: CreateTripComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TravelListComponent,
    EditTripComponent,
    CreateTripComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
