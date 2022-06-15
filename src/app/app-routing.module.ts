import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contactus/contactus.component';
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
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path : "", component:HomeComponent, pathMatch: 'full' },
  {path : "about", component:AboutUsComponent, pathMatch: 'full' },
  {path : "contact", component:ContactUsComponent, pathMatch: 'full' },
  {path : "footer", component:FooterComponent, pathMatch: 'full' },
  {path : "flyer", component:FlyerComponent, pathMatch: 'full' },
  {path : "merilionpark", component:MerilionparkComponent, pathMatch: 'full' },
  {path : "waves", component:WavesComponent, pathMatch: 'full' },
  {path : "infinity", component:InfinityComponent, pathMatch: 'full' },
  {path : "nightsafari", component:NightsafariComponent, pathMatch: 'full' },
  {path : "leafmonkey", component:LeafmonkeyComponent, pathMatch: 'full' },
  {path : "seaturtle", component:SeaturtleComponent, pathMatch: 'full' },
  {path : "dolphins", component:DolphinsComponent, pathMatch: 'full' },
  {path : " underwater", component: UnderwaterComponent, pathMatch: 'full' },
  {path : "cloudforest", component:CloudforestComponent, pathMatch: 'full' },
  {path : "baysand", component:BaysandComponent, pathMatch: 'full' },
  {path : "cablecar", component:CablecarComponent, pathMatch: 'full' },
  {path : "panpacific", component:PanpacificComponent, pathMatch: 'full' },
  {path : "porkroyal", component:PorkroyalComponent, pathMatch: 'full' },
  {path : "yotel", component:YotelComponent, pathMatch: 'full' },
  {path : "fultron", component:FultronComponent, pathMatch: 'full' },
  {path : "navbar", component:NavbarComponent, pathMatch: 'full' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
