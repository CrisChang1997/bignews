// 焦点关注模块
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/attention',
    success: function(response) {
        console.log(response);

        var recommendTpl = `
        {{each data}}
        <li><a href="article.html?id={{$value.id}}">{{$value.intro}}</a></li>
        {{/each}}`
        var html = template.render(recommendTpl, { data: response.data })
        console.log(html);
        $('#recommendBox').html(html);
    }
})