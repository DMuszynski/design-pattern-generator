import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from "rxjs";
import { NavService } from "../services/nav-service/nav.service";
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver } from "@angular/cdk/layout";
import { ActivatedRoute, Router } from "@angular/router";

export interface DPNavChildren {
  name: string,
  iconName: string,
  route: string
}

export interface DPNav {
  category: string,
  iconName?: string,
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

  constructor(private navService: NavService, private observer: BreakpointObserver, private router: Router,
              private activatedRoute: ActivatedRoute) {
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
      iconName: "business",
      patterns: [
        { name: "Builder", iconName: "/", route: "builder" },
        { name: "Fabryka abstrakcyjna", iconName: "/", route: "abstract-factory" },
        { name: "Metoda wytwórcza", iconName: "/", route: "factory-method" },
        { name: "Singleton", iconName: "/", route: "singleton" }
      ]
    } as DPNav;
  }

  private static initStructuralDPNavigation(): DPNav {
    return {
      category: "Strukturalne",
      iconName: "format_shapes",
      patterns: [
        { name: "Adapter", iconName: "/", route: "adapter" },
        { name: "Dekorator", iconName: "/", route: "decorator" },
        { name: "Fasada", iconName: "/", route: "facade" },
        { name: "Kompozyt", iconName: "/", route: "composite" },
        { name: "Most", iconName: "/", route: "bridge" },
        { name: "Pełnomocnik", iconName: "/", route: "proxy" },
        { name: "Pyłek", iconName: "/", route: "flyweight" },
      ]
    } as DPNav;
  }

  private static initBehavioralDPNavigation(): DPNav {
    return {
      category: "Czynościowe",
      iconName: "people",
      patterns: [
        { name: "Łańcuch odpowiedzialności", iconName: "/", route: "chain-of-responsibility" },
        { name: "Polecenie", iconName: "/", route: "command" },
        { name: "Interpreter", iconName: "/", route: "interpreter" },
        { name: "Iterator", iconName: "/", route: "iterator" },
        { name: "Mediator", iconName: "/", route: "mediator" },
        { name: "Pamiątka", iconName: "/", route: "memento" },
        { name: "Metoda szablonowa", iconName: "/", route: "template-method" },
        { name: "Obserwator", iconName: "/", route: "observer" },
        { name: "Stan", iconName: "/", route: "stan" },
        { name: "Strategia", iconName: "/", route: "strategy" },
        { name: "Odwiedzający", iconName: "/", route: "visitor" }
      ]
    } as DPNav;
  }

  public getSidenavOpened(): boolean {
    return this.sidenavOpened;
  }

  public getDPMenuNavigation(): DPNav[] {
    return this.DPMenuNavigation;
  }

  public addPatternUrlParameter(patternName: string): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { pattern: patternName},
        queryParamsHandling: 'merge',
      });
  }
}
