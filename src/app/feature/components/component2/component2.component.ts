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
 * Yet another sample display component
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Component } from '@angular/core';

import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-component-2',

  templateUrl: './component2.component.html',

  styleUrls: ['./component2.component.scss']
})
export class Component2Component extends BaseComponent
{
  constructor()
  {
    super();
  }
}
