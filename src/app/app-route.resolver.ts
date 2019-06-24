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
 * A route resolver to ensure that the data model for dynamic component layout is loaded before proceeding
 * to activate the lazy-loaded route containing those components
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import {
  Inject,
  Injectable
} from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { DataService } from './services/data-service';

import { LayoutModel } from './models/layout-model';

@Injectable({providedIn: 'root'})
export class AppRouteResolver implements Resolve<LayoutModel>
{
  constructor(@Inject(DataService) protected _service: DataService)
  {
    // empty
  }

  resolve(): Observable<LayoutModel>
  {
    // load layout model
    return < Observable<LayoutModel> > this._service.getData('/assets/layout-model.json');
  }
}
