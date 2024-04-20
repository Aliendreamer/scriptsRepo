#!/usr/bin/env bash
current_branch=$(git rev-parse --abbrev-ref HEAD)

if [[ $current_branch = *[![:ascii:]]* ]]; then
	echo "Error: Branch names with Cyrillic characters are not allowed."
    exit 1
else
	echo "Branch name is ok"
fi