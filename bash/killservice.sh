#!/usr/bin/env sh
PORT=${1:-3000}
set -e
kill -9 $(lsof -t -i:"$PORT")
