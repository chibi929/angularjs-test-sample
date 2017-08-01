describe('TimeoutSampleControllerのテスト', () => {
  let $controller;
  let $timeout;
  beforeEach(angular.mock.module('chibiApp'));
  beforeEach(angular.mock.inject((_$controller_, _$timeout_) => {
    $controller = _$controller_;
    $timeout = _$timeout_;
  }));

  describe('コンストラクタのテスト', () => {
    it('変数className', () => {
      const controller = $controller('timeoutSampleController');
      expect(controller.className).toEqual("TimeoutSampleController");
    });
  });

  describe('#requestのテスト', () => {
    it('名前が取得できていること', () => {
      const controller = $controller('timeoutSampleController');
      controller.request();
      expect(controller.firstName).toBeUndefined();
      expect(controller.lastName).toBeUndefined();
      $timeout.flush();
      expect(controller.firstName).toEqual('chibi');
      expect(controller.lastName).toEqual('kinoko');
    });
  });

  describe('#request2のテスト', () => {
    it('名前が取得できていること', (done) => {
      const controller = $controller('timeoutSampleController');
      controller.request2().then(() => {
        expect(controller.firstName).toEqual('chibi');
        expect(controller.lastName).toEqual('kinoko');
        done();
      });
      expect(controller.firstName).toBeUndefined();
      expect(controller.lastName).toBeUndefined();
      $timeout.flush();
    });
  });
});
