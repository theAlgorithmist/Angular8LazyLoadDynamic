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
 * An attribute directive to associate a view container with a particular template
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import {
  ComponentFactory,
  ComponentRef,
  Directive,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[dynamic-item]',
})
export class DynamicItemDirective implements OnDestroy
{
  constructor(protected _viewContainerRef: ViewContainerRef)
  {
    // empty
  }

  /**
   * Add a component to the view container
   *
   * @param {ComponentFactory<any>} componentFactory Factory to generate the component
   *
   * @returns {ComponentRef<any>} Clears the view container before creation
   */
  public addComponent(componentFactory: ComponentFactory<any>): ComponentRef<any>
  {
    this._viewContainerRef.clear();

    return this._viewContainerRef.createComponent(componentFactory);
  }

  public ngOnDestroy(): void
  {
    if (this._viewContainerRef)
    {
      this._viewContainerRef.remove();
      this._viewContainerRef = null;
    }
  }
}

