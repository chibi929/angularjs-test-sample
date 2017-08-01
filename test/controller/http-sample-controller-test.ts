describe('HttpSampleControllerのテスト', () => {
  let $controller;
  let $httpBackend;
  beforeEach(angular.mock.module('chibiApp'));
  beforeEach(angular.mock.inject((_$controller_, _$httpBackend_) => {
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('/data').respond(200, {first: 'chibi', last: 'kinoko'});
  }));

  describe('コンストラクタのテスト', () => {
    it('変数className', () => {
      const controller = $controller('httpSampleController');
      expect(controller.className).toEqual("HttpSampleController");
    });
  });

  describe('#getのテスト', () => {
    it('HTTP通信のレスポンスを取得できていること', () => {
      const controller = $controller('httpSampleController');
      controller.request();
      $httpBackend.flush();

      expect(controller.firstName).toEqual('chibi');
      expect(controller.lastName).toEqual('kinoko');
    });
  });
});
