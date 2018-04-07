$(function () {
  var dataList = ''
  $.ajax({
    type: "GET",
    url: "http://api.twyxedu.com/api/news/list",
    success: function (res) {
      if (res.status === 'succ') {
        res.data.array.forEach((item, index) => {
          if (item.type == '2') {
            var _remark = item.remarrk ? item.remarrk : ''
            dataList += '<li>' +
              '  <a target="_blank" class="img-box" href="' + item.link + '" style="background-image:url(' + item.imgUrl + ')"></a>' +
              '  <div class="new-content">' +
              '    <h2>' +
              '      <a target="_blank" href="' + item.link + '">' + item.name + '</a>' +
              '    </h2>' +
              '    <p class="remark">' + _remark + '</p>' +
              '    <p class="">' +
              '      <span>' + item.createTime + '</span>' +
              '      <a target="_blank" href="' + item.link + '" class="detail-link">查看</a>' +
              '    </p>' +
              '  </div>' +
              '</li>';
          } else {
            dataList += '<li>' +
              '  <a target="_blank" class="img-box" href="./detail.html?c=news&id=' + item.id + '" style="background-image:url(' + item.imgUrl + ')"></a>' +
              '  <div class="new-content">' +
              '    <h2>' +
              '      <a target="_blank" href="./detail.html?c=news&id=' + item.id + '">' + item.name + '</a>' +
              '    </h2>' +
              '    <p class="remark">' + _remark + '</p>' +
              '    <p class="">' +
              '      <span>' + item.createTime + '</span>' +
              '      <a target="_blank" href="./detail.html?c=news&id=' + item.id + '" class="detail-link">查看</a>' +
              '    </p>' +
              '  </div>' +
              '</li>';
          }
        })

        if (dataList) {
          $('.news-list ul').empty().append(dataList)
        } else {
          $('.news-list ul').empty().append('<li class="no-data">没有数据</li>')
        }
      }
    }
  });
})