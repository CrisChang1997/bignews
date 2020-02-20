//发送ajax请求获取最新评论
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/latest_comment',
    success: function(re) {
        var lastCommentTpl = `
        {{each data}}
        <li>
        <span>{{$value.author.charAt(0)}}</span>
        <b><em>{{$value.author}}</em> {{$imports.Time($value.date+' '+$value.time)}}说:</b>
        <strong>{{$value.intro}}</strong>
      </li>
      {{/each}}
        `;
        var html = template.render(lastCommentTpl, { data: re.data });
        $('#lastComment').html(html);

    }
});


function Time(timestamp) {
    timestamp = new Date(timestamp);
    timestamp = timestamp.getTime();

    var mistiming = Math.round((Date.now() - timestamp) / 1000);
    var arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
    var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
    for (var i = 0; i < arrn.length; i++) {
        var inm = Math.floor(mistiming / arrn[i]);
        if (inm != 0) {
            return inm + arrr[i] + '前';
        }
    }
}