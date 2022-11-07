package com.ben.services;

import com.ben.daos.OpponentDAO;
import com.ben.models.Opponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OpponentService {

    private OpponentDAO uDAO;

    @Autowired
    public OpponentService(OpponentDAO uDAO) {
        super();
        this.uDAO = uDAO;
    }

    //This method takes the list of opponents from the DAO and picks a random one
    public Opponent getOpponents(){

        //get all the opponents from the db
        List<Opponent> opponents = uDAO.findAll();

        System.out.println(opponents);

        //get a random number based on the amount of opponents in the DB
        int opponentIndex = (int)(Math.random() * opponents.size());

        //return whichever random opponent was chosen
       return opponents.get(opponentIndex);

    }

}
