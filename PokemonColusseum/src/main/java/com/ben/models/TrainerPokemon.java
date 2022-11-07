package com.ben.models;

import org.springframework.stereotype.Component;

import javax.persistence.*;

//These are pokemon used by the opponent trainers. Notice no User FK. That's the only difference
//Opponents have three FKs to these to round up their "party".

@Component
@Entity
@Table(name="trainermons")
public class TrainerPokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pokemonId;

    private String name;
    private String sprite1;
    private String sprite2;
    private String type1;
    private String type2;

    //boilerplate code----------------

    public TrainerPokemon() {
    }

    public TrainerPokemon(int pokemonId, String name, String sprite1, String sprite2, String type1, String type2) {
        this.pokemonId = pokemonId;
        this.name = name;
        this.sprite1 = sprite1;
        this.sprite2 = sprite2;
        this.type1 = type1;
        this.type2 = type2;
    }

    public int getPokemonId() {
        return pokemonId;
    }

    public void setPokemonId(int pokemonId) {
        this.pokemonId = pokemonId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSprite1() {
        return sprite1;
    }

    public void setSprite1(String sprite1) {
        this.sprite1 = sprite1;
    }

    public String getSprite2() {
        return sprite2;
    }

    public void setSprite2(String sprite2) {
        this.sprite2 = sprite2;
    }

    public String getType1() {
        return type1;
    }

    public void setType1(String type1) {
        this.type1 = type1;
    }

    public String getType2() {
        return type2;
    }

    public void setType2(String type2) {
        this.type2 = type2;
    }

    @Override
    public String toString() {
        return "TrainerPokemon{" +
                "pokemonId=" + pokemonId +
                ", name='" + name + '\'' +
                ", sprite1='" + sprite1 + '\'' +
                ", sprite2='" + sprite2 + '\'' +
                ", type1='" + type1 + '\'' +
                ", type2='" + type2 + '\'' +
                '}';
    }
}
