import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  homeList;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get("https://collegekarur.herokuapp.com/nss-event").toPromise().then((home) => {
      console.log(home.json());
      this.homeList = home.json();
    }, (err) => {
      console.log(err);
    })
  }
}
