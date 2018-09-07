$(function() {
  var classifyCont = '';
  
  function getClassifyList() {
    $.ajax({
      type: "GET",
      url: "http://t.api.twyxedu.com/api/show/course/classify/list",
      success: function (res) {
        if (res.status === 'succ') {
          res.data.array.forEach(function (item, index) {
            classifyCont += '<div class="classify-item" data-id="'+item.id+'">'+ item.name +'</div>'
          })

          $('.course-classify').empty().append(classifyCont)
          $('.course-classify .classify-item:eq(0)').addClass('active');
          getCourseGroup(res.data.array[0].id)
        }
      }
    });
  }

  function init() {
    getClassifyList();
    // $('.course-classify .classify-item').addClass('active');
  }

  init();
  

  function getCourseGroup(cId) {
    let _content = '';
    $.ajax({
      type: "GET",
      url: "http://t.api.twyxedu.com/api/show/course/group",
      data: { page: 1, pageSize: 200, classifyId: cId},
      success: function (res) {
        if (res.status === 'succ') {
          if (res.data.array.length > 0) {
            res.data.array.forEach(function (item, index) {
              var _time = parseInt(item.zc) > 0 ? '每学期' + item.zc + '周次' : item.zc;
              _time += ', 每次' + item.ksl +'课时，共'+ item.sc +'分钟';
              _viewDtail = item.imgUrl ? '<span class="viewDetail" data-url="' + item.imgUrl + '">查看详情</span>'  : ''
              if (index % 5 == 1) {
                _content += '<div class="item c-item" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">' +
                  '  <div class="names">' + item.name + '</div>' +
                  '  <div class="info">' +
                  '    <span>' + item.age + ' | ' + _time + '</span>' +
                  '    <span>' + item.intro + '</span>' + _viewDtail +
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
                  '    <span>' + item.intro + '</span>' + _viewDtail +
                  '  </div>' +
                  '</div>';
              }
            })
            $('.course-list').empty().append(_content)
          } else {
            $('.course-list').empty().append('<div class="no-course">暂无课程</div>')
          }
        }
      }
    });
  }

  $('.course-list').on('click', '.viewDetail', function () {
    $('.guzhu-info-more').addClass('open').find('.gi-content').empty().append('<img src="' + $(this).attr('data-url')+'">')
  })

  $('.guzhu-info-more').on('click', '#J_guzhuinfo_close', function () {
    $('.guzhu-info-more').removeClass('open')
  })

  $('.course-classify').on('click', '.classify-item', function() {
    let cId = $(this).data('id')
    $(this).addClass('active').siblings().removeClass('active');
    getCourseGroup(cId)
  })
})
