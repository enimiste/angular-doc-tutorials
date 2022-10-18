import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  get names(){
    return [
      'Gwenore',
      'Beverly',
      'Renato',
      'Fritz',
      'Rosaline',
      'Mignon',
      'Wes',
      'Kellen',
      'Amalle',
      'Giovanni',
      'Axel',
      'Wolfie',
      'Dorey',
      'Corrinne',
      'Germain',
      'Brittni',
      'Afton',
      'Haskell',
      'Joli',
      'Heath'
    ]
  }
}
