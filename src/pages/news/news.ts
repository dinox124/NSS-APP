import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  moviesList;
  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get("https://collegekarur.herokuapp.com/nss-news").toPromise().then((filmList) => {
      console.log(filmList.json());
      this.moviesList = filmList.json();
    }, (err) => {
      console.log(err);
    })
  }
  openReview(imgUrl, id) {
    this.navCtrl.push("NewsdetailsPage", {
      imgUrl, id
    });
  }
}
