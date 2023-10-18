	function turnBack() {
		setTimeout(function () {
			$("*").show();
			$("script").hide();
		}, 3000);
	}

	$("#link").click(function () {
		$("[href]").hide();
		turnBack();
	});
	$("#link2").click(function () {
		$("a[target='_black']").hide();
		turnBack();
	});
	$("#link3").click(function () {
		$("a[target!='_black']").hide();
		turnBack();
	});
	$("#btn").click(function () {
		$(":button").text("텍스트 변경");
	});
	$("#odd").click(function () {
		$("tr:odd").css("background-color", "#EDE8E8");
		$("tr:even").css("background-color", "white");
	});
	$("#even").click(function () {
		$("tr:even").css("background-color", "#DCFFDE");
		$("tr:0th").css("background-color", "black");
		$("tr:odd").css("background-color", "white");
		
	});
