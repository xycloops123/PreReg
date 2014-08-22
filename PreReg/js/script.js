nyu.currentSection = 0;

nyu.isAnimated = false;

nyu.footerIsUp = false;

nyu.totalSections = function() {
  return nyu.sections.length;
};

/*
# -- SECTIONS -- #
*/

nyu.sections = [
  {
    sectionID: 0,
    isLoaded: true,
    go: function() {
      var self;
      self = this;
      self.isStartPulse = true;
      self.pulseStart = function() {
        if (self.isStartPulse) {
          return $('#start').animate({
            backgroundColor: "#663399"
          }, 1000, function() {
            return $(this).animate({
              backgroundColor: "#663399"
            }, 1000, function() {
              return self.pulseStart()
			  $('#next').click(function() {
  $('.progress-bar').animate({
    width: "+=100px"
  });
});

            });
          });
        }
      };
      self.pulseStart();
      $('#next').click(function() 
{
  $('.progress-bar').animate({
    width: "+=100px"
  });
  $('#prev').click(function(){

$('.progress-bar').animate({
width: "-=100px"
});
});
  
  $('next').click
  
	  
	  
	 
      });
      return true;
    },
    reset: function() {
      return true;
    }
  }, {
		    sectionID: 1,
		    isLoaded: true,
		    go: function() {
		      var self;
		      self = this;
		      self.isStartPulse = true;
		      self.pulseStart = function() {
		        if (self.isStartPulse) {
		          return $('#start').animate({
		            backgroundColor: "#663399"
		          }, 1000, function() {
		            return $(this).animate({
		              backgroundColor: "#663399"
		            }, 1000, function() {
		              return self.pulseStart()
					  $('#next').click(function() {
		  $('.progress-bar').animate({
		    width: "+=100px"
		  });
		});

		            });
		          });
		        }
		      };
		      self.pulseStart();
		      $('#next').click(function() 
		{
		  $('.progress-bar').animate({
		    width: "+=100px"
		  });
		  $('#prev').click(function(){

		$('.progress-bar').animate({
		width: "-=100px"
		});
		});
		  
		  $('next').click

		      });
		      return true;
		    },
		    reset: function() {
		      return true;
		    }
		  }, {
			  
			    sectionID: 2,
			    isLoaded: true,
			    go: function() {
			      var self;
			      self = this;
			      self.isStartPulse = true;
			      self.pulseStart = function() {
			        if (self.isStartPulse) {
			          return $('#start').animate({
			            backgroundColor: "#663399"
			          }, 1000, function() {
			            return $(this).animate({
			              backgroundColor: "#663399"
			            }, 1000, function() {
			              return self.pulseStart()
						  $('#next').click(function() {
			  $('.progress-bar').animate({
			    width: "+=100px"
			  });
			});

			            });
			          });
			        }
			      };
			      self.pulseStart();
			      $('#next').click(function() 
			{
			  $('.progress-bar').animate({
			    width: "+=100px"
			  });
			  $('#prev').click(function(){

			$('.progress-bar').animate({
			width: "-=100px"
			});
			});			  
			  $('next').click;
			      });
			      return true;
			    },
			    reset: function() {
			      return true;
			    }
			  },
			  {
				  
				    sectionID: 3,
				    isLoaded: true,
				    go: function() {
				      var self;
				      self = this;
				      self.isStartPulse = true;
				      self.pulseStart = function() {
				        if (self.isStartPulse) {
				          return $('#start').animate({
				            backgroundColor: "#663399"
				          }, 1000, function() {
				            return $(this).animate({
				              backgroundColor: "#663399"
				            }, 1000, function() {
				              return self.pulseStart()
							  $('#next').click(function() {
				  $('.progress-bar').animate({
				    width: "+=100px"
				  });
				});

				            });
				          });
				        }
				      };
				      self.pulseStart();
				      $('#next').click(function() 
				{
				  $('.progress-bar').animate({
				    width: "+=100px"
				  });
				  $('#prev').click(function(){

				$('.progress-bar').animate({
				width: "-=100px"
				});
				});			  
				  $('next').click;
				      });
				      return true;
				    },
				    reset: function() {
				      return true;
				    }
				  }, {
					  
					    sectionID: 4,
					    isLoaded: true,
					    go: function() {
					      var self;
					      self = this;
					      self.isStartPulse = true;
					      self.pulseStart = function() {
					        if (self.isStartPulse) {
					          return $('#start').animate({
					            backgroundColor: "#663399"
					          }, 1000, function() {
					            return $(this).animate({
					              backgroundColor: "#663399"
					            }, 1000, function() {
					              return self.pulseStart()
								  $('#next').click(function() {
					  $('.progress-bar').animate({
					    width: "+=100px"
					  });
					});

					            });
					          });
					        }
					      };
					      self.pulseStart();
					      $('#next').click(function() 
					{
					  $('.progress-bar').animate({
					    width: "+=100px"
					  });
					  $('#prev').click(function(){

					$('.progress-bar').animate({
					width: "-=100px"
					});
					});			  
					  $('next').click;
					      });
					      return true;
					    },
					    reset: function() {
					      return true;
					    }
					  }, {
						  
						    sectionID: 5,
						    isLoaded: true,
						    go: function() {
						      var self;
						      self = this;
						      self.isStartPulse = true;
						      self.pulseStart = function() {
						        if (self.isStartPulse) {
						          return $('#start').animate({
						            backgroundColor: "#663399"
						          }, 1000, function() {
						            return $(this).animate({
						              backgroundColor: "#663399"
						            }, 1000, function() {
						              return self.pulseStart()
									  $('#next').click(function() {
						  $('.progress-bar').animate({
						    width: "+=100px"
						  });
						});

						            });
						          });
						        }
						      };
						      self.pulseStart();
						      $('#next').click(function() 
						{
						  $('.progress-bar').animate({
						    width: "+=100px"
						  });
						  $('#prev').click(function(){

						$('.progress-bar').animate({
						width: "-=100px"
						});
						});			  
						  $('next').click;
						      });
						      return true;
						    },
						    reset: function() {
						      return true;
						    }
						  }, {
							  
							    sectionID: 6,
							    isLoaded: true,
							    go: function() {
							      var self;
							      self = this;
							      self.isStartPulse = true;
							      self.pulseStart = function() {
							        if (self.isStartPulse) {
							          return $('#start').animate({
							            backgroundColor: "#663399"
							          }, 1000, function() {
							            return $(this).animate({
							              backgroundColor: "#663399"
							            }, 1000, function() {
							              return self.pulseStart()
										  $('#next').click(function() {
							  $('.progress-bar').animate({
							    width: "+=100px"
							  });
							});

							            });
							          });
							        }
							      };
							      self.pulseStart();
							      $('#next').click(function() 
							{
							  $('.progress-bar').animate({
							    width: "+=100px"
							  });
							  $('#prev').click(function(){

							$('.progress-bar').animate({
							width: "-=100px"
							});
							});			  
							  $('next').click;
							      });
							      return true;
							    },
							    reset: function() {
							      return true;
							    }
							  }, {
								  
								    sectionID: 7,
								    isLoaded: true,
								    go: function() {
								      var self;
								      self = this;
								      self.isStartPulse = true;
								      self.pulseStart = function() {
								        if (self.isStartPulse) {
								          return $('#start').animate({
								            backgroundColor: "#663399"
								          }, 1000, function() {
								            return $(this).animate({
								              backgroundColor: "#663399"
								            }, 1000, function() {
								              return self.pulseStart()
											  $('#next').click(function() {
								  $('.progress-bar').animate({
								    width: "+=100px"
								  });
								});

								            });
								          });
								        }
								      };
								      self.pulseStart();
								      $('#next').click(function() 
								{
								  $('.progress-bar').animate({
								    width: "+=100px"
								  });
								  $('#prev').click(function(){

								$('.progress-bar').animate({
								width: "-=100px"
								});
								});			  
								  $('next').click;
								      });
								      return true;
								    },
								    reset: function() {
								      return true;
								    }
								  },
  
								  {
									  
									    sectionID: 8,
									    isLoaded: true,
									    go: function() {
									      var self;
									      self = this;
									      self.isStartPulse = true;
									      self.pulseStart = function() {
									        if (self.isStartPulse) {
									          return $('#start').animate({
									            backgroundColor: "#663399"
									          }, 1000, function() {
									            return $(this).animate({
									              backgroundColor: "#663399"
									            }, 1000, function() {
									              return self.pulseStart()
												  $('#next').click(function() {
									  $('.progress-bar').animate({
									    width: "+=100px"
									  });
									});

									            });
									          });
									        }
									      };
									      self.pulseStart();
									      $('#next').click(function() 
									{
									  $('.progress-bar').animate({
									    width: "+=100px"
									  });
									  $('#prev').click(function(){

									$('.progress-bar').animate({
									width: "-=100px"
									});
									});			  
									  $('next').click;
									      });
									      return true;
									    },
									    reset: function() {
									      return true;
									    }
									  }
  ,
  
  {
	    sectionID: 8,
	    isLoaded: false,
	    images: ['img/s6-hand-left', 'img/s6-hand-right'],
	    go: function() {
	      var self;
	      self = this;
	      self.sliderPosition = 0;
	      $('#slider-6').bind('slide', function(event, ui) {
	        var direction;
	        direction = nyu.direction(self.sliderPosition, ui.value);
	        if (ui.value === 0) {
	          $('.section-6 .money .value').text(10000);
	        } else {
	          $('.section-6 .money .value').text(nyu.addCommas(Math.ceil((16000000000 / 100) * ui.value)));
	        }
	        $('.section-6 .wrapper, .section-6 .money .inner').width(40 + ((338 / 100) * ui.value));
	        return self.sliderPosition = ui.value;
	      });
	      return this.isLoaded = true;
	    },
	    reset: function() {
	      var self;
	      self = this;
	      $('#slider-6').slider({
	        value: 0
	      });
	      $('.section-6 .money .value').text(10000);
	      return $('.section-6 .wrapper, .section-6 .money .inner').width(40);
	    }
	  }
	   
];

