import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-showcase-dialog',
  templateUrl: 'showcase-dialog.component.html',
  styleUrls: ['showcase-dialog.component.scss'],
})
export class ShowcaseDialogComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>, public router: Router) {}

  dismiss() {
    this.ref.close();
    this.router.navigate(['']);
  }
}
