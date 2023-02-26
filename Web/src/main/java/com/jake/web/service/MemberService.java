package com.jake.web.service;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.jake.web.entity.Member;
import com.jake.web.entity.SearchMember;

public interface MemberService {

	List<Member> getList();

	void registMember(Member member);

	List<SearchMember> searchMember(SearchMember searchMember);

	void deleteMember(List<String> list);

	List<Member> getMemberList(List<String> checkedInfo);

	void makeExcel(List<Member> list, HttpServletResponse response);

	List<SearchMember> searchMemberByGender(String gender);

	Member getMemberInfo(Long idNum);
}
