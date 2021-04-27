import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public dataPOST = [];
  public loading : any;

  constructor(private http : HttpClient, private loadCtrl : LoadingController) {
  }

  public async loaderPresent(): Promise<any> {
    const loading = await this.loadCtrl.create({
      message: "loading...",
      backdropDismiss: true
    });
    await loading.present();

    return loading;
  }

  async getDataPost() {
    this.loading = await this.loaderPresent();

    this.http.get("https://reqres.in/api/users").subscribe((res : any) => {
      console.log(res);
      this.dataPOST = res.data;

      if (this.loading) {
        this.loading.dismiss();
      }
    });
  }

  ionViewDidEnter() {
    this.getDataPost();
  }

}
