import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { MedicionComponent } from './medicion/medicion.component';
import { DialogNamePromptComponent } from  './medicion/dialog-lecturacion/dialog-name-prompt.component';

import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
 import {MenuItem} from 'primeng/api';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    AccordionModule,
    DialogModule,
    FormsModule,
  ],
  declarations: [
    PagesComponent,
    MedicionComponent,
    DialogNamePromptComponent,
  ],
})
export class PagesModule {
}
