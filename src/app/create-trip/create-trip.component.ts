import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html'
})
export class CreateTripComponent {
  trip: any = {
    name: '',
    location: '',
    price: '',
    hotel: '',
    stars: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  createTrip(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.post('/api/travel', this.trip, { headers }).subscribe(
      () => {
        alert('Trip created successfully');
        this.router.navigate(['/']);
      },
      error => {
        alert('Creation failed: ' + (error.error.message || ''));
      }
    );
  }
}
