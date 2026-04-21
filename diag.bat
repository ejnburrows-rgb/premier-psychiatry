@echo off
echo === DIAG: Conditions.tsx li count ===
type src\components\Conditions.tsx | find /c "<li"
echo === DIAG: Conditions.tsx ul count ===
type src\components\Conditions.tsx | find /c "<ul"
echo === DIAG: Insurance.tsx li count ===
type src\components\Insurance.tsx | find /c "<li"
echo === DIAG: Insurance.tsx ul count ===
type src\components\Insurance.tsx | find /c "<ul"
echo === DIAG: Testimonials.tsx Maria L count ===
type src\components\Testimonials.tsx | find /c "Maria L"
echo === DIAG: page.tsx SpanishCTA lines ===
type src\app\page.tsx | find "SpanishCTA"
echo === DIAG: SpanishCTA.tsx Atencion ===
type src\components\SpanishCTA.tsx | find "Atenci"
echo === DIAG: Testimonials.tsx map count ===
type src\components\Testimonials.tsx | find /c ".map("
echo === DIAG: Testimonials.tsx hidden md check ===
type src\components\Testimonials.tsx | find "md:hidden"
echo === DIAG: Testimonials.tsx hidden count ===
type src\components\Testimonials.tsx | find /c "hidden"
echo === DONE ===
