$(function () {
  var teamlist = [
    {
      id: 1,
      name: '徐明德',
      url: 'teachers/1.png',
      position: ['宁波天唯艺星教育名誉校长', '上海戏剧学院教授', '上海市美术协会会员'],
      desc: ['宁波天唯艺星教育名誉校长，上海戏剧学院教授，上海市美术家协会会员。 徐明德毕业于中国美术学院，执教于上海戏剧学院舞台美术系。三十多年来徐明德教授绘画、色彩以及与舞台美术相关的多门影视、表演课程，为上戏艺术教育培养了众多著名的艺术家。 徐明德还多次参加国家及上海市的美术展览、出版的作品集有《中国美术家丛书——徐明德画集》、《上海美术家画库——徐明德》，《徐明德画集》，连续三年徐明德德油画创作入选中国美术家协会举办的“风景、风情全国油画展”，油画作品《师生、岁月》获中国美术家协会“时代精神——全国油画肖像画”优秀作品奖。']
    },
    {
      id: 3,
      name: '汪平',
      url: 'teachers/3.png',
      position: ['宁波天唯艺星教育常驻专家顾问'],
      desc: ['宁波天唯艺星教育常驻专家顾问，时任宁波市鄞州广播电视台音乐监制。集作曲、演唱、主持、书法艺术与一身。2001年成功举办“汪平歌曲作品音乐会”， 2009年由中国文联出版社出版发行《心之声——汪平 30正秋歌曲精华录》，近四十年来谱歌成曲近千首，编辑制作的广播文艺及不少原创歌曲作品在全国、省市级发表获奖。代表作品有广播剧《它山堰的儿女》、二十集电视专题片《话说鄞州》(主题曲)；歌曲作品有《美丽的东钱湖》、《春天的祝福》、《欢乐马灯谣》等。', '汪平现为中国音乐家协会会员、浙江省音协会员、宁波市音协常务理事、宁波市鄞州区音乐家协会名誉主席；国家一级美术师、中国硬笔书法家协会会员、日本东京画院院士、宁波市硬笔书法协会常务理事、宁波市书法家协会会员、宁波鄞州书画院兼职画师。2017年荣获CCTV第十七届中国世纪大采风 “中国当代德艺双馨艺术家”称号。']
    },
    {
      id: 2,
      name: '严建红',
      url: 'teachers/2.png',
      position: ['宁波天唯艺星教育董事长'],
      desc: ['宁波天唯艺星教育董事长。28年教龄，教育管理本科学历。曾担任中心园长、省一级幼儿园园长20年。曾就读于清华大学卓越领导班、宁波市第一批骨干园长班等，荣获省、市、区妇女代表，区级先进教师等荣誉称号，多篇论文及课题在区、市、省、国家级发表及立项。']
    }, {
      id: 4,
      name: '姚皓',
      url: 'teachers/4.png',
      position: ['宁波天唯艺星教育总部培训学校负责人'],
      desc: ['宁波天唯艺星教育总部培训学校负责人，青年钢琴演奏家。师从浙江钢琴专业委员会副会长、浙江音乐学院钢琴系教研室主任徐洁副教授。本科毕业于浙江音乐学院钢琴系，后获辛辛那提大学音乐学院、纽约大学音乐学院等五所美国顶尖音乐院校硕士录取资格。2017年6月获录取资格赴纽约参加国际键盘学院与音乐节(IKIF)，师从意大利钢琴演奏家Massimiliano Ferrati与美国著名钢琴演奏家、教育家，曼尼斯音乐学院钢琴系教授Jerome Rose.  曾多次在国内外钢琴比赛中获奖，主要包括：第十九届香港•亚洲钢琴公开赛肖邦玛祖卡、圆舞曲组一等奖；', '第十九届香港•亚洲钢琴公开赛斯卡拉蒂组第一名；第四届浙江省大学生钢琴大赛 莫扎特奏鸣曲组 第一名；', '第五届浙江省大学生钢琴大赛斯卡拉蒂组第一名；第五届中国音乐国际比赛（钢琴专业组）二等奖；第十八届香港•亚洲钢琴公开赛莫扎特奏鸣曲组第一名；第十八届香港•亚洲钢琴公开赛中国作品高级组二等奖。']
    }, {
      id: 5,
      name: '王舵',
      url: 'teachers/5.png',
      position: ['宁波天唯艺星教育教学主任'],
      desc: ['宁波天唯艺星教育教学主任，播音主持、影视表演主课教师。本科毕业于中央戏剧学院表演系戏剧影视专业，获学士学位。在校期间曾主演《雷雨》、《北京人》，《桃花扇》，《三姐妹》，《朱莉小姐》等多部中外经典戏剧作品。2010年跟随中国儿童艺术剧院新晋青年导演毛尔男主演音乐剧《屋里的大象》，《杀闪桃》，《屋里的大象》在第五届北京国际青年戏剧节中被评为优秀作品。2012年加入孟京辉戏剧工作室参演音乐剧《初恋》，在全国近二十个城市进行巡演；2013年参演中国国家话剧院及腾讯公司联合出品的大型儿童音乐剧《洛克王国大冒险》。2014年至今一直从事艺术教育工作，在艺考机构、少儿培训机构均有丰富的教学经验。']
    }, {
      id: 6,
      name: '陆倩雯',
      url: 'teachers/6.png',
      position: ['宁波天唯艺星教育舞蹈教师'],
      desc: ['宁波天唯艺星教育舞蹈教师。本科毕业于上饶师范学院舞蹈教育专业，获学士学位。本科毕业后一直致力于幼儿教育，同时在宁波市青少年宫从事了七年的舞蹈教学工作，在幼儿艺术教育方面拥有十分丰富的教学经验。从2011年7月毕业至今代表市、区参加数次排舞大赛，并获得多次一、二等奖。2015年创编排练的幼儿群舞《猴年闹新春》参加宁波电视台第一届儿童春晚，荣获十佳最受欢迎奖的第一名。2016年5月排练的55人幼儿大型群舞《向快乐出发》参加宁波电视台拍摄。']
    }, {
      id: 7,
      name: '周臻',
      url: 'teachers/7.png',
      position: ['宁波天唯艺星教育声乐教师'],
      desc: ['宁波天唯艺星教育声乐教师。本科毕业于杭州师范大学音乐学院声乐表演专业，师从于宁波市歌舞团宫成盛老师。本科毕业后一直从事于少儿的艺术教育工作，对于少儿的心理及教育教学方法有着独特的教学经验。后又到上海音乐学院进修，师从于上海音乐学院副教授石林老师至今。2011至2014年任教于宁波华茂外国语学校，担任声乐教师，培养了众多在声乐方面具有天赋的学生，在2012年浙江省的少儿歌手大赛中取得了金、银、铜奖的好成绩。本人也曾多次在市级及省级比赛中获奖，主要包括：2009年杭州市大学生声乐比赛美声组第一名；2011年浙江省西湖杯青年歌手大赛第一名；2012年宁波青年歌手大奖赛银奖。个人教学态度严谨，责任心强。']
    }, {
      id: 8,
      name: '黄纯纯',
      url: 'teachers/8.png',
      position: ['宁波天唯艺星教育舞蹈教师'],
      desc: ['宁波天唯艺星教育舞蹈教师。毕业于06届浙江省艺术学院舞蹈编导专业。曾多次参加浙江省音舞节、浙江省排舞比赛并取得优异成绩，主要包括：2010年民间原创舞蹈大赛《画船》获一等奖； 2011年评为首届宁波文艺之星；2012年在浙江省排舞大赛中，编排的舞蹈作品《妈咪恰恰》获区一等奖，并获优秀辅导员称号；2013年被评为“千名群众文艺骨干”荣誉称号。毕业至今一直从事幼儿教育和舞蹈教育工作，曾获得爵士舞、芭蕾舞、中国舞优秀教师称号，拥有丰富的少儿艺术教育经验。']
    }, {
      id: 9,
      name: '罗明',
      url: 'teachers/9.png',
      position: ['宁波天唯艺星教育声乐教师'],
      desc: ['宁波天唯艺星教育声乐教师，中国共产党员。本科毕业于淮北师范大学音乐表演专业，获得了两次国家励志奖学金、校三等奖学金，校级优秀毕业生、三好学生等荣誉。在校期间曾担任大学生艺术团声乐组组长、光影社团技术部副部长。擅长作曲与声乐表演，曾为上海鹊桥房产公司创作公司之歌。', '2014年在 “三下乡暑期实践活动”中带领支部成员到安徽宿州市泗县学习物质文化遗产——泗州戏，并被学校授予“先进集体”、“优秀团队”称号。2016年在淮北文化馆主办的五场文化惠民下基层的文艺巡演中担任主持和歌手。2017年参加安徽煤矿职业健康文艺专场演出。']
    }, {
      id: 10,
      name: '董姬麟',
      url: 'teachers/10.png',
      position: ['宁波天唯艺星教育合唱指挥教师、钢琴教师'],
      desc: ['宁波天唯艺星教育合唱指挥教师、钢琴教师。2009年起师从旅德青年钢琴演奏家郑洁博士，2015年考入华东师范大学音乐系，钢琴师从张薇副教授，声乐师从高凌媛老师和万丹老师。11岁通过钢琴十级考试，14岁通过长笛十级考试，16岁举办了钢琴独奏音乐会。 2014年获得“李斯特纪念奖”浙江赛区中国作品组一等奖和柴可夫斯基组一等奖。长江杯钢琴大赛浙江赛区第二名；2016年获本科生国家奖学金，同年获得华东师范大学长江钢琴奖学金比赛“校园钢琴家奖”和“全能二等奖”，并赴美国中央阿肯色大学交流，师从美国著名钢琴家Neil Rutman教授；2017年获本科生特等奖学金，同年6月获小金钟奖钢琴比赛上海赛区三等奖、12月获得音乐系协奏曲比赛钢琴组第三名。曾多次在上海音乐厅、上海东方艺术中心、宁波音乐厅等音乐场所演出。', '在热爱音乐的同时，热爱文学。2014年获得浙江省文学之星征文比赛三等奖，并有多篇论文发表在《北方音乐》、《当代音乐》等著名音乐类杂志刊物上，多篇散文及小说发表在《参花》、《名家名作》等文学类刊物上。']
    }, {
      id: 11,
      name: '陈艳',
      url: 'teachers/11.png',
      position: ['宁波天唯艺星教育学校内部管理'],
      desc: ['毕业于宁波邵逸夫艺术师范学校，学前教育本科学历。21年教龄，拥有20年教育管理经验。主要负责学校内部管理工作。']
    }, {
      id: 12,
      name: '俞磊',
      url: 'teachers/12.png',
      position: ['宁波天唯艺星教育学校工程、拓展'],
      desc: ['本科毕业于澳门科技大学会计专业、硕士毕业于美国Dallas baptist University工商管理专业。主要负责学校工程、拓展等工作。']
    }, {
      id: 13,
      name: '吴悦',
      url: 'teachers/13.png',
      position: ['宁波天唯艺星教育宣传、活动策划、拓展'],
      desc: ['本科毕业于杭州师范大学舞蹈专系。主要负责学校宣传、活动策划、拓展等工作。']
    }, {
      id: 14,
      name: '吴建峰',
      url: 'teachers/14.png',
      position: ['宁波天唯艺星教育网络管理'],
      desc: ['就读宁波大学法学专业，擅长网络编程。主要负责学校网络管理等工作。']
    }
  ];

  var _content = ''

  $.ajax({
    type: "GET",
    url: "http://t.api.twyxedu.com/api/show/teacher/list",
    success: function (res) {
      // console.log(res.data.array)
      let teamlist = res.data.array

      teamlist.forEach(function (item, index) {
        _content += '<div class="item c-item" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">' +
          '  <div class="thumb thumb1" style="background-image: url(' + item.pcimgUrl + ');">' +
          '    <div class="thumb-child" style="opacity: 1;"></div>' +
          '  </div>' +
          '  <div class="names">' + item.name + '</div>' +
          '  <div class="info">' +
          '    <span>' + item.job.split(',')[0] + '</span>' +
          '  </div>' +
          '</div>';
        })
        $('.img-list').append(_content)

        $('.c-item').on('click', function () {
          var item = teamlist[$(this).index()]

          var _sogo = '<div class="sogo-wrap">'
          item.job.split(',').forEach(function (item, index) {
            _sogo += '<p class="sogo-tip">' + item + '</p>';
          })

          var _member = '<div class="gi-content">' +
            '<div class="guzhu-thumb" style="background-image: url(' + item.pcimgUrl + ');"></div>' +
            '  <h2>' + item.name + '</h2>' + _sogo + '</div>' +
            '  <p>' + item.intro + '</p>' +
            '</div>' +
            '<div class="gi-close">' +
            '  <i id="J_guzhuinfo_close" class="iconfont icon-guanbi"></i>' +
            '</div>';

          $('.guzhu-info-more').addClass('open').empty().append(_member)
        })
    }
  })

  // teamlist.forEach(function(item, index) {
  //   _content += '<div class="item c-item" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">' +
  //     '  <div class="thumb thumb1" style="background-image: url(./assets/img/' + item.url +');">' +
  //     '    <div class="thumb-child" style="opacity: 1;"></div>' +
  //     '  </div>' +
  //     '  <div class="names">' + item.name + '</div>' +
  //     '  <div class="info">' +
  //     '    <span>' + item.position[0] + '</span>' +
  //     '  </div>' +
  //     '</div>';
  // })
  // $('.img-list').append(_content)

  // $('.c-item').on('click', function() {
  //   var item = teamlist[$(this).index()]
    
  //   var _sogo = '<div class="sogo-wrap">'
  //   item.position.forEach(function(item, index) {
  //     _sogo += '<p class="sogo-tip">'+item+'</p>';
  //   })

  //   var _member = '<div class="gi-content">'+
  //     '<div class="guzhu-thumb" style="background-image: url(./assets/img/' + item.url +');"></div>'+
  //     '  <h2>' + item.name + '</h2>' + _sogo + '</div>' +
  //     '  <p>' + item.desc +'</p>' +
  //     '</div>' +
  //     '<div class="gi-close">' +
  //     '  <i id="J_guzhuinfo_close" class="iconfont icon-guanbi"></i>' +
  //     '</div>';
    
  //   $('.guzhu-info-more').addClass('open').empty().append(_member)
  // })

  $('.guzhu-info-more').on('click', '#J_guzhuinfo_close', function() {
    $('.guzhu-info-more').removeClass('open')
  })
})