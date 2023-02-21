$(function() {
	$("#btn-download").on("click", function() {

		//다중 선택값을 배열로 저장
		var checked = [];

		$("table[id='memberTable'] input[name='choice']:checked").each(function() {
			checked.push($(this).val());
			console.log("선택된 정보 :" + checked);
		})

		$.ajax({
			type: "POST",
			url: "/member/download",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(checked),
			success: function() {
				alert("다운로드 완료했습니다.");
			},
			error: function(request, error) {
				alert("fail");
				alert("code:" + request.status + "\n" +
					"message:" + request.responseText + "\n" + "error:" + error);
			}
		});


	})
});
