export const patrolSlots = {
  squadLeader: 0,
  elite: 1,
  scavenger: 2,
  technician: 3,
  lookout: 4
};
export const patrolSlotNames = [
  "Squad Leader",
  "Elite",
  "Scavenger",
  "Technician",
  "Lookout"
];
export const emptyPatrolZone = [null, null, null, null, null];

export function currentPatrolSlot(state, entity) {
  return state.players[entity.current.controller].patrollerIds.indexOf(
    entity.id
  );
}

export function isPatrolling(state, entity) {
  return currentPatrolSlot(state, entity) != -1;
}

export function sideline(state, patroller) {
  const slot = currentPatrolSlot(state, patroller);
  if (slot != -1) {
    state.players[entity.current.controller].patrollerIds[slot] = null;
  }
}
