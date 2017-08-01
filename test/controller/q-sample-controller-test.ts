describe('QSampleControllerのテスト', () => {
  let $controller;
  let $rootScope;
  let $q;
  beforeEach(angular.mock.module('chibiApp'));
  beforeEach(angular.mock.inject((_$controller_, _$rootScope_, _$q_) => {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
  }));

  describe('コンストラクタのテスト', () => {
    it('変数className', () => {
      const controller = $controller('qSampleController');
      expect(controller.className).toEqual("QSampleController");
    });
  });

  describe('#requestのテスト', () => {
    it('名前が取得できること: true', (done) => {
      const controller = $controller('qSampleController');
      controller.request(true).then((res) => {
        expect(res.first).toEqual('chibi');
        expect(res.last).toEqual('kinoko');
        done();
      });
      $rootScope.$apply();
    });

    it('名前が取得できないこと: false', (done) => {
      const controller = $controller('qSampleController');
      const deferred = $q.defer();
      controller.request(false).then((res) => {
        fail("Not come here.");
        done();
      }, (err) => {
        expect(err.first).toEqual('undefined-chibi');
        expect(err.last).toEqual('undefined-kinoko');
        done();
      });
      $rootScope.$apply();
    });
  });
});
