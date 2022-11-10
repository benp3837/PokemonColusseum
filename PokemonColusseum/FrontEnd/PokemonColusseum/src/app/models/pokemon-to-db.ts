export class PokemonToDB {

    constructor(
        public name:string,
        public sprite1: string,
        public sprite2: string,
        public type1: string,
        public user: number,
        public type2?: string,
        public hp?: string,
        public speed?: string,
        public attack?: string,
        public sAttack?: string,
        public defense?: string,
        public sDefense?: string
    ){}

}
