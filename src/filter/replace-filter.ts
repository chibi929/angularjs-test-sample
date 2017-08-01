import * as angular from 'angular';

export function replace() {
  return (input, s1, s2) => {
    return input.replace(s1, s2);
  }
}
