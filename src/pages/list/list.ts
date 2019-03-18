import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  moviesList;
  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get("https://collegekarur.herokuapp.com/nss-name").toPromise().then((filmList) => {
      console.log(filmList.json());
      this.moviesList = filmList.json();
    }, (err) => {
      console.log(err);
    })
  }
}