import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PartyComponent } from './components/party/party.component';
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatchComponent } from './components/catch/catch.component';
import { BattleComponent } from './components/battle/battle.component';
import { LakeComponent } from './components/adventures/lake/lake.component';
import { ForestComponent } from './components/adventures/forest/forest.component';
import { MountainComponent } from './components/adventures/mountain/mountain.component';
import { CityComponent } from './components/adventures/city/city.component';
import { PartySectionComponent } from './components/party/party-section/party-section.component';
import { RegisterComponent } from './components/register/register.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokeoptionsComponent } from './components/pokemon/pokeoptions/pokeoptions.component';
import { MidbattleComponent } from './components/battle/midbattle/midbattle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    WelcomeComponent,
    PartyComponent,
    LoginComponent,
    CatchComponent,
    BattleComponent,
    LakeComponent,
    ForestComponent,
    MountainComponent,
    CityComponent,
    PartySectionComponent,
    RegisterComponent,
    PokemonComponent,
    PokeoptionsComponent,
    MidbattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
