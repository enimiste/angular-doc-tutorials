import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public username$?: Observable<string|null>;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username$ = this.route.paramMap
    .pipe(map((pm: ParamMap) => {
        return pm.get('username');
    }))
  }

}
