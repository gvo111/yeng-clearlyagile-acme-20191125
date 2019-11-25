import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {StandardResponse} from '../../types';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  message = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const url = `${ environment.baseApiUrl }/greetings`;

    this.httpClient.get<StandardResponse>(url).subscribe(response => {
      this.message = response.data.text;
    });
  }

}
