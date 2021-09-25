# Rendszerterv

A rendszer célja
---

Jelenleg a interneten és vicc könyvekben rengeteg jó vicc megtalálható, ám ezek megtalálása nem feltétlenül könnyű folyamat. A cél egy olyan weboldal létrehozása amegy bárki számára elérhető a neten. A felhasználó kategóriánként tud keresni a viccek között, like-olni tudja az egyes vicceket melyek ekkor bekerülnek a felhasználó kedvencei közé melyeket szintén meg tud nézni. A viccek közti bőngészéskor a felhasználó látja, hogy egy vicc hány like-ot kapott.

Projektterv
-----------

### Projektszerepkörök, felelőségek:
Scrum master:
Product owner: Ignácz Máté

### Projektmunkások és felelőségek:
#### Backend:
György Dávid, Györke Zsófia, Ignácz Máté, Olasz Zsolt. Feladatuk funkciók létrehozása, adatok tárolása.

#### Frontend:
György Dávid, Györke Zsófia, Ignácz Máté, Olasz Zsolt. Feladatuk a weboldal elemeinek megejelnítése.

### Ütemterv:
| Funkció/Story | Feladat/Task | Prioritás | Becslés | Aktuális becslés | Eltelt idő | Hátralévő idő | 
| -------------- | ----------- | --------- | ------- | ---------------- | ---------- | ------------- |
| Követelmény specifikáció | | 0 | 8 | 8 | 7 | 1 |
| Funkcionális specifikáció | | 0 | 8 | 8 | 7 | 1 |
| Rendszerterv |  | 0 | 8 | 8 | 7 | 1 | 
| Backend | Funckciók/Adattárolás | 2 | 8 | 8 | 0 | 8 |
| Frontend |  Megjelenítés | 2 | 8 | 8 | 0 | 8 |

### Mérföldkövek:
Első heti munka bemutatása elkészült.

Üzleti folyamatok modellje
--------------------------

![](./Resources/üfm.PNG)


Követelmények
---
- Viccek tárolása.
- Viccek kategóriába rendezése.
- Viccek like-jainak számontartása.
- Felhasználók számontartása.
- A kedven viccek számontartása felhasználónként.
- A GDPR-nek való megfelelés.

Adatbázis terv
---
A viccek tárolása JSON állományokban történik, innen kerülnek beolvasásra a HTML fájlban.

Fizikai környezet
---
- A viccportál HTML formátumban készült webes felületre, ezáltal a platform operációs rendszere bármi lehet.
- Nincsenek megvásárolt komponenseink
- Fejlesző eszközök:
	- Visual Studio Code Live Server bővítménnyel

Tesztterv
---

A tesztelések célja a rendszer és komponensei funkcionalitásának teljes vizsgálata, ellenőrzése, a rendszer által megvalósított üzleti szolgáltatások verifikálása.

**Unite teszt:**

Ahol csak lehetséges, szükséges már a fejlesztési idő alatt is tesztelni, hogy a metódusok megfelelően működnek-e. Ezért a metódusok megfelelő működésének biztosítására mindegyikhez írni kell Unit teszteket, a minél nagyobb kódlefedettséget szem előtt tartva. A metódusok akkor vannak kész, ha a tesztesetek hiba nélkül lefutnak az egyes metódusokon.

**Alfa teszt:**

A teszt elsődleges célja: az eddig meglévő funkcióknak a különböző böngészőkkel, és androidokkal való kompatibilitásának tesztelése. A tesztet a fejlesztők végzik. Az eljárás sikeres, ha különböző böngészőkben is megfelelően működnek a különböző funkciók.  A teszt időtartama egy hét.
