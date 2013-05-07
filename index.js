(function(iFlag){
	iFlag = document.body.offsetWidth <= 640 ? 0 : 1;
	var doc = document,
		nav_main = doc.getElementById("nav-main"),
		nav_search = doc.getElementById("nav-search"),
		article = doc.getElementById("article"),
		more_btn = doc.getElementById("article-more"),
		pad_container = doc.getElementById("pad-container");

	var controller = {
		initialize : function(){
			if(iFlag){
				var entityId = 373626563;
				// document.domain = "sohu.com";
				if(entityId){
					document.getElementById('SOHUCS').setAttribute('sid',entityId);                
					var _config = {
				        jumpUrl: 'http://pinglun.sohu.com/s[topicId].html',
				        varName: entityId, 
				        customSohu: true,
				        listStyle: 'indent',
				        listModule: 'scs.listIndent',
				        listType: 'hot',
				        pageSize: 10
				    }
				}
				(function(){
				  var appid = 'cyqemw6s1',
				      conf = 'prod_0266e33d3f546cb5436a10798e657d97';
				  var doc = document,
				  s = doc.createElement('script'),
				  h = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
				  s.type = 'text/javascript';
				  s.charset = 'utf-8';
				  s.src =  'http://assets.changyan.sohu.com/upload/changyan.js?conf='+ conf +'&appid=' + appid;
				  h.insertBefore(s,h.firstChild);
				  window.SCS_NO_IFRAME = true;
				})()
			}
			else{
				window.changyan_topic_id = "373626563";
				window.changyan_has_index_tab = false;
				window.changyan_default_index = "hot";
				window.changyan_page_limit = "10";
				window.changyan_textarea_first = true;
				window.changyan_has_show_more = false;
				window.changyan_has_to_top = false;
				window.changyan_textarea_tip = "我来说两句";
				window.changyan_posted_tip = "发表成功，感谢您的参与";
				window.changyan_do_after_post = "refresh";
				window.changyan_has_img_upload = true;
				window.changyan_clt_expires = 3000;
				(function() {
				    var cy = document.createElement('script'); cy.type = 'text/javascript'; cy.async = true;
				    cy.src = 'http://changyan.itc.cn/static/wl/cmt/h5.min.js';
				    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(cy);
				})();
			}
		},
		toggleNavMain : function(){
			nav_search.className = "nav-search";
			this.toggleMethod(nav_main, "nav-main-now", "nav-main");
		},
		toggleNavSearch : function(){
			nav_main.className = "nav-main";
			this.toggleMethod(nav_search, "nav-search-now", "nav-search");
		},
		toggleMethod : function(obj, str, strr){
			if(obj.className.indexOf(str) === -1){
				obj.className += " " + str;
			}
			else{
				obj.className = strr;
			}
		},
		hideNavPanel : function(e){
			var curEl = e.srcElement || e.target;
			var inDom = 0;
			var elParent = curEl;
			while(elParent){
				// console.log(elParent.className);
				if(elParent.className == "nav"){
					inDom = 0;
					break;
				}
				else{
					inDom = 1;
					elParent = elParent.parentNode;
				}
			}
			if(inDom){
			    nav_main.className = "nav-main";
			    nav_search.className = "nav-search";
			}
		},
		getMoreContent : function(){
			// var request = new XMLHttpRequest();
			// request.open("POST","");
			// request.onreadyStateChange = function(){
			// 	if(request.readyState === 4 && request.status === 200){
			// 		console.log(request.responseText);
			// 	}
			// };
			// request.send(null);
			var more_content = '<div class="article-pic"><a href="javascript:;"><img src="transparent.gif" padsrc="http://photocdn.sohu.com/20130423/Img373632456.jpg" phonesrc="http://photocdn.sohu.com/20130423/Img373632456.jpg" alt="舒正山指着新房说：“我将乔迁宴席的猪肉分给村民吃，竟被大家误传是灾后大鱼大肉。”" onload="checkImg(this);"><i></i></a></div><p>人民网海南视窗宝兴4月22日电4月22日下午，本网特派记者在前往雅安地震重灾区宝兴县城途中，宝兴县灵关镇中坝村近百名村民集体向记者反映情况，希望帮助澄清媒体近日一则“中坝村村民地震期间大吃大喝”的不实报道。</p><div class="article-pic"><a href="javascript:;"><img src="transparent.gif" padsrc="http://photocdn.sohu.com/20130422/Img373538150.jpg" phonesrc="http://photocdn.sohu.com/20130422/Img373538150.jpg" alt="灵关镇通往宝兴县城道路再次中断 正全力打通" onload="checkImg(this);"></a></div><p>据中坝村村民黄洪川反映，22日上午，他在灵关镇的众多朋友跟他说，国内某卫视以及微博上都播发了一则“中坝村村民地震期间大鱼大肉像过节”的消息。</p><p>“我听到后十分气愤，事实根本不是如此！”黄洪川说，地震发生当天，村里正好有一户人家在办乔迁新居的宴席，受灾后，那户人家将准备用作宴席的猪肉分给本村村民，帮助村民自救。微博以及新闻报道作者未经核实，只看到家家户户在吃肉，就播发了不实消息，颠倒了中坝村全村村民积极灾后自救的根本事实。</p><p>随后，记者来到办乔迁新居宴席、分发猪肉给村民的舒正山家。舒正山跟记者说，他家的新房刚刚建好，按照村里习俗，乔迁新居要宴请亲朋好友。于是，4月20日凌晨4点多，村里有40多号人在他家门前杀猪准备宴席。</p><p>8点02分，刚刚杀完5头猪，正准备杀第6头猪时，地震突然来袭，围聚在他家的村民纷纷回家救灾。由于舒正山家是新房，相对受灾不太严重，他在地震当天下午就将已经杀完的5头猪煮熟，切块分发给周边村民。</p>';

			more_btn.style.display = "none";
			var ct = document.createElement('div');
			ct.id = "more-content";
			ct.innerHTML = more_content;
			article.appendChild(ct);
			controller.bindImages(doc.getElementById("more-content").getElementsByTagName("img"));
		},
		imageClick : function(self){
			if(iFlag){
				pad_container.style.display = "block";
				doc.getElementById("fullImg").src = self.src;
			}
			else{
				var node = self.parentNode;
				if(node.className === "fullImg")
					node.className = "";
				else
					node.className = "fullImg"; 
			}
		},
		hideMask : function(){
			pad_container.style.display = "none";
		},
		bindImages : function(imgs){
			i = imgs.length;
			while(i--){
				imgs[i].onclick = function(){
					controller.imageClick(this);
				};
			}
		}
	};

	var bindEvent = function(){
		doc.getElementById("nav-main-btn").onclick = function(){
			controller.toggleNavMain()
		};
		doc.getElementById("nav-search-btn").onclick = function(){
			controller.toggleNavSearch()
		};
		doc.body.onclick = function(e){
			controller.hideNavPanel(e);
		};
		more_btn.onclick = function(){
			controller.getMoreContent();
		};
		pad_container.onclick = function(){
			controller.hideMask();
		};
		pad_container.ontouchstart = function(){
			return false;
		};
		pad_container.ontouchmove = function(){
			return false;
		};
		pad_container.ontouchend = function(){
			return false;
		};
		controller.bindImages(article.getElementsByTagName("img"));
	};

	controller.initialize();
	bindEvent();
})(iFlag)