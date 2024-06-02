const team = {
    _players: [{

      firstName: 'Shannon',
      lastName: 'Webster',
      age: 31
      },
    {
      firstName: 'Bart',
      lastName: 'Weiser',
      age: 4
      },
    {
      firstName: 'Ember',
      lastName: 'Weiser',
      age: 7
      },
    ],

    _games: [{

      opponent: 'Elliot',
      teamPoints: 1,
      opponentPoints: 0
    },
  {   opponent: 'Elliot',
      teamPoints: 1,
      opponentPoints: 0
      },
    { opponent: 'Ember',
      teamPoints: 5,
      opponentPoints: 2
      },
    { opponent: 'Bart',
      teamPoints: 2,
      opponentPoints: 5
      },
    ],


  get players() {
    return this._players;
    },

  get games(){
    return this._games;
    },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
    };
    this._players.push(player);
    },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
    }
  };
  team.addGame('Titans', 100, 98)
  team.addPlayer('Bugs','Bunny', 76)
  console.log(team.players)
  console.log(team.games)
