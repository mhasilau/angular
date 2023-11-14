import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "./components/components.module";
import {GuardsModule} from "./guards/guards.module";
import {ServicesModule} from "./services/services.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    GuardsModule,
    ServicesModule,
  ],
  exports: [
    ComponentsModule,
    GuardsModule,
    ServicesModule,
  ]
})
export class CoreModule { }
