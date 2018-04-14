$(function() {
  var _content = ''
  $.ajax({
    type: "GET",
    url: "http://api.twyxedu.com/api/show/course/list",
    data: {page: 1, pageSize: 200},
    success: function (res) {
      if (res.status === 'succ') {
        res.data.array.forEach(function (item, index) {
          var _time = parseInt(item.zc) > 0 ? '每学期' + item.zc + '周次' : item.zc;
          _time += ', 每次' + item.ksl +'课时，共'+ item.sc +'分钟';
          if (index % 5 == 1) {
            _content += '<div class="item c-item" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">' +
              '  <div class="names">' + item.name + '</div>' +
              '  <div class="info">' +
              '    <span>' + item.age + ' | ' + _time + '</span>' +
              '    <span>' + item.intro + '</span>' +
              '  </div>' +
              '  <div class="thumb thumb1" style="background-image: url(' + item.coverUrl + ');">' +
              '    <div class="thumb-child" style="opacity: 1;"></div>' +
              '  </div>' +
              '</div>';
          } else {
            _content += '<div class="item c-item" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">' +
              '  <div class="thumb thumb1" style="background-image: url(' + item.coverUrl + '">' +
              '    <div class="thumb-child" style="opacity: 1;"></div>' +
              '  </div>' +
              '  <div class="names">' + item.name + '</div>' +
              '  <div class="info">' +
              '    <span>' + item.age + ' | ' + _time + '</span>' +
              '    <span>' + item.intro + '</span>' +
              '  </div>' +
              '</div>';
          }
        })
        $('.course-list').empty().append(_content)
      }
    }
  });
})
