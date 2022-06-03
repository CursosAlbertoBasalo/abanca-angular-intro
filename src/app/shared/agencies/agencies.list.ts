import { Component, OnInit } from '@angular/core';
import { Agency } from 'src/app/core/api/agency.interface';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css'],
})
export class AgenciesList implements OnInit {
  public agencies: Agency[] = [];
  public reloading = false;

  constructor(data: DataService) {
    data.getAgencies().subscribe((response) => {
      this.agencies = response;
    });
  }

  public reload(list: string) {
    this.reloading = true;
    console.warn('♻️ Reloading ' + list);
  }

  public getAgenciesCounter() {
    return this.agencies.length;
  }

  ngOnInit(): void {}
}
