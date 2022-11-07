import { Pokemon } from "./pokemon";
import { User } from "./user";

export class Party {

    constructor(
        public partyId: number,
        public pokemon1: Pokemon,
        public pokemon2?: Pokemon,
        public pokemon3?: Pokemon,
        public user?: User
    ){}

}
