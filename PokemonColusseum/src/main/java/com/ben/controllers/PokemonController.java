package com.ben.controllers;

import com.ben.daos.PokemonDAO;
import com.ben.models.Pokemon;
import com.ben.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/pokemon")
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
public class PokemonController {

    private PokemonDAO pDAO;

    //dependency injecting the PokemonDAO so that we can use its methods
    @Autowired
    public PokemonController(PokemonDAO pDAO) {
        super();
        this.pDAO = pDAO;
    }

    //get all pokemon
    @GetMapping("/{userId}")
    public ResponseEntity<List<Pokemon>> getPokemon(@PathVariable User userId){

        //this is an Optional which potentially holds a Party object
        Optional<List<Pokemon>> partyOptional = pDAO.findByUser(userId);

        //we can check if the optional has data with .isPresent(), or not with .isEmpty()
        if(partyOptional.isPresent()) {
            //we can get an Optional's data with .get()
            List<Pokemon> p = partyOptional.get();

            //return the Pokemon with a 200 status code and the pokemon data in the response body
            return ResponseEntity.ok(p);

        }
        //if the Optional is null (in other words if Optional.isPresent() == false)
        return ResponseEntity.noContent().build(); //return a no content status code, with empty response body
    }

    //add pokemon
    @PostMapping("/add") //TODO: this shouldn't have /add, it should just be the default POST
    public ResponseEntity<Pokemon> addPoke(@RequestBody Pokemon p) {
        Pokemon testPoke = pDAO.save(p);

        if(testPoke==null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(p);
    }

    //delete pokemon
    @DeleteMapping("/{id}")
    public ResponseEntity deletePoke(@PathVariable int id){

        Pokemon p = pDAO.getById(id); //get the pokemon

        //if the pokemon is found, delete it
        if(p != null){
            pDAO.delete(p);
            return ResponseEntity.accepted().build();
        }

        return ResponseEntity.badRequest().build();

    }

}
