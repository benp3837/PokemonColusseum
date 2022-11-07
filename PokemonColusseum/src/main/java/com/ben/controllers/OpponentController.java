package com.ben.controllers;

import com.ben.daos.PartyDAO;
import com.ben.daos.UserDao;
import com.ben.models.Opponent;
import com.ben.services.OpponentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/opponents")
@CrossOrigin(origins="http://localhost:4200", allowCredentials="true")
public class OpponentController {

    private OpponentService os;

    @Autowired
    public OpponentController(OpponentService os) {
        super();
        this.os = os;
    }

    //this method returns the single opponent returned by the service
    @GetMapping
    public ResponseEntity<Opponent> getOpponent(){

        Opponent theOne = os.getOpponents();

        if(theOne != null){
            return ResponseEntity.ok().body(theOne);
        }

        return ResponseEntity.notFound().build();

    }

}
