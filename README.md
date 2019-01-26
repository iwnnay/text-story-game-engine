# TSGE
## Text Story Game Engine

This is a game engine designed to work with most modern JavaScript front-end frameworks
and node.js.

# Installation
Require it through NPM or Yarn

## Require/add the package
### NPM

    npm require text-story-game-engine

### Yarn

    yarn add text-story-game-engine

## Import the the engine
Add the following line to your code

    import GameEngine from 'text-story-game-engine';

# Basic Usage
## Getting Started
The simplest method of loading game data is to use the LocalDataProvider. You can
access the data providers like this:

    const { dataProviders } = GameEngine;

For now we'll use the LocalDataProvider which can be found like this:

    const { Local } = dataProviders;

Build your local data
-- TODO: Add link to data structure guide

    data = { locations: { ... } };

Pass that data to the data provider

    localDataProvider = new Local(data);

Finally create the game

    const game = new GameEngine(localDataProvider, 'startLocationName');

## Display a room
The engine leaves you the freedomm to create or display a room however you wish
but in order to get the description of the room and visible items use the descibe
method on the situation.

    const currentMove = game.situation.describe();

# What it can do
At the moment... it can display some text. Yes, that's it. For now.

# Roadmap
Here's where I declare my lofty goals for this side project of mine and hope
it actually gets there.

1. Can look around a room
1. Can type in a command and interact with a single object
1. Can add items to an inventory
1. Can use an item from your inventory on an object

That would be a pretty great start at this point. The end goal would be
to create a multiplayer world where you can walk around and discover a world/story
to a creator's whimsy.
