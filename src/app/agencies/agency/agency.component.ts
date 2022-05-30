import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
})
export class AgencyComponent implements OnInit {
  public agencyId = '';

  constructor(route: ActivatedRoute) {
    this.agencyId = route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {}
}
