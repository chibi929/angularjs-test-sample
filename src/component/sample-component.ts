import * as angular from 'angular';

export class SampleComponentOptions implements ng.IComponentOptions {
  public controller = ComponentController;
  public bindings = {
    firstName: '@',
    lastName: '@'
  };
}

class ComponentController implements ng.IComponentController {
  public firstName: string;
  public lastName: string;

  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
