package com.ben.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.ben.daos.UserDao;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ben.models.LoginDTO;
import com.ben.models.User;
import com.ben.services.UserService;

@RestController
@RequestMapping(value = "/users")
@CrossOrigin(origins="http://localhost:4200/", allowCredentials="true")
public class UserController {


	private UserService us;
	private UserDao uDAO;
	
	@Autowired
	public UserController(UserService us, UserDao uDAO) {
		
		super();
		this.us = us;
		this.uDAO = uDAO;
		System.out.println("test UserController**************************");
	}
	
	//User methods------------------------------------------------------
	
	
	//get all users
	@GetMapping
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> allUsers = us.getAllUsers();
		return ResponseEntity.ok(allUsers); 
	}

	//get user by ID - no need to this to take HTTP Requests
	public User getUserById(int id){
		User u = uDAO.getById(id);
		return u;
	}
	
	
	//add user
	@PostMapping("/add")
	public ResponseEntity<User> addUser(@RequestBody User user) {
		User newUser = us.addUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
	}
	
	//Auth methods-----------------------------------------------------
	
	//login
	@PostMapping(value="/login")
	public ResponseEntity login(@RequestBody LoginDTO lDTO, HttpSession session) {
		
		User u = us.login(lDTO);
		
		if(u != null) {

			session.setAttribute("username", lDTO.username);
			
			return ResponseEntity.accepted().body(u);
			
		} else {
			return ResponseEntity.badRequest().build();
		}
	}

	//register
	@PostMapping(value="/register")
	public ResponseEntity register(@RequestBody User u){

		User newU = uDAO.save(u);

		if(newU != null){
			return ResponseEntity.accepted().body(newU);
		}

		return ResponseEntity.badRequest().build();

	}

	//User Data methods------------------------------------------------------

	//increment caughtPokes
	@PutMapping(value = "/pokeCount/{userId}")
	public ResponseEntity incrementCaughtPokes(@PathVariable int userId){

		System.out.println("We inside");

		Integer newPokeCount = uDAO.incrementCaughtPokes(userId);

		if(newPokeCount != null){

			//get the user (with updated caughtPokes) so that we can send it back to the front end
			Optional<User> u = uDAO.findById(userId);

			return ResponseEntity.accepted().body(u.get());
		}

		return ResponseEntity.status(444).build();

	}
	
}
