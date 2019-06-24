/**
 * Copyright 2019 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Main App routing module
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { AppRouteResolver } from './app-route.resolver';

// there is only one route in this project
const routes: Routes = [
  {
    path: `feature`,
    resolve: { model: AppRouteResolver },
    loadChildren: () => import(`./feature/feature.module`).then(m => m.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AppRouteResolver],
  exports: [RouterModule]
})
export class AppRoutingModule { }
