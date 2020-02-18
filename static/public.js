// 文章搜索功能
// alert('okk')
$('.search_form').on('click', '.search_btn', function () {
    var keys = $('.search_form').find('.search_txt').val();
    // console.log(keys)
    if (keys.trim().length != 0) {
        location.href = '/search.html?key=' + keys;
    }
})

// console.log(fn('key'))
function getUrlParams(name) {
    var params = location.search.substr(1).split('$');
    console.log(params);
    for (var i = 0; i < params.length; i++) {
        if (params[i].split('=')[0] == name) {
            return params[i].split('=')[1];
        }
    }
    return -1;
}

// 文章热门排行
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/rank',
    success: function (response) {
        console.log(response);
        var rankTpl = `
        {{each response}}
        {{if $index==0}}
        <li><span class="first">1</span><a href="article.html?id={{$value.id}}">{{$value.title}}</a></li>
        {{else if $index==1}}
        <li><span class="second">2</span><a href="article.html?id={{$value.id}}">{{$value.title}}</a></li>
        {{else if $index==2}}
        <li><span class="third">3</span><a href="article.html?id={{$value.id}}">{{$value.title}}</a></li>
        {{else}}
        <li><span>{{$index-0+1}}</span><a href="article.html?id={{$value.id}}">{{$value.title}}</a></li>
        {{/if}}
        {{/each}}
        `
        var html = template.render(rankTpl, { response: response.data });
        // console.log(html);
        $('#rankBox').html(html)
    }
})

