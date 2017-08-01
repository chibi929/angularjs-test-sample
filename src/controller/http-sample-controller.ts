import * as angular from 'angular';

export class HttpSampleController {
  public readonly className = "HttpSampleController";
  public firstName: string;
  public lastName: string;

  constructor(private $http: ng.IHttpService) {
  }

  public request(): void {
    this.$http.get('/data').then((res: any) => {
      this.firstName = res.data.first;
      this.lastName = res.data.last;
    });
  }
}
