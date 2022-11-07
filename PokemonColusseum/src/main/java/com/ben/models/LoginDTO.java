package com.ben.models;

import org.springframework.stereotype.Component;

@Component
public class LoginDTO {

	public String username;
	public String password;
	
	
	//boilerplate------------------------------------
	
	public LoginDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public LoginDTO(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	
	
}
