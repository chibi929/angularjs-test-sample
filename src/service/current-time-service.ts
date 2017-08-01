import * as angular from 'angular';

export class CurrentTimeService {
  public readonly className = "CurrentTimeService";
  public now(): Date {
    return new Date();
  }
}
