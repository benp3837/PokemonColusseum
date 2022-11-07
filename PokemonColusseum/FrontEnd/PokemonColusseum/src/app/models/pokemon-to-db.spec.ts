import { PokemonToDB } from './pokemon-to-db';

describe('PokemonToDB', () => {
  it('should create an instance', () => {
    expect(new PokemonToDB()).toBeTruthy();
  });
});
