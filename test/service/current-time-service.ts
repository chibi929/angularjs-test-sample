describe("CurrentTimeServiceのテスト", () => {
  let currentTime;
  beforeEach(angular.mock.module('chibiApp'));
  beforeEach(angular.mock.inject((_currentTime_) => {
    currentTime = _currentTime_;
  }));

  describe('インスタンス変数のテスト', () => {
    it('変数className', () => {
      expect(currentTime.className).toEqual("CurrentTimeService");
    });
  });

  describe('now()のテスト', () => {
    it('現在時刻が取得できる', () => {
      expect(currentTime.now().getDay()).toEqual(new Date().getDay());
    });
  });
});
