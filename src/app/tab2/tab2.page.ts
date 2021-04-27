import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public dataPOST = [];
  public loading : any;
  post : any = {};

  constructor(private http : HttpClient, private loadCtrl : LoadingController, private toastCtrl : ToastController) {}

  public async loaderPresent(): Promise<any> {
    const loading = await this.loadCtrl.create({
      message: "loading...",
      backdropDismiss: true
    });
    await loading.present();

    return loading;
  }

  submit() {
    this.http.post("https://reqres.in/api/users", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration : 3000,
        message : "New item ID: "+ res.id
      }).then(l => l.present())
    });
  }

}
