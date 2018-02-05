# C2FO

This is simple video game library tracker exploring the use of patio, Node, and Angular

## Instructions

Click on the list item to view more details on a game item. Click the plus to add a new game item. Click the pencil to edit the currently displayed item. Click the cross to delete the current item.

## Environment

Tested with macOS 10.13.3

## Technology

- Patio v1.3.0
- Angular v5.2.2
- Node.js v5.6.0 for Patio, v9.5.0 for Angular (using NVM)

## Setup

From the project directory, run the following shell commands:

- To setup the database and user:
> `node setup.js`

- To set up the tables:
> `patio migrate -v --camelize -u "pg://test@127.0.0.1:5432/c2fo_duncan" -d ./migration`

- To fill tables:
> `node populate.js`

- To start API server:
> `node api.js`

- To start Angular server (in another process):
> `ng serve --open`

A website should open in your browser, if not, navigate to http://localhost:4200
