package com.jake.web.entity;

public class SearchMember {
	private int id_number;
	private String id;
	private String name;
	private String gender;
	private String nation;
	private String city;
	private String sdate;
	private String edate;

	public SearchMember() {
		// TODO Auto-generated constructor stub
	}

	public SearchMember(int id_number, String id, String name, String gender, String nation, String city, String sdate,
			String edate) {
		super();
		this.id_number = id_number;
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.nation = nation;
		this.city = city;
		this.sdate = sdate;
		this.edate = edate;
	}

	public int getId_number() {
		return id_number;
	}

	public void setId_number(int id_number) {
		this.id_number = id_number;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getSdate() {
		return sdate;
	}

	public void setSdate(String sdate) {
		this.sdate = sdate;
	}

	public String getEdate() {
		return edate;
	}

	public void setEdate(String edate) {
		this.edate = edate;
	}

	@Override
	public String toString() {
		return "SearchMember [id_number=" + id_number + ", id=" + id + ", name=" + name + ", gender=" + gender
				+ ", nation=" + nation + ", city=" + city + ", sdate=" + sdate + ", edate=" + edate + "]";
	}

}
