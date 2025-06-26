import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html'
})
export class TripListComponent implements OnInit {
  trips: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchTrips();
  }

  fetchTrips(): void {
    this.http.get<any[]>('/api/travel').subscribe(
      data => this.trips = data,
      error => console.error('Failed to fetch trips:', error)
    );
  }
}
