import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ServicioService } from '../../../servicio/servicio.service';


@Component({
  selector: 'ngx-dialog-name-prompt',
  templateUrl: 'dialog-name-prompt.component.html',
  styleUrls: ['dialog-name-prompt.component.scss'],
  providers: [ServicioService],
})
export class DialogNamePromptComponent implements OnInit {
  ngOnInit(): void{
    // console.log(this.servicio.socioMedidor);
  };

  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>,
              public servicio: ServicioService) {}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
