$(document).ready(function(){

	var numart = $("#artist-list").children().length;
	var minartwidth = 300;
	
	function resize() {
		var winsize = $(window).width();
		var total = 0;
		var i = 0;
		while (total < winsize) {
			total += minartwidth;
			i++;
		}
		var numartdisplay = i-1;
		$("#artist-list > div").each(function(index) {
			if (index >= numartdisplay) {
				$(this).css("display", "none");
			} else {
				$(this).css("display", "inline");
			}
		});
	}

	function mod(i,n) {
		var j = i-1;
		while (j<0) {
			j+=n;
		}
		while (j>=n) {
			j-=n;
		}
		return j+1;
	}

	resize();

	$(window).resize(function() {
		resize();
	});

	$("#rightbutton").click(function(){
		var i = 1;
		while (i <= numart) {
			if ($("#a" + mod(i,numart).toString()).css("display") != "none" &&
			$("#a" + mod((i-1),numart).toString()).css("display") == "none") {
				$("#a" + mod(i,numart).toString()).css("display", "none");
				var tmp = $("#a" + mod(i,numart).toString()).detach();
				tmp.appendTo("#artist-list");
				i++;
				while ($("#a" + mod(i,numart).toString()).css("display") != "none") {
					i++;
				}
				$("#a" + mod(i,numart).toString()).css("display", "inline");
				return;
			} else {
				i++;
			}
		}
	});
	$("#leftbutton").click(function(){
		var i = 1;
		while (i <= numart) {
			if ($("#a" + mod(i,numart).toString()).css("display") == "none" &&
			$("#a" + mod((i-1),numart).toString()).css("display") != "none") {
				$("#a" + mod(i,numart).toString()).css("display", "inline");
				i++;
				while ($("#a" + mod(i,numart).toString()).css("display") == "none") {
					i++;
				}
				$("#a" + mod(i,numart).toString()).css("display", "none");
				var tmp = $("#a" + mod(i,numart).toString()).detach();
				tmp.appendTo("#artist-list");
				return;
			} else {
				i++;
			}
		}
	});
	var currentlydisplayed = 0;
	$(".artist").click(function(){
		$("#ad" + currentlydisplayed).css("display", "none");
		$("#a" + currentlydisplayed).css("background", "none");
		var i = $(this).attr("id").slice(1);
		$("#ad" + i).css("display", "inline");
		$("#a" + i).css("background", "grey");
		currentlydisplayed = i;
	});
	$(".artist").hover(function(){
		$(this).children("p").css("display", "inline");
	}, function(){
		$(this).children("p").css("display", "none");
	});

});
