package com.ben.models;

import javax.persistence.*;

@Entity
@Table(name="pokemon")
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pokemonId;
    private String name;
    private String sprite1;
    private String sprite2;
    private String type1;
    private String type2;
    private String hp;
    private String attack;
    private String sAttack;
    private String defense;
    private String sDefense;
    private String speed;

    @ManyToOne(fetch = FetchType.EAGER) //removed cascadetype merge to be able to add/remove pokes from party
    @JoinColumn(name = "userId")
    private User user;

    //boilerplate------------------------------------------


    public Pokemon() {
    }

    public Pokemon(int pokemonId, String name, String sprite1, String sprite2, String type1, String type2,
                   String hp, String speed, String attack, String sAttack,
                   String defense, String sDefense) {
        this.pokemonId = pokemonId;
        this.name = name;
        this.sprite1 = sprite1;
        this.sprite2 = sprite2;
        this.type1 = type1;
        this.type2 = type2;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
        this.sAttack = sAttack;
        this.defense = defense;
        this.sDefense = sDefense;
    }

    public Pokemon(String name, String sprite1, String sprite2, String type1, String type2,
                   String hp, String speed, String attack, String sAttack,
                   String defense, String sDefense) {
        this.name = name;
        this.sprite1 = sprite1;
        this.sprite2 = sprite2;
        this.type1 = type1;
        this.type2 = type2;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
        this.sAttack = sAttack;
        this.defense = defense;
        this.sDefense = sDefense;
    }


    //this constructor and the one below give us the flexibility to have single types pokes
    public Pokemon(int pokemonId, String name, String sprite1, String sprite2, String type1,
                   String hp, String speed, String attack, String sAttack,
                   String defense, String sDefense) {
        this.pokemonId = pokemonId;
        this.name = name;
        this.sprite1 = sprite1;
        this.sprite2 = sprite2;
        this.type1 = type1;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
        this.sAttack = sAttack;
        this.defense = defense;
        this.sDefense = sDefense;
    }

    //is this being used at all?...
    public Pokemon(String name, String sprite1, String sprite2, String type1) {
        this.name = name;
        this.sprite1 = sprite1;
        this.sprite2 = sprite2;
        this.type1 = type1;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getHp() {
        return hp;
    }

    public void setHp(String hp) {
        this.hp = hp;
    }

    public String getAttack() {
        return attack;
    }

    public void setAttack(String attack) {
        this.attack = attack;
    }

    public String getsAttack() {
        return sAttack;
    }

    public void setsAttack(String sAttack) {
        this.sAttack = sAttack;
    }

    public String getDefense() {
        return defense;
    }

    public void setDefense(String defense) {
        this.defense = defense;
    }

    public String getsDefense() {
        return sDefense;
    }

    public void setsDefense(String sDefense) {
        this.sDefense = sDefense;
    }

    public String getSpeed() {
        return speed;
    }

    public void setSpeed(String speed) {
        this.speed = speed;
    }

    @Override
    public String toString() {
        return "Pokemon{" +
                "pokemonId=" + pokemonId +
                ", name='" + name + '\'' +
                ", sprite1='" + sprite1 + '\'' +
                ", sprite2='" + sprite2 + '\'' +
                ", type1='" + type1 + '\'' +
                ", type2='" + type2 + '\'' +
                ", hp='" + hp + '\'' +
                ", attack='" + attack + '\'' +
                ", sAttack='" + sAttack + '\'' +
                ", defense='" + defense + '\'' +
                ", sDefense='" + sDefense + '\'' +
                ", speed='" + speed + '\'' +
                ", user=" + user +
                '}';
    }
}
