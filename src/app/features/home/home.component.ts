import { HomeService } from './../../services/home/home.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public data: string = 'vazio';

  constructor(
    private service: HomeService,
    private http: HttpClient
  ) {
    this.chamarAPI();
  }

  public chamarAPI(): void {
    console.log('Executando chamarAPI')
    this.service.getData().subscribe((responseApi: any) => {
      console.log('Resposta chamarAPI')
      this.data = JSON.stringify(responseApi);
    },
    (error) => {
      console.log('erro ao chamarAPI')
    });
  }

}
