import * as angular from 'angular';

export class QSampleController implements ng.IController {
  public readonly className = "QSampleController";

  constructor(private $q: ng.IQService) {
  }

  public request(resolveFlg: boolean): ng.IPromise<any> {
    const deferred = this.$q.defer();
    if (resolveFlg) {
      deferred.resolve({first: "chibi", last: "kinoko"});
    } else {
      deferred.reject({first: "undefined-chibi", last: "undefined-kinoko"});
    }
    return deferred.promise;
  }
}
