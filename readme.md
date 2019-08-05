# Game features implemented:

Decks and drawing cards
Workers generating gold, making new workers
Units
Base
Combat
Heroes
Ability to level up heroes
Upkeep/arrival/attack triggers
Activated abilities
Choice of order when adding triggers to queue
Automatic resolution of triggers when only one choice exists and skipping if none
Passive effects on units that modify their own/others' stats and add abilities
Frenzy, haste, flying, anti-air, invisible, healing, resist
Patrol zone with taunt for squad leader and bonus for elite, scavenger, technician and lookout
Spell casting including checking if you have the right hero
Flagbearer ability
+1/+1 and -1/-1 runes

# Tests to write

Everything involving swift strike
Troq abilities
Jaina abilities
Technician trigger
Scavenger trigger
Spells are put in discard pile before resolving triggers they caused
With Troq: can cast Wither, Wrecking Ball, can cast Scorch at +1 cost, can't cast Fire Dart
With Jaina: can cast Wither, Scorch, Fire Dart, can't cast Wrecking Ball
With no hero: can't cast Wither, Scorch, Wrecking Ball or Fire Dart
With Troq and Jaina: can cast Wither, Scorch, Fire Dart and Wrecking Ball
Scorch and Fire Dart
Skipping triggers with no choices
Auto-targetting triggers with only one choice

# Game features not implemented:

One reshuffle per main phase limit
Don't lock the game if a trigger has no available targets (including overpower, sparkshot)
Auto-target if there is only one available target

Heroes return to command zone and go on cooldown when killed

Tech buildings
Building hp (other than base?)
Base damage from building destruction
Add-ons
Armor (requires effects)
Armor for squad leader
Proper continuous effects ordering
Swift strike, overpower, sparkshot (requires making attack into triggers)
Stealth, unstoppable
Detector
Tower (requires add-ons and detector)

Multicolour tax

Building cards and upgrade cards

Requirement to have tech buildings/unlocked specs to play units

Hero level up on death
Hero cooldown
Ultimate spell requirements

Sparkshot stacking

Avoid leaking minor information when workering
Codex and tech phase

Victory condition

# Other stuff to do

Change signature of canTarget on abilities
Change signature of hasKeyword
Put back deleted Brick Thief tests when more than 2 buildings can exist
Deprecate the use of getCurrentValues, getName and getCurrentController
Move the first three tests from neutral.test.js into a keyword test file
Make suggestActions do something sensible for patrollers (not bases)
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
Smoker (White/starter)
Second Chances (Purple/Past)
Gilded Glaxx (Purple/Future)
