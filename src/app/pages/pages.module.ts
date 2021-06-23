import { NgModule } from '@angular/core';
import { NbMenuModule, NbActionsModule,  NbButtonModule } from '@nebular/theme';

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
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
 import {MenuItem} from 'primeng/api';
import { MedicionEditComponent } from './medicion-edit/medicion-edit.component';
import { CobroComponent } from './cobro/cobro.component';
import { ReciboImprimirComponent } from './cobro/recibo-imprimir/recibo-imprimir.component';
import { NgxPrintModule } from 'ngx-print';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import { DuplicadoReciboComponent } from './cobro/duplicado-recibo/duplicado-recibo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CuentaComponent } from './cuenta/cuenta.component';

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
    TableModule,
    NbActionsModule,
    NgxPrintModule,
    ListboxModule,
    DropdownModule,
    NbButtonModule,
  ],
  declarations: [
    PagesComponent,
    MedicionComponent,
    DialogNamePromptComponent,
    MedicionEditComponent,
    CobroComponent,
    ReciboImprimirComponent,
    DuplicadoReciboComponent,
    UsuarioComponent,
    CuentaComponent,
  ],
})
export class PagesModule {
}
