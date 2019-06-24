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
 * A component item that holds a component type and some {Object} data
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Type } from '@angular/core';

export class ComponentItem
{
  protected _component: Type<any>;   // Component is instance of this type
  protected _data: Object;           // Data associated with this component

  /**
   * Construct a new {ComponentItem}
   *
   * @param {Type<any>} component Reference to component instance type
   *
   * @param {Object} data Data associated with the component
   */
  constructor(component: Type<any>, data: Object)
  {
    if (component !== undefined) {
      this._component = component;
    }

    if (data !== undefined) {
      this._data = JSON.parse(JSON.stringify(data));
    }
  }

  /**
   * Access the component instance's type
   *
   * @returns {Type<any>}
   */
  public get component(): Type<any>
  {
    return this._component;
  }

  /**
   * Access the component's data
   *
   * @returns {Object}
   */
  public get data(): Object
  {
    return this._data === undefined ? {} : this._data = JSON.parse(JSON.stringify(this._data));
  }

  /**
   * Assign data to a component (post-construction)
   *
   * @param {Object} value
   *
   * @returns {nothing}
   */
  public set data(value: Object)
  {
    if (value !== undefined) {
      this._data = JSON.parse(JSON.stringify(value));
    }
  }
}
