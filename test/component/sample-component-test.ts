describe("SampleComponentのテスト", () => {
  let $componentController;
  beforeEach(angular.mock.module('chibiApp'));
  beforeEach(angular.mock.inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  describe('インスタンス変数のテスト', () => {
    it('bindしてないとき', () => {
      const component = $componentController('sampleComponent', null);
      expect(component.firstName).toBeUndefined();
      expect(component.lastName).toBeUndefined();
    });

    it('bindしているとき', () => {
      let bindings = {
        firstName: 'chibi',
        lastName: 'kinoko'
      };
      const component = $componentController('sampleComponent', null, bindings);
      expect(component.firstName).toEqual('chibi');
      expect(component.lastName).toEqual('kinoko');
    });
  });

  describe('getFullName()のテスト', () => {
    it('フルネームで返却されること', () => {
      let bindings = {
        firstName: 'chibi',
        lastName: 'kinoko'
      };
      const component = $componentController('sampleComponent', null, bindings);
      expect(component.getFullName()).toEqual('chibi kinoko');
    });
  });
});
