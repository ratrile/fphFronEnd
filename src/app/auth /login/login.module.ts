import { NgModule } from '@angular/core';
import {  
  NbProgressBarModule,
  NbTabsetModule,  
  NbListModule,
  NbLayoutModule,
} from '@nebular/theme';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login.component';
import { ChartModule } from 'angular2-chartjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { FormInputsComponent } from '../../pages/forms/form-inputs/form-inputs.component';
import { DatepickerComponent } from '../../pages/forms/datepicker/datepicker.component';
import { ButtonsComponent } from '../../pages/forms/buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbTabsetModule,   
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,        
    ngFormsModule,
    NbLayoutModule,
  ],
  declarations: [
    LoginComponent,      
    ButtonsComponent,
    FormInputsComponent,   
    DatepickerComponent,  
  ],
  providers: [    
  ],
})
export class LoginModule { }
