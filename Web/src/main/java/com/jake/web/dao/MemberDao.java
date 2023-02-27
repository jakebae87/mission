package com.jake.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.jake.web.entity.Member;
import com.jake.web.entity.SearchMember;

@Mapper
public interface MemberDao {
	List<Member> getList();

	void registMember(@Param("id") String id, @Param("name") String name, @Param("gender") String gender,
			@Param("nation") String nation, @Param("city") String city);

	// 추가부분 시작
	List<SearchMember> searchMember(@Param("id") String id, @Param("name") String name, @Param("gender") String gender,
			@Param("nation") String nation, @Param("city") String city, @Param("sdate") String sdate,
			@Param("edate") String edate);
	// 추가부분 끝

	void deleteMember(List<String> checkedAll);

	List<Member> getMember(List<String> checkedInfo);

	List<SearchMember> searchMemberByGender(@Param("gender") String gender);

	Member getMemberInfo(@Param("idNum") Long idNum);

	void saveChange(@Param("id_number") int id_number, @Param("id") String id, @Param("name") String name, @Param("gender") String gender,
			@Param("nation") String nation, @Param("city") String city);
}
