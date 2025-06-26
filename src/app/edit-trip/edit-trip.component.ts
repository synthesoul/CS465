import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html'
})
export class EditTripComponent implements OnInit {
  tripId: string = '';
  trip: any = {
    name: '',
    location: '',
    price: '',
    hotel: '',
    stars: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('id') || '';
    this.http.get(`/api/travel/${this.tripId}`).subscribe(
      data => this.trip = data,
      error => console.error('Error loading trip:', error)
    );
  }

  updateTrip(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.put(`/api/travel/${this.tripId}`, this.trip, { headers }).subscribe(
      () => {
        alert('Trip updated');
        this.router.navigate(['/']);
      },
      error => alert('Update failed: ' + (error.error.message || ''))
    );
  }
}
