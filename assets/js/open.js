$(function () {
  var page = 2
  var pageSize = 10
  var dataList = ''
  var noData = false
  $.ajax({
    type: "GET",
    url: "http://api.twyxedu.com/api/show/clazz/list",
    data: { page: 1, pageSize: pageSize },
    success: function (res) {
      if (res.status === 'succ') {
        res.data.array.forEach((item, index) => {
          var _remark = item.remark ? item.remark : ''
          if (item.type == '2') {
            dataList += '<li>' +
              '  <a target="_blank" class="img-box" href="' + item.link + '" style="background-image:url(' + item.imgUrl + ')"></a>' +
              '  <div class="new-content">' +
              '    <h2>' +
              '      <a target="_blank" href="' + item.link + '">' + item.name + '</a>' +
              '    </h2>' +
              '    <p class="remark"></p>' +
              '    <p class="">' +
              // '      <span>' + item.createTime + '</span>' +
              '      <a target="_blank" href="' + item.link + '" class="detail-link">查看</a>' +
              '    </p>' +
              '  </div>' +
              '</li>';
          } else {
            dataList += '<li>' +
              '  <a target="_blank" class="img-box" href="./detail.html?c=open&id=' + item.id + '" style="background-image:url(' + item.imgUrl + ')"></a>' +
              '  <div class="new-content">' +
              '    <h2>' +
              '      <a target="_blank" href="./detail.html?c=open&id=' + item.id + '">' + item.name + '</a>' +
              '    </h2>' +
              '    <p class="remark">' + _remark + '</p>' +
              '    <p class="">' +
              // '      <span>' + item.createTime + '</span>' +
              '      <a target="_blank" href="./detail.html?c=open&id=' + item.id + '" class="detail-link">查看</a>' +
              '    </p>' +
              '  </div>' +
              '</li>';
          }
        })

        if (dataList) {
          $('.news-list ul').append(dataList)
        } else {
          noData = true
          $('.news-list ul').append('<li class="no-data">正在努力建设中</li>')
        }
      }
    }
  });

  $(document).endlessScroll({
    bottomPixels: 300,
    fireDelay: 10,
    callback: function (p) {
      var dataList = ''
      if (!noData) {
        $.ajax({
          type: "GET",
          url: "http://api.twyxedu.com/api/show/clazz/list",
          data: { page: page++, pageSize: pageSize },
          success: function (res) {
            if (res.status === 'succ') {
              res.data.array.forEach((item, index) => {
                var _remark = item.remark ? item.remark : ''
                if (item.type == '2') {
                  dataList += '<li>' +
                    '  <a target="_blank" class="img-box" href="' + item.link + '" style="background-image:url(' + item.imgUrl + ')"></a>' +
                    '  <div class="new-content">' +
                    '    <h2>' +
                    '      <a target="_blank" href="' + item.link + '">' + item.name + '</a>' +
                    '    </h2>' +
                    '    <p class="remark"></p>' +
                    '    <p class="">' +
                    // '      <span>' + item.createTime + '</span>' +
                    '      <a target="_blank" href="' + item.link + '" class="detail-link">查看</a>' +
                    '    </p>' +
                    '  </div>' +
                    '</li>';
                } else {
                  dataList += '<li>' +
                    '  <a target="_blank" class="img-box" href="./detail.html?c=open&id=' + item.id + '" style="background-image:url(' + item.imgUrl + ')"></a>' +
                    '  <div class="new-content">' +
                    '    <h2>' +
                    '      <a target="_blank" href="./detail.html?c=open&id=' + item.id + '">' + item.name + '</a>' +
                    '    </h2>' +
                    '    <p class="remark">' + _remark + '</p>' +
                    '    <p class="">' +
                    // '      <span>' + item.createTime + '</span>' +
                    '      <a target="_blank" href="./detail.html?c=open&id=' + item.id + '" class="detail-link">查看</a>' +
                    '    </p>' +
                    '  </div>' +
                    '</li>';
                }
              })

              if (res.data.array.length > 0) {
                $('.news-list ul').append(dataList)
              } else if (noData == false) {
                noData = true
                if ($('.news-list ul li').length == 0) {
                  $('.news-list ul').append('<li class="no-data">正在努力建设中</li>')
                }
              }
            }
          }
        });
      }
    }
  })
})