package com.ben.controllers;

import com.ben.daos.PartyDAO;
import com.ben.daos.UserDao;
import com.ben.models.Party;
import com.ben.models.User;
import com.ben.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/parties")
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
public class PartyController {

    private PartyDAO pDAO;
    private UserDao uDAO;

    @Autowired
    public PartyController(PartyDAO pDAO, UserDao uDAO) {
        super();
        this.pDAO = pDAO;
        this.uDAO = uDAO;
        System.out.println("test PartyController**************************");
    }

    @PostMapping("/add")
    public ResponseEntity<Party> addNewParty(@RequestBody Party p){

        System.out.println(p);

        Party savedParty = pDAO.save(p);

        if(savedParty == null){
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.accepted().body(savedParty);

    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Party>> getParties(@PathVariable User userId){

        //findById from JpaRepository returns an Optional...
        //Optionals lend to code flexibility because it may or may not have the object requested. It may be null.
        //this helps us avoid NullPointerExceptions

        //this is an Optional which potentially holds a Party object
        Optional<List<Party>> partyOptional = pDAO.findByUser(userId);

        //we can check if the optional has data with .isPresent(), or not with .isEmpty()
        if(partyOptional.isPresent()) {
            //we can get an Optional's data with .get()
            List<Party> p = partyOptional.get();

            //return the Pokemon with a 200 status code and the pokemon data in the response body
            return ResponseEntity.ok(p);

        }

        //if the Optional is null (in other words if Optional.isPresent() == false)
        return ResponseEntity.noContent().build(); //return a no content status code, with empty response body

    }

}
