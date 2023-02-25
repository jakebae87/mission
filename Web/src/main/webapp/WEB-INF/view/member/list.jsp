<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src='//cdnjs.cloudflare.com/ajax/libs/jquery-chained/1.0.1/jquery.chained.min.js'></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js"></script>
<script lang="javascript" src="https://cdn.sheetjs.com/xlsx-0.19.2/package/dist/xlsx.full.min.js"></script>

<style type="text/css">
	@import url("/css/All.css");
</style>

</head>

<body>
	<div style="border: 1px solid;">
		<div style="margin: 30px 30px 30px 30px;">
			<div id="memberForm">
				<div style="margin: 5px">
					<!-- 아이디 입력 -->
					<input type="text" name="id" id="id" placeholder="아이디">

					<!-- 이름 입력 -->
					<input type="text" name="name" id="name" placeholder="이름">

					<!-- 성별 선택 -->
					남
					<input type="radio" name="gender" value="남">
					여
					<input type="radio" name="gender" value="여">
					<br>

				</div>

				<!-- 국가/도시 선택 -->
				<div style="margin: 5px">
					<select id="nation1" name="nation1">
						<option value="">-- 국가 선택 --</option>
						<option value="한국">한국</option>
						<option value="일본">일본</option>
						<option value="중국">중국</option>
					</select>
					<select id="city1" name="city1">
						<option value="">-- 도시 선택 --</option>
						<option class="한국" value="서울">서울</option>
						<option class="한국" value="부산">부산</option>
						<option class="일본" value="도쿄">도쿄</option>
						<option class="일본" value="오사카">오사카</option>
						<option class="중국" value="상하이">상하이</option>
						<option class="중국" value="칭다오">칭다오</option>
					</select>

					<!-- 날짜 선택 -->
					<input type="text" name="sdate" id="sdate" value="" />
					<input type="text" name="edate" id="edate" value="" />
				</div>


			</div>

			<div style="margin: 5px">
				<button type="button" id="btn-search">조회</button>
				<button type="button" id="btn-addRow">추가</button>
				<button type="button" id="btn-regist">저장</button>
				<button type="button" id="btn-excel">엑셀다운</button>
				<button type="button" id="btn-delete">삭제</button>
			</div>

		</div>


		<div style="margin: 30px 30px 30px 30px;">
			<table id="memberTable" border="1" style="border-spacing: 30px;">
				<thead>
					<tr>
						<th>선택</th>
						<th>아이디</th>
						<th>이름</th>
						<th>성별</th>
						<th>국가</th>
						<th>도시</th>
					</tr>
				</thead>

				<tbody id='data_tbody'></tbody>
			</table>
		</div>

		<!-- 모달 -->
		<div class="modal" id="modal">
			<div class="modal_body">
				<div class="m_body">
					<div><input value="아이디" readonly/><input type="text" name="modifyId"></input></div>
					<div><input value="이름" readonly/><input type="text" name="modifyName"/></div>
					<div>
						<input value="성별" readonly/>
						남
						<input type="radio" name="modifyGender" value="남">
						여
						<input type="radio" name="modifyGender" value="여">
					</div>
					<div>
						<input value="국가" readonly/>
						<select id="nation1" name="nation1">
							<option value="">-- 국가 선택 --</option>
							<option value="한국">한국</option>
							<option value="일본">일본</option>
							<option value="중국">중국</option>
						</select><br/>
						<input value="도시" readonly/>
						<select id="city1" name="city1">
							<option value="">-- 도시 선택 --</option>
							<option class="한국" value="서울">서울</option>
							<option class="한국" value="부산">부산</option>
							<option class="일본" value="도쿄">도쿄</option>
							<option class="일본" value="오사카">오사카</option>
							<option class="중국" value="상하이">상하이</option>
							<option class="중국" value="칭다오">칭다오</option>
						</select>
					</div>
					<div id="close">취소</div>
				</div>
			</div>
		</div>

	</div>

	<script src="/javascript/memberResearch.js"></script>
	<script src="/javascript/memberRegist.js"></script>
	<script src="/javascript/datepicker.js"></script>
	<script src="/javascript/memberDelete.js"></script>
	<script src="/javascript/addRow.js"></script>
	<script src="/javascript/radioSearch.js"></script>
	<script>
		//엑셀 다운
        $("#btn-excel").on("click",function () {
			var wb = XLSX.utils.table_to_book(document.getElementById('memberTable'), {
			sheet : "시트명",raw : true});
      		XLSX.writeFile(wb, ('파일명.xlsx'));
		})
		
		//국가,도시 연결
        $("#city1").chained("#nation1");
		
        //모달 열기
        $('#data_tbody').on('dblclick', 'tr', function () {
            $('#modal').addClass('show');
            var idNumber = document.getElementById("choice").value;
            console.log(idNumber);
        });
        
        //모달 닫기
        $(document).on('click', '#close', function (e) {
            $('#modal').removeClass('show');
        });
    </script>


</body>
</html>