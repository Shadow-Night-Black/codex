# Game features implemented:

Decks and drawing cards
Workers generating gold, making new workers
Units
Base
Combat
Heroes
Tech buildings and add-ons with base damage when they die
Ability to level up heroes
Upkeep/arrival/attack triggers
Activated abilities
Choice of order when adding triggers to queue
Automatic resolution of triggers when only one choice exists and skipping if none
Passive effects on units: modify own/others' stats, add abilities, modify costs to play cards
Frenzy, haste, flying, anti-air, invisible, healing, resist, overpower, sparkshot, readiness, stealth
Patrol zone with bonuses for squad leader, elite, scavenger, technician and lookout
Spell casting including checking if you have the right hero and ultimate spells
Flagbearer ability
+1/+1 and -1/-1 runes
Effects that last for the current turn

# Tests to write

Everything about Blademaster and Trojan Duck
More thorough tests for Final Smash
Ultimate spell casting condition tests

# Tests to write later

*Tower damages first stealth attacker but not subsequent
*Unstoppable
\*Put back deleted Brick Thief tests when more than 2 buildings can exist
Scorch and Fire Dart
Spells are put in discard pile before resolving triggers they caused (need something with a death trigger)
Flying plus overpower and legal targets to redirect to (Void Star)
Sparkshot/overpower unit can't kill only additional patroller with SS and overpower to base (Blooming Elm)
Swift strike flying attacker can kill the SL it flew over and not get hit (needs unit with sparkshot+flying)
Flying plus stealth/invisible/unstoppable etc. and not taking AA damage if not using flying to evade
Declare an attack that destroys all possible attack targets with triggers (obliterate vs Lawbringer Gryphon)

# Game features not implemented:

Obliterate

Heroes go on cooldown when killed

Temporary detection by tower on opponent's turn
Temporary detection by tower on own turn
Requirement to have tech buildings/unlocked specs to play units

Hero level up on death
Hero cooldown

Avoid leaking minor information when workering
Codex and tech phase
Victory condition

# Game features not implemented, not needed for BvF:

One reshuffle per main phase limit

Multicolour tax
Proper continuous effects ordering
Building cards and upgrade cards

Tech Lab and Heroes' Hall

Unstoppable, long-range, two lives, deathtouch, other abilities
Permanent detector
Damage modification effects

Sparkshot stacking

# Other stuff to do

Tidy up the way making choices and queuing triggers is reported
Make damage reporting call out swift strike/overpower/sparkshot damage
Rewrite the core loop in CodexGame.updateState as an FSM or other better way
Change signature of hasKeyword
Deprecate the use of getCurrentValues
Refactor getAttackableEntityIds into getAttackableEntities
Move suggest into a module and write tests for it
Add suggestions for building fixtures
Use a schema validation library to simplify action checking
Make sure it works out of the box, i.e. without npm linking playground

# Cards that will need special attention

Hotter Fire (Red/Fire)
Master Midori (Green/Balance)
Manufactured Truth (Blue/starter)
Jail (Blue/starter)
Reteller of Truths (Blue/Truth)
Dreamscape (Blue/Truth)
Graveyard (Black/starter)
Soul Stone (Black/Demonology)
Smoker (White/starter)
Second Chances (Purple/Past)
Gilded Glaxx (Purple/Future)
