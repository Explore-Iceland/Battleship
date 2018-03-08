var expect = require('chai').expect;

describe('checkForShip', function(){
  var checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report no ship at a given players coordinates', function(){

    player = {
      ships: [
        {
          locations :[[0, 0]]
        }
      ]
    };

    expect(checkForShip(player,[9,9])).to.be.false;
  });

  it('should correctly report a ship located at the given coordinates', function(){

    player = {
      ships: [
        {
          locations :[[0, 0]]
        }
      ]
    };

    expect(checkForShip(player,[0,0])).to.deep.equal(player.ships[0]);
  });

  it('should handle ships located at more than one cooardinate', function(){

    player = {
      ships: [
        {
          locations :[[0, 0], [0, 1]]
        }
      ]
    };

    expect(checkForShip(player,[0, 1])).to.deep.equal(player.ships[0]);//á að vera true
    expect(checkForShip(player,[0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player,[9, 9])).to.be.false;
  });
