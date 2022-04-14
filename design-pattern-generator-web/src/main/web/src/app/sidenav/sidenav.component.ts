import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from "rxjs";
import { NavService } from "../services/nav-service/nav.service";
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver } from "@angular/cdk/layout";

export interface DPNavChildren {
  name: string,
  iconName: string,
  route: string
}

export interface DPNav {
  category: string,
  iconName?: string
  patterns?: DPNavChildren[];
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy, AfterViewInit {
  private readonly DPMenuNavigation: DPNav[];

  @ViewChild(MatSidenav)
  private sidenav!: MatSidenav;
  private subscription: Subscription;
  private sidenavOpened: boolean;

  constructor(private navService: NavService, private observer: BreakpointObserver) {
    this.subscription = new Subscription();
    this.sidenavOpened = true;
    this.DPMenuNavigation = SidenavComponent.initDPMenuNavigation();
  }

  ngOnInit(): void {
    this.subscription = this.navService.getCurrentSignal()
      .subscribe(opened => this.changeToggle(opened));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.observer.ngOnDestroy();
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches && this.sidenavOpened)
        this.navService.sendSidenavToggleStatusSignal(false);
      else
        this.navService.sendSidenavToggleStatusSignal(true);
    });
  }

  private changeToggle(opened: boolean): void {
    this.sidenavOpened = opened;
    this.sidenav?.toggle(this.sidenavOpened);
  }

  private static initDPMenuNavigation(): DPNav[] {
    return [
      this.initCreationalDPNavigation(),
      this.initStructuralDPNavigation(),
      this.initBehavioralDPNavigation()
    ] as DPNav[];
  }

  private static initCreationalDPNavigation() : DPNav {
    return {
      category: "Kreacyjne",
      iconName: "/",
      patterns: [
        { name: "Builder", iconName: "/", route: "" },
        { name: "Fabryka abstrakcyjna", iconName: "/", route: "" },
        { name: "Metoda wytwórcza", iconName: "/", route: "" },
        { name: "Singleton", iconName: "/", route: "" }
      ]
    } as DPNav;
  }

  private static initStructuralDPNavigation(): DPNav {
    return {
      category: "Strukturalne",
      iconName: "/",
      patterns: [
        { name: "Adapter", iconName: "/", route: "" },
        { name: "Dekorator", iconName: "/", route: "" },
        { name: "Fasada", iconName: "/", route: "" },
        { name: "Kompozyt", iconName: "/", route: "" },
        { name: "Most", iconName: "/", route: "" },
        { name: "Pełnomocnik", iconName: "/", route: "" },
        { name: "Pyłek", iconName: "/", route: "" },
      ]
    } as DPNav;
  }

  private static initBehavioralDPNavigation(): DPNav {
    return {
      category: "Czynościowe",
      iconName: "/",
      patterns: [
        { name: "Łańcuch odpowiedzialności", iconName: "/", route: "" },
        { name: "Polecenie", iconName: "/", route: "" },
        { name: "Interpreter", iconName: "/", route: "" },
        { name: "Iterator", iconName: "/", route: "" },
        { name: "Mediator", iconName: "/", route: "" },
        { name: "Pamiątka", iconName: "/", route: "" },
        { name: "Obserwator", iconName: "/", route: "" },
        { name: "Stan", iconName: "/", route: "" },
        { name: "Strategia", iconName: "/", route: "" },
        { name: "Odwiedzający", iconName: "/", route: "" }
      ]
    } as DPNav;
  }

  public getSidenavOpened(): boolean {
    return this.sidenavOpened;
  }

  public getDPMenuNavigation(): DPNav[] {
    return this.DPMenuNavigation;
  }
}
