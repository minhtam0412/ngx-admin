import {NgModule} from '@angular/core';

import {DataRoutingModule, routedComponents} from './data-routing.module';
import {ThemeModule} from "../../@theme/theme.module";



@NgModule({
  imports: [
    ThemeModule,
    DataRoutingModule,
  ],
  exports: [],
  declarations: [
    ...routedComponents,
  ],
})
export class DataModule {
}
