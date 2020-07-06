import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from './data.component';
import {Manual7mComponent} from './manual7m/manual7m.component';


const routes: Routes = [{
  path: '',
  component: DataComponent,
  children: [{
    path: 'manual7m',
    component: Manual7mComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {
}

export const routedComponents = [
  DataComponent,
  Manual7mComponent,
];
