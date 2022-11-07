package com.ben.daos;

import com.ben.models.Party;
import com.ben.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PartyDAO extends JpaRepository<Party, Integer> {

    public Optional<List<Party>> findByUser(User u);

}
