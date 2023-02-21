package com.jake.web.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jake.web.dao.MemberDao;
import com.jake.web.entity.Member;
import com.jake.web.entity.SearchMember;

@Service
public class MemberServiceImp implements MemberService {

	@Autowired
	private MemberDao memberDao;

	@Override
	public List<Member> getList() {

		List<Member> list = memberDao.getList();

		return list;
	}

	@Override
	public void registMember(Member member) {
		memberDao.registMember(member.getId(), member.getName(), member.getGender(), member.getNation(),
				member.getCity());
	}

	// 추가부분 시작
	@Override
	public List<SearchMember> searchMember(SearchMember searchMember) {
		List<SearchMember> list = memberDao.searchMember(searchMember.getId(), searchMember.getName(),
				searchMember.getGender(), searchMember.getNation(), searchMember.getCity(), searchMember.getSdate(),
				searchMember.getEdate());

		return list;
	}
	// 추가부분 끝

	@Override
	public void deleteMember(List<String> list) {
		memberDao.deleteMember(list);
	}

	@Override
	public List<Member> getMemberList(List<String> checkedInfo) {
		List<Member> list = memberDao.getMember(checkedInfo);
		return list;
	}

	@Override
	public void makeExcel(List<Member> list, HttpServletResponse response) {
		try (Workbook workbook = new XSSFWorkbook()) {
			Sheet sheet = workbook.createSheet("Members");

			System.out.println("엑셀 serviceImp: " + list);

			int rowIndex = 0;
			Row headerRow = sheet.createRow(rowIndex++);
			Cell headerCell1 = headerRow.createCell(0);
			headerCell1.setCellValue("아이디");

			Cell headerCell2 = headerRow.createCell(1);
			headerCell2.setCellValue("이름");

			Cell headerCell3 = headerRow.createCell(2);
			headerCell3.setCellValue("성별");

			Cell headerCell4 = headerRow.createCell(3);
			headerCell4.setCellValue("국가");

			Cell headerCell5 = headerRow.createCell(4);
			headerCell5.setCellValue("도시");

			Cell headerCell6 = headerRow.createCell(5);
			headerCell6.setCellValue("생성일");

			// 바디에 데이터를 넣어줍니다
			for (Member select : list) {
				Row bodyRow = sheet.createRow(rowIndex++);

				Cell bodyCell1 = bodyRow.createCell(0);
				bodyCell1.setCellValue(select.getId());

				Cell bodyCell2 = bodyRow.createCell(1);
				bodyCell2.setCellValue(select.getName());

				Cell bodyCell3 = bodyRow.createCell(2);
				bodyCell3.setCellValue(select.getGender());

				Cell bodyCell4 = bodyRow.createCell(3);
				bodyCell4.setCellValue(select.getNation());

				Cell bodyCell5 = bodyRow.createCell(4);
				bodyCell5.setCellValue(select.getCity());

				Cell bodyCell6 = bodyRow.createCell(5);
				bodyCell6.setCellValue(select.getReg_date());
			}

			response.setContentType("ms-vnd/excel");
			response.setHeader("Content-Disposition", "attachment;filename=estimate.xlsx");

			workbook.write(response.getOutputStream());
			workbook.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
