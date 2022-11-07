import { Pokemon } from "./pokemon";

export class Opponent {

    constructor(
        public opponentId:number,
        public opponentClass:string,
        public opponentName:string,
        public pokemon1:Pokemon,
        public pokemon2:Pokemon,
        public pokemon3:Pokemon
    ) { }

}
