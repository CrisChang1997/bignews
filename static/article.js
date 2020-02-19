var id = getUrlParams('id');
console.log(id);
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/article',
    data: {
        id:id
    },
    success: function (response) {
        console.log(response);
        var html = template('articleTpl', response.data);
        $('#articleBox').html(html);
        $('.article_con').html(response.data.content);
    }
})