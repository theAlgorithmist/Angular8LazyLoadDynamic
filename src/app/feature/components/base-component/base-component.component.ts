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
 * Baseline sample display component
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import {
  Component
  , OnInit
  , ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-base-component',

  template: ``,

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent implements OnInit
{
  public title: string = '';
  public id: string    = '';

  constructor()
  {
    // empty
  }

  /**
   * Assign a data object to this component (currently using {title} and {id} properties)
   *
   * @param {object} value Data {Object}
   */
  public set data(value: object)
  {
    // TODO create an interface to describe this data model
    if (value)
    {
      if (value.hasOwnProperty('title')) {
        this.title = value['title'];
      }

      if (value.hasOwnProperty('id')) {
        this.id = value['id'];
      }
    }
  }

  /**
   * Angular lifecycle method - on init
   *
   * @returns {nothing}
   */
  public ngOnInit(): void
  {
    // reserved for future use
  }
}
