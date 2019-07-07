import { knuthShuffle } from "knuth-shuffle";
import { enterReadyPhase } from "../phases";
import log from "../log";
import { fixtureNames } from "../fixtures";
import { emptyPatrolZone } from "../patrolzone";

function initialisePlayerState(state, playerIndex) {
  const player = state.playerList[playerIndex];
  state.updateHidden(fs => {
    const deck = [
      "tenderfoot",
      "helpful_turtle",
      "helpful_turtle",
      "hired_stomper",
      "nimble_fencer",
      "timely_messenger",
      "older_brother",
      "starcrossed_starlet",
      "iron_man",
      "regularsized_rhinoceros"
    ];
    knuthShuffle(deck);
    const hand = deck.splice(0, 5);
    fs.players[player] = { hand, deck, discard: [] };
  });
  state.players[player].id = player;
  state.players[player].workers = playerIndex == 0 ? 4 : 5;
  state.players[player].gold = 0;
  state.players[player].patrollerIds = emptyPatrolZone;
  const newBase = {
    id: `e${state.nextId}`,
    fixture: fixtureNames.base,
    owner: player,
    damage: 0
  };
  state.entities[newBase.id] = newBase;
  state.nextId++;
}

export function checkStartAction(state, action) {
  if (state.started) {
    throw new Error("Game already started");
  }
}

export function doStartAction(state, action) {
  state.started = true;
  state.nextId = 1;
  state.activePlayerIndex = 0;
  state.players = {};
  state.entities = {};
  for (let ii = 0; ii < state.playerList.length; ii++) {
    initialisePlayerState(state, ii);
  }
  state.turn = 0;
  state.queue = [];
  state.currentTrigger = null;
  state.newTriggers = [];
  log.add(state, "Game started.");

  enterReadyPhase(state);
}
