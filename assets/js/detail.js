$(function () {
  var id = null;
  var category = null

  var _querystring = parseQueryString(window.location.href)

  console.log(_querystring)

  if (_querystring.c === 'news') {
    getNewsDetail(_querystring.id)
  } else if (_querystring.c === 'growup') {
    getGrowupDetail(_querystring.id)
  } else if (_querystring.c === 'open'){
    getOpenDetail(_querystring.id)
  }


  function getNewsDetail(id) {
    $.ajax({
      type: "GET",
      url: "http://api.twyxedu.com/api/news/detail",
      data: {
        newsId: id
      },
      success: function (res) {
        if (res.status === 'succ') {
          $('.dw-title').text(res.data.name)
          $('.dw-time').text(res.data.createTime)
          document.querySelector('.dw-cont').innerHTML = res.data.content
          if (res.data.videoUrl) {
            document.querySelector('.video-box').innerHTML = res.data.videoUrl
            document.querySelector('.video-box iframe').width = '100%'
            document.querySelector('.video-box iframe').height = 'auto'
          }
        }
      }
    })
  }

  function getGrowupDetail(id) {
    $.ajax({
      type: "GET",
      url: "http://api.twyxedu.com/api/activity/detail",
      data: {
        activityId: id
      },
      success: function (res) {
        if (res.status === 'succ') {
          $('.dw-title').text(res.data.name)
          $('.dw-time').text(res.data.time)
          document.querySelector('.dw-cont').innerHTML = res.data.content
          if (res.data.videoUrl) {
            document.querySelector('.video-box').innerHTML = res.data.videoUrl
          }
        }
      }
    })
  }

  function getOpenDetail(id) {
    $.ajax({
      type: "GET",
      url: "http://api.twyxedu.com/api/show/clazz/detail",
      data: {
        showId: id
      },
      success: function (res) {
        if (res.status === 'succ') {
          $('.dw-title').text(res.data.name)
          $('.dw-time').text(res.data.time)
          document.querySelector('.dw-cont').innerHTML = res.data.content
          if (res.data.videoUrl) {
            document.querySelector('.video-box').innerHTML = res.data.videoUrl
          }
        }
      }
    })
  }

  function parseQueryString(url) {
    var arr = []
    var res = {}
    url = url.split('#')[0]
    arr = url.split('?')
    arr.shift()
    var queryStr = arr.join('?')
    if (queryStr.trim().length === 0) {
      return res
    }

    arr = queryStr.split('&')
    for (var i = 0; i < arr.length; i++) {
      var itemArr = arr[i].split('=')
      var name = itemArr.shift()
      var value = itemArr.join('=')
      res[name] = value
    }
    return res
  }
})