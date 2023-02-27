$(function() {

	$("#btn-search").on("click", function() {

		var data = {
			id: $("div[id='memberForm'] input[name='id']").val(),
			name: $("div[id='memberForm'] input[name='name']").val(),
			gender: $("div[id='memberForm'] input[name='gender']:checked").val(),
			nation: $("div[id='memberForm'] select[name='nation1']").val(),
			city: $("div[id='memberForm'] select[name='city1']").val(),
			sdate: $("div[id='memberForm'] input[name='sdate']").val(),
			edate: $("div[id='memberForm'] input[name='edate']").val()
		}

		$.ajax({
			type: "POST",
			url: "/member/search",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(data),
			success: function(result) {
				$('#memberTable > tbody').empty();
				if (result.length >= 1) {
					result.forEach(function(item) {
						var genderClass = item.gender == '남' ? 'male' : 'female';
						str = "<tr class=" + genderClass + " > "
						str += "<td><input type='checkbox' value=" + item.id_number + " /></td>";
						str += "<td>" + item.id + "</td>";
						str += "<td>" + item.name + "</td>";
						str += "<td>" + item.gender + "</td>";
						str += "<td>" + item.nation + "</td>";
						str += "<td>" + item.city + "</td>"
						str += "</tr>"
						$('#memberTable').append(str);
					})
				}
			},
			error: function(request, error) {
				alert("fail");
				alert("code:" + request.status + "\n" +
					"message:" + request.responseText + "\n" + "error:" + error);
			}
		});
	})


});
