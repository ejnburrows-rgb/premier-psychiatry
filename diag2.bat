@echo off
echo === BUILD OUTPUT: li count in index.html ===
type out\index.html | find /c "<li"
echo === BUILD OUTPUT: ul count in index.html ===
type out\index.html | find /c "<ul"
echo === BUILD OUTPUT: Maria L count ===
type out\index.html | find /c "Maria L"
echo === BUILD OUTPUT: Atencion count ===
type out\index.html | find /c "Atenci"
echo === BUILD OUTPUT: rounded-full count (pills) ===
type out\index.html | find /c "rounded-full"
echo === BUILD OUTPUT: Agenda tu cita ===
type out\index.html | find /c "Agenda tu cita"
echo === BUILD OUTPUT: spanish section id ===
type out\index.html | find /c "id=""spanish"""
echo === DONE ===
