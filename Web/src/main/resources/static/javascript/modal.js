//모달 열기
$('#data_tbody').on('dblclick', 'tr', function(e) {
	$('#modal').addClass('show');
	var target = e.currentTarget;
	var idNumber = $(target).find("input").val();

	$.ajax({
		type: "GET",
		url: "/member/search/" + idNumber,
		contentType: "application/json; charset=utf-8",
		success: function(result) {
			console.log(result);
			$("#modal").find("input[name=hiddenIdNumber]").val(idNumber);
			$("#modal").find("input[name=hiddenRegDate]").val(result.reg_date);
			$("#modal").find("input[name=modifyId]").val(result.id);
			$("#modal").find("input[name=modifyName]").val(result.name);
			$("#modal").find("input:radio[name='modifyGender']:radio[value=" + result.gender + "]").prop('checked', true);
			$("#modal").find("select[name='nation3']").val(result.nation).prop("selected", true);
			$("#modal").find("select[name='nation3']").trigger("change");
			$("#modal").find("select[name='city3']").val(result.city).prop("selected", true);
		},
		error: function(request, error) {
			alert("fail");
			alert("code:" + request.status + "\n" +
				"message:" + request.responseText + "\n" + "error:" + error);
		}
	});
});

//모달 닫기
$(document).on('click', '#close', function(e) {
	$('#modal').removeClass('show');
});

//모달 저장
$(document).on('click', '#save', function(e) {
	let data = {
		id_number: $("#modal").find("input[name=hiddenIdNumber]").val(),
		reg_date: $("#modal").find("input[name=hiddenRegDate]").val(),
		id: $("#modal").find("input[name=modifyId]").val(),
		name: $("#modal").find("input[name=modifyName]").val(),
		gender: $('input[name=modifyGender]:checked').val(),
		nation: $("#nation3").val(),
		city: $("#city3").val()
	};

	console.log(data);

	$.ajax({
		type: "POST",
		url: "/member/saveChange",
		data: JSON.stringify(data),
		contentType: "application/json; charset=utf-8",
		success: function() {
			alert("수정되었습니다.");
			location.href = "/member/list";
		},
		error: function(request, error) {
			alert("fail");
			alert("code:" + request.status + "\n" +
				"message:" + request.responseText + "\n" + "error:" + error);
		}
	});

	$('#modal').removeClass('show');
});