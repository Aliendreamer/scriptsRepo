#!/usr/bin/env sh
set -e
git branch | grep -v "master" | grep -v "develop" | xargs git branch -D