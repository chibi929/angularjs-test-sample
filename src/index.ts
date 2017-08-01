import * as angular from 'angular';
import {SampleController} from './controller/sample-controller';
import {HttpSampleController} from './controller/http-sample-controller';
import {TimeoutSampleController} from './controller/timeout-sample-controller';
import {QSampleController} from './controller/q-sample-controller';
import {SampleComponentOptions} from './component/sample-component';
import {replace} from './filter/replace-filter';
import {CurrentTimeService} from './service/current-time-service';

angular.module('chibiApp', [])
  .controller('sampleController', SampleController)
  .controller('httpSampleController', HttpSampleController)
  .controller('timeoutSampleController', TimeoutSampleController)
  .controller('qSampleController', QSampleController)
  .component('sampleComponent', new SampleComponentOptions())
  .filter('replace', replace)
  .service('currentTime', CurrentTimeService);
