import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FlyerComponent } from './flyer/flyer.component';
import { MerilionparkComponent } from './merilionpark/merilionpark.component';
import { WavesComponent } from './waves/waves.component';
import { InfinityComponent } from './infinity/infinity.component';
import { NightsafariComponent } from './nightsafari/nightsafari.component';
import { LeafmonkeyComponent } from './leafmonkey/leafmonkey.component';
import { SeaturtleComponent } from './seaturtle/seaturtle.component';
import { DolphinsComponent } from './dolphins/dolphins.component';
import { UnderwaterComponent } from './underwater/underwater.component';
import { CloudforestComponent } from './cloudforest/cloudforest.component';
import { BaysandComponent } from './baysand/baysand.component';
import { CablecarComponent } from './cablecar/cablecar.component';
import { PanpacificComponent } from './panpacific/panpacific.component';
import { PorkroyalComponent } from './porkroyal/porkroyal.component';
import { YotelComponent } from './yotel/yotel.component';
import { FultronComponent } from './fultron/fultron.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    FlyerComponent,
    MerilionparkComponent,
    WavesComponent,
    InfinityComponent,
    NightsafariComponent,
    LeafmonkeyComponent,
    SeaturtleComponent,
    DolphinsComponent,
    UnderwaterComponent,
    CloudforestComponent,
    BaysandComponent,
    CablecarComponent,
    PanpacificComponent,
    PorkroyalComponent,
    YotelComponent,
    FultronComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }