import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css'],
})
export class TripsList implements OnInit {
  public trips = [
    {
      id: 'space-y-moon-1',
      agencyId: 'space-y',
      agencyTripCode: 'moon',
      destination: 'The Moon',
      places: 14,
      startDate: '2023-01-01',
      endDate: '2023-02-01',
      flightPrice: 1200000,
      stayingNightPrice: 10000,
      kind: 'WithStay',
      status: 'Confirmed',
      extraLuggagePricePerKilo: 2000,
      premiumFoodPrice: 0,
    },
    {
      id: 'space-y-mars-2',
      agencyId: 'space-y',
      agencyTripCode: 'mars',
      destination: 'Mars',
      places: 8,
      startDate: '2024-01-01',
      endDate: '2024-05-01',
      flightPrice: 8400000,
      stayingNightPrice: 10000,
      kind: 'WithStay',
      status: 'Waiting',
      extraLuggagePricePerKilo: 50000,
      premiumFoodPrice: 0,
    },
    {
      id: 'green-origin-low-orbit-3',
      agencyId: 'green-origin',
      agencyTripCode: 'low-orbit',
      destination: 'Low Orbit',
      places: 0,
      startDate: '2022-04-01',
      endDate: '2022-04-01',
      flightPrice: 320000,
      stayingNightPrice: 0,
      kind: 'TripOnly',
      status: 'Waiting',
      extraLuggagePricePerKilo: 0,
      premiumFoodPrice: 1000,
    },
    {
      id: 'green-origin-iss-4',
      agencyId: 'green-origin',
      agencyTripCode: 'iss',
      destination: 'ISS',
      places: 6,
      startDate: '2022-06-01',
      endDate: '2022-06-01',
      flightPrice: 800000,
      stayingNightPrice: 0,
      kind: 'TripOnly',
      status: 'Waiting',
      extraLuggagePricePerKilo: 0,
      premiumFoodPrice: 1000,
    },
  ];
  public reloading = false;
  constructor() {}

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
