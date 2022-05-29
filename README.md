# NodeJS - MySQL Exam

Due 29 May 2022 23:59

Instructions

Sukurkite sistemą, kuri leistų registruotiems vartotojams prisijungti į grupes ir dalintis sąskaitomis. Įsivaizduokite, kad keliaujate su draugais ir dažnai sąskaitas apmoka vienas žmogus. Vėliau tas žmogus nori atgauti iš jūsų pinigus , o Jūs jau pamiršote už ką turėtume atsiskaityti. Ši sistema potencialiai turėtų išspręsti šią problemą, nes leis dalintis išlaidomis/sąskaitomis su pasirinkta grupe.  
 
Ši sistema susidarys iš 3 dalių - duomenų bazės, serverio (back-end) ir klientinės dalies (front-end). 
 

Duomenų bazė turėtų turėti 4 lenteles su skliausteliuose nurodytais stulpeliais: 

users (id, full_name, email, password, reg_timestamp); - dalyviu lentele 

groups (id, name); - grupės saugomos šioje lenteleje. Į šią lentelę iškarto įvedam per phpMyAdmin ar bet kokiu jums patogiu būdu šiuos įrašus: “Trip to Spain”, “Going to Alps”, “Dinner in Belgium”, “Trip to Finland”, “New Years Party” (arba kažką panašaus jūsų nuožiūra) 

bills (id, group_id, amount, description); - atskira lentele išlaidoms kuria susiesime su grupėmis 

accounts (id, group_id, user_id) <- ši lentelė skirta žinoti kokioms grupėms priklauso kiekvienas vartotojas. 
 
P.S. duomenų tipus ir constraints turite pasirinkte savo nuožiūra. 

Back-end turės žemiau išvardintus maršrutus (angl. routes): 

POST /register - gaunam vartotojo duomenis, validuojam ir išsaugom DB; 

POST /login - gaunam vartotojo duomenis, validuojam, tikrinam ar toks vartotojas egzistuoja pagal email ir password. Jei egzistuoja generuojam tokena su vartotojo id ir gražiname token. Jei ne gražinam atitinkamus atsakymus.  

POST /accounts/ - endpointas skirtas priskirti vartotoją kažkuriai grupei. Vartotojas paduoda group_id ir savo token (is kurio galite pasiimti user_id). Sukuriamas įrašas lentelėje accounts. 

GET /accounts/ - paduoda visas prisijungusio vartotojo grupes (JOIN su groups). ID pasiima iš token. 

GET /bills/:group_id – endpointas skirtas grąžinti visas konkrečiai grupei skirtas sąskaitas/išlaidas 

POST /bills/ - įrašo naują sąskaitą specifinei grupei (front'as paduoda: group_id, amount, description) 

EXTRA (nebūtinas bet extra + prie pažymio) 

POST /groups - tik prisijungusiems vartotojams sukuriama nauja grupė groups lentelėje. 

GET /groups - grąžina groups lentelės informaciją (naudinga groups.html select laukui generuoti) 

Front-end turėtų turėti žemiau išvardintus puslapius: 

Register.html: vartotojas įrašo vardą, emailą ir slaptažodį du kartus (jeigu slaptažodžiai nesutampa ar yra kitokia validacijos klaida - vartotojas nėra sukuriamas). 

Login.html: vartotojas įrašo emailą, slaptažodį; gauna token; ir nukreipia į groups puslapį. 

Groups.html: vartotojas mato visas savo grupes (pagal accounts lentelę iš DB). Paspaudus - nuveda į tos grupės bills.html. Apačioje forma pridėti grupę prie paskyros (t.y. į accounts lentelę). Jei neprisijungęs vedam i Login.html. 

Bills.html: mato sąskaitas/išlaidas specifinės grupės ir gali pridėti naują sąskaitą/išlaidą. 
 
P.S. Padalinimas į puslapius nebūtinai toks, jei norite dalinkite savo nuožiūra ar viską generuokite dinamiškai viename puslapyje.  

Baigus darba išeksportuoti per phpMyAdmin ir prideti db.sql failiuka prie back end failu.  

Prieš pradedant darbą panagrinėkite prie užduoties prisegtus "screenshots"  



Sukurti GitHub repozitoriją. Pavadinimas

<vardas>_<pavarde>_type8_node

(pvz.: jonas_jonaitis_type8_node)