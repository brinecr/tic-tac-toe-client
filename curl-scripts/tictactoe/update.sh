curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
--include \
--request PATCH \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
    "game": {
      "id": "'"${ID}"'",
      "cells": "'"${DIRECTOR}"'",
      "over": "'"${OVER}"'",
      "player_x": {
        "id": "'"${PLAYERID}"'",
        "email": "'"${EMAIL}"'"
      }
      "player_o": null
    }
  }'

echo
