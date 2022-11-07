package com.ben.models;

import com.ben.daos.UserDao;
import com.ben.services.UserService;
import net.bytebuddy.dynamic.loading.InjectionClassLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Arrays;

@Component
@Entity
@Table(name="parties")
public class Party {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int partyId;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "pokemon1")
    private Pokemon pokemon1;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "pokemon2")
    private Pokemon pokemon2;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "pokemon3")
    private Pokemon pokemon3;

    @ManyToOne(fetch = FetchType.EAGER) //removed cascadetype merge to be able to add/remove pokes from party
    @JoinColumn(name = "userId")
    private User user;

    //boilerplate---------------------------------------------

    public Party() {
    }

    public Party(int partyId, Pokemon pokemon1, Pokemon pokemon2, Pokemon pokemon3, User user) {
        this.partyId = partyId;
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.pokemon3 = pokemon3;
        this.user = user;
    }

    public Party(Pokemon pokemon1, Pokemon pokemon2, Pokemon pokemon3, User user) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.pokemon3 = pokemon3;
        this.user = user;
    }

    //give the capability to call a user by their id
    /*@Transient
    @Autowired
    private UserDao uDAO;
    public Party(UserDao uDAO) {
        super();
        this.uDAO = uDAO;
    }

    public Party(Pokemon pokemon1, Pokemon pokemon2, Pokemon pokemon3, int userId) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.pokemon3 = pokemon3;
        this.user = user
    }

    public Party(int partyId, Pokemon pokemon1, Pokemon pokemon2, Pokemon pokemon3, int userId) {
        this.partyId = partyId;
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.pokemon3 = pokemon3;
        this.user = uDAO.getById(userId);
    }
*/

    @Override
    public String toString() {
        return "Party{" +
                "partyId=" + partyId +
                ", pokemon1=" + pokemon1 +
                ", pokemon2=" + pokemon2 +
                ", pokemon3=" + pokemon3 +
                ", user=" + user +
                '}';
    }

    public int getPartyId() {
        return partyId;
    }

    public void setPartyId(int partyId) {
        this.partyId = partyId;
    }

    public Pokemon getPokemon1() {
        return pokemon1;
    }

    public void setPokemon1(Pokemon pokemon1) {
        this.pokemon1 = pokemon1;
    }

    public Pokemon getPokemon2() {
        return pokemon2;
    }

    public void setPokemon2(Pokemon pokemon2) {
        this.pokemon2 = pokemon2;
    }

    public Pokemon getPokemon3() {
        return pokemon3;
    }

    public void setPokemon3(Pokemon pokemon3) {
        this.pokemon3 = pokemon3;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getId() {
        return partyId;
    }

    public void setId(int id) {
        this.partyId = id;
    }

}
