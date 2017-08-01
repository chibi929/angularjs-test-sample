import * as angular from 'angular';

export class SampleController implements ng.IController {
  public readonly className = "SampleController";
  private clickCount = 0;

  public click() {
    this.clickCount++;
  }

  public getClickCount() {
    return this.clickCount;
  }
}
