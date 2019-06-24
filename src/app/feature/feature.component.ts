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
 * This component serves as a 'container' for several (data-driven) dynamically-generated components
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ChangeDetectorRef,
  OnInit,
  ViewChildren,
  QueryList
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { LayoutModel } from '../models/layout-model';

import { DynamicItemDirective } from './directives/dynamic-item.directive';

import { ComponentItem        } from './libs/ComponentItem';
import { ComponentItemFactory } from './libs/ComponentItemFactory';

@Component({
  selector: 'app-feature',

  templateUrl: './feature.component.html',

  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit, AfterViewInit
{
  // Collection of Component and data with an iterable for binding
  public componentItems: Record<string, ComponentItem> = {};
  public items: Array<string>;

  protected _model: LayoutModel;

  // reference to dynamic item directive instances and associated array
  @ViewChildren(DynamicItemDirective)
  protected _dynamicItems: QueryList<DynamicItemDirective>;
  protected _dynamicItemsArr: Array<DynamicItemDirective>;

  constructor(protected _activatedRoute: ActivatedRoute,
              protected _componentFactoryResolver: ComponentFactoryResolver,
              protected _changeDetectorRef: ChangeDetectorRef)
  {
    this.items = new Array<string>();
  }

  public ngOnInit(): void
  {
    this._model = <LayoutModel> this._activatedRoute.snapshot.data['model'];

    const layout: Array<Object> = this._model['layout'];

    // can reference component items from factory by component name at any time
    layout.forEach( (item: Object) => {
      this.componentItems[item['component']] = ComponentItemFactory.create(item['component'], item['data']);
      this.items.push(item['component']);
    });
  }

  public ngAfterViewInit(): void
  {
    // dynamicItems now available, so finish creating the layout
    this._dynamicItemsArr = this._dynamicItems.toArray();

    const n: number = this._dynamicItemsArr.length;

    let i: number;
    let dynamicItem: DynamicItemDirective;
    let item: ComponentItem;
    let componentRef: ComponentRef<any>;
    let factory: ComponentFactory<any>;

    // this is where the fun is ...
    for (i = 0; i < n; ++i)
    {
      // this is the dynamic layout item or template
      dynamicItem = this._dynamicItemsArr[i];

      // this is the component that gets rendered into it
      item = this.componentItems[this.items[i]];

      // if there is another item to render ...
      if (item)
      {
        // add the component to the dynamic view and assign its data
        factory      = this._componentFactoryResolver.resolveComponentFactory(item.component);
        componentRef = dynamicItem.addComponent(factory);

        componentRef.instance.data = item.data;
      }
    }

    // because we got to the party late :)
    this._changeDetectorRef.detectChanges();
  }
}
