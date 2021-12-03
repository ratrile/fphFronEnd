import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
/*import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';*/
import { NbMenuModule, 
  NbAccordionModule,
  NbInputModule, 
  NbDatepickerModule,
  NbRadioModule,
  NbButtonModule,
  NbCardModule ,
  NbSidebarModule,
  NbLayoutModule,
  NbActionsModule,
  NbIconModule,
  NbCheckboxModule,
  NbTimepickerModule,
  NbSelectModule,
  NbUserModule,
 } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

//import { NbMenuModule } from '@nebular/theme';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AuthRoutingModule,
    ThemeModule,
    NbMenuModule,    
    MiscellaneousModule, 
    FormsModule,
    ReactiveFormsModule,    
    NbLayoutModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,    
    NbSelectModule,
    NbIconModule,  

  ],
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
})
export class AuthModule {  
}
