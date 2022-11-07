package com.ben.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ben.models.User;

import javax.transaction.Transaction;
import javax.transaction.Transactional;

@Repository
public interface UserDao extends JpaRepository<User, Integer>{

	//find user by username (for login validation)
	public Optional<User> findByUsername(String username);

	//Update user post catch (caughtPokes column gets incremented by one where user_id = ?)
	@Transactional
	@Modifying
	@Query("update User u set u.caughtPokes = u.caughtPokes + 1 where u.userId = ?1")
	public Integer incrementCaughtPokes(int userId);



}
