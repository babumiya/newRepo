import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../shared/api-service.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  constructor(private api : ApiServiceService) { }
  allProducts:any;
  ngOnInit(): void {
    // https://my-json-server.typicode.com/<your-username>/<your-repo>
    // https://my-json-server.typicode.com/babumiya/MyJson/db
    // https://my-json-server.typicode.com/babumiya/newRepo/db
    this.api.getAllData("https://my-json-server.typicode.com/babumiya/newRepo/db").subscribe(res=>{
      console.log(res);
      this.allProducts = res.products;
    })
  }

}
