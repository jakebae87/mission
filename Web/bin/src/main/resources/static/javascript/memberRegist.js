$(function() {
	$("#btn-regist").on("click", function() {
		let data = {
			id: $("#id2").val(),
			name: $("#name2").val(),
			gender: $('input[name=gender2]:checked').val(),
			nation: $("#nation2").val(),
			city: $("#city2").val()
			
		};
		
		if (data.id === "") {
			alert("아이디를 입력해주세요.");
			return false;
		} else if (data.name === "") {
			alert("이름을 입력해주세요.");
			return false;
		} else if (data.gender === undefined) {
			alert("성별을 선택해주세요.");
			return false;
		} else if (data.nation === "") {
			alert("국가를 선택해주세요.");
			return false;
		} else if (data.city === "") {
			alert("도시를 선택해주세요.");
			return false;
		} else {
			$.ajax({
				type: "POST",
				url: "/member/regist",
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				success: function() {
					alert("저장되었습니다.");
					location.href = "/member/list";
				},
				error: function(request, error) {
					alert("fail");
					alert("code:" + request.status + "\n" +
						"message:" + request.responseText + "\n" + "error:" + error);
				}
			});
		}
	})
});
