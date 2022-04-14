import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from "../services/nav-service/nav.service";
import { Subscription } from "rxjs";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscription: Subscription;
  private sidenavOpened: boolean;
  private displayMenuToggle: boolean;

  constructor(private navService: NavService, private observer: BreakpointObserver) {
    this.subscription = new Subscription();
    this.sidenavOpened = true;
    this.displayMenuToggle = true;
  }

  ngOnInit(): void {
    this.subscription = this.navService.getCurrentSignal()
      .subscribe(sidenavOpened => this.sidenavOpened = sidenavOpened);
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      this.displayMenuToggle = res.matches;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.observer.ngOnDestroy();
  }

  public newSidenavToggleStatus(): void {
    this.sidenavOpened = !this.sidenavOpened;
    this.navService.sendSidenavToggleStatusSignal(this.sidenavOpened);
  }

  public getSidenavOpened(): boolean {
    return this.sidenavOpened;
  }

  public getDisplayMenuToggle(): boolean {
    return this.displayMenuToggle;
  }
}
