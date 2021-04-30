import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Copyright © <b><a href="http://www.prohabitatbolivia.org/" target="_blank">FPH</a></b> 2021
    </span>
    <div class="socials">
      <!--<a href="#" target="_blank" class="ion ion-social-github"></a>-->
      <a href="https://www.facebook.com/fundacionprohabitat" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/F_ProHabitat?fbclid=IwAR39waRuzjKrtFc6Y27Svrq3FZKCfEGzlbU6G-oWDyiOZ8H2E81x3lzf8OM" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-youtube"></a>
      <a href="#" target="_blank" class="ion ion-social-instagram"></a>
    </div>
  `,
})
export class FooterComponent {
}
