#!/bin/bash

launch() {
  local TITLE=$1
  local CMD=$2
  echo "* Launching $TITLE..."
  tmux new-window -n "$TITLE"
  tmux send-keys -t "$TITLE" "bash -c '$CMD'" 'C-m'
}


if ! command -v tmux>/dev/null; then
  echo "Error: command $1 not found. Install $1 package" >&2
  exit 1
fi

REPO_ROOT="$(git rev-parse --show-toplevel)"

tmux new-session $REPO_ROOT/start-env.sh

BACKEND_PATH=$REPO_ROOT/backend
FRONTEND_PATH=$REPO_ROOT/frontend

launch "back-end" "cd ${BACKEND_PATH} && ./start.sh"
launch "front-end" "cd ${FRONTEND_PATH} && ./start.sh"