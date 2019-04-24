import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
const KEY_PEMBAYARAN = "dataPembayaran";
/**
 * Generated class for the InfoPembayaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pembayaran',
  templateUrl: 'pembayaran.html',
})
export class PembayaranPage {
  public listPembayaran: any;
  namabank :any = null;
  norek: any = null;
  jmlpinjaman : any = null;
  nama : any = null;
  lamapinjaman : any = null;;
  jmlcicilan : any = null;
  cicilanke : any = null;



  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private storage : Storage) {
      // mengatur key value 
      this.storage.set('name', 'noname');

      //mengambil key value
      this.storage.get('name').then((val) => {
        console.log('Your name is', val);
      });

      this.ambilPembayaran();
  }
  ambilPembayaran() {
    this.storage.get(KEY_PEMBAYARAN).then((data) => {
      if (data != null) {
        this.listPembayaran = JSON.parse(data);
        console.log(this.listPembayaran);
      } else {
        this.listPembayaran = [];
        console.log('empty');
      }
    })
    
  }

  simpanData(){
    var tempData = {
      namabank: this.namabank,
      norek: this.norek,
      jmlpinjaman: this.jmlpinjaman,
      nama: this.nama,
      lamapinjaman: this.lamapinjaman,
      jmlcicilan: this.jmlcicilan,
      cicilanke: this.cicilanke
      
    }
    this.listPembayaran.push(tempData);
    this.storage.set(KEY_PEMBAYARAN, JSON.stringify(this.listPembayaran));
    this.navCtrl.setRoot(PembayaranPage);

  }

  hapusDataPembayaran(item) {
    var temp = this.listPembayaran.indexOf(item);
    this.listPembayaran.splice(temp, 1);
    this.storage.set(KEY_PEMBAYARAN, JSON.stringify(this.listPembayaran));
  }

  hapusSemuaDataPembayaran() {
    this.storage.remove(KEY_PEMBAYARAN);
    this.listPembayaran = [];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PembayaranPage');
  }

}
