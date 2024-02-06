import { Component } from '@angular/core';
import { HelperService } from '../../shared/core/helper.service';
import { SidenavComponent } from '../../shared/components/sidenav/sidenav.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidenavComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HelperService]
})
export class HomeComponent {

  constructor(
    private helper: HelperService
  ) { }

  goTo(route: string) {
    this.helper
  }
}
