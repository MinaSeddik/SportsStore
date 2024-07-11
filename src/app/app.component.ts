import {Component, inject, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {StoreComponent} from "./store/store.component";
import {GoogleTagManagerService} from "angular-google-tag-manager";
import {GtmDataLayerService} from "./services/gtm-data-layer.service";

@Component({
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet, StoreComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SportsStore';

  private readonly router: Router = inject(Router);
  private readonly gtmService: GoogleTagManagerService = inject(GoogleTagManagerService);


  // ngOnInit() {
  //   // push GTM data layer for every visited page
  //   this.router.events.forEach(item => {
  //     if (item instanceof NavigationEnd) {
  //       const gtmTag = {
  //         event: 'page',
  //         pageName: item.url
  //       };
  //
  //       this.gtmService.pushTag(gtmTag);
  //     }
  //   });
  // }

  private readonly gtmDataLayerService: GtmDataLayerService = inject(GtmDataLayerService);

  ngOnInit() {
    // push GTM data layer for every visited page
    this.router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        this.gtmDataLayerService.logContentView(event.url);
      }
    });

    // if you want to send tags without pushing events simply call the function to enable it
    this.gtmService.addGtmToDom()
      .catch(error => console.log(`Error submitting event to GTM: {error}`))

  }

}
