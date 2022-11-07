package com.ben.models;

import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Entity
@Table(name="opponents")
public class Opponent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int opponentId;

    private String opponentClass;
    private String opponentName;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "pokemon1")
    private TrainerPokemon pokemon1;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "pokemon2")
    private TrainerPokemon pokemon2;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "pokemon3")
    private TrainerPokemon pokemon3;

    //boilerplate code---------------------------------

    public Opponent() {
    }

    public Opponent(int opponentId, String opponentClass, String opponentName, TrainerPokemon pokemon1, TrainerPokemon pokemon2, TrainerPokemon pokemon3) {
        this.opponentId = opponentId;
        this.opponentClass = opponentClass;
        this.opponentName = opponentName;
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.pokemon3 = pokemon3;
    }

    public int getOpponentId() {
        return opponentId;
    }

    public void setOpponentId(int opponentId) {
        this.opponentId = opponentId;
    }

    public String getOpponentClass() {
        return opponentClass;
    }

    public void setOpponentClass(String opponentClass) {
        this.opponentClass = opponentClass;
    }

    public String getOpponentName() {
        return opponentName;
    }

    public void setOpponentName(String opponentName) {
        this.opponentName = opponentName;
    }

    public TrainerPokemon getPokemon1() {
        return pokemon1;
    }

    public void setPokemon1(TrainerPokemon pokemon1) {
        this.pokemon1 = pokemon1;
    }

    public TrainerPokemon getPokemon2() {
        return pokemon2;
    }

    public void setPokemon2(TrainerPokemon pokemon2) {
        this.pokemon2 = pokemon2;
    }

    public TrainerPokemon getPokemon3() {
        return pokemon3;
    }

    public void setPokemon3(TrainerPokemon pokemon3) {
        this.pokemon3 = pokemon3;
    }

    @Override
    public String toString() {
        return "Opponent{" +
                "opponentId=" + opponentId +
                ", opponentClass='" + opponentClass + '\'' +
                ", opponentName='" + opponentName + '\'' +
                ", pokemon1=" + pokemon1 +
                ", pokemon2=" + pokemon2 +
                ", pokemon3=" + pokemon3 +
                '}';
    }
}
