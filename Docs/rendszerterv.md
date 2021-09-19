# Rendszerterv

A rendszer c�lja
---

Jelenleg a interneten �s vicc k�nyvekben rengeteg j� vicc megtal�lhat�, �m ezek megtal�l�sa nem felt�tlen�l k�nny� folyamat. A c�l egy olyan weboldal l�trehoz�sa amegy b�rki sz�m�ra el�rhet� a neten. A felhaszn�l� kateg�ri�nk�nt tud keresni a viccek k�z�tt, like-olni tudja az egyes vicceket melyek ekkor beker�lnek a felhaszn�l� kedvencei k�z� melyeket szint�n meg tud n�zni. A viccek k�zti b�ng�sz�skor a felhaszn�l� l�tja, hogy egy vicc h�ny like-ot kapott.

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


K�vetelm�nyek
---
- Viccek t�rol�sa.
- Viccek kateg�ri�ba rendez�se.
- Viccek like-jainak sz�montart�sa.
- Felhaszn�l�k sz�montart�sa.
- A kedven viccek sz�montart�sa felhaszn�l�nk�nt.
- A GDPR-nek val� megfelel�s.

Tesztterv
---

A tesztel�sek c�lja a rendszer �s komponensei funkcionalit�s�nak teljes vizsg�lata, ellen�rz�se, a rendszer �ltal megval�s�tott �zleti szolg�ltat�sok verifik�l�sa.

**Unite teszt:**

Ahol csak lehets�ges, sz�ks�ges m�r a fejleszt�si id� alatt is tesztelni, hogy a met�dusok megfelel�en m�k�dnek-e. Ez�rt a met�dusok megfelel� m�k�d�s�nek biztos�t�s�ra mindegyikhez �rni kell Unit teszteket, a min�l nagyobb k�dlefedetts�get szem el�tt tartva. A met�dusok akkor vannak k�sz, ha a tesztesetek hiba n�lk�l lefutnak az egyes met�dusokon.

**Alfa teszt:**

A teszt els�dleges c�lja: az eddig megl�v� funkci�knak a k�l�nb�z� b�ng�sz�kkel, �s androidokkal val� kompatibilit�s�nak tesztel�se. A tesztet a fejleszt�k v�gzik. Az elj�r�s sikeres, ha k�l�nb�z� b�ng�sz�kben is megfelel�en m�k�dnek a k�l�nb�z� funkci�k.  A teszt id�tartama egy h�t.