/*
# -- APP FUNCTIONS -- #
*/

nyu.loadSection = function() {
  var section;
  section = nyu.sections[nyu.currentSection];
  $(nyu.getSection(nyu.currentSection)).show();
  return section.go();
};

nyu.loader = function(id) {
  var i, images, _i, _len;
  $('#preloader').text('0%').stop(true, false).fadeIn();
  nyu.pxloader = new PxLoader();
  images = nyu.sections[id].images;
  nyu.pxloader.addProgressListener(function(e) {
    var done, total;
    done = e.completedCount;
    total = e.totalCount;
    return $('#preloader').text(Math.round((100 / total) * done) + '%');
  });
  nyu.pxloader.addCompletionListener(function() {
    nyu.sections[id].go();
    $('#preloader').stop(true, false).fadeOut();
    return $(nyu.getSection(id)).animate({
      left: 0
    }, 1500, 'easeOutQuint', function() {
      return nyu.isAnimated = false;
    });
  });
  for (_i = 0, _len = images.length; _i < _len; _i++) {
    i = images[_i];
    nyu.pxloader.addImage(i);
  }
  return nyu.pxloader.start();
};

nyu.next = function() {
  var nextSection, pw, s, slideInNext, total;
  total = nyu.totalSections();
  if (!nyu.isAnimated) {
    nyu.isAnimated = true;
    if (nyu.currentSection < (total - 1)) {
      nextSection = nyu.currentSection + 1;
      pw = $(window).width();
      slideInNext = function() {
        var s;
        s = nyu.getSection(nextSection);
        $(s).css({
          left: pw
        }).show();
        nyu.currentSection = nextSection;
        if (!nyu.sections[nyu.currentSection].isLoaded) {
          return nyu.loader(nyu.currentSection);
          
        } else {
          nyu.sections[nyu.currentSection].reset();
          return $(s).animate({
            left: 0
          }, 1500, 'easeOutQuint', function() {
            return nyu.isAnimated = false;
          });
        }
      };
      s = nyu.getSection(nyu.currentSection);
      return $(s).animate({
        left: 0 - pw
      }, 1000, 'easeInQuint', function() {
        $(this).hide();
        if (nyu.currentSection === 0) {
          $('#next .inner').attr('css/image/general/btn/Panel/next.jpg');
          $('#prev').css({
            display: 'block'
          });
          $('#horizon').stop().fadeIn();
        }
        return slideInNext();
      });
    } else {
      nyu.isAnimated = false;
      return nyu.goFooter();
    }
  }
};

