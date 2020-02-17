// 获取关键词的函数
var keys = getUrlParams('key');
// console.log(keys);
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/search',
    // data: {
    //     key:keys
    // },
    success: function (response) {
        console.log(response);
        console.log(response.data);

        // location.href = '/list.html?key=' + keys;
        var html = template('postsTpl', { response: response.data.data });
        // console.log(html);
        $('#postsBox').html(html);
    }
})