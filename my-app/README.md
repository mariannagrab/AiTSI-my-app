## Link do strony

https://mariannagrab.github.io/AiTSI-my-app/

## Technologie
### HTML5
### CSS
Cały styl strony został stworzony za pomocą plików CSS, w projekcie nie wykorzystano dostępnych frameworków np. biblioteki bootstrap użyto nietrywialnych właściwości CSS takich jak:
flex - jak bardzo przedmiot wzrośnie w stosunku do reszty,
transition - łagodniejsze przejście po najechaniu kursora,
background: linear-gradient(90deg, .. - gradientowa zmiana tła
użycie pseudo klas
### React.js 18.0.0 - biblioteka JavaScript do tworzenia interfejsów graficznych bazująca na odrębnych komponentach
Dla każdej zakładki na stronie stworzono oddzielny folder zawierający pliki tworzące komponenty i odpowiadające pliki css. (my-app/src/components/) Gdzie to było możliwe zastosowano wspólny plik css - dla zakładek "o mnie" i "o stronie". Wszystkie komponenty składowe renderowane są w głównym komponencie App.js (my-app/src/App.js). Plik index.html znajduje się w folderze public. (my-app/public/index.html)

Nawigacja strony zapewniona przez bibliotekę React router i React router dom w wersjach 6.3.

### Pliki Cookies
Pliki cookie to dane przechowywane w postaci par klucz-wartość, które służą do przechowywania informacji o użytkowniku na jego komputerze przez przeglądane przez niego witryny. Używane są głównie do utrzymywania sesji np. poprzez wygenerowanie i odesłanie tymczasowego identyfikatora po logowaniu.

W projekcie użyto biblioteki react-cookie. W pamięci przechowywane jest imię osoby piszącej komentarz w zakładce "Dodaj komentarz". Dzięki użytym ciasteczkom dostępne jest równieź po odświeżeniu strony.
