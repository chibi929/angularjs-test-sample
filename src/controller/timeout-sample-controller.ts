import * as angular from 'angular';

export class TimeoutSampleController implements angular.IController {
  public readonly className = "TimeoutSampleController";
  public firstName: string;
  public lastName: string;

  constructor(private $timeout: ng.ITimeoutService) {
  }

  public request(): void {
    this.$timeout(() => {
      this.firstName = "chibi";
      this.lastName = "kinoko";
    }, 1000);
  }
  
  public request2(): ng.IPromise<any> {
    return this.$timeout(() => {
      this.firstName = "chibi";
      this.lastName = "kinoko";
    }, 1000);
  }
}
