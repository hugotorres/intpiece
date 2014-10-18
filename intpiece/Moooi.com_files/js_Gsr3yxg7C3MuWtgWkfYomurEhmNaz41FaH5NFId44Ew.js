(function(a){a.tiny=a.tiny||{};a.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,size:"auto",sizethumb:"auto",invertscroll:false}};a.fn.tinyscrollbar=function(d){var c=a.extend({},a.tiny.scrollbar.options,d);this.each(function(){a(this).data("tsb",new b(a(this),c))});return this};a.fn.tinyscrollbar_update=function(c){return a(this).data("tsb").update(c)};function b(q,g){var k=this,t=q,j={obj:a(".viewport",q)},h={obj:a(".overview",q)},d={obj:a(".scrollbar",q)},m={obj:a(".track",d.obj)},p={obj:a(".thumb",d.obj)},l=g.axis==="x",n=l?"left":"top",v=l?"Width":"Height",r=0,y={start:0,now:0},o={},e="ontouchstart" in document.documentElement;function c(){k.update();s();return k}this.update=function(z){j[g.axis]=j.obj[0]["offset"+v];h[g.axis]=h.obj[0]["scroll"+v];h.ratio=j[g.axis]/h[g.axis];d.obj.toggleClass("disable",h.ratio>=1);m[g.axis]=g.size==="auto"?j[g.axis]:g.size;p[g.axis]=Math.min(m[g.axis],Math.max(0,(g.sizethumb==="auto"?(m[g.axis]*h.ratio):g.sizethumb)));d.ratio=g.sizethumb==="auto"?(h[g.axis]/m[g.axis]):(h[g.axis]-j[g.axis])/(m[g.axis]-p[g.axis]);r=(z==="relative"&&h.ratio<=1)?Math.min((h[g.axis]-j[g.axis]),Math.max(0,r)):0;r=(z==="bottom"&&h.ratio<=1)?(h[g.axis]-j[g.axis]):isNaN(parseInt(z,10))?r:parseInt(z,10);w()};function w(){var z=v.toLowerCase();p.obj.css(n,r/d.ratio);h.obj.css(n,-r);o.start=p.obj.offset()[n];d.obj.css(z,m[g.axis]);m.obj.css(z,m[g.axis]);p.obj.css(z,p[g.axis])}function s(){if(!e){p.obj.bind("mousedown",i);m.obj.bind("mouseup",u)}else{j.obj[0].ontouchstart=function(z){if(1===z.touches.length){i(z.touches[0]);z.stopPropagation()}}}if(g.scroll&&window.addEventListener){t[0].addEventListener("DOMMouseScroll",x,false);t[0].addEventListener("mousewheel",x,false)}else{if(g.scroll){t[0].onmousewheel=x}}}function i(A){a("body").addClass("noSelect");var z=parseInt(p.obj.css(n),10);o.start=l?A.pageX:A.pageY;y.start=z=="auto"?0:z;if(!e){a(document).bind("mousemove",u);a(document).bind("mouseup",f);p.obj.bind("mouseup",f)}else{document.ontouchmove=function(B){B.preventDefault();u(B.touches[0])};document.ontouchend=f}}function x(B){if(h.ratio<1){var A=B||window.event,z=A.wheelDelta?A.wheelDelta/120:-A.detail/3;r-=z*g.wheel;r=Math.min((h[g.axis]-j[g.axis]),Math.max(0,r));p.obj.css(n,r/d.ratio);h.obj.css(n,-r);if(g.lockscroll||(r!==(h[g.axis]-j[g.axis])&&r!==0)){A=a.event.fix(A);A.preventDefault()}}}function u(z){if(h.ratio<1){if(g.invertscroll&&e){y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+(o.start-(l?z.pageX:z.pageY)))))}else{y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+((l?z.pageX:z.pageY)-o.start))))}r=y.now*d.ratio;h.obj.css(n,-r);p.obj.css(n,y.now)}}function f(){a("body").removeClass("noSelect");a(document).unbind("mousemove",u);a(document).unbind("mouseup",f);p.obj.unbind("mouseup",f);document.ontouchmove=document.ontouchend=null}return c()}}(jQuery));;
(function(a){a.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:true,idPrefix:"uniform",resetSelector:false,autoHide:true},elements:[]};if(a.browser.msie&&a.browser.version<7){a.support.selectOpacity=false}else{a.support.selectOpacity=true}a.fn.uniform=function(k){k=a.extend(a.uniform.options,k);var d=this;if(k.resetSelector!=false){a(k.resetSelector).mouseup(function(){function l(){a.uniform.update(d)}setTimeout(l,10)})}function j(l){$el=a(l);$el.addClass($el.attr("type"));b(l)}function g(l){a(l).addClass("uniform");b(l)}function i(o){var m=a(o);var p=a("<div>"),l=a("<span>");p.addClass(k.buttonClass);if(k.useID&&m.attr("id")!=""){p.attr("id",k.idPrefix+"-"+m.attr("id"))}var n;if(m.is("a")||m.is("button")){n=m.text()}else{if(m.is(":submit")||m.is(":reset")||m.is("input[type=button]")){n=m.attr("value")}}n=n==""?m.is(":reset")?"Reset":"Submit":n;l.html(n);m.css("opacity",0);m.wrap(p);m.wrap(l);p=m.closest("div");l=m.closest("span");if(m.is(":disabled")){p.addClass(k.disabledClass)}p.bind({"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(r){if(a(r.target).is("span")||a(r.target).is("div")){if(o[0].dispatchEvent){var q=document.createEvent("MouseEvents");q.initEvent("click",true,true);o[0].dispatchEvent(q)}else{o[0].click()}}}});o.bind({"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass)}});a.uniform.noSelect(p);b(o)}function e(o){var m=a(o);var p=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){p.hide()}p.addClass(k.selectClass);if(k.useID&&o.attr("id")!=""){p.attr("id",k.idPrefix+"-"+o.attr("id"))}var n=o.find(":selected:first");if(n.length==0){n=o.find("option:first")}l.html(n.html());o.css("opacity",0);o.wrap(p);o.before(l);p=o.parent("div");l=o.siblings("span");o.bind({"change.uniform":function(){l.text(o.find(":selected").html());p.removeClass(k.activeClass)},"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"keyup.uniform":function(){l.text(o.find(":selected").html())}});if(a(o).attr("disabled")){p.addClass(k.disabledClass)}a.uniform.noSelect(l);b(o)}function f(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.checkboxClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{l.addClass(k.checkedClass)}},"mousedown.uniform touchbegin.uniform":function(){o.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function c(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.radioClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{var p=k.radioClass.split(" ")[0];a("."+p+" span."+k.checkedClass+":has([name='"+a(n).attr("name")+"'])").removeClass(k.checkedClass);l.addClass(k.checkedClass)}},"mousedown.uniform touchend.uniform":function(){if(!a(n).is(":disabled")){o.addClass(k.activeClass)}},"mouseup.uniform touchbegin.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform touchend.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function h(q){var o=a(q);var r=a("<div />"),p=a("<span>"+k.fileDefaultText+"</span>"),m=a("<span>"+k.fileBtnText+"</span>");if(!o.css("display")=="none"&&k.autoHide){r.hide()}r.addClass(k.fileClass);p.addClass(k.filenameClass);m.addClass(k.fileBtnClass);if(k.useID&&o.attr("id")!=""){r.attr("id",k.idPrefix+"-"+o.attr("id"))}o.wrap(r);o.after(m);o.after(p);r=o.closest("div");p=o.siblings("."+k.filenameClass);m=o.siblings("."+k.fileBtnClass);if(!o.attr("size")){var l=r.width();o.attr("size",l/10)}var n=function(){var s=o.val();if(s===""){s=k.fileDefaultText}else{s=s.split(/[\/\\]+/);s=s[(s.length-1)]}p.text(s)};n();o.css("opacity",0).bind({"focus.uniform":function(){r.addClass(k.focusClass)},"blur.uniform":function(){r.removeClass(k.focusClass)},"mousedown.uniform":function(){if(!a(q).is(":disabled")){r.addClass(k.activeClass)}},"mouseup.uniform":function(){r.removeClass(k.activeClass)},"mouseenter.uniform":function(){r.addClass(k.hoverClass)},"mouseleave.uniform":function(){r.removeClass(k.hoverClass);r.removeClass(k.activeClass)}});if(a.browser.msie){o.bind("click.uniform.ie7",function(){setTimeout(n,0)})}else{o.bind("change.uniform",n)}if(o.attr("disabled")){r.addClass(k.disabledClass)}a.uniform.noSelect(p);a.uniform.noSelect(m);b(q)}a.uniform.restore=function(l){if(l==undefined){l=a(a.uniform.elements)}a(l).each(function(){if(a(this).is(":checkbox")){a(this).unwrap().unwrap()}else{if(a(this).is("select")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is(":radio")){a(this).unwrap().unwrap()}else{if(a(this).is(":file")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is("button, :submit, :reset, a, input[type='button']")){a(this).unwrap().unwrap()}}}}}a(this).unbind(".uniform");a(this).css("opacity","1");var m=a.inArray(a(l),a.uniform.elements);a.uniform.elements.splice(m,1)})};function b(l){l=a(l).get();if(l.length>1){a.each(l,function(m,n){a.uniform.elements.push(n)})}else{a.uniform.elements.push(l)}}a.uniform.noSelect=function(l){function m(){return false}a(l).each(function(){this.onselectstart=this.ondragstart=m;a(this).mousedown(m).css({MozUserSelect:"none"})})};a.uniform.update=function(l){if(l==undefined){l=a(a.uniform.elements)}l=a(l);l.each(function(){var n=a(this);if(n.is("select")){var m=n.siblings("span");var p=n.parent("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.html(n.find(":selected").html());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":checkbox")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":radio")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":file")){var p=n.parent("div");var o=n.siblings(k.filenameClass);btnTag=n.siblings(k.fileBtnClass);p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);o.text(n.val());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":submit")||n.is(":reset")||n.is("button")||n.is("a")||l.is("input[type=button]")){var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}}}}}})};return this.each(function(){if(a.support.selectOpacity){var l=a(this);if(l.is("select")){if(l.attr("multiple")!=true){if(l.attr("size")==undefined||l.attr("size")<=1){e(l)}}}else{if(l.is(":checkbox")){f(l)}else{if(l.is(":radio")){c(l)}else{if(l.is(":file")){h(l)}else{if(l.is(":text, :password, input[type='email']")){j(l)}else{if(l.is("textarea")){g(l)}else{if(l.is("a")||l.is(":submit")||l.is(":reset")||l.is("button")||l.is("input[type=button]")){i(l)}}}}}}}}})}})(jQuery);;
(function( window, $, undefined ) {
	
	// http://www.netcu.de/jquery-touchwipe-iphone-ipad-library
	$.fn.touchwipe 				= function(settings) {
		
		var config = {
			min_move_x: 20,
			min_move_y: 20,
			wipeLeft: function() { },
			wipeRight: function() { },
			wipeUp: function() { },
			wipeDown: function() { },
			preventDefaultEvents: true
		};
     
		if (settings) $.extend(config, settings);
 
		this.each(function() {
			var startX;
			var startY;
			var isMoving = false;

			function cancelTouch() {
				this.removeEventListener('touchmove', onTouchMove);
				startX = null;
				isMoving = false;
			}	
		 
			function onTouchMove(e) {
				if(config.preventDefaultEvents) {
					e.preventDefault();
				}
				if(isMoving) {
					var x = e.touches[0].pageX;
					var y = e.touches[0].pageY;
					var dx = startX - x;
					var dy = startY - y;
					if(Math.abs(dx) >= config.min_move_x) {
						cancelTouch();
						if(dx > 0) {
							config.wipeLeft();
						}
						else {
							config.wipeRight();
						}
					}
					else if(Math.abs(dy) >= config.min_move_y) {
						cancelTouch();
						if(dy > 0) {
							config.wipeDown();
						}
						else {
							config.wipeUp();
						}
					}
				}
			}
		 
			function onTouchStart(e)
			{
				if (e.touches.length == 1) {
					startX = e.touches[0].pageX;
					startY = e.touches[0].pageY;
					isMoving = true;
					this.addEventListener('touchmove', onTouchMove, false);
				}
			}    	 
			if ('ontouchstart' in document.documentElement) {
				this.addEventListener('touchstart', onTouchStart, false);
			}
		});
 
		return this;
	};
	
	$.elastislide 				= function( options, element ) {
		this.$el	= $( element );
		this._init( options );
	};
	
	$.elastislide.defaults 		= {
		speed		: 450,	// animation speed
		easing		: '',	// animation easing effect
		imageW		: 190,	// the images width
		margin		: 3,	// image margin right
		border		: 2,	// image border
		minItems	: 1,	// the minimum number of items to show. 
							// when we resize the window, this will make sure minItems are always shown 
							// (unless of course minItems is higher than the total number of elements)
		current		: 0,	// index of the current item
							// when we resize the window, the carousel will make sure this item is visible 
		onClick		: function() { return false; } // click item callback
    };
	
	$.elastislide.prototype 	= {
		_init 				: function( options ) {
			
			this.options 		= $.extend( true, {}, $.elastislide.defaults, options );
			
			// <ul>
			this.$slider		= this.$el.find('ul');
			
			// <li>
			this.$items			= this.$slider.children('li');
			
			// total number of elements / images
			this.itemsCount		= this.$items.length;
			
			// cache the <ul>'s parent, since we will eventually need to recalculate its width on window resize
			this.$esCarousel	= this.$slider.parent();
			
			// validate options
			this._validateOptions();
			
			// set sizes and initialize some vars...
			this._configure();
			
			// add navigation buttons
			this._addControls();
			
			// initialize the events
			this._initEvents();
			
			// show the <ul>
			this.$slider.show();
			
			// slide to current's position
			this._slideToCurrent( false );
			
		},
		_validateOptions	: function() {
		
			if( this.options.speed < 0 )
				this.options.speed = 450;
			if( this.options.margin < 0 )
				this.options.margin = 4;
			if( this.options.border < 0 )
				this.options.border = 1;
			if( this.options.minItems < 1 || this.options.minItems > this.itemsCount )
				this.options.minItems = 1;
			if( this.options.current > this.itemsCount - 1 )
				this.options.current = 0;
				
		},
		_configure			: function() {
			
			// current item's index
			this.current		= this.options.current;
			
			// the ul's parent's (div.es-carousel) width is the "visible" width
			this.visibleWidth	= this.$esCarousel.width();
			
			// test to see if we need to initially resize the items
			if( this.visibleWidth < this.options.minItems * ( this.options.imageW + 2 * this.options.border ) + ( this.options.minItems - 1 ) * this.options.margin ) {
				this._setDim( ( this.visibleWidth - ( this.options.minItems - 1 ) * this.options.margin ) / this.options.minItems );
				this._setCurrentValues();
				// how many items fit with the current width
				this.fitCount	= this.options.minItems;
			}
			else {
				this._setDim();
				this._setCurrentValues();
			}
			
			// set the <ul> width
			this.$slider.css({
				width	: this.sliderW
			});
			
		},
		_setDim				: function( elW ) {
			
			// <li> style
			this.$items.css({
				marginRight	: this.options.margin,
				width		: ( elW ) ? elW : this.options.imageW + 2 * this.options.border
			}).children('a').css({ // <a> style
				borderWidth		: this.options.border
			});
			
		},
		_setCurrentValues	: function() {
			
			// the total space occupied by one item
			this.itemW			= this.$items.outerWidth(true);
			
			// total width of the slider / <ul>
			// this will eventually change on window resize
			this.sliderW		= this.itemW * this.itemsCount;
			
			// the ul parent's (div.es-carousel) width is the "visible" width
			this.visibleWidth	= this.$esCarousel.width();
			
			// how many items fit with the current width
			this.fitCount		= Math.floor( this.visibleWidth / this.itemW );
			if(!this.fitCount) {
			  this.fitCount = 1;
			}
			
		},
		_addControls		: function() {
			
			this.$navNext	= $('<span class="es-nav-next">Next</span>');
			this.$navPrev	= $('<span class="es-nav-prev">Previous</span>');
			$('<div class="es-nav"/>')
			.append( this.$navPrev )
			.append( this.$navNext )
			.appendTo( this.$el );
			
			this._toggleControls();
				
		},
		_toggleControls		: function( dir, status ) {
			
			// show / hide navigation buttons
			if( dir && status ) {
				if( status === 1 )
					( dir === 'right' ) ? this.$navNext.removeClass('inactive').addClass('active') : this.$navPrev.removeClass('inactive').addClass('active');
				else
					( dir === 'right' ) ? this.$navNext.removeClass('active').addClass('inactive') : this.$navPrev.removeClass('active').addClass('inactive');
			}
			
			else if( this.current === this.itemsCount - 1 || this.fitCount >= this.itemsCount ){
			  this.$navNext.removeClass('active').addClass('inactive');
			}
		},
		_initEvents			: function() {
			
			var instance	= this;
			
			// window resize
			$(window).bind('resize.elastislide', function( event ) {
				
				// set values again
				instance._setCurrentValues();
				
				// need to resize items
				if( instance.visibleWidth < instance.options.minItems * ( instance.options.imageW + 2 * instance.options.border ) + ( instance.options.minItems - 1 ) * instance.options.margin ) {
					instance._setDim( ( instance.visibleWidth - ( instance.options.minItems - 1 ) * instance.options.margin ) / instance.options.minItems );
					instance._setCurrentValues();
					instance.fitCount	= instance.options.minItems;
				}	
				else{
					instance._setDim();
					instance._setCurrentValues();
				}
				
				instance.$slider.css({
					width	: instance.sliderW + 10 // TODO: +10px seems to solve a firefox "bug" :S
				});
						
				// slide to the current element
				clearTimeout( instance.resetTimeout );
				instance.resetTimeout	= setTimeout(function() {
					instance._slideToCurrent();
				}, 200);
				
			});
			
			// navigation buttons events
			this.$navNext.bind('click.elastislide', function( event ) {
   if(!$(this).hasClass('inactive')){
     instance._slide('right', undefined, undefined, undefined, 1);
   }
			});
			
			this.$navPrev.bind('click.elastislide', function( event ) {
			  if(!$(this).hasClass('inactive')){
		     instance._slide('left', undefined, undefined, undefined, -1);
		   }
			});
			
			// item click event
			this.$items.bind('click.elastislide', function( event ) {
				instance.options.onClick( $(this) );
				return true;
			});
			
			// touch events
			instance.$slider.touchwipe({
				wipeLeft			: function() {
					instance._slide('right', undefined, undefined, undefined, 1);
				},
				wipeRight			: function() {
					instance._slide('left', undefined, undefined, undefined, -1);
				}
			});
			
		},
		_slide				: function( dir, val, anim, callback, pager, pagerItem ) {
			
			// if animating return
			if( this.$slider.is(':animated') )
				return false;
			
			// current margin left
			var ml		= parseFloat( this.$slider.css('margin-left') );
			
			// val is just passed when we want an exact value for the margin left (used in the _slideToCurrent function)
			if( val === undefined ) {
			
				// how much to slide?
				var amount	= this.fitCount * this.itemW, val;
				
				if( amount < 0 ) return false;
				
				// make sure not to leave a space between the last item / first item and the end / beggining of the slider available width
				if( dir === 'right' && this.sliderW - ( Math.abs( ml ) + amount ) < this.visibleWidth ) {
					amount	= this.sliderW - ( Math.abs( ml ) + this.visibleWidth ) - this.options.margin; // decrease the margin left
					// show / hide navigation buttons
					this._toggleControls( 'right', -1 );
					this._toggleControls( 'left', 1 );
				}
				else if( dir === 'left' && Math.abs( ml ) - amount < 0 ) {				
					amount	= Math.abs( ml );
					// show / hide navigation buttons
					this._toggleControls( 'left', -1 );
					this._toggleControls( 'right', 1 );
				}
				else {
					var fml; // future margin left
					
					( dir === 'right' ) 
						? fml = Math.abs( ml ) + this.options.margin + Math.abs( this.$items.css('width').replace('px', '') ) 
						: fml = Math.abs( ml ) - this.options.margin - Math.abs( amount );
					
					// show / hide navigation buttons
					if( fml > 0 )
						this._toggleControls( 'left', 1 );
					else	
						this._toggleControls( 'left', -1 );
					if( fml < (this.$items.length * this.$items.css('width').replace('px', '')) - this.$items.css('width').replace('px', '') )
						this._toggleControls( 'right', 1 );
					else	
						this._toggleControls( 'right', -1 );
						
				}
				
				( dir === 'right' ) ? val = '-=' + amount : val = '+=' + amount;
				
			}
			else {
				var fml		= Math.abs( val ); // future margin left
				
				if( Math.max( this.sliderW, this.visibleWidth ) - fml < this.visibleWidth ) {
					val	= - ( Math.max( this.sliderW, this.visibleWidth ) - this.visibleWidth );
					if( val !== 0 )
						val += this.options.margin;	// decrease the margin left if not on the first position
						
					// show / hide navigation buttons
					this._toggleControls( 'right', -1 );
					fml	= Math.abs( val );
				}
				
				// show / hide navigation buttons
				if( fml > 0 )
					this._toggleControls( 'left', 1 );
				else
					this._toggleControls( 'left', -1 );
				
				if (this.itemsCount <= this.fitCount){
				  this._toggleControls( 'right', -1 );
				}
				else if( Math.max( (this.$items.length * this.$items.css('width').replace('px', '')), this.$items.css('width').replace('px', '') ) - this.$items.css('width').replace('px', '') > fml + this.options.margin ) {
					this._toggleControls( 'right', 1 );
				}
				else {
					this._toggleControls( 'right', -1 );
				}
			}
			
			$.fn.applyStyle = ( anim === undefined ) ? $.fn.animate : $.fn.css;
			
			var sliderCSS	= { marginLeft : val };

			var instance	= this;
			
			/*
    * Set active pager item
    */
   if (pager == -1){
     this.$el.find('ul.indicator')
     .find('li.active')
     .removeClass('active')
     .prev().addClass('active');
   }
   else if (pager == 1){
     this.$el.find('ul.indicator')
     .find('li.active')
     .removeClass('active')
     .next().addClass('active');
   }
   
   if (pagerItem != undefined){
     this.$el.find('ul.indicator')
     .find('li.active')
     .removeClass('active');
     
     this.$el.find('ul.indicator')
     .find('li.' + pagerItem)
     .addClass('active');
   }
   			
			this.$slider.applyStyle( sliderCSS, $.extend( true, [], { duration : this.options.speed, easing : this.options.easing, complete : function() {
				if( callback ) callback.call();
			} } ) );
			
		},
		_slideToCurrent		: function( anim ) {
			
			// how much to slide?
			var amount	= this.current * this.itemW;
			this._slide('', -amount, anim);
			
		},
		add					: function( $newelems, callback ) {
			
			// adds new items to the carousel
			this.$items 		= this.$items.add( $newelems );
			this.itemsCount		= this.$items.length;
			this._setDim();
			this._setCurrentValues();
			this.$slider.css({
				width	: this.sliderW
			});
			this._slideToCurrent();
			
			if ( callback ) callback.call( $newelems );
			
		},
		destroy				: function( callback ) {
			this._destroy( callback );
		},
		_destroy 			: function( callback ) {
			this.$el.unbind('.elastislide').removeData('elastislide');
			$(window).unbind('.elastislide');
			if ( callback ) callback.call();
		},
		
		/**
		 * Private method to slide to a specific item in the elastislide
		 */
		_slideToItem  : function( item ) {
	   
	   // how much to slide?
	   var amount = item * this.$items.css('width').replace('px', '');
	   this._slide('', -amount, undefined, undefined, undefined, item );
	   
	  }
	};
	
	var logError 				= function( message ) {
		if ( this.console ) {
			console.error( message );
		}
	};
	
	$.fn.elastislide 				= function( options ) {
	  /**
	   * Extra function to slide to a specific item in the elastislide
	   */
	  this.slideToItem = function(item) {
	    this.each(function() {
	      var instance = $.data( this, 'elastislide' );
	      instance._slideToItem(item);
	    });
	  };
	  
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );

			this.each(function() {
				var instance = $.data( this, 'elastislide' );
				if ( !instance ) {
					logError( "cannot call methods on elastislide prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for elastislide instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		} 
		else {
			this.each(function() {
				var instance = $.data( this, 'elastislide' );
				if ( !instance ) {
					$.data( this, 'elastislide', new $.elastislide( options, this ) );
				}
			});
		}
		return this;
	};
	
})( window, jQuery );;
/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);;
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);;
/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				var cookie = decode(parts.join('='));
				return config.json ? JSON.parse(cookie) : cookie;
			}
		}

		return null;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);
;
var $ = jQuery;

Drupal.behaviors.analyticsTracker = {
  attach : function (context, settings) {
    $('a[data-ga-category]').click(function () {
      Drupal.behaviors.analyticsTracker.track(
        $(this).attr('data-ga-category'),
        $(this).attr('data-ga-action'),
        $(this).attr('data-ga-label')
      );
    });
  },
  detach : function(context) {
  },

  track: function (category, action, label) {
    _gaq.push(['_trackEvent', category, action, label]);
  }
};

Drupal.behaviors.website = {
    attach : function(context, settings) {
      //Init tabs
      if($.fn.tabs) {
        $('.popup-tabs').tabs();
      }

      // Add the scaling functionality after the content is loaded in the Colorbox;
      // Initially it is not added because the element doesn't exists
      $(document).bind('cbox_complete', Drupal.behaviors.images.scaleToWindowSize()  );
      $(document).unbind('cbox_closed', Drupal.behaviors.images.scaleToWindowSize()  );

      
      // Enable Animated Scrolling
      $('#navigation:not(.navigation-processed), .section.specs:not(.navigation-processed)').addClass('navigation-processed').localScroll({
        duration : 800,
        easing : 'swing',
        offset : 0
      });

      // Remove popups from openlayers
      $('#popup_close:not(.popup-close-processed)').addClass('popup-close-processed').click(function() {
        $(this).parents('#popup').hide('fast', function() {
          $(this).remove();
        });
        return false;
      });

      // Expand or collapse user account form on profile page
      $('.user-account-intro .cat-arrow:not(.cat-arrow-processed)').addClass('cat-arrow-processed').click(function() {
        $('.account-info-slide').slideToggle(0);
        $(this).toggleClass("expanded");
      });
      
      // Expand or collapse order history
      $('.order-history td .cat-arrow:not(.cat-arrow-processed)').addClass('cat-arrow-processed').each(function(){
        var elem = $(this);
        elem.parents('tr').next('.row-history').hide();
        elem.click(function() {
          elem.parents('tr').next('.row-history').toggle();
          elem.toggleClass("expanded");
        });
      });
      
      // Custom Checkboxes
      $('.form-checkbox, .olButton').not('.checker .form-checkbox, .checker input, .uniform-processed').addClass('uniform-processed')
      .uniform();

      $('#edit-field-type-of-inspiration-value').not('.uniform-processed').addClass('uniform-processed')
      .uniform();

      $('#views-exposed-form-commerce-product-grid-block-1 #edit-field-products-nid-selective')
      .uniform();

      // Close Status Messages
      var closeMessage = $('.close-message:not(.close-message-processed)').addClass('close-message-processed');
      var oMessages = $(".messages, .messages_wrapper");
      if (closeMessage.length > 0) {
        closeMessage.css('cursor', 'pointer').click(function() {
          oMessages.slideUp('fast', function() {
            $(this).remove();
          });
        });
      }

      var oContinueIcon = $('.continue-icon');
      if (oContinueIcon.length > 0) {
        oContinueIcon.click(function() {
          $('#cboxClose').trigger('click');
        });
      }

      // Close Baloons
      var oCloseBaloon = $('.close-pink-baloon:not(.close-pink-baloon-processed)').addClass('.close-pink-baloon-processed');
      if (oCloseBaloon.length > 0) {
        oCloseBaloon.click(function() {
          var oBaloonWrapper = $(this).parents('.baloon-wrapper');
          var first_login = $(this).find('span').find('a');

          if (first_login.length) {
            // Click the link inside the first-login popup to flag the first login as closed
            first_login.click();
          }

          oBaloonWrapper.slideUp('fast', function() {
            $(this).remove();
          });
        });
      }

      // Close Press Kit
      var oCloseKit = $('.presskit-close:not(.presskit-close-processed)').addClass('presskit-close-processed');
      if (oCloseKit.length > 0) {
        oCloseKit.click(function() {
          // Click the link inside the close kit to flag the presskit as closed
          oCloseFlagLink = $('a', this);
          if (oCloseFlagLink.length) {
            oCloseFlagLink.click();
          }

          var oKitWrapper = $(this).parents('.new-presskit');
          oKitWrapper.slideUp('slow', function() {
            $(this).remove();
          });
        });

        oCloseKit.next().click(function() {
          // Click the download link to flag the presskit as closed
          oCloseFlagLink = $(this).prev().find('a');
          if (oCloseFlagLink.length) {
            oCloseFlagLink.click();
          }

          var oKitWrapper = $(this).parents('.new-presskit');
          oKitWrapper.slideUp('slow', function() {
            $(this).remove();
          });
        });
      }

      // Enable jScrollPane for popup elements where 'Inner Height' is bigger than
      // 'Panel Height'
      var oScrollTab = $('.ui-tabs-panel, #popup_contentDiv:not(:has(.openlayers-popup .popup-tabs))').not('#profile-tabs .ui-tabs-panel');
      if (oScrollTab.length > 0) {
        oScrollTab.each(function(index, element) {
          // For each dealer popup, add the desired first-line text
          $('#popup_contentDiv:has(.views-field-field-contact-info):not(.processed)')
          .addClass('processed')
          .prepend('<p class="first-line"><em>'
              + Drupal
              .t('Contact this dealer to find out which products are on display')
              + '</em></p>');

          // For calculating wether or not to show a scrollbar, first show the
          // tab content (because otherwise height = 0)
          $(this).css('cssText', 'display: block !important');
          var totalHeight = 0;
          $(this).children().each(function() {
            totalHeight = totalHeight + $(this).outerHeight();
          });

          // after calculating height, set display to normal (!important is
          // removed, because in the jquery.css there is also an !important
          // for display:none)
          $(this).css('cssText', 'display: block');
          if (totalHeight > 250) {
            $(this).wrapInner('<div class="to-scroll" />');
            $(this).find('.to-scroll').wrapInner('<div class="viewport" />');
            $(this).find('.viewport').wrapInner('<div class="overview" />');
            $(this)
            .find('.to-scroll')
            .prepend('<div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>');
            $(this).find('.to-scroll').tinyscrollbar({
              size : 225,
              sizethumb : 13
            });
            $(this).find('.to-scroll').tinyscrollbar_update();
          }
        });

        // Let links in openlayers popup open in new layer
        $('.openlayers-tooltip-description').find('a').attr("target", "_blank").click(function () {
          Drupal.behaviors.analyticsTracker.track('Outbound links', 'Click', $(this).attr('href'));
        });

        // Update the scrollbar so scrolling works again on tabs other than the
        // first
        $('.openlayers-popup .ui-tabs-nav li a').click(function() {
          var href = $(this).attr('href');

          $(href).find('.to-scroll').tinyscrollbar({
            size : 225,
            sizethumb : 13
          });
          $(href).find('.to-scroll').tinyscrollbar_update();
        });
      }

      var oEmbeddedVideo = $('#cboxNode .video:not(.video-processed)').addClass('video-processed');
      if (oEmbeddedVideo.length > 0) {
        var iVideoHeight = oEmbeddedVideo.height();
        var iVideoTopMargin = ($(window).height() - iVideoHeight) * 0.5;
        oEmbeddedVideo.css({
          'margin-top' : iVideoTopMargin
        });
      }

      if ($('#profile-tabs').length > 0) {
        $('#profile-tabs').tabs();
      }
      
      // Hide Page Scroll in the Terms and Conditions popup in Checkout Review 
      var oCheckoutReviewPopup = $('.page-checkout #cboxLoadedContent');
      if (oCheckoutReviewPopup.length > 0) {
        oCheckoutReviewPopup.parents('body.page-checkout').css({'overflow': 'hidden'});
        var oClose = oCheckoutReviewPopup.parent().find('#cboxClose');
        oClose.click(function(){
          oCheckoutReviewPopup.parents('body.page-checkout').css({'overflow': 'auto'});
        });
        $(document).bind('keydown', function(e) { 
            if (e.which == 27) {
              oCheckoutReviewPopup.parents('body.page-checkout').css({'overflow': 'auto'});
            }
        }); 
      } 

      // Scroll to Who-is-Moooi at Company page
      var oCompanyPage = $('.page.company:not(.company-processed)').addClass('company-processed');
      if (oCompanyPage.length > 0) {
        var iWhoOffset = oCompanyPage.find('#who-hash').offset().top;
        $('body,html').animate({
          scrollTop : iWhoOffset
        }, 50);
      }
    },
    detach : function(context) {
    },
};

Drupal.behaviors.images = {
    windowHeight : $(window).height(),
    windowWidth : $(window).width(),
    screenHeight : $(screen).height,
    screenWidth : $(screen).width,

    attach : function(context, settings) {
      $('.product-image, .inspiration-media, .product-section, .section-company').not('.product-family, .product-designer, .product-specs, .product-download, #vacancies-hash')
      .height(Drupal.behaviors.images.windowHeight);
      $('.page-checkout #cboxWrapper .node-page').height(Drupal.behaviors.images.windowHeight - (Drupal.behaviors.images.windowHeight / 5)).css({'margin-top': ((Drupal.behaviors.images.windowHeight / 5) * 0.5) });

      // Sliders

      // !!! Remove field collection links for correct display of amount of
      // LI-items, otherwise the 'edit' and 'delete' links of each filed item also
      // count as slide
      $('.field-collection-view-links').remove();

      var oFamilySection = $('#family-hash');
      if (oFamilySection.length > 0) {
        oFamilySection.height('auto');
      }

      var oMapCheckboxesLabel = $('.openlayers_plus-blockswitcher .checkbox label, .openlayers_plus-blockswitcher .checkbox label .fake-check');
      if (oMapCheckboxesLabel.length > 0) {
        oMapCheckboxesLabel.each(function(i) {
          $(this).toggle(
              function() {
                $(this).removeClass('checked').addClass('unchecked');
                $(this).find('.fake-check').removeClass('checked').addClass('unchecked');
              },
              function() {
                $(this).removeClass('unchecked').addClass('checked');
                $(this).find('.fake-check').removeClass('unchecked').addClass('checked');
              });
        });
      }

      // Override for background "region" images, remove a class if it is a half
      // fullscreen
      var oBgRegion = $('.background.region');
      if (oBgRegion.length > 0) {
        if (oBgRegion.parent().hasClass('inspiration-media')) {
          oBgRegion.removeClass('background');
        }
      }

      // CV Equal Heights
      var oCvItem = $('.cv-item .cv-list');
      if (oCvItem.length > 0) {
        var iTallest = 0;
        setTimeout(function() {
          oCvItem.each(function() {
            var elem = $(this);
            elem.css({
              'padding-top' : 0,
              'margin-bottom' : 0
            });
            var elemHeight = elem.outerHeight();
            if (elemHeight > iTallest) {
              iTallest = elemHeight;
            }
          });
          var iTallestParent = 0;
          oCvItem.each(function() {
            var elemHeight = $(this).outerHeight();
            var iPaddingTop = (iTallest - elemHeight) * 0.5;
            $(this).css({
              'padding-top' : iPaddingTop + 10,
              'margin-bottom' : iPaddingTop + 10
            });
            var iParentHeight = $(this).parent().outerHeight();
            if (iParentHeight > iTallestParent) {
              iTallestParent = iParentHeight;
            }
          });
          oCvItem.each(function() {
            var elemParentHeight = $(this).parent().outerHeight();
            if (elemParentHeight < iTallestParent) {
              $(this).parent().css({
                'margin-top' : 20
              });
            }
          });
        }, 2000);
      }
      
    // Vacancies Equal Heights
      var oVacItem = $('.vacancy-item .vacancy-summary');
      if (oVacItem.length > 0) {
        var iTallestVac = 0;
        setTimeout(function() {
          oVacItem.each(function() {
            var el = $(this);
            el.css({
              'padding-top' : 0,
              'margin-bottom' : 0
            });
            var elHeight = el.outerHeight();
            if (elHeight > iTallestVac) {
              iTallestVac = elHeight;
            }
          });
          var iTallestParent = 0;
          oVacItem.each(function() {
            var elHeight = $(this).outerHeight();
            var iPaddingTop = (iTallestVac - elHeight) * 0.5;
            $(this).css({
              'padding-top' : iPaddingTop + 10,
              'margin-bottom' : iPaddingTop + 10
            });
            $(this).next().css({
              'margin-top' : iPaddingTop + 20
            });
          });
        }, 2000);
      }
      

      $(document.body).once('moooi_init', Drupal.behaviors.images.init);
    },
    init : function() {
      // On Window Resize
      $(window).resize(Drupal.behaviors.images.onResize);

      // Directly init
      Drupal.behaviors.images.scaleToWindowSize();


      // Add loaded class to the body. Removes loading style
      $(document.body).addClass('loaded').load(
          Drupal.behaviors.images.setSectionHeight);
    },
    onResize : function() {
      Drupal.behaviors.images.scaleToWindowSize();
      Drupal.behaviors.images.setSectionHeight();
    },
    scaleToWindowSize : function() {
      var oFrontItemList = $('.front-carousel-item');
      var resizedWidth = $(window).width();
      var resizedHeight = $(window).height();
      var listLength = $('.viewport ul li').length;
      var oProductSlider = $('.product-slider');

      $('.product-slider, .product-image, .inspiration-media, .product-section, .section-company')
      .not('.product-family, .product-designer, #people-hash, .product-specs, .product-download')
      .height(resizedHeight);
      
      $('.page-checkout #cboxWrapper .node-page').height(resizedHeight - (resizedHeight / 5)).css({'margin-top': ((resizedHeight / 5) * 0.5) });;

      // Check if the section height is less than the window height - If so resize to window height
      var oLessThanWindowHeight = $('.product-specs, .product-download, .product-designer');
      if (oLessThanWindowHeight.length > 0) {
        oLessThanWindowHeight.each(function() {
          var el = $(this);
          if (el.find('.right')) {
            // We only need to set the height to the specific section if there in NO inspiration
            // Even if there is NOT an inspiration there, set the height and the style of the wrapper correctly
            el.find('.right').css({
              'position' : 'relative',
              'top' : 'inherit',
              'right' : 'inherit',
              'margin-top' : 'inherit'
            }).height(resizedHeight);
          } else {

          if (el.height() < resizedHeight) {
            el.height(resizedHeight);
            el.find('.right').css({
              'position' : 'relative',
              'top' : 'inherit',
              'right' : 'inherit',
              'margin-top' : 'inherit'
            });
          }
          }
        });
      }

      if (oProductSlider.length > 0 || oFrontItemList.length > 0) {
        $('.viewport').not('.not-full, .to-scroll .viewport').height(
            resizedHeight);
        $('.viewport ul').not('.not-full ul').width(resizedWidth * listLength);
        $('.viewport ul li').not('.not-full ul li').width(resizedWidth).height(
            resizedHeight);
        $('.product-slider, .product-image, .inspiration-media, .front-carousel')
        .height(resizedHeight);
      }

      var oBackgroundRegionPar = $('.background.region p, .region-background p, .login-page.half');
      if (oBackgroundRegionPar.length > 0) {
        oBackgroundRegionPar.height(resizedHeight);
      }

      var oResizedFluidDiv = $('.fluid.with-inspiration, .inspiration-media.fluid, .front-carousel-item .fluid, .background.region, .section-company .fluid')
      .not('#colorbox .fluid, #people-hash .fluid');
      oResizedFluidDiv.each(function(i) {
        var oResizedFluidImg = $(this).find('img');
        var iResizedFluidDivRatio = $(this).width() / $(this).height();
        var imageSize = Drupal.behaviors.images.getImageSize(oResizedFluidImg[0]);

        var iResizedFluidImgAspectRatio = imageSize.width / imageSize.height;

        if (iResizedFluidImgAspectRatio >= iResizedFluidDivRatio) {
          oResizedFluidImg.css({
            'margin-top' : 0,
            'width' : 'auto',
            'height' : '100%'
          });

          var iImageWidthDiff = ($(this).width() - (($(this).height() / imageSize.originalHeight) * imageSize.originalWidth)) / 2;
          oResizedFluidImg.css({
            'margin-left' : iImageWidthDiff
          });
        } else {
          oResizedFluidImg.css({
            'margin-left' : 0,
            'width' : '100%',
            'height' : 'auto'
          });

          if ((imageSize.originalHeight / (imageSize.originalWidth / $(this).width())) > resizedHeight) {
            var iHeightDiff = ($(this).height() - (imageSize.originalHeight / (imageSize.originalWidth / $(this).width()))) / 2;
            oResizedFluidImg.css({
              'margin-top' : iHeightDiff
            });
          }
        }
      });
      var oFullMap = $('.product-where, .section-contact');
      if (oFullMap.length > 0) {
        oFullMap.find('.openlayers-container').height(resizedHeight);
        oFullMap.find('.openlayers-map').height(resizedHeight);
      }

      /*
       * Function for default (resize) behaviour on images that don't have the
       * 'fullscreen option' enabled. Keeps the image always 100% visible in the
       * viewport
       */
      $('.not-fullscreen > img, .not-fullscreen .media-imagemap > img').each(function() {

        var el = $(this);
        // initial setting needed for measurement
        var iResizedWidth = resizedWidth;
        if (el.parent().hasClass('half')) {
          iResizedWidth = resizedWidth / 2;
        }
        el.parent().css({
          'height' : resizedHeight,
          'width' : iResizedWidth
        });
        el.css({
          'height' : 'auto',
          'width' : '100%'
        });

        // Determine image width.
        var imageSize = Drupal.behaviors.images.getImageSize(this);      
        var oImageWidth = (resizedHeight / imageSize.height) * imageSize.width;

        if (oImageWidth > iResizedWidth) {
          el.css({
            'width' : '100%',
            'height' : 'auto'
          });

          var oImagemapImgHeight = (iResizedWidth / imageSize.width) * imageSize.height;

          var iHeightDiff = (resizedHeight - oImagemapImgHeight) / 2;
          el.parent().css({
            'height' : oImagemapImgHeight,
            'width' : el.parent().hasClass('half') ? '50%' : '100%',
                'margin-top' : iHeightDiff,
                'margin-left': 0,
                'margin-right': 0
          });
        }

        else {
          var iWidthDiff = (iResizedWidth - oImageWidth) / 2;
          el.parent().css({
            'height' : resizedHeight,
            'width' : oImageWidth,
            'margin-top' : 0,
            'margin-left' : iWidthDiff,
            'margin-right' : iWidthDiff
          });
        }

        // Also re-position the popup of projects
        var imageMap = el.parent();
        imageMap.find('.marker-product').each(function() {
          el.css({
            'top' : imageMap.height() - 300
          });
        });
      });
      
      /*
       * Function for fullscreen images
       */
      $('.fullscreen > img').each(
          function() {
            // Determine image width.
            var imageSize = Drupal.behaviors.images.getImageSize(this);
            var oImageWidth = (resizedHeight / imageSize.height) * imageSize.width;
            var oImageHeight = (resizedWidth / imageSize.width) * imageSize.height;

            if (resizedWidth > oImageWidth) {
              // fill up the whole width, don't leave blank spaces
              $(this).css({
                'height' : 'auto',
                'width' : '100%'
              });
              
              var iHeightDif = (resizedHeight - oImageHeight) / 2;
              $(this).parent().parent().css({
                'height' : resizedHeight,
                'width' : resizedWidth
              });
              $(this).parent().css({
                'height' : oImageHeight,
                'width' : '100%',
                'margin-top' : iHeightDif,
                'margin-left' : 0
              });
            } else {
              // fill up the whole height, don't leave blank spaces
              $(this).css({
                'height' : '100%',
                'width' : 'auto'
              });
              
              var iWidthDif = (resizedWidth - oImageWidth) / 2;
              $(this).parent().parent().css({
                'height' : resizedHeight,
                'width' : resizedWidth
              });
              $(this).parent().css({
                'height' : '100%',
                'width' : oImageWidth,
                'margin-top' : 0,
                'margin-left' : iWidthDif
              });
            }
          });

      /*
       * Function for resizing the project images
       */
      $('.product-project .imagemap, li.product-image-item').not('.not-fullscreen').each(function() {
        var oImagemap = $(this).find('.media-imagemap');
        var oImagemapImg = $(this).find('.media-imagemap > img');

        // intial setting needed for measurement
        $(this).css({
          'height' : resizedHeight,
          'width' : resizedWidth
        });
        oImagemap.css({
          'height' : resizedHeight,
          'width' : resizedWidth
        });

        oImagemapImg.css({
          'height' : '100%',
          'width': 'auto'
        });

        var imageSize = Drupal.behaviors.images.getImageSize(oImagemapImg[0]);      
        var oImagemapImgWidth = (resizedHeight / imageSize.height) * imageSize.width;

        if (oImagemapImgWidth < resizedWidth) {
          oImagemapImg.css({
            'width' : '100%',
            'height' : 'auto'
          });

          var oImagemapImgHeight = (resizedWidth / imageSize.width) * imageSize.height;

          var iHeightDiff = (resizedHeight - oImagemapImgHeight) / 2;
          oImagemap.css({
            'height' : oImagemapImgHeight,
            'width' : '100%',
            'margin-top' : iHeightDiff,
            'margin-left': 0
          });
        }

        else {
          var iWidthDiff = (resizedWidth - oImagemapImgWidth) / 2;
          oImagemap.css({
            'height' : resizedHeight,
            'width' : oImagemapImgWidth,
            'margin-top' : 0,
            'margin-left' : iWidthDiff
          });
        }


        // Also re-position the popup of projects
        oImagemap.find('.marker-product').each(function() {
          $(this).css({
            'top' : imageSize.height - 300 + iHeightDif
          });
        });
      });

      // Front Thumbnails
      var oFrontThumbs = $('.front-thumb');
      if (oFrontThumbs.length > 0) {
        iFrontThumbWidth = oFrontThumbs.width();
        // Calculations to get the 16/9 ratio
        i16 = iFrontThumbWidth / 16;
        i9 = i16 * 9;
        oFrontThumbs.height(i9);

        oFrontThumbs.each(function() {
          oFrontThumbImg = $(this).find('img');
          var imageSize = Drupal.behaviors.images.getImageSize(oFrontThumbImg[0]);

          // if we have two images next to eachother
          if ($(this).children().children().hasClass('two-images')) {
            //retrieve second imagesize
            var secondImageSize = Drupal.behaviors.images.getImageSize(oFrontThumbImg[1]);

            $(this).removeClass('landscape').addClass('portrait');
            var iFirstImageWidthDiff = ($(this).width() / 2 - (($(this).height() / imageSize.originalHeight) * imageSize.originalWidth)) / 2;
            var iSecondImageWidthDiff = ($(this).width() / 2  - (($(this).height() / secondImageSize.originalHeight) * secondImageSize.originalWidth)) / 2;

            $(oFrontThumbImg[0]).css({
              'margin-left' : iFirstImageWidthDiff
            });
            $(oFrontThumbImg[1]).css({
              'margin-left' : iSecondImageWidthDiff
            });

          }

          // else, we only have one image  
          else{
            if (imageSize.mode == 'portrait') {
              // if we have a portrait image, we want to show the width 100% and height auto, so add class 'portrait'
              $(this).removeClass('landscape').addClass('portrait');

              var iImageWidthDiff = ($(this).width() - (($(this).height() / imageSize.originalHeight) * imageSize.originalWidth)) / 2;               

              $(oFrontThumbImg[0]).css({
                'margin-left' : iImageWidthDiff
              });
            }
            else {
              // if we have a landscape image, we want to show the height 100% and width auto, so add class 'landscape'
              $(this).removeClass('portrait').addClass('landscape');

              var iImageHeightDiff = ($(this).height() - (imageSize.originalHeight / (imageSize.originalWidth / $(this).width()))) / 2;

              $(oFrontThumbImg[0]).css({
                'margin-top' : iImageHeightDiff
              });

            }
          }
        });
      }

      // Designer's Products
      var oColThumbs = $('.product-col');
      if (oColThumbs.length > 0) {
        iColThumbWidth = oColThumbs.width();
        iColThumbHeight = oColThumbs.height();
        oColThumbs.each(function() {
          oColThumbImg = $(this).find('img');
            oColThumbImg.css({
              'height' : 'auto', 
              'width': '100%' 
            });
        });
      }

      // Download Thumbs
      var oDowThumbs = $('#edit-file-hi-res .form-item.form-type-checkbox');
      
      if (oDowThumbs.length > 0) {
        oDowThumbs.find('img').load(function(){
          iDowThumbWidth = oDowThumbs.width();
          iDowThumbHeight = oDowThumbs.height();
          oDowThumbs.each(function() {
            oDowThumbImg = $(this).find('img');
            iDowThumbImgWidth = oDowThumbImg.width();
            iDowThumbImgHeight = oDowThumbImg.height();
            if (iDowThumbImgHeight <= iDowThumbImgWidth) {
              $(this).removeClass('portrait').addClass('landscape');
              iCollDiff = (iDowThumbHeight - iDowThumbImgHeight) * 0.5;
              oDowThumbImg.css({
                'height' : 'auto',
                'padding-top' : iCollDiff, 
                'padding-bottom' : iCollDiff 
              });
            } else {
              $(this).removeClass('landscape').addClass('portrait');
              oDowThumbImg.css({
                'height' : iDowThumbHeight,
                'padding-top' : 0, 
                'padding-bottom' : 0 
              });
            }
          });
        });
        $('#edit-file-hi-res .form-item.form-type-checkbox:nth-child(3n)').addClass('last-col');
      }
     

      // Scroll to front thumbs
      var oFrontClickToggleThumbs = $('.show-front-thumbs');
      var oFrontThumbsHeight = $('.front-thumbs').outerHeight();
      if (oFrontClickToggleThumbs.length > 0) {
        oFrontClickToggleThumbs.toggle(function() {
          $('html, body').stop().animate({
            scrollTop : oFrontThumbsHeight
          }, 500, function() {
            oFrontClickToggleThumbs.removeClass('up').addClass('down');
          });
        }, function() {
          $('html, body').stop().animate({
            scrollTop : 0
          }, 500, function() {
            oFrontClickToggleThumbs.removeClass('down').addClass('up');
          });
        });
        $('html, body').stop().animate({
          scrollTop : 0
        }, 500);
      }

      // Resize and center Designer image in viewport
      var oDesignerImageWrapper = $('.designer-image');
      if (oDesignerImageWrapper.length > 0) {
        var oDesignerImage = oDesignerImageWrapper.find('img');
        oDesignerImageWrapper.height(resizedHeight * 0.25);

        var imageSize = Drupal.behaviors.images.getImageSize(oDesignerImage[0]);

        var imgWidth = (oDesignerImageWrapper.height() / imageSize.height) * imageSize.width;

        var iMargin = (imgWidth - oDesignerImageWrapper.width()) * 0.5;
        oDesignerImage.css({
          'margin-left' : -iMargin
        });
      }

      // Center Page-Content such as forms in window
      var oPageContent = $('#main.page.user');
      if (oPageContent.length > 0) {
        var iPageContentWidth = oPageContent.outerWidth();
        var iPageContentHeight = oPageContent.outerHeight();
        var iPageContHeightDiff = (resizedHeight - iPageContentHeight) * 0.5;
        var iPageContWidthDiff = (resizedWidth - iPageContentWidth) * 0.5;
        oPageContent.css({
          'top' : iPageContHeightDiff,
          'left' : iPageContWidthDiff
        });
      }

      var oEmbeddedVideo = $('.section.inspiration.video');
      if (oEmbeddedVideo.length > 0) {
        var iVideoHeight = oEmbeddedVideo.height();
        var iVideoTopMargin = (resizedHeight - iVideoHeight) * 0.5;
        oEmbeddedVideo.css({
          'margin-top' : iVideoTopMargin
        });
      }     

      var oNodeSplashpage = $('.node-splashpage');
      if (oNodeSplashpage.length > 0) {
        var iNodeSplashpage = oNodeSplashpage.height();

        if (iNodeSplashpage > resizedHeight) {
          oNodeSplashpage.css({
            'margin-top' : 100
          });
          oNodeSplashpage.find('div.content').css({
            'height' : resizedHeight - 200,
            'overflow-y' : 'scroll'
          });
        } else {
          var iNodeSplashpageTopMargin = (resizedHeight - iNodeSplashpage) * 0.5;
          oNodeSplashpage.css({
            'margin-top' : iNodeSplashpageTopMargin
          });
        }
      }

      var oCvViewport = $('#cv-hash .viewport');
      if (oCvViewport.length > 0) {
        if (oCvViewport.height() < resizedHeight) {
          var iDiff = (resizedHeight - oCvViewport.height()) * 0.5;
          oCvViewport.css({
            'padding-top' : iDiff 
          });
        }
      }
      
      var oVacViewport = $('#vacancies-hash .viewport');
      if (oVacViewport.length > 0) {
        if (oVacViewport.height() < resizedHeight) {
          var iDiff = (resizedHeight - oVacViewport.height()) * 0.5;
          oVacViewport.css({
            'padding-top' : iDiff
          }); 
        }
      }

      // Equal spacing in main-menu
      $('#header .main-menu').each(function() {
        var oLoginWidth = $(this).find('.login-welcome-block').outerWidth();
        var oMenuUl = $(this).find('ul.menu');
        oMenuUl.css({
          'width' : resizedWidth - (195 + oLoginWidth)
        });
      });

      if ($('iframe.full').length > 0) {
        $('iframe.full').height($(window).height() - $('.main-menu').height());
      }


      // Check if the people section is bigger than window height and set it to
      // the new height
      var oPeopleHash = $('#people-hash');
      if (oPeopleHash.length > 0) {
        var iPeopleWrapperHeight = oPeopleHash.find('.people-wrapper').height();

        if (iPeopleWrapperHeight > resizedHeight) {
          oPeopleHash.css({'min-height' : iPeopleWrapperHeight + 60, 'height' : 'auto'}); // 60 is for the padding
        } else {
          oPeopleHash.css({'min-height' : resizedHeight, 'height' : 'auto'});
        }
      }

      // Product Download Section Checkboxes
      var oCheckboxesWrapper = $('#edit-file-hi-res');
      if (oCheckboxesWrapper.length > 0) {
        var iCBWidth = (oCheckboxesWrapper.width() * 0.33) - 10;
        var oCheckboxes = oCheckboxesWrapper.find('.form-item.form-type-checkbox');
        oCheckboxes.each(function() {
          $(this).width(iCBWidth).height(iCBWidth);
        });
      }

      // Set first pager-item active (also on initialize)
      $('ul.indicator').each(function() {
        $(this).find('li.active').removeClass('active');
        $(this).find('li').first().addClass('active');
      });

      // Set the height of the Moooi Boook
      var oPageIframe = $('.node-type-page .page iframe');
      if (oPageIframe.length == 1) {
        oPageIframe.parents('#main').removeClass('news').height(resizedHeight);
        var iIframeHeightToApply = resizedHeight - oPageIframe.offset().top - 26;
        if (iIframeHeightToApply < 760) {
          oPageIframe.parent().css({
            'height' : iIframeHeightToApply
          });
        } else {
          oPageIframe.parent().css({
            'height' : 760
          });
        }
      }

      var oNodePage = $('.node-type-page .page');
      if (oNodePage.length > 0) {
        oNodePage.find('#page-title').css({
          'margin-top' : 60,
          'text-align' : 'center'
        });
      }

      // Set the #main height to window height if is less, in order to be able to
      // scroll to view the footer
      var oSectionMain = $('.not-front #main');
      if (oSectionMain.length > 0) {
        // Overrides for different pages
        // -Page Not Found
        if (oSectionMain.hasClass('not-found')) {
          oSectionMain.find('.opacity-block').css({
            'top' : 0,
            'left' : '18%',
            'position' : 'fixed'
          });
        }
        // -Register Complete
        if (oSectionMain.parents().hasClass('page-user-register-complete')) {
          oSectionMain.find('.opacity-block').css({
            'position' : 'fixed'
          });
        }
        // -Register Password
        if (oSectionMain.hasClass('password')) {
          oSectionMain.find('.opacity-block').css({
            'top' : 0,
            'left' : '18%',
            'position' : 'fixed'
          });
        }
        // -Register As
        if (oSectionMain.hasClass('register-as')) {
          oSectionMain.find('.opacity-block').css({
            'position' : 'relative'
          });
          if (oSectionMain.height() < resizedHeight) {
            oSectionMain.height(resizedHeight + 150);  
          }
        }
        // -Commerce
        if (oSectionMain.hasClass('cart') || oSectionMain.hasClass('checkout') || oSectionMain.hasClass('checkout-review') || oSectionMain.hasClass('checkout-complete') ) {
          if (oSectionMain.height() < resizedHeight) {
            oSectionMain.height(resizedHeight);  
          }
        }
        // -User Tabs
        if (oSectionMain.find('.logged-in').hasClass('logged-in')) {
          $('.logged-in .ui-tabs li a').click(function() {
            var oParentSection = $(this).parents('#main');

            oParentSection.css({
              'height' : '100%'
            });
            if (oParentSection.height() < resizedHeight) {
              oParentSection.height(resizedHeight);
            }
          });
        }
        // Architect User
        if (oSectionMain.find('#profile-tabs .cat-arrow').length > 0) {
          if (oSectionMain.height() < resizedHeight) {
            oSectionMain.height(resizedHeight);  
          }
          $('#profile-tabs .cat-arrow').click(function() {
            var oParentSection = $('#main');
            var iLoggedInSectionHeight = oParentSection.find('.logged-in').height();
            if ( iLoggedInSectionHeight > resizedHeight ) {
              oSectionMain.css({
                'height' : '100%'
              });
            } else {
              oParentSection.height(resizedHeight);
            }
          });
        }
      }
    },
    setSectionHeight : function() {
      // Set the #main height to window height if is less, in order to be able to
      // scroll to view the footer
      var oSectionMain = $('.not-front #main');
      if (oSectionMain.length > 0) {
        var resizedHeight = $(window).height();
        if (oSectionMain.height() < resizedHeight) {
          oSectionMain.height(resizedHeight);
        }
      }
    },
    getImageSize : function(img) {
      var size;

      if (img && !img.complete && img.attributes.width) {
        size = {
            width : parseInt(img.attributes.width.value),
            height : parseInt(img.attributes.height.value)
        };
      } else {
        size = {
            width : $(img).width(),
            height : $(img).height(),
        };
      }
      // Set mode
      size.mode = size.width > size.height ? 'landscape' : 'portrait';

      if (img && img.attributes.width) {
        size.originalWidth = img.attributes.width.value;
        size.originalHeight = img.attributes.height.value;
      }
      return size;
    }
};

Drupal.behaviors.navigation = {
    attach : function(context, settings) {

      /*
       * Function for hiding the main menu and show/hide on toggle
       */
      var oWhereToHideMenu = $('#main.page.product:not(.main-page-processed), #main.page.company:not(.main-page-processed), #main.page.inspiration:not(.main-page-processed)').addClass('.main-page-processed');
      if (oWhereToHideMenu.length > 0) {
        var oMainMenu = $('#navigation .main-menu');
        var oMenuToggle = $('#menu-toggle:not(.menu-toggle-processed)').addClass('menu-toggle-processed');
        var menuMargin = $('.main-menu').outerHeight();
        $('#main.page.inspiration').parent().find('#navigation').css({
          'top' : '-42px'
        });
        if (oMainMenu.length > 0) {
          oMenuToggle.click(function() {
            var marginNavigation = parseInt($('#navigation').css('top'), 10);

            if (marginNavigation == 0) {
              $('#navigation').animate({
                top : -menuMargin
              }, {
                duration : 300
              });
            } else {
              $('#navigation').animate({
                top : 0
              }, {
                duration : 300
              });
            }
            return false;
          });
        }
      }

      /*
       * Function for initial styling when showing or hiding of the main menu is
       * neccesary
       */
      var oStaticHeader = $('#menu-static-header:not(.menu-static-header-processed)').addClass('menu-static-header-processed');

      if (oStaticHeader.length > 0) {
        // We are on a page where is a submenu and where the main menu should be
        // hided on scroll, so initialize the needed styles:
        var headerMargin = $('#sub-menu').height();
        $('#navigation').css({
          position : 'relative'
        });
        $('#sub-menu').css({
          position : 'relative',
          'z-index' : 999
        }); // set submenu relative with z-index so it falls over content
        $('#menu-toggle').hide(); // Hide the menu expander
        $('section#main').css({
          'margin-top' : (-headerMargin - 2)
        }); // push the main section to top

        oStaticHeader.css({
          visibility : 'hidden'
        }); // Don't display the static header

      }

      // Show - Hide Footer (with Prevent Div Jumping)
      var oStaticFooter = $('.static-footer:not(.static-footer-processed)').addClass('static-footer-processed');
      var oFooterNormal = $('.normal-footer:not(.normal-footer-processed)').addClass('normal-footer-processed');
      if (oStaticFooter.length > 0) {
        var oFooterStaticRegion = $('.static-footer .region-footer');
        oFooterNormal.css({
          visibility : 'hidden'
        }); // Initialize normal footer

        var oFooterToggle = $('#footer-toggle');
        oFooterNormal.find('#footer-toggle').remove(); // Remove toggle arrow from normal footer

        var iFooterHeight = oFooterStaticRegion.height();
        oFooterStaticRegion.hide();
        oFooterToggle.click(function() {
          oFooterToggle.toggleClass('visible');
          oFooterStaticRegion.css({
            height : iFooterHeight
          }).stop().slideToggle(150);
          return false;
        });
      }

      // Show - Hide User Area
      var oUserName = $('.login-welcome-block h4:not(.welcome-processed)').addClass('welcome-processed');
      if (oUserName.length > 0) {
        var oUsermenu = $('.welcome-menu');
        oUserName.click(function() {
          oUsermenu.slideToggle('fast');
          oUserName.toggleClass('active');
        });
      }
      
      $('.commerce-add-to-cart:not(.add-to-cart-processed)').addClass('add-to-cart-processed').find('input.form-submit').mousedown(function(){
        var marginNavigation = parseInt($('#navigation').css('top'), 10);

        if (marginNavigation != 0) {
          $('#navigation').animate({
            top : 0
          }, {
            duration : 300
          });
        }
        
        if($('.welcome-menu').is(':hidden')) {
          $('.welcome-menu').slideToggle('fast');
          $('.login-welcome-block h4').toggleClass('active');
        }
      });

      var scrollMargin = $('.main-menu').outerHeight();
      var initScroll;

      if ($('#menu-static-header').length > 0
          && $(window).scrollTop() == 0) {
        initScroll = setTimeout(function() {
          $.scrollTo({
            top : scrollMargin,
            left : 0
          }, 800);
        }, 3000);
      }

      // On Window Scroll
      $(window).scroll(
          function(e) {
            // as soon as we're scrolling, stop the automatic scrolling to the
            // top of the page without the menu
            clearTimeout(initScroll);
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            $('.welcome-menu').hide(); // Hide Welcome menu for any reason if we start scrolling

            // Get each Sections Height, Compare it with the scroll position
            // and set an 'active' class if it is in the window viewport
            var oProductSection = $('.product-section, .section-company');
            if (oProductSection.length > 0) {
              oProductSection.each(function() {
                var iSeparatorTotalHeight = 0;
                var oSeparator = $(this).prev('.section-separator');
                if (oSeparator.length > 0) {
                  var iSeparatorContentHeight = oSeparator.outerHeight();
                  var iSeparatorMarginBottom = oSeparator.css(
                      'margin-bottom').replace('px', '');
                  var iSeparatorTotalHeight = (parseFloat(iSeparatorContentHeight) + parseFloat(iSeparatorMarginBottom));
                }
                var iSectionTopPosition = $(this).position().top - iSeparatorTotalHeight;
                var iSectionHeight = $(this).height();
                var iSectionBottomPosition = iSectionTopPosition + iSectionHeight + iSeparatorTotalHeight;
                if (scrollPosition >= (iSectionTopPosition - 1) && scrollPosition <= (iSectionBottomPosition)) {
                  var attr = $(this).attr('id');
                  var oSubMenu = $('#sub-menu ul li:not(.no-nav) a');
                  oSubMenu.each(function() {
                    var oSubMenuHref = $(this).attr('href').split('#');
                    var oSubMenuHrefHash = oSubMenuHref[1];
                    if (attr == oSubMenuHrefHash) {
                      oSubMenu.not(this).removeClass('current');
                      $(this).addClass('current');
                    }
                  });
                } else if (scrollPosition < 42) {
                  var oSubMenu = $('#sub-menu ul li a').not('.no-nav');
                  oSubMenu.removeClass('current');
                }
              });
            }

            // Toggle between static and normal menu
            var oStaticHeader = $('#menu-static-header');
            var oHeaderNormal = $('#menu-normal-header');
            if (oStaticHeader.length > 0) {
              var headerMargin = $('#sub-menu').height();

              if (scrollPosition >= oHeaderNormal.height()) {
                oStaticHeader.css({
                  visibility : 'visible', 
                  'height': 'inherit'
                });
                oHeaderNormal.css({
                  visibility : 'hidden'
                });
                $('#navigation').css({
                  position : 'fixed'
                });
                $('#menu-static-header').css({
                  position : 'relative'
                });
                $('#menu-toggle').show();
                $('#navigation').css({
                  top : -oHeaderNormal.height()
                });
                $('section#main').css({
                  'margin-top' : 0
                });

              } else {
                oStaticHeader.css({
                  visibility : 'hidden',
                  'height': 0
                });
                oHeaderNormal.css({
                  visibility : 'visible'
                });
                $('#navigation').css({
                  position : 'relative'
                });
                $('#menu-static-header').css({
                  position : 'relative'
                });
                $('#menu-toggle').hide();
                $('#navigation').css({
                  top : 0
                });
                $('section#main').css({
                  'margin-top' : (-headerMargin - 2)
                });
              }
            }

            // Toggle between static and normal footers
            var oFooterStatic = $('.id-footer.static-footer');
            var oFooterNormal = $('.id-footer.normal-footer');
            if (oFooterStatic.length > 0) {
              var iFooterStaticOffset = oFooterStatic.offset().top;
              var iFooterNormalOffset = oFooterNormal.offset().top;
              if (iFooterStaticOffset >= iFooterNormalOffset) {
                oFooterStatic.css({
                  visibility : 'hidden'
                });
                oFooterNormal.css({
                  visibility : 'visible'
                });
              } else {
                oFooterStatic.css({
                  visibility : 'visible'
                });
                oFooterNormal.css({
                  visibility : 'hidden'
                });
              }
            }

            // Make the right side follow the left 
            var oLeftSection = $('.half.left');
            if (oLeftSection.length > 0) {
              var iScrollPosition = $(window).scrollTop();

              oLeftSection.each(function() {
                var element = $(this);
                var iElementHeight = element.outerHeight();
                var oRightSection = element.parent().find('.half.right');
                oRightSection.css({
                  'position' : 'relative',
                  'top' : 'inherit',
                  'right' : 'inherit',
                  'margin-top' : 'inherit'
                });
                oRightSection.height(windowHeight);

                if (element.height() > windowHeight) {
                  var iLeftSectionPositionTop = element.parent().offset().top;
                  var iLeftSectionPositionBottom = (element.offset().top + iElementHeight)
                  - iScrollPosition;
                  if (iLeftSectionPositionBottom >= windowHeight
                      && iLeftSectionPositionTop <= iScrollPosition) {
                    oRightSection.css({
                      'position' : 'fixed',
                      'top' : 0,
                      'right' : 0,
                      'margin-top' : 0
                    });
                  } else {
                    if (iLeftSectionPositionBottom <= windowHeight) {
                      oRightSection.css({
                        'position' : 'relative',
                        'top' : 'inherit',
                        'right' : 'inherit',
                        'margin-top' : iElementHeight - windowHeight
                      });

                    } else {
                      oRightSection.css({
                        'position' : 'relative',
                        'top' : 'inherit',
                        'right' : 'inherit',
                        'margin-top' : 0
                      });

                    }
                  }
                }
              });

              if ($('.download.half.left').length > 0) {
                var oDownloadElement = $('.download.half.left .download-inner');
                var iDownloadElementHeight = oDownloadElement.outerHeight();
                //Second download button + balloon
                var oDownloadButton = $('#edit-submit-second');
                var oBaloonWrapper = $('.baloon-wrapper');
                var iLeftSectionPositionTop = oDownloadElement.parent().offset().top;
                var iLeftSectionPositionBottom = oDownloadElement.parent().offset().top + iDownloadElementHeight;

                if (iLeftSectionPositionBottom >= iScrollPosition
                    && iLeftSectionPositionTop <= iScrollPosition) {
                  oDownloadButton.css({
                    'position' : 'fixed',
                    'top' : '100px',
                    'left' : '10px',
                    'margin-top' : 0
                  });
                  oBaloonWrapper.css({
                    'position' : 'fixed',
                    'top' : '100px',
                    'left' : '4%',
                    'margin-top' : 0
                  });
                } else {
                  if (iLeftSectionPositionBottom <= iScrollPosition ) {
                    oBaloonWrapper.css({
                      'position' : 'absolute',
                      'top' : '100px',
                      'left' : '4%',
                      'margin-top' : iDownloadElementHeight 
                    });
                    oDownloadButton.css({
                      'position' : 'absolute',
                      'top' : '100px',
                      'left' : '10px',
                      'margin-top' : iDownloadElementHeight 
                    });
                  } else {
                    oBaloonWrapper.css({
                      'position' : 'absolute',
                      'top' : '100px',
                      'left' : '4%',
                      'margin-top' : 0
                    });
                    oDownloadButton.css({
                      'position' : 'absolute',
                      'top' : '100px',
                      'left' : '10px',
                      'margin-top' : 0
                    });
                  }
                }
              }
            }
          });
    },
    detach : function(context) {
    }
};

;
var $ = jQuery;

/**
 * Sets a behavior for active products on product pages
 * 
 * The behavior makes sure that the active product is selected on the imagemarker image
 */
Drupal.behaviors.product_by_project = {
  
  attach: function(context, settings) {
    //Set active product on the product page
    //Check if we are on a product page, if current_product is set and if current_product is true
    if($('.node-type-product', context).length && typeof Drupal.settings.products !== 'undefined' && Drupal.settings.products.current_product) {
      
      var bullets = $('a.bullet.product-' + Drupal.settings.products.current_product, context);
      if(bullets.length) {
        //Add the class current, Unbind the click events and set a new click event wich prevents the default click
        bullets.addClass('current').unbind('click').click(function(event) {
          event.preventDefault();
          return false;
        });
      }
    }
  }
};;
var $ = jQuery;

Drupal.behaviors.elastislide = {

  attach : function(context, settings) {

    var oProductSlider = $('.product-slider', context);
    if (oProductSlider.length > 0) {
      oProductSlider.elastislide({
        imageW : Drupal.behaviors.images.screenWidth,
        margin : 0,
        border : 0,
        minItems : 1
      });
      
      //Force active pager item on init
      Drupal.behaviors.elastislide.setActivePager(oProductSlider);
    }

    var oFrontSlider = $('.front-carousel', context);
    if (oFrontSlider.length > 0) {
      oFrontSlider.elastislide({
        imageW : Drupal.behaviors.images.screenWidth,
        margin : 0,
        border : 0,
        minItems : 1
      });
      
      //Force active pager item on init
      Drupal.behaviors.elastislide.setActivePager(oFrontSlider);
      
      // Click on a thumbnail will scroll to active slide
      $(".front-thumbs", context).delegate("a", "click", function() {
        oFrontSlider.slideToItem($(this).parent().index());
        return false;
      });
      

      var mouse_inside = false;
      //Can't find a way outside the anonymous function
      //Used to autoplay the front slider
      setInterval(function(e){
        if(mouse_inside) {
          return;
        }
        var current_index = $('.indicator .active',context).index();
        var max_index = $('.indicator li',context).size();
        
        if(current_index +1 == max_index) {
          current_index = -1;
        }
        oFrontSlider.slideToItem(current_index + 1);
      }, 8000);
      
      //Keep track if the mouse is inside the slider
      oFrontSlider.mouseenter(function(e) {
        mouse_inside = true;
      });
      
      //Keep track if the mouse left the slider
      oFrontSlider.mouseleave(function(e) {
        mouse_inside = false;
      });
    }

    var oCvSlider = $('#cv-hash', context);
    if (oCvSlider.length > 0) {
      oCvSlider.elastislide({
        imageW : 330,
        margin : 20,
        border : 0,
        minItems : 1
      });
      
      //Force active pager item on init
      Drupal.behaviors.elastislide.setActivePager(oCvSlider);
    }
    var oVacanciesSlider = $('#vacancies-hash', context);
    if (oVacanciesSlider.length > 0) {
      oVacanciesSlider.elastislide({
        imageW : 450,
        margin : 0,
        border : 0,
        minItems : 1
      });
      
      //Force active pager item on init
      Drupal.behaviors.elastislide.setActivePager(oVacanciesSlider);
    }

    var oProductProject = $('.product-project', context);
    if (oProductProject.length > 0) {
      oProductProject.elastislide({
        imageW : Drupal.behaviors.images.screenWidth,
        margin : 0,
        border : 0,
        minItems : 1
      });
      
      //Force active pager item on init
      Drupal.behaviors.elastislide.setActivePager(oProductProject);
    }

    var oProductFamily = $('.product-family', context);
    if (oProductFamily.length > 0) {
      var iFamilyProductsLength = oProductFamily.find('ul li').length;
      if (iFamilyProductsLength > 6) {
        oProductFamily.elastislide({
          imageW : 300,
          margin : 0,
          border : 0,
          minItems : 1
        });
      }
      else {
        oProductFamily.elastislide({
          imageW : 300,
          margin : 0,
          border : 0,
          minItems : 1
        });
        oProductFamily.find('ul').addClass('less-items');
      }
      
      //Force active pager item on init
      Drupal.behaviors.elastislide.setActivePager(oProductFamily);
    }

    var oProductCollection = $('.products.overview', context);
    if (oProductCollection.length > 0) {
      oProductCollection.elastislide({
        imageW : 300,
        margin : 1,
        border : 1,
        minItems : 5
      });
      
      //Force active pager item on init
      Drupal.behaviors.elastislide.setActivePager(oProductCollection);

      $('.view-collection .product-caroussel li a').css({
        'border-width' : 1
      });
    }

    // Create pagers for each slider
    var oCarouselLists = $('.product-slider .viewport ul, .product-project .viewport ul, .front-carousel .viewport ul', context).not('.processed').addClass('processed');

    oCarouselLists.each(function(index) {
      if ($(this).length > 0) {
        // Place pager after the list
        $(this).parents('.viewport').parent()
            .append('<ul class="indicator" />');

        // For each list-item of the elastislide, create a pager-element
        $(this).find('li').each(
            function(index) {
              var pagerItem = '<li class="pager ' + index + '"><a href="#">'
                  + index + '</a></li>';
              $(pagerItem).appendTo(
                  $(this).parents('.viewport').parent().find('ul.indicator'));
            });
      }
    });

    // Click on indicator will scroll to active slide
    $("ul.indicator li", context).delegate("a", "click", function(context) {
      // Check on which slider we're acting
      var slider = $(this).parent().parent().parent();
      var sliderClass = slider.attr('class');
      slider = getCorrespondingSliderObject(sliderClass);

      slider.slideToItem($(this).parent().index());
      return false;
    });

    var oCollectionNav = $('.view-collection .es-nav').not('.processed').addClass('processed');
    if (oCollectionNav.length > 0) {
      oCollectionNav.each(function() {
        var oParent = $(this).parent().parent();
        $(this).appendTo(oParent);
        $(this).children().show();
        $(this).wrap('<div class="collection-arrows" />');
      });
    }

    function getCorrespondingSliderObject(sliderClass) {
      switch (sliderClass) {
      case 'product-slider product-section':
        return oProductSlider;
        break;
      case 'front-carousel':
        return oFrontSlider;
        break;
      case 'product-project product-section':
        return oProductProject;
      }
    }
  },
  setActivePager : function(sliderObject) {
    // Force the first slide to be active. It sometimes happens that no slide 
    // is active and this breaks the paging and auto slide.
    setTimeout(function() {
      sliderObject.slideToItem(0);
    }, 1);
  }
};;
var $ = jQuery;

Drupal.behaviors.collection = {
  
  attach: function(context, settings) {
    
    $('#edit-field-product-designer-nid-wrapper').remove();
  
    Drupal.behaviors.collection.oProductCategory   = $('.view-collection .product-category');
    Drupal.behaviors.collection.oProductCategoryH3 = $('.view-collection .product-category h3');
    
    if(Drupal.behaviors.collection.oProductCategory.length > 0) {
      $(window).resize(Drupal.behaviors.collection.onResize);
      Drupal.behaviors.collection.onResize();

      // Expand - Collapse Collection Categorie
      Drupal.behaviors.collection.oProductCategoryH3.each(function() {
        $(this).toggle(function() {
          $(this).parents('.item-list').find('.es-nav').hide();
          var oProUl = $(this).parents('.item-list').find('ul.product-caroussel');
          
          oProUl.width(Drupal.behaviors.collection.iProOverviewWidth);
          var iProUlHeight = oProUl.height();
          oProUl.animate({marginLeft: 0});
          $(this).addClass('expanded');
          $(this).parents('.item-list').animate({height: iProUlHeight}, 500, function(){
            // -Collection Categories height of footer
            var oParentSection = $(this).parents('#main');
            oParentSection.css({'height': '100%'});
            
            if ( oParentSection.height() < $(window).height()) {
              oParentSection.height($(window).height());
            }
            
            $('html, body').animate({scrollTop:$(this).offset().top - 84}, 'slow');
          });
        }, function() {
          $(this).removeClass('expanded');
          $(this).parents('.item-list').animate({height: Drupal.behaviors.collection.iItemListHeight}, 500, function(){
            $(this).find('ul.product-caroussel').width($(this).find('ul.product-caroussel li').size() * $(this).find('ul.product-caroussel li').width() + 234);
            $(this).find('.es-nav').show();
            // reset indicator
            $(this).find('.es-nav').find('.es-nav-prev').removeClass('active').addClass('inactive');
            $(this).find('.es-nav').find('.es-nav-next').removeClass('inactive').addClass('active');
            
            // -Collection Categories height of footer
            var oParentSection = $(this).parents('#main');
            oParentSection.css({'height': '100%'});
            
            if ( oParentSection.height() < $(window).height()) {
              oParentSection.height($(window).height());
            }
            
            $('html, body').stop().animate({scrollTop : 0}, 500);
          });
        });
      });
    }
  },
  onResize: function() {
    // 107 = Sum of Main-menu + Exposed filters + Breadcrumb
    Drupal.behaviors.collection.iItemListHeight = ($(window).height() - 107) * 0.2;
    
    // Grab the original widths & heights
    Drupal.behaviors.collection.oProductCategoryH3.each(function() {
      Drupal.behaviors.collection.iProOverviewWidth = $(this).parents('.item-list').find('.products.overview').width() + 8;
      
      if ($(this).hasClass('expanded')) {
        $(this).removeClass('expanded');
        $(this).parents('.item-list').animate({height: Drupal.behaviors.collection.iItemListHeight}, 500, function(){
          $(this).find('ul.product-caroussel').width($(this).find('ul.product-caroussel li').size() * $(this).find('ul.product-caroussel li').width() + 234);
          $(this).find('.es-nav').show();
          $('html, body').stop().animate({scrollTop : 0}, 500);
        });
      }

      Drupal.behaviors.collection.oProductCategoryH3.css({
        'margin-top': (Drupal.behaviors.collection.iItemListHeight / 2) - 8
      });
    });
    
    var oCollectionList = $('.view-content-collection .item-list');
    var oCollectionListLi = $('li', oCollectionList);
    if (oCollectionList.length > 0) {
     oCollectionList.height(Drupal.behaviors.collection.iItemListHeight);
     oCollectionListLi.height(Drupal.behaviors.collection.iItemListHeight);
     oCollectionList.find('.collection-arrows').height(Drupal.behaviors.collection.iItemListHeight);
    }
    
    /*
     * Determine the desired width of the Collection overview page 
     */
    if ($('.view-collection').length > 0){
      var categoryWidth = $('.product-category').width();
      var arrowsWidth = $('.collection-arrows').width();
      
      $('.view-collection .products').width($(window).width() - categoryWidth - arrowsWidth);
    }
    
    if ( $('.view-content-collection .item-list') > 0) {
      $('.viewport').not('.not-full, .to-scroll .viewport').height($(window).height());
      $('.viewport ul').not('.not-full ul').width($(window).width() * listLength);
      $('.viewport ul li').not('.not-full ul li').width(resizedWidth).height($(window).height());
    }
    
    Drupal.behaviors.collection.setCollectionItemImageHeight();
  },
  setCollectionItemImageHeight: function() {
    // Collection Thumbnails
    var oCollThumbs = $('.view-collection. .product-caroussel > li');
    if(oCollThumbs.length > 0) {
      iCollThumbWidth = oCollThumbs.width();
      iCollThumbHeight = oCollThumbs.height();
      oCollThumbImg = oCollThumbs.find('img');
      oCollThumbImgHeight = iCollThumbWidth - 14;
      oCollThumbs.each(function(){
        if(iCollThumbWidth <= iCollThumbHeight) {
          $(this).removeClass('portrait').addClass('landscape');
          iCollDiff = (iCollThumbHeight - oCollThumbImgHeight) * 0.5;
          oCollThumbImg.css({'margin-top': iCollDiff, 'height' : 'auto' });
        } else {
          $(this).removeClass('landscape').addClass('portrait');
          oCollThumbImg.css({'margin-top': 0, 'height' : iCollThumbHeight });
        }
      });
    }
  }
  
};;
var $ = jQuery;

Drupal.behaviors.downloads = {
  
  attach: function(context, settings) {
    $('#moooi-multifile-form #edit-image .form-item img').hover(
       function () {
         $('#download-hash .product-inspiration .big_image').css({'position' : 'absolute', 'right' : 0});
         
         var src = $(this).attr('src');
         var ratio = $(this).width() / $(this).height();
         var screenratio = ($(window).width() / 2) / $(window).height();
         
         $('#download-hash .product-inspiration .big_image')
           .height($(window).height())
           .width(Math.ceil(($(window).width() / 2)))
           .show();
         
         src = src.replace('styles/project_thumb_product/public/', 'styles/inspiration_half/public/');
         
         var img = $("<img src='" + src + "' />");

         // Make AJAX call, preload img
         img.load(function(){
           $(this).css({'height' : '100%', 'width' : 'auto'});
           
           $('#download-hash .product-inspiration .big_image').append(img);
           
           if ($(this).width() > ($(window).width() / 2)){
             $(this).css({'width' : '100%', 'height' : 'auto'});
             var marginTop = ($(window).height() - $(this).height()) * 0.5;
             $(this).css({'margin-top' : marginTop});
           }
           else {
             var marginLeft = (($(window).width() / 2) - $(this).width()) * 0.5;
             $(this).css({'margin-left' : marginLeft});
           }
         });
       }, 
       function () {
         $('#download-hash .product-inspiration .big_image').css({'position' : 'absolute', 'right' : '-99999px'});
         $('#download-hash .product-inspiration .big_image').empty();
       }
   );
 }
};;
/*
 * Behavior that handles 'Show name' and 'Show product name' on impressions & collection
 */  
Drupal.behaviors.shownames = {
 attach: function (context, settings) {
   // Check if product name must be shown
   if ($.cookie("show-product-name") == 'true'){
     $('#show-product-name', context).addClass('checked');
     $('ul.product-caroussel .product-name', context).show();
   }

   $('#show-product-name', context).not('.processed').addClass('processed').click(function() {
     if($(this).hasClass('checked')){
       //set show-product-name cookie to false
       $.cookie('show-product-name', 'false');
       $(this).removeClass('checked');
       $('ul.product-caroussel .product-name', context).hide();
     }
     else {
       //set show-product-name cookie to true
       $.cookie('show-product-name', 'true');
       $(this).addClass('checked');
       $('ul.product-caroussel .product-name', context).show();
     }
     return false;
   });
   
   //Check if project name must be shown
   if ($.cookie("show-project-name") == 'true'){
     $('#show-project-name', context).addClass('checked');
     $('.impression-thumb-link h3', context).show();
   }

   $('#show-project-name', context).not('.processed').addClass('processed').click(function() {
     if($(this).hasClass('checked')){
       //set show-project-name cookie to false
       $.cookie('show-project-name', 'false');
       $(this).removeClass('checked');
       $('.impression-thumb-link h3', context).hide();
     }
     else {
       //set show-project-name cookie to true
       $.cookie('show-project-name', 'true');
       $(this).addClass('checked');
       $('.impression-thumb-link h3', context).show();
     }
     return false;
   });
   
   // Check if 'Show name' on impressions is checked, then shows newly loaded impressions with name visible
   if ($('#show-project-name', context).hasClass('checked')){
     $('.impression-thumb-link h3', context).show();
   }
 },
 detach: function (context, settings, trigger) {
 }
};;
