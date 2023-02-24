package com.ben;

import com.ben.controllers.PartyController;
import com.ben.models.Party;
import com.ben.models.Pokemon;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PokemonColusseumApplication {
	
	public static void main(String[] args) {
		
		SpringApplication.run(PokemonColusseumApplication.class, args);

		//add a party or two for testing this way? probably easier than thru postman.
//		Pokemon p1 = new Pokemon("mudkip",
//				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
//				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/258.png",
//				"water");
//
//		Pokemon p2 = new Pokemon("treecko",
//				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
//				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/252.png",
//				"grass");

	}

}
