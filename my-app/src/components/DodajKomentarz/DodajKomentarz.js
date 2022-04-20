import './DodajKomentarz.css';
import React, { useState } from 'react';
import ItemProperty from "./ItemProperty";
import SubmitButton from "./SubmitButton";
import comments from "./Comments.js";
import Comment from "./Comment";
import { useCookies } from 'react-cookie';

function DodajKomentarz(props) {

    const [commentList, setCommentList] = useState(comments);
    const [errText, setErrText] = useState();

    const [newItem, setNewItem] = useState({
        name: ""
        , title: ""
        , commtext: ""
    });

    function saveInput(event) {
        const { name, value } = event.target;
        setNewItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function submit(event) {
        event.preventDefault();
        if (newItem.name === "" || newItem.title === "" || newItem.commtext === "") {
            setErrText("Wszystkie pola powinny być wypełnione");
        } else {
            setCommentList([...commentList, {
                name: newItem.name
                , title: newItem.title
                , commtext: newItem.commtext
                , time: Date.now()
            }]);
            setErrText("");
            handle();
        }
    }

    function displayItems() {

        return commentList.map((item, index) => {
            return <Comment
                key={index}
                id={index}
                name={item.name}
                title={item.title}
                commtext={item.commtext}
                time={item.time}
            />;
        })
    }
    const [cookies, setCookie] = useCookies();

    const handle = () => {
        setCookie('uName', newItem.name);
     };

    return (<section>
        <div className="dodajKomentarz">
            <div className="addComment">
                <form onSubmit={submit}>
                    <h2>Dodaj komentarz:</h2>
                    <ItemProperty placeholder={cookies.uName} edit={true} label="Imię" type="text" value={newItem.name} name="name" savePropInput={saveInput} />
                    <ItemProperty edit={true} label="Tytuł" type="text" value={newItem.title} name="title" savePropInput={saveInput} />
                    <ItemProperty edit={true} label="Treść" type="text" value={newItem.commtext} name="commtext" savePropInput={saveInput} />
                    <SubmitButton value="Dodaj" />
                    <div className="errText">{errText}</div>
                </form>           
            <div className="comments">
                <h2>Komentarze:</h2>
                {displayItems()}
            </div>
            </div>
        </div>
    </section>);

}

export default DodajKomentarz;