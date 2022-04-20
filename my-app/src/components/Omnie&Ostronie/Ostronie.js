import React from "react";
import './O.css';
import OFigure from './OFigure';

function Ostronie() {

    return (<section>
        <div className="o">
            <div className="text">
                <article>
                    <header>
                        <h2>Technologie</h2>
                    </header>
                    <article>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            Cały styl strony został stworzony za pomocą plików CSS,
                            w projekcie nie wykorzystano dostępnych frameworków  np. biblioteki bootstrap
                            użyto nietrywialnych właściwości CSS takich jak:
                            <li className="double">flex - jak bardzo przedmiot wzrośnie w stosunku do reszty,</li>
                            <li className="double">transition - łagodniejsze przejście po najechaniu kursora,</li>
                            <li className="double">background:  linear-gradient(90deg, .. - gradientowa zmiana tła</li>
                            <li className="double">użycie pseudo klas</li>
                            <li>React.js 18.0.0 - biblioteka JavaScript do tworzenia interfejsów graficznych
                                bazująca na odrębnych komponentach</li>
                            <p> Dla każdej zakładki na stronie stworzono oddzielny
                                folder zawierający pliki tworzące komponenty i odpowiadające pliki css. (my-app/src/components/)
                                Gdzie to było możliwe zastosowano wspólny plik css - dla zakładek "o mnie" i "o stronie".
                                Wszystkie komponenty składowe renderowane są w głównym komponencie App.js (my-app/src/App.js).
                                Plik index.html znajduje się w folderze public. (my-app/public/index.html)
                            </p>
                            <p>Nawigacja strony zapewniona przez bibliotekę
                                React router i React router dom w wersjach 6.3.</p>
                            <li>Pliki Cookies</li>
                            <p>Pliki cookie to dane przechowywane w postaci par klucz-wartość, które służą do przechowywania informacji
                                o użytkowniku na jego komputerze przez przeglądane przez niego witryny.
                                Używane są głównie do utrzymywania sesji np. poprzez wygenerowanie
                                i odesłanie tymczasowego identyfikatora po logowaniu.
                            </p>
                            <p>W projekcie użyto biblioteki <span className="highlight">react-cookie</span>.
                                W pamięci przechowywane jest imię osoby piszącej komentarz w zakładce "Dodaj komentarz".
                                Dzięki użytym ciasteczkom dostępne jest równieź po odświeżeniu strony.</p>
                        </ul>
                    </article>
                </article>
                <article>
                    <header>
                        <h2>Ułatwienia dla osób niedowidzących i niewidomych</h2>
                    </header>
                    <article>
                        <ul>
                            <li>ustawiony meta description</li>
                            <li>korzystanie z nagłówków h1 (w podstronie home) oraz h2 (dodaj komentarz)</li>
                            <li>zastosowano opis alternatywny obrazka</li>
                            <li>uwzględniono zasadę wysokiego konktrastu</li>
                            <li className="double">czarny teskt na białym tle i bialy tekst na ciemnoniebieskim tle</li>
                            <li>nowe <span className="highlight">znaczniki semantyczne HTML5</span></li>
                            <li className="double">header - nagłówki w nawigacji i nagłówki kawałków artykułów w zakładkach</li>
                            <li className="double">nav - cała nawigacja górna strony</li>
                            <li className="double">section - tematycznie zgrupowana sekcja, przykładowo zakładka omnie</li>
                            <li className="double">article - odrębna część witryny, tekst w zakładkach, poszczególne komentarze</li>
                            <li className="double">main - główna treść strony</li>
                            <li className="double">footer - stopka z social media</li>
                        </ul>
                    </article>
                </article>
                <article>
                    <header>
                        <h2>Walidacja poprawności HTML i CSS</h2>
                    </header>
                    <article>
                        <ul>
                            <li>Kod CSS poddano walidacji poprzez załadowanie plików na stronę <a href="https://jigsaw.w3.org/css-validator/validator">jigsaw.w3.org</a></li>
                        </ul>
                    </article>
                </article>
                <article>
                    <header>
                        <h2>Hosting</h2>
                    </header>
                    <article>
                        <ul>
                            <li>Hosting zapewniony bezpośrednio ze strony github pages poprzez stworzenie repozytorium, 
                            dodanie dependency gh-pages do projektu i deploy pod linkiem zawartym w pliku package.json 
                            - "homepage": "https://mariannagrab.github.io/AiTSI-my-app"<a href="https://mariannagrab.github.io/AiTSI-my-app">https://mariannagrab.github.io/AiTSI-my-app</a></li>
                            <li>Informacja o hostingu przez github - <a href="https://pages.github.com/">pages.github.com</a></li>
                        </ul>
                    </article>
                </article>
            </div>
            <OFigure name="strona" /><OFigure name="walidacja" />
        </div>
    </section>);

}

export default Ostronie;