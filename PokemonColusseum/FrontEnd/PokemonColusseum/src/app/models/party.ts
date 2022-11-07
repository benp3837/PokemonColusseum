import { Pokemon } from "./pokemon";

export class Party {

    constructor(
        public partyId: number,
        public pokemon1: Pokemon,
        public pokemon2?: Pokemon,
        public pokemon3?: Pokemon,
    ){}

}
