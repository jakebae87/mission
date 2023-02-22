$(function() {
	$("input:radio[name=gender]").on("click", function() {

		$.ajax({
			type: "POST",
			url: "/member/radioSearch",
			data: { gender: $('input[name=gender]:checked').val() },
			success: function(result) {
				$('#memberTable > tbody').empty();
				if (result.length >= 1) {
					result.forEach(function(item) {
						str = "<tr>"
						str += "<td><input type='checkbox' name='choice' value=" + item.id_number + " /></td>";
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
