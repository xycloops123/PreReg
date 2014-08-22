
	;(function($, window, document, undefined) {
		var pluginName = 'liteBox',
			defaults = {
				revealSpeed: 400,
				background: 'rgba(0,0,0,.8)',
				overlayClose: true,
				escKey: true,
				navKey: true,
				callbackInit: function() {},
				callbackBeforeOpen: function() {},
				callbackAfterOpen: function() {},
				callbackBeforeClose: function() {},
				callbackAfterClose: function() {},
				callbackError: function() {},
				callbackPrev: function() {},
				callbackNext: function() {},
				errorMessage: 'Error loading content.',
				title:' ',
				title1:' '
			};

		function liteBox(element, options) {
			this.element = element;
			this.$element = $(this.element);

			this.options = $.extend({}, defaults, options);

			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		function winHeight() { return window.innerHeight ? window.innerHeight : $(window).height(); }

		function preloadImageArray(images) {
			$(images).each(function () {
				var image = new Image(); 

				image.src = this;

				if (image.width > 0)
					$('<img />').attr('src', this).addClass('litebox-preload').appendTo('body').hide();
			});
		}


		liteBox.prototype = {
			init: function() {
				// Variables
					var	$this = this;
					//alert("panelNo:"+this.$element.attr('panelNo'));
					//alert("videoNo:"+this.$element.attr('videoNo'));
				// Element click
					this.$element.on('click', function(e) {
						e.preventDefault();
						$this.openLitebox(e);
						
					});

				// Interaction
					//keyEsc = 27,
					keyLeft = 37,
					keyRight = 39;

					$('body').off('keyup').on('keyup', function(e) {
						//if ($this.options.escKey && e.keyCode == keyEsc)
							//$this.closeLitebox();

						//if ($this.options.navKey && e.keyCode == keyLeft)
							//$('.litebox-prev').trigger('click');

						//if ($this.options.navKey && e.keyCode == keyRight)
							//$('.litebox-next').trigger('click');
					});

				// Callback
					this.options.callbackInit.call(this);
			},

			openLitebox: function(e) {
				// Variables
				e.preventDefault();
				
				var $this;
				
				var pno=this.$element.attr('panelNo');
				var mno=this.$element.attr('mission');
				//alert(mno);
				if(mno>1 && mno!=9)
				{	
					var prevmno=mno-1;
					var idpm="panel"+pno+"mission"+prevmno;
					var str=document.getElementById(idpm).src;
					var check=str.indexOf("star_02.png");
					//alert(check);
					if((check != -1) && (mno!=1))
					{
						/*
						var strdis="1";

						for (i=2; i <= prevmno; i++) { 
						    if(i==prevmno){
						    strdis=strdis+" and "+i;
						    }else{
						    strdis=strdis+", "+i;
						    }
						}
						*/
						//alert("Complete the previous mission "+strdis+" first");
						alert("Missions must be completed in order.  Please re-select.");
					}else{
						$this = this;
					}
				}else{
					$this=this;
				}
				
				if(mno==9)
				{
					$this=this;
				}
				
				//$this=this;	
		

				// Before callback
					this.options.callbackBeforeOpen.call(this);
					if(this.$element.attr('type')== "video")
					{
						//alert("hello mission litebox:"+this.$element.attr('mission'));
						makeRequest(this.$element.attr('panelNo'),'start',this.$element.attr('videoNo'),this.$element.attr('mission'));
						$this.options.title=this.$element.attr('title');
						$this.options.title1=this.$element.attr('text');
					}
					
				// Build
					$this.buildLitebox();

				// Populate
					var	link = this.$element;
					$this.populateLitebox(link);

				// Interactions
					if ($this.options.overlayClose)
						$litebox.on('click', function(e) {
							if (e.target === this || $(e.target).hasClass('litebox-container') || $(e.target).hasClass('litebox-error'))
								$this.closeLitebox();
						});

					$close.on('click', function(){
						$this.closeLitebox();
					});

				// Groups
					if (this.$element.attr('data-litebox-group')) {
						var	$this = this,
							groupName = this.$element.attr('data-litebox-group'),
							group = $('[data-litebox-group="' + this.$element.attr('data-litebox-group') + '"]');

						var imageArray = [];

						$('[data-litebox-group="' + groupName + '"]').each(function() {
							var src = $(this).attr('href');

							imageArray.push(src);
						});
						if (this.$element.attr('type')=='map')
						{
							initialize();
						}
						
						preloadImageArray(imageArray);

						//$('.litebox-nav').show();

						$prevNav.off('click').on('click', function() {
							$this.options.callbackPrev.call(this);

							var index = group.index(link);	

							link = group.eq(index - 1);

							if (!$(link).length)
								link = group.last();

							$this.populateLitebox(link);
						});

						$nextNav.off('click').on('click', function() {
							$this.options.callbackNext.call(this);

							var index = group.index(link);

							link = group.eq(index + 1);

							if (!$(link).length)
								link = group.first();

							$this.populateLitebox(link);
						});
					}

				// After callback
					this.options.callbackAfterOpen.call(this);
			},

			buildLitebox: function() {
				// Variables
					var $this = this;

					$litebox = $('<div>', { 'class': 'litebox-overlay' }),
					$close = $('<div>', { 'class': 'litebox-close' }),
					$error = $('<div class="litebox-error"><span>' + this.options.errorMessage + '</span></div>'),
					$error1 = $('<div class="litebox-error"><span1>' + this.options.errorMessage + '</span1></div>'),
					//$prevNav = $('<div>', { 'class': 'litebox-nav litebox-prev' }),
					//$nextNav = $('<div>', { 'class': 'litebox-nav litebox-next' }),
					$container = $('<div>', { 'class': 'litebox-container' }),
					$loader = $('<div>', { 'class': 'litebox-loader' });
					$title=$('<br><div class="litebox-error"><span>'+$this.options.title+'</span></div>'),
					$title1=$('<div class="litebox-error"><span1>'+$this.options.title1+'</span1></div>'),
					//$text=$('<div><span></span></div>'),
					//$text1=$('<div><span1></span1></div>'),
				// Insert into document
					$('body').prepend($litebox.css({ 'background-color': this.options.background }));

					//$litebox.append($close,$title,$container,$title1,$text,$text1);
					$litebox.append($close,$title,$container,$title1);
					
					$litebox.fadeIn(this.options.revealSpeed);
			},

			populateLitebox: function(link) {
				// Variables
					var	$this = this,
						href = link.attr('href'),
						$currentContent = $('.litebox-content');

				// Show loader
					$litebox.append($loader);

				// Process
					if (href.match(/\.(jpeg|jpg|gif|png|bmp)/i) !== null) {
						var $img = $('<img>', { 'src': href, 'class': 'litebox-content' });

						$this.transitionContent('image', $currentContent, $img);

						$('img.litebox-content').imagesLoaded(function() {
							$loader.remove();
						});

						$img.error(function() {
							$this.liteboxError();
							$loader.remove();
						});
						
						$img.error1(function() {
							$this.liteboxError();
							$loader.remove();
						});
						
					} else if (videoURL = href.match(/(youtube|youtu|vimeo|dailymotion|kickstarter)\.(com|be)\/((watch\?v=([-\w]+))|(video\/([-\w]+))|(projects\/([-\w]+)\/([-\w]+))|([-\w]+))/)) {
						var src = '';

						if (videoURL[1] == 'youtube')
							src = 'http://www.youtube.com/v/' + videoURL[5];
						
						if (videoURL[1] == 'youtu')
							src = 'http://www.youtube.com/v/' + videoURL[3];
						
						if (videoURL[1] == 'vimeo')
							src = 'http://player.vimeo.com/video/' + videoURL[3];
						
						if (videoURL[1] == 'dailymotion')
							src = 'https://www.dailymotion.com/embed/video/' + videoURL[7];
						
						if (videoURL[1] == 'kickstarter')
							src = 'https://www.kickstarter.com/projects/' + videoURL[9] + '/' + videoURL[10] + '/widget/video.html';

						if (src) {
							var $iframe = $('<iframe>', {
								'src': src,
								'frameborder': '0',
								'vspace': '0',
								'hspace': '0',
								'scrolling': 'no',
								'allowfullscreen': '',
								'class': 'litebox-content',
								'style': 'background: #000'
							});

							$this.transitionContent('embed', $currentContent, $iframe);

							$iframe.load(function() {
								$loader.remove();
							});
						}
					} else if (href.substring(0, 1) == '#') {
						if ($(href).length) {
							$html = $('<div>', { 'class': 'litebox-content litebox-inline-html' });

							$html.append($(href).clone());

							$this.transitionContent('inline', $currentContent, $html);
						} else {
							$this.liteboxError();
						}

						$loader.remove();
					} else {
						var $iframe = $('<iframe>', {
							'src': href,
							'frameborder': '0',
							'vspace': '0',
							'hspace': '0',
							'scrolling': 'auto',
							'class': 'litebox-content',
							'allowfullscreen': ''
						});

						$this.transitionContent('iframe', $currentContent, $iframe);

						$iframe.load(function() {
							$loader.remove();
						});
					}
			},

			transitionContent: function(type, $currentContent, $newContent) {
				// Variables
					var	$this = this;

					if (type != 'inline')
						$container.removeClass('litebox-scroll');

				// Transition
					$currentContent.remove();
					$container.append($newContent);

					if (type == 'inline')
						$container.addClass('litebox-scroll');

					$this.centerContent();

					$(window).on('resize', function() {
						$this.centerContent();
					});
			},

			centerContent: function() {
				// Overlay to viewport
					$litebox.css({ 'height': winHeight() });

				// Images
					$container.css({ 'line-height': $container.height() + 'px' });

				// Inline
					if (typeof $html != 'undefined' && $('.litebox-inline-html').outerHeight() < $container.height())
						$('.litebox-inline-html').css({ 'margin-top': '-' + ($('.litebox-inline-html').outerHeight()) / 2 + 'px', 'top': '50%' });
			},

			closeLitebox: function() {
				// Before callback
				    //alert("check close litebox1");
					this.options.callbackBeforeClose.call(this);
					if(this.$element.attr('type') == "video")
					{
						//alert("close litebox missionno:"+this.$element.attr('mission'));
						makeRequest(this.$element.attr('panelNo'),'end',this.$element.attr('videoNo'),this.$element.attr('mission'));
						
						//checkMission(this.$element.attr('panelNo'),this.$element.attr('videoNo'));
					}
					if(this.$element.attr('type') == "map")
					{
						if(this.$element.attr('mission') != 9){
							//alert("check close litebox2");
							updateMapMission(this.$element.attr('mission'),this.$element.attr('panelNo'));
						}
							
					}
					if(this.$element.attr('panelNo') == 8 && this.$element.attr('mission')==2)
					{
						completePanelUpdatePanel8(8);
					}
				// Remove
					$litebox.fadeOut(this.options.revealSpeed, function() {
						$('.litebox-nav').hide();
						$litebox.empty().remove();
						$('.litebox-preload').remove();
					});

				// Remove click handlers
					$('.litebox-prev').off('click');
					$('.litebox-next').off('click');

				// After callback
					this.options.callbackAfterClose.call(this);
			},

			liteboxError: function() {
				this.options.callbackError.call(this);

				$container.append($error);
				$container.append($error1);
			}
		};
		
		$.fn[pluginName] = function(options) {
			return this.each(function() {
				if (!$.data(this, pluginName))
					$.data(this, pluginName, new liteBox(this, options));
			});
		};

	})(jQuery, window, document);