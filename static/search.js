// 获取关键词的函数
var keys = decodeURI(getUrlParams('key')) == -1 ? '' : decodeURI(getUrlParams('key'));

$.ajax({
  type: 'get',
  url: 'http://localhost:8080/api/v1/index/search',
  data: {
    key: keys
  },
  success: function (response) {
    var html = template('postsTpl', { response: response.data.data });
    $('#postsBox').html(html);
    $('#pageBox').twbsPagination({
      totalPages: response.data.pages,
      visiblePages: 7,
      first: '首页',
      last: '末页',
      prev: '上一页',
      next: '下一页',
      onPageClick: function (event, page) {
        changePage(page);
      }
    });
  }
})
// 分页
function changePage(page) {
  $.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/search',
    data: {
      key: keys,
      page: page
    },
    success: function (response) {
      var html = template('postsTpl', { response: response.data.data });
      $('#postsBox').html(html);
    }
  })
}
