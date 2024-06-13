import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { Tab1PageRoutingModule } from '../pages/tab1/tab1-routing.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListasComponent
  ],exports:[
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    Tab1PageRoutingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
