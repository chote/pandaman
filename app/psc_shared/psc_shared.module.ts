import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule,PanelModule,DialogModule,ConfirmationService ,ConfirmDialogModule,DataTableModule,SharedModule,InputTextModule, ButtonModule,DropdownModule }  from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
//import {MdCardModule,MdButtonModule, MdCheckboxModule,MaterialModule, MdNativeDateModule} from '@angular/material';
import { ProductService } from './psc_server';
import { UserService } from './psc_user.service';
import { BaseComponent } from './psc_base.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
import { SumsPipe } from './sums.pipe';
@NgModule({
    imports: [
    CommonModule, ChartModule//,MdCardModule,MdButtonModule, MdCheckboxModule,MaterialModule, MdNativeDateModule 
  ],
  declarations: [BaseComponent,SumsPipe],
  exports: [
  HttpModule, InputTextModule,FormsModule,DialogModule,  ButtonModule,PanelModule, DataTableModule,SharedModule,ConfirmDialogModule,DropdownModule
, ChartModule,SumsPipe,EditorModule]
})
export class PscShareModule {

    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ProductService, UserService,ConfirmationService, {
      provide: HighchartsStatic,useValue: highcharts
    }]
    };
  }
 }