nyu.prev = function() {
  var previousSection, pw, s, slideInPrev, total;
  total = nyu.totalSections();
  if (!nyu.isAnimated) {
    nyu.isAnimated = true;
    if (nyu.currentSection > 0) {
      previousSection = nyu.currentSection - 1;
      pw = $(window).width();
      slideInPrev = function() {
        var s;
        s = nyu.getSection(previousSection);
        $(s).css({
          left: 0 - pw
        }).show();
        nyu.currentSection = previousSection;
        if (!nyu.sections[nyu.currentSection].isLoaded) {
          nyu.loader(nyu.currentSection);
        } else {
          nyu.sections[nyu.currentSection].reset();
        }
        return $(s).animate({
          left: 0
        }, 1500, 'easeOutQuint', function() {
          return nyu.isAnimated = false;
        });
      };
      s = nyu.getSection(nyu.currentSection);
      return $(s).animate({
        left: pw
      }, 1000, 'easeInQuint', function() {
        $(this).hide();
        if (nyu.currentSection === 1) {
          $('#next .inner').css({
            display: 'block'
          });
          $('#prev').css({
            display: 'none'
            	
          });
          $('#horizon').stop().fadeOut();
        }
        return slideInPrev();
      });
    } else {
      nyu.isAnimated = false;
      return console.log('we have reached the start!');
    }
  }
};

