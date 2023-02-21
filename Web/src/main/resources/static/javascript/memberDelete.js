$(function() {
	$("#btn-delete").on("click", function() {

		var checkedAll = [];

		$("table[id='memberTable'] input[name='choice']:checked").each(function() {
			checkedAll.push($(this).val());
			console.log("선택된 정보 :" + checkedAll);
		})

		if (confirm("삭제 하시겠습니까?")) {
			$.ajax({
				type: "POST",
				url: "/member/delete",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(checkedAll),
				success: function() {
					alert("삭제 되었습니다.");
				},
				error: function(request, error) {
					alert("fail");
					alert("code:" + request.status + "\n" +
						"message:" + request.responseText + "\n" + "error:" + error);
				}
			});

		} else {
			alert("삭제를 취소했습니다.")
		}
	})
});
