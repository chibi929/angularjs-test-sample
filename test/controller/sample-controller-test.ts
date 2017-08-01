describe("SampleControllerのテスト", () => {
  let $controller;
  beforeEach(angular.mock.module('chibiApp'));
  beforeEach(angular.mock.inject((_$controller_) => {
    $controller = _$controller_;
  }));

  describe('コンストラクタのテスト', () => {
    it('変数className', () => {
      const controller = $controller('sampleController');
      expect(controller.className).toEqual("SampleController");
    });
  });

  describe('click()のテスト', () => {
    it('clickCountが増えていること', () => {
      const controller = $controller('sampleController');
      expect(controller.getClickCount()).toEqual(0);
      controller.click();
      expect(controller.getClickCount()).toEqual(1);
      controller.click();
      expect(controller.getClickCount()).toEqual(2);
    });
  });
});
