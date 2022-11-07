package com.ben.models;

import javax.persistence.*;

import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
@Entity //map this Class as a DB entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String username;
	private String password;
	private Integer caughtPokes = 0;
	
	//boilerplate-----------------

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	//so we can identify user when doing party stuff
	public User(int userId) {
		this.userId = userId;
	}

	//this one will be used in registration
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
		this.caughtPokes = 0;
	}

	public User(String username, String password, int caughtPokes) {
		super();
		this.username = username;
		this.password = password;
		this.caughtPokes = caughtPokes = 0;
	}

	public User(int userId, String username, String password) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
	}

	public User(int userId, String username, String password, int caughtPokes) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.caughtPokes = caughtPokes = 0;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getCaughtPokes() {
		return caughtPokes;
	}

	public void setCaughtPokes(int caughtPokes) {
		this.caughtPokes = caughtPokes;
	}

	public int getId() {
		return userId;
	}

	public void setId(int id) {
		this.userId = id;
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

	@Override
	public String toString() {
		return "User{" +
				"userId=" + userId +
				", username='" + username + '\'' +
				", password='" + password + '\'' +
				", caughtPokes='" + caughtPokes + '\'' +
				'}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		User user = (User) o;
		return userId == user.userId && Objects.equals(username, user.username) && Objects.equals(password, user.password) && Objects.equals(caughtPokes, user.caughtPokes);
	}

	@Override
	public int hashCode() {
		return Objects.hash(userId, username, password, caughtPokes);
	}
}
