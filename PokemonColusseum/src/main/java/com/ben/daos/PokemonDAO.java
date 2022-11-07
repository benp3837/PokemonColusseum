package com.ben.daos;

import com.ben.models.Pokemon;
import com.ben.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PokemonDAO extends JpaRepository<Pokemon, Integer> {

    public Optional<List<Pokemon>> findByUser(User u);

}
