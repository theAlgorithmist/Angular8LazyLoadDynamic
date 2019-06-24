/**
 * Copyright 2018 Jim Armstrong (www.algorithmist.net)
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
 * Feature module for the (lazy-loaded) route with dynamic components
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Routes,
  RouterModule
} from "@angular/router";

import { DynamicItemDirective } from './directives/dynamic-item.directive';
import { FeatureComponent } from './feature.component';

// components to be dynamically created in this module's scope
import { BaseComponent       } from './components/base-component/base-component.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';

const localRoutes: Routes = [
  { path: '', component: FeatureComponent }
];

export const DYNAMIC_COMPONENTS: Array<any> = [
  BaseComponent, Component1Component, Component2Component, Component3Component
];

@NgModule({
  declarations: [
    DynamicItemDirective, FeatureComponent, ...DYNAMIC_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(localRoutes),
  ],
  providers: [],
  entryComponents: DYNAMIC_COMPONENTS,   // since we expect these to be created dynamically ...
  exports: [
    DynamicItemDirective, ...DYNAMIC_COMPONENTS
  ]
})

export class FeatureModule {}
