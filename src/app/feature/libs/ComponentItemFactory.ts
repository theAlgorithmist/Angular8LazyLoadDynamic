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
 * Factory to create component items (Component, data)
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import { Component1Component } from '../components/component1/component1.component';
import { Component2Component } from '../components/component2/component2.component';
import { Component3Component } from '../components/component3/component3.component';

import { ComponentItem } from './ComponentItem';

export class ComponentItemFactory
{
  constructor()
  {
    // empty
  }

  /**
   * Create a new Angular Component instance from a known set of {string} identifiers
   *
   * @param {string} name Component identifier
   *
   * @param {object} data {Object} data associated with the Component instance
   */
  public static create(name: string, data: object): ComponentItem | null
  {
    switch (name)
    {
      case "component1":
        return new ComponentItem(Component1Component, data);

      case "component2":
        return new ComponentItem(Component2Component, data);

      case "component3":
        return new ComponentItem(Component3Component, data);

      default:
        return null;
    }
  }
}
