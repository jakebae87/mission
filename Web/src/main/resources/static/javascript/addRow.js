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

		cell2.innerHTML = "<input type='text' name='id2' id='id2' placeholder='아이디'>";

		cell3.innerHTML = "<input type='text' name='name2' id='name2' placeholder='이름'>";

		cell4.innerHTML = "남" + "<input type ='radio' name ='gender2' value = '남'/>"
						+ "여" + "<input type ='radio'name ='gender2' value = '여'/>";

		cell5.innerHTML = "<select id='nation2' name='nation2'></select >";
		cell6.innerHTML = "<select id='city2' name='city2'></select >";


		const datas = {
			한국: ['서울', '부산', '대전'],
			일본: ['도쿄', '오사카', '후쿠오카'],
			중국: ['상하이', '칭다오', '대련'],
		};

		$(function() {
			init();

			$(document).on('change', 'select[name=nation2]', function() {
				const nation = $(this).val();
				$('select[name=city2] option').each(function(idx, item) {
					if ($(this).data('class') == nation || $(this).val() == '') {
						$(this).show();
					} else {
						$(this).hide();
					}
				});
				$('select[name=city2]').val('');
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

			$('select[name=nation2]').html(selectNation);
			$('select[name=city2]').html(selectCity);

			$('select[name=sbx_item] option2').each(function(idx, item) {
				if ($(this).val() == '') return true;
				$(this).hide();
			});
		}

	})
});
