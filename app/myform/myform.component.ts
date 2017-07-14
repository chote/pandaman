import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../psc_shared/psc_base.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

//declare var moment: any;
import * as moment from 'moment';
import * as _ from "lodash";
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent extends BaseComponent {

  evalids: any = [];
  evaldetails: any = [];  

  ngOnInit() {

   let sql = { sql: "select distinct evalid from evalbilldetail where doctorid = 3" };
   let data1 = this._productService.getSql(sql);
   sql = { sql: "select * from evalbill b ,evalbilldetail d  where b.evalid = d.evalid and d.doctorid = 3" };
   let data2 = this._productService.getSql(sql);
    Observable.forkJoin([data1, data2]).subscribe(results => {
     this.evalids = results[0];
     this.evaldetails = results[1];
     console.log(this.evalids);
      
     console.log(this.evaldetails);
      
    });
  }

}