nyu.goFooter = function() {
  nyu.footerIsUp = true;
  $('footer').animate({
    'padding-top': 0
  }, 100);
  return $('footer .lets-change').fadeOut(function() {
    var wh;
    wh = $(window).height() - 90;
    $('footer .page').fadeIn().animate({
      height: wh
    }, 1500, 'easeOutQuint');
    $('footer .page .inner').fadeIn();
    $('footer').addClass('active');
    return $('.logo-white').fadeIn(function() {
      return $('.logo-color').fadeOut();
    });
  });
};

nyu.closeFooter = function() {
  $('footer .page').fadeIn().animate({
    height: 10
  }, 1500, 'easeOutQuint', function() {
    return nyu.footerIsUp = false;
  });
  $('footer .page .inner').fadeOut(function() {
    return $('footer .lets-change').fadeIn();
  });
  $('footer').removeClass('active');
  return $('.logo-color').fadeIn(function() {
    return $('.logo-white').fadeOut();
  });
};

nyu.resize = function() {
  if (nyu.footerIsUp) return $('footer .page').height($(window).height() - 90);
};

nyu.countdown = function() {
  var goTimer, remainder, self;
  self = this;
  self.target = new Date(2012, 2, 31, 20, 30);
  self.now = new Date();
  if (self.now <= self.target) {
    remainder = self.target - self.now;
    goTimer = function() {
      var days, hours, minutes, seconds;
      self.difference = remainder;
      days = Math.floor(self.difference / 1000 / 60 / 60 / 24);
      self.difference -= days * 1000 * 60 * 60 * 24;
      hours = Math.floor(self.difference / 1000 / 60 / 60);
      self.difference -= hours * 1000 * 60 * 60;
      minutes = Math.floor(self.difference / 1000 / 60);
      self.difference -= minutes * 1000 * 60;
      seconds = Math.floor(self.difference / 1000);
      $('footer .timer .days .value').text(nyu.addZero(days));
      $('footer .timer .hours .value').text(nyu.addZero(hours));
      $('footer .timer .mins .value').text(nyu.addZero(minutes));
      $('footer .timer .secs .value').text(nyu.addZero(seconds));
      remainder -= 1000;
      return setTimeout(goTimer, 1000);
    };
    return goTimer();
  }
};

