@echo off
echo === Finding all li/ul lines in out\index.html ===
type out\index.html | find "<li"
echo === END li ===
type out\index.html | find "<ul"
echo === END ul ===
