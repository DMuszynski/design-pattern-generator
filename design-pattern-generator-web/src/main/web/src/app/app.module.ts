import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { NavService } from "./services/nav-service/nav.service";
import { MatExpansionModule} from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { ContentComponent } from './content/content.component';
import { SingletonPatternComponent } from './content/content-template/singleton-pattern/singleton-pattern.component';
import { FactoryMethodPatternComponent } from './content/content-template/factory-method-pattern/factory-method-pattern.component';
import { ContentTemplateComponent } from './content/content-template/content-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    ContentComponent,
    SingletonPatternComponent,
    FactoryMethodPatternComponent,
    ContentTemplateComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        MatTabsModule,
    ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
