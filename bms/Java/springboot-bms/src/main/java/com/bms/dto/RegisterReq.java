package com.bms.dto;

import java.util.Date;

public class RegisterReq {
	private long id;
	private long registeredId;
	private String name;
	private String username;
	private String password;
	private long depositamount;
	private String guardiantype;
	private String guardianname;
	private String address;
	private String citizenship;
	private String state;
	private String email;
	private String gender;
	private String maritialstatus;
	private long contactno;
	private Date dob;
	private Date regdate;
	private String accounttype;
	private String branchname;
	private String citizenstatus; 
	private String country;
	private String prooftype;
	private String documentno;
	private String refaccountname;
	private String refaccountno;
	private String refaccountaddress;
	
	public String getGuardiantype() {
		return guardiantype;
	}
	public void setGuardiantype(String guardiantype) {
		this.guardiantype = guardiantype;
	}
	public String getGuardianname() {
		return guardianname;
	}
	public void setGuardianname(String guardianname) {
		this.guardianname = guardianname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCitizenship() {
		return citizenship;
	}
	public void setCitizenship(String citizenship) {
		this.citizenship = citizenship;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMaritialstatus() {
		return maritialstatus;
	}
	public void setMaritialstatus(String maritialstatus) {
		this.maritialstatus = maritialstatus;
	}
	public long getContactno() {
		return contactno;
	}
	public void setContactno(long contactno) {
		this.contactno = contactno;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public Date getRegdate() {
		return regdate;
	}
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	public String getAccounttype() {
		return accounttype;
	}
	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}
	public String getBranchname() {
		return branchname;
	}
	public void setBranchname(String branchname) {
		this.branchname = branchname;
	}
	public String getCitizenstatus() {
		return citizenstatus;
	}
	public void setCitizenstatus(String citizenstatus) {
		this.citizenstatus = citizenstatus;
	}
	public String getProoftype() {
		return prooftype;
	}
	public void setProoftype(String prooftype) {
		this.prooftype = prooftype;
	}
	public String getDocumentno() {
		return documentno;
	}
	public void setDocumentno(String documentno) {
		this.documentno = documentno;
	}
	
 
	
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getRefaccountname() {
		return refaccountname;
	}
	public void setRefaccountname(String refaccountname) {
		this.refaccountname = refaccountname;
	}
	public String getRefaccountno() {
		return refaccountno;
	}
	public void setRefaccountno(String refaccountno) {
		this.refaccountno = refaccountno;
	}
	public String getRefaccountaddress() {
		return refaccountaddress;
	}
	public void setRefaccountaddress(String refaccountaddress) {
		this.refaccountaddress = refaccountaddress;
	}
	
//	
//	@Override
//	public long hashCode() {
//		final int prime = 31;
//		long result = 1;
//		result = prime * result + id;
//		return result;
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		RegisterReq other = (RegisterReq) obj;
//		if (id != other.id)
//			return false;
//		return true;
//	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getDepositamount() {
		return depositamount;
	}
	public void setDepositamount(long depositamount) {
		this.depositamount = depositamount;
	}
	public long getRegisteredId() {
		return registeredId;
	}
	public void setRegisteredId(long registeredId) {
		this.registeredId = registeredId;
	}
	
	public RegisterReq(long id, long registeredId, String name, String username, String password, long depositamount,
			String guardiantype, String guardianname, String address, String citizenship, String state, String email,
			String gender, String maritialstatus, long contactno, Date dob, Date regdate, String accounttype,
			String branchname, String citizenstatus, String country, String prooftype, String documentno,
			String refaccountname, String refaccountno, String refaccountaddress) {
		super();
		this.id = id;
		this.registeredId = registeredId;
		this.name = name;
		this.username = username;
		this.password = password;
		this.depositamount = depositamount;
		this.guardiantype = guardiantype;
		this.guardianname = guardianname;
		this.address = address;
		this.citizenship = citizenship;
		this.state = state;
		this.email = email;
		this.gender = gender;
		this.maritialstatus = maritialstatus;
		this.contactno = contactno;
		this.dob = dob;
		this.regdate = regdate;
		this.accounttype = accounttype;
		this.branchname = branchname;
		this.citizenstatus = citizenstatus;
		this.country = country;
		this.prooftype = prooftype;
		this.documentno = documentno;
		this.refaccountname = refaccountname;
		this.refaccountno = refaccountno;
		this.refaccountaddress = refaccountaddress;
	}

}
