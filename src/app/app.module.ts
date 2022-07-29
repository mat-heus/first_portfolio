import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** importar módulos para criar os links internos */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

/** importando os módulos para criação dos layouts */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactSService } from './contact-s.service';
import {MatCardModule} from '@angular/material/card';

/** importando os módulos das páginas internas */

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ContactComponent,
    PortfolioComponent,
  ],
  exports: [
    MatSidenavModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [ContactSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
