# Editing Tabular Data In Angular

This is the code base for the Medium article, _Dynamic Component Generation in Lazy-Loaded Routes_ (insert url).

 
Author:  Jim Armstrong - [The Algorithmist](http://www.algorithmist.net)

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular: 8.0.1

Typescript: 3.4.3

Angular CLI: 8.0.3

Node: 10.15.3

Version: 1.0

## Introduction

The article covers a scenario where it is necessary to display a number of components, stacked vertically in a layout, where the number of components is not known in advance.  For demonstration and deconstruction purposes, the number of dynamic components in the demo is three.  This yields six possible permutations and the number of permutations for _n_ components is _n!_.  

The code illustrates how to use a route resolver to ensure a JSON file that describes the component layout is loaded before activating a lazy-loaded route. The component associated with the lazy-loaded route programmatically generates the component display, which can be easily changed by altering the content of the JSON file.

Enjoy!!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

