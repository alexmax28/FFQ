
//jQuery

var current_fs, next_fs, previous_fs;
var left, opacity, scale; 
var animating;
$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	next_fs.show(); 
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	
	previous_fs.show(); 

	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 0.8 + (1 - now) * 0.2;
			left = ((1-now) * 50)+"%";
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})









//加入
//2a
function open2a(){
	document.querySelector('.jump2a').style.display='block';	
	}
	function close2a(){
		document.querySelector('.jump2a').style.display='none';
	}
// 3a
function open3a(){
document.querySelector('.jump3a').style.display='block';	
}
function close3a(){
	document.querySelector('.jump3a').style.display='none';
}
// 4a
function open4a(){
	document.querySelector('.jump4a').style.display='block';	
}
function close4a(){
	document.querySelector('.jump4a').style.display='none';
}
//11a
function open11a(){
	document.querySelector('.jump11a').style.display='block';	
}
function close11a(){
	document.querySelector('.jump11a').style.display='none';
}
//12a
function open12a(){
	document.querySelector('.jump12a').style.display='block';	
}
function close12a(){
	document.querySelector('.jump12a').style.display='none';
}
//15a
function open15a(){
	document.querySelector('.jump15a').style.display='block';	
}
function close15a(){
	document.querySelector('.jump15a').style.display='none';
}
//18a
function open18a(){
	document.querySelector('.jump18a').style.display='block';	
}
function close18a(){
	document.querySelector('.jump18a').style.display='none';
}
//21a
function open21a(){
	document.querySelector('.jump21a').style.display='block';	
}
function close21a(){
	document.querySelector('.jump21a').style.display='none';
}
//24
function open24a(){
	document.querySelector('.jump24a').style.display='block';	
}
function close24a(){
	document.querySelector('.jump24a').style.display='none';
}
// 25
function open25a(){
	document.querySelector('.jump25a').style.display='block';	
}
function close25a(){
	document.querySelector('.jump25a').style.display='none';
}
// 26
function open26a(){
	document.querySelector('.jump26a').style.display='block';	
}
function close26a(){
	document.querySelector('.jump26a').style.display='none';
}
// 35
// function close35(){
// 	document.querySelector('.select35').setAttribute("disabled",'true');	
// }
// function open35(){
// 	document.querySelector('.select35').setAttribute("disabled",'false');	
// }


function open35(){
	document.querySelector('.select35_1').style.display='block';
	document.querySelector('.select35_2').style.display='block';
	document.querySelector('.select35_3').style.display='block';	
}
function close35(){
	document.querySelector('.select35_1').style.display='none';
	document.querySelector('.select35_2').style.display='none';
	document.querySelector('.select35_3').style.display='none';
}

// 36
function open36(){
	document.querySelector('.select36_1').style.display='block';
	document.querySelector('.select36_2').style.display='block';
	document.querySelector('.select36_3').style.display='block';	
}
function close36(){
	document.querySelector('.select36_1').style.display='none';
	document.querySelector('.select36_2').style.display='none';
	document.querySelector('.select36_3').style.display='none';
}









