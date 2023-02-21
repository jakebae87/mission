$(function() {
	$("#btn-addRow").on("click", function() {

		var table = document.getElementById('data_tbody');

		var newRow = table.insertRow(0);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);
		var cell4 = newRow.insertCell(3);
		var cell5 = newRow.insertCell(4);
		var cell6 = newRow.insertCell(5);

		cell1.innerHTML = "<input type='checkbox' name='choice'/></td>";

		cell2.innerHTML = "<input type='text' name='id' id='id' placeholder='아이디'>";

		cell3.innerHTML = "<input type='text' name='id' id='name' placeholder='이름'>";

		cell4.innerHTML = "남" + "<input type ='radio'name ='gender' value = '남'/>"
			+ "여" + "<input type ='radio'name ='gender' value = '여'/>";

		cell5.innerHTML = "<select id='nation' name='nation'>"
			+ "</select >";
		cell6.innerHTML = "<select id='city' name='city'>"
			+ "</select >";


		const datas = {
			한국: ['서울', '부산'],
			일본: ['도쿄', '오사카'],
			중국: ['상하이', '칭다오'],
		};

		$(function() {
			init();

			$(document).on('change', 'select[name=nation]', function() {
				const nation = $(this).val();
				$('select[name=city] option').each(function(idx, item) {
					if ($(this).data('class') == nation || $(this).val() == '') {
						$(this).show();
					} else {
						$(this).hide();
					}
				});
				$('select[name=city]').val('');
			})
		});

		// Selectbox option 생성
		function init() {
			let selectNation = '<option value="">국가를 선택하세요.</option>';
			let selectCity = '<option value="">도시를 선택하세요.</option>';

			for (const key in datas) {
				selectNation += `<option value="${key}">${key}</option>`;

				const list = datas[key];
				for (let i = 0; i < list.length; i++) {
					selectCity += `<option value="${list[i]}" data-class="${key}">${list[i]}</option>`;
				}
			}

			$('select[name=nation]').html(selectNation);
			$('select[name=city]').html(selectCity);

			$('select[name=sbx_item] option').each(function(idx, item) {
				if ($(this).val() == '') return true;
				$(this).hide();
			});
		}

	})
});
