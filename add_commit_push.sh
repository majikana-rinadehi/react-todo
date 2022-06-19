#!/bin/bash

echo $(git add . -v && git status && git commit -m $1 && git push)