nyu.template = function() {
  $(".slider").slider();
  $('#next').mouseover(function() {
    return $(this).stop().animate({
      width: 60
    }, 100);
  });
  $('#next').mouseout(function() {
    return $(this).stop().animate({
      width: 60
    }, 100);
  });
  $('#prev').mouseover(function() {
    return $(this).stop().animate({
      width: 60
    }, 100);
  });
  $('#prev').mouseout(function() {
    return $(this).stop().animate({
      width: 60
    }, 100);
  });
  $('footer').mouseenter(function() {
    if (!nyu.footerIsUp) {
      return $(this).stop().animate({
        'padding-top': 0
      }, 100);
    }
  });
  $('footer').mouseleave(function() {
    if (!nyu.footerIsUp) {
      return $(this).stop().animate({
        'padding-top': 0
      }, 100);
    }
  });
  $('footer').click(function() {
    if (!nyu.footerIsUp) return nyu.goFooter();
  });
  $('#close').click(function() {
    if (nyu.footerIsUp) return nyu.closeFooter();
  });
  $('footer .tweet-now').click(function() {
    var oh, ow, sl, st, x, y;
    st = window.screenY;
    sl = window.screenX;
    oh = window.outerHeight;
    ow = window.outerWidth;
    x = sl + ((ow / 2) - 250);
    y = st + ((oh / 2) - 200);
    
  });
  $('footer .facebook').click(function() {
    var oh, ow, sl, st, x, y;
    st = window.screenY;
    sl = window.screenX;
    oh = window.outerHeight;
    ow = window.outerWidth;
    x = sl + ((ow / 2) - 250);
    y = st + ((oh / 2) - 200);
    
  });
  return $('footer .google').click(function() {
    var oh, ow, sl, st, x, y;
    st = window.screenY;
    sl = window.screenX;
    oh = window.outerHeight;
    ow = window.outerWidth;
    x = sl + ((ow / 2) - 250);
    y = st + ((oh / 2) - 200);
    });
};

nyu.resetSection = function(self) {
  return $(self).hide();
};

nyu.init = function() {
  nyu.template();
  nyu.countdown();
  return nyu.loadSection();
};

/*
# -- UTILITY FUNCTIONS -- #
*/

nyu.getPageWidth = function() {
  return $(window).width();
};

nyu.direction = function(before, after) {
  if (after - before > 0) {
    return 'forward';
  } else {
    return 'back';
  }
};

nyu.getSection = function(id) {
  return $('.section[data-section=' + id + ']');
};

nyu.addCommas = function(nStr) {
  var rgx, x, x1;
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';;
  rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		};
  return x1 + x2;
};

nyu.addZero = function(n) {
  if (n < 10) {
    return '0' + n;
  } else {
    return n;
  }
};


