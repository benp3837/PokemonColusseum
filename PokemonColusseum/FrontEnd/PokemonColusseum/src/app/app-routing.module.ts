import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './components/adventures/city/city.component';
import { ForestComponent } from './components/adventures/forest/forest.component';
import { LakeComponent } from './components/adventures/lake/lake.component';
import { MountainComponent } from './components/adventures/mountain/mountain.component';
import { BattleComponent } from './components/battle/battle.component';
import { MidbattleComponent } from './components/battle/midbattle/midbattle.component';
import { CatchComponent } from './components/catch/catch.component';
import { LoginComponent } from './components/login/login.component';
import { PartyComponent } from './components/party/party.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [

  {
    path:"welcome",
    component:WelcomeComponent
  },
  
  {
    //empty string is the base path. So when I go to localhost:4200, I get LoginComponent
    path:"", 
    component:LoginComponent
  },

  {
    path:"register",
    component:RegisterComponent
  },
  
  {
    path:"party",
    component:PartyComponent
  },

  {
    path:"pokemon",
    component:PokemonComponent
  },
  
  {
    path:"profile",
    component:ProfileComponent
  },

  {
    path:"catch",
    component:CatchComponent
  },

  {
    path:"battle",
    component:BattleComponent
  },

  {
    path:"midbattle",
    component:MidbattleComponent
  },

  {
    path:"catch/lake",
    component:LakeComponent
  },

  {
    path:"catch/forest",
    component:ForestComponent
  },

  {
    path:"catch/mountain",
    component:MountainComponent
  },

  {
    path:"catch/city",
    component:CityComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
