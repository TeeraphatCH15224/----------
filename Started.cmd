@echo off

title Liliana_Started

:StartBot

node --no-warnings Registerslashcommand.js
node --no-warnings index.js

goto StartBot