import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private readonly signalSource;
  private readonly currentSignal;
  private sidenavOpened: boolean;

  constructor() {
    this.sidenavOpened = true;
    this.signalSource = new BehaviorSubject(this.sidenavOpened);
    this.currentSignal = this.signalSource.asObservable();
  }

  public sendSidenavToggleStatusSignal(sidenavOpened: boolean): void {
    this.sidenavOpened = sidenavOpened;
    this.signalSource.next(this.sidenavOpened);
  }

  public getCurrentSignal(): Observable<any> {
    return this.currentSignal;
  }
}
