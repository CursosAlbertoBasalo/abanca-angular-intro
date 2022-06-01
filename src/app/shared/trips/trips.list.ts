import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css'],
})
export class TripsList implements OnInit {
  public trips;

  public reloading = false;
  constructor(data: DataService) {
    this.trips = data.getTrips();
  }

  public reload(list: string) {
    this.reloading = true;
    console.warn('♻️ Reloading ' + list);
  }

  public getClassForStatus(status: string) {
    if (status === 'Confirmed') {
      return 'green';
    }
    return 'orange';
  }
  public getClassForPlaces(places: number) {
    if (places === 0) return 'sold-out';
    if (places < 8) return 'few-places';
    return '';
  }

  ngOnInit(): void {}
}
