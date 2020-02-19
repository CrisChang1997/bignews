//发送ajax请求获取最新评论
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/latest_comment',
    success: function (re) {
        console.log(re);
        var lastCommentTpl = `
        {{each data}}
        <li>
        <span>{{$value.author.charAt(0)}}</span>
        <b><em>{{$value.author}}</em onunload="Time({{$value.date}})"> {{$imports.Time($value.date)}}个月前(08-14)说:</b>
        <strong>{{$value.intro}}</strong>
      </li>
      {{/each}}
        `;
        var html = template.render(lastCommentTpl, { data: re.data });
        $('#lastComment').html(html);

    }
});


//时间
function Time(time) {
    var now = +new Date();
    var inputTime = +new Date(time);
    var times = (inputTime - now) / 1000;
    var m = parseInt(times / 60 / 60 / 24 / 30);
    return m;

}