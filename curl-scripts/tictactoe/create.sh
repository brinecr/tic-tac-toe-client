curl "https://tic-tac-toe-wdi.herokuapp.com/games/" \
--include \
--request POST \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-type: application/json" \
--data '{
    "game": {
      "id": "'"${ID}"'",
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": "'"${PLAYERID}"'",
        "email": "'"${EMAIL}"'"
      }
      "player_o": null
    }
  }'

echo
