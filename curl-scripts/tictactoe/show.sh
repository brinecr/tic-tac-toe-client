curl "https://tic-tac-toe-wdi.herokuapp.com/games/" \
--include \
--request GET \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-type: application/json" \
--data '{
    "game": {
      "id": "'"${ID}"'",
      "cells": "'"${GAMEBOARD}"'",
      "over": "'"${OVER}"'",
      "player_x": {
        "id": "'"${PLAYERID}"'",
        "email": "'"${EMAIL}"'"
      }
      "player_o": null
    }
  }'

echo
