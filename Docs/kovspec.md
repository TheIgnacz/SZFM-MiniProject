# Követelményspecifikáció

Jelenlegi helyzet leírása
----
A mai világban rengeteg vicc található az interneten, de ezek szétvannak szótva küldönböző weboldalakon, ahol néha még nincsenek kategorizálva se. Ezért ha valaki specifikus viccet akar találni, akkor problémákba ütközhet. Probléma lehet még, ha valaki maga akar feltölteni, és ezért be kell regisztrálnia egy oldalra, vagy magának létrehozni egyet.

Vágyálomrendszer leírása
---------

A projekt célja hogy egy olyan weboldalt hozzon létre, ahova az emberek feltölthetnek vicceket név vagy névtelenül, és ezeket mások megtekinthetik. Cél lenne hogy az emberek ezeket a vicceket kategóránként tekinthesség meg, és értékeljék like rendszerrel. A rendszerben lenne admin felület is, ahol moderálni lehet az oldalt.

Funkcionális követelmények
-----

A kezelő felületnek jól átláthatónak, letisztultnak és esztétikusnak kell lennie. A felhasználónak tudnia kell kategóriák közül választania, hogy milyen kategóriájú viccet akar olvasni. Megtalálhatóak kell legyenek az állatos viccek,  gyerek viccek, rendőr viccek és skót viccek kategóriák. Minden kategóriában legalább 3 db vicc szerepeljen.


A rendszerre vonatkozó szabályok 
--------
A web felület szabványos eszközökkel készüljön, html/css/javascript. A képek jpeg és png formátumúak lehetnek. A felhasználókat azonosító web oldalak esetében szükséges jogszabályokat be kell tartani: GDPR, ...

Jelenlegi üzleti folyamatok modellje
-------

- A vicceket jelenleg külömböző weboldalakon illetve vicc kötetekben találjuk meg, ami elég hosszadalmas idő. 
- Valamint a viccek megtalálása után a kategóriánkénti keresés is nehézkes feladat, főleg a papír alapú vicc kötetekben. 

Igényelt üzleti folyamatok 
---------
- Online megjelenés 
- Viccek feltöltése adminként bejelentkezés után 
- Viccek likeolása bejelentkezéssel/bejelentkezés nélkül
- Lehetőség viccek hozzáadására a "Kedvelt(kedvenc) viccekhez", ahol megtalálhatja a kedvenc tartalmát. 
- Friss tartalom minden nap. „A nap vicce”

Követelmények listája 
------
F1 Könnyen kezelhető 
F2 Viccek szűrése kategóriák szerint 
F3 Kedvenc viccek tárolása 
F4 Keresőmotor megvalósítása 
F5 Gyerekbarát tartalom szűrhetősége 
F6 Statisztika – azaz a viccekre beérkező like-ok/pontok(lehet akár 5 csillagos értékelés is) kiértékelése.

Fogalomtár
-----

- Kategória:  Egynemű csoport, amely személyekből, tárgyakból vagy dolgokból áll. Minden ilyen csoport hasonló jellemzők vagy típus alapján különválasztható egy másiktól.

- Vicc: A vicc „rendszerint ismeretlen szerzőtől származó, csattanóval végződő, rövid, nevettető, kitalált történet, gyakran párbeszédes alakban”.

- Rendőr vicc: Olyan vicc melynek egyik szereplője rendőr.

- Gyerek vicc: Olyan vicc melynek egyik szereplője egy gyerek.

- Állatos vicc: Olyan vicc melynek egyik szereplője vagy tárgya egy állat.

- Skót vicc: Olyan vicc melynek egyik szereplője skót.

- GDPR:	A GDPR a General Data Protection Regulation kezdőbetűiből képzett mozaikszó, magyarul általános adatvédelmi rendelet. 2018 májusától lépett életbe az EU 28 tagállamában, így Magyarországon is, és alapjaiban forgatja fel a korábbi adatvédelmi rutint. Nem véletlen, hogy a legszigorúbb rendeletek között tartják számon: a NAIH (Nemzeti Adatvédelmi Hivatal) akár 20 millió euróig (6 milliárd Ft) terjedő büntetést is kiszabhat azokra, akik nem tartják be az adatvédelmi szabályokat.
