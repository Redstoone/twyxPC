$(function() {
  // var special =  [
  //   {
  //     id: 1,
  //     title: '声乐歌舞',
  //     tips: '4-8周岁儿童',
  //     class_time: '150分钟/16周次/一学期每次150分钟',
  //     point: ' 发挥儿童歌舞表演天性，全面塑造舞台艺术表现力',
  //     bgc: 'c1'
  //   }, {
  //     id: 2,
  //     title: '影视表演',
  //     tips: '4-8周岁儿童',
  //     class_time: '每学期16周次，每次150分钟',
  //     point: ' 学在教室，用在生活，培养观察和理解力，提高表现能力与沟通能力',
  //     bgc: 'c2'
  //   }, {
  //     id: 3,
  //     title: '民族舞',
  //     tips: '4-8周岁儿童',
  //     class_time: '每学期16周次，每次150分钟',
  //     point: '学习民族舞精髓，体验民族舞风情 ',
  //     bgc: 'c3'
  //   }, {
  //     id: 4,
  //     title: '涂鸦创想课',
  //     tips: '4-8周岁儿童',
  //     class_time: '滚动开班，每周一次，每次90分钟',
  //     point: '培养美术兴趣，玩与学结合，发掘孩子艺术天赋 ',
  //     bgc: 'c4'
  //   }, {
  //     id: 5,
  //     title: '素描课',
  //     tips: '9岁以上零基础孩子',
  //     class_time: '滚动开班，每周一次，一次150分钟 ',
  //     point: '感受艺术的美感，培养孩子的观察力、造型能力与表现能力 ',
  //     bgc: 'c5'
  //   }, {
  //     id: 6,
  //     title: '少儿合唱团',
  //     tips: '4-8周岁儿童',
  //     class_time: '每学期16周次，每次150分钟',
  //     point: '开发儿童智力，培养专注力与团队合作能力',
  //     bgc: 'c6'
  //   }, {
  //     id: 7,
  //     title: '钢琴课',
  //     tips: '4岁以上儿童',
  //     class_time: '一对一教学，每周一次，每次45分钟',
  //     point: '专业院校师资，感受古典音乐的魅力，打造孩子的贵族气质 ',
  //     bgc: 'c7'
  //   }
  // ];

  var _content = ''
  $.ajax({
    type: "GET",
    url: "http://api.twyxedu.com/api/show/course/list",
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
        _content += '<div class="item c-item c-item-more" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">' +
          '<p class="waiting">等待开设</p>'+
          '<p class="course-more">播音主持班</p>'+
          '<p class="course-more">芭蕾舞班</p>'+
          '<p class="course-more">拉丁舞班</p>'+
          '<p class="course-more">爵士舞班</p>'+
          '</div>';
        $('.course-list').empty().append(_content)
      }
    }
  });
})
