import { Sprite } from "./sprite";

export class Pokemon {

    constructor(
        public name: string,
        public types: any,
        public sprite1?: string,
        public sprite2?: string,
        public sprites?: any,
        public user_id?: number,
        public pokemonId?: number
    ){}

}
