describe('replaceのテスト', () => {
  let $filter;
  beforeEach(angular.mock.module('chibiApp'));
  beforeEach(angular.mock.inject((_$filter_) => {
    $filter = _$filter_;
  }));

  it('置換できること', () => {
    const replace = $filter('replace');
    expect(replace('abbccc', 'a', 'z')).toEqual('zbbccc');
    expect(replace('abbccc', 'bb', 'z')).toEqual('azccc');
    expect(replace('abbccc', 'ccc', 'z')).toEqual('abbz');
  });
});
