# Shipping

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `npm start` for a lint check and dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Explanation flow:

This application makes a shipping label using technology like Angular Material, Angular, TypeScript, JavaScript, CSS, and HTML. There is a wizard component which can be used using the selector to any other component.

Used tslint check before starting dev server using ng lint to check the coding standard and performance of the application.

Functionality includes going next and prev through the different state of forms and edit or add information accordingly. Once all the validation and information is filled up, a shipping label will be generated using the information provided and also counting the cost of the shipping using the shipping option selected by the user and weight of the item.

Used routing to run the application on the main HTML page here but we can also use the selector of wizard component anywhere in the application to make the shipping label forms available throughout the application.