$(function() {
  nyu.init();
  $('#next').click(function() {
	  //alert("test");
	  
	  var compPanel=getCompPanelNo();
	  compPanel=getCompPanelNo();
	  //alert(((nyu.currentSection+1)==compPanel));
	  var idtakeQuiz="takeQuiz"+(nyu.currentSection+1);
	  document.getElementById(idtakeQuiz).style.display="none";
	  //alert(document.getElementById("1img").src);
	  //alert(compPanel);
	  //document.getElementById("1img").src="css/image/general/statusbar/numbers/completed/1_c.png";
	  var defpath="css/image/general/statusbar/numbers/";
	  var comp="completed";
	  var inprog="inprogress";
	  var rev="review";
	  var pno=nyu.currentSection+1;
	  var nextpno=pno+1;
	  var comp_path;
	  var inprog_path;
	  var inrev_path;
	  var comp_id;
	  var inprog_id;
	  var inrev_id;
	  //alert("test");
	  if(pno==compPanel){
		  comp_id=pno+"img";
		  comp_path=defpath+comp+"/"+pno+"_c.png";
		  document.getElementById(comp_id).src= comp_path;
		  inprog_id=nextpno+"img";
		  inprog_path=defpath+inprog+"/"+nextpno+"_p.png";
		  document.getElementById(inprog_id).src= inprog_path;
	  }
	  
	  var cur_id=pno+"img";
	  var cursrc=document.getElementById(cur_id).src;
	  var cursrcContainsInReview= cursrc.indexOf(rev);
	  
	  var next_id=nextpno+"img";
	  var nextsrc=document.getElementById(next_id).src;
	  var nextsrcContainsInProgress= nextsrc.indexOf(inprog);
	  
	  if((cursrcContainsInReview != -1)&&(nextsrcContainsInProgress != -1)){
		  comp_id=pno+"img";
		  comp_path=defpath+comp+"/"+pno+"_c.png";
		  document.getElementById(comp_id).src= comp_path;
	  }
	  
	  var nextsrcContainsCompleted= nextsrc.indexOf(comp);
	  if((cursrcContainsInReview != -1)&&(nextsrcContainsCompleted != -1)){
		  comp_id=pno+"img";
		  comp_path=defpath+comp+"/"+pno+"_c.png";
		  document.getElementById(comp_id).src= comp_path;
		  
		  inrev_id=nextpno+"img";
		  inrev_path=defpath+rev+"/"+nextpno+"_r.png";
		  document.getElementById(inrev_id).src= inrev_path;
	  }
	  
	  if((nyu.currentSection+1)==compPanel){
		  document.getElementById("next").style.display="none";
		  setAttemptstoZero();
	  }
	  if((nyu.currentSection+1)>compPanel){
		  document.getElementById("next").style.display="none";
	  }
	  return nyu.next();
  });
  $('#prev').click(function() {
	  //alert("back");
	  var compPanel=getCompPanelNo();
	  //alert("compPanel:"+compPanel+"nyu.currentSection:"+nyu.currentSection);
	  //alert(nyu.currentSection<=compPanel);
	  var defpath="css/image/general/statusbar/numbers/";
	  var comp="completed";
	  var inprog="inprogress";
	  var rev="review";
	  var pno=nyu.currentSection+1;
	  var prevpno=nyu.currentSection;
	  var comp_path;
	  //var inprog_path;
	  var inrev_path;
	  var comp_id;
	  //var inprog_id;
	  var inrev_id;
	  
	  var cur_id=pno+"img";
	  var cursrc=document.getElementById(cur_id).src;
	  var cursrcContainsInProgress= cursrc.indexOf(inprog);
	  //check for current section in progress
	  if(cursrcContainsInProgress!= -1){
		  inrev_id=prevpno+"img";
		  inrev_path=defpath+rev+"/"+prevpno+"_r.png";
		  document.getElementById(inrev_id).src= inrev_path;
	  }
	  var cursrcContainsInReview= cursrc.indexOf(rev);
	  
	  if(cursrcContainsInReview != -1){
		  inrev_id=prevpno+"img";
		  inrev_path=defpath+rev+"/"+prevpno+"_r.png";
		  document.getElementById(inrev_id).src= inrev_path;
		  
		  comp_id=pno+"img";
		  comp_path=defpath+comp+"/"+pno+"_c.png";
		  document.getElementById(comp_id).src= comp_path;
	  }
	  
	  
	  if(nyu.currentSection<=compPanel && nyu.currentSection<8){
		  //alert("test");
		  var idquiz="panel"+nyu.currentSection+"quiz"+nyu.currentSection;
		  var idcon="panel"+nyu.currentSection+"content"+nyu.currentSection;
		  var idtakeQuiz="takeQuiz"+nyu.currentSection;
		  //alert(idquiz);
		  document.getElementById(idquiz).style.display="none";
		  document.getElementById(idcon).style.display="block";
		  document.getElementById("next").style.display="block";
		  document.getElementById(idtakeQuiz).style.display="none";
		  return nyu.prev();
	  }else if(nyu.currentSection==8) {
		  document.getElementById("next").style.display="block";
		  return nyu.prev();
	  }
	  //alert("Back current section:"+nyu.currentSection);
	  //backupdate();
    
  });
  return $(window).resize(function() {
    return nyu.resize();
  });
});
function movenextpanel(){
	nyu.next();
}
function GetSectionNumber()
{
	return nyu.currentSection;
}
