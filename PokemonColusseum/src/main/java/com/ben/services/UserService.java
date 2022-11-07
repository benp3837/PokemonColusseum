package com.ben.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ben.daos.UserDao;
import com.ben.models.LoginDTO;
import com.ben.models.User;

@Service
public class UserService {

	private UserDao uDAO;

	@Autowired
	public UserService(UserDao uDAO) {
		super();
		this.uDAO = uDAO;
	}
	
	
	//User methods------------------------------------------------------
	
	//get all users
	public List<User> getAllUsers(){
		return uDAO.findAll();
	}
	
	//add user
	public User addUser(User user) {
		User newUser = (User)uDAO.save(user);
		return newUser;
	}
	
	//Login methods-----------------------------------------------------
	
	//Login
	public User login(LoginDTO lDTO) {
		
		Optional<User> opt = uDAO.findByUsername(lDTO.username);
		
		if(opt.isPresent()) {
			User u = opt.get();
			System.out.println(u);
			if(lDTO.password.equals(u.getPassword())) {
				return u;
			}
		}
		
		return null;
	
	}
}
