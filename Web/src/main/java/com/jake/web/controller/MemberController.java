package com.jake.web.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jake.web.entity.Member;
import com.jake.web.entity.SearchMember;
import com.jake.web.service.MemberService;

@Controller
public class MemberController {

	@Autowired
	private MemberService service;

	@GetMapping("/member/list")
	public String list(Model model) {

		List<Member> list = service.getList();

		model.addAttribute("list", list);

		return "/member/list";
	}
	
	@GetMapping("/member/search/{id_number}")
	@ResponseBody	
	public Member getMemberInfo(@PathVariable(value="id_number") Long idNum) {
		
		return service.getMemberInfo(idNum);
	}

	@PostMapping("/member/regist")
	public String registMember(@RequestBody Member member, Model model) {

		service.registMember(member);

		List<Member> list = service.getList();

		model.addAttribute("list", list);

		return "redirect:/member/list";

	}

	@PostMapping("/member/search")
	@ResponseBody
	public List<SearchMember> searchMember(@RequestBody SearchMember searchMember) {

		List<SearchMember> searchedList = service.searchMember(searchMember);

		return searchedList;
	}

	@PostMapping("/member/radioSearch")
	@ResponseBody
	public List<SearchMember> searchMember(@RequestParam("gender") String gender) {

		List<SearchMember> searchedList = service.searchMemberByGender(gender);

		return searchedList;
	}

	@PostMapping("/member/delete")
	public String deleteMember(@RequestBody List<String> checkedAll) {

		service.deleteMember(checkedAll);

		return "redirect:/member/list";

	}

	@PostMapping("/member/add")
	@ResponseBody
	public List<SearchMember> add(@RequestBody SearchMember searchMember) {

		List<SearchMember> searchedList = service.searchMember(searchMember);

		return searchedList;
	}

	@PostMapping("/member/download")
	public void excelDownload(@RequestBody List<String> checkedInfo, HttpServletResponse response) throws IOException {

		List<Member> list = service.getMemberList(checkedInfo);

		service.makeExcel(list, response);
	}

}
