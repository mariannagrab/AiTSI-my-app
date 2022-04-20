import React, {Component} from "react";
import "./Home.css";

class Home extends Component {
 
    render() {
        return  <section>
            <div className="home">
            <article>
            <header>
            <div className="homequote hq-left">
            <h1>"Tutaj jakiś ekstra cytat dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h1>
            <p>Phasellus sagittis est nulla, ut vestibulum elit lobortis vel.</p>
            </div>
            <div className="homequote hq-right">
            <h1>"Phasellus porta libero..."</h1>
            <p>Duis a dui eu est porta ultrices. Etiam eget consequat ex. Nulla pretium augue eu quam viverra</p>
            </div>
            <div className="homequote hq-left">
            <h1>"Phasellus ultricies augue sit amet interdum commodo."</h1>
            <p>Sed suscipit, justo eget laoreet sollicitudin, nibh tortor mollis nisl, nec vestibulum justo quam imperdiet dui.</p>
            </div>
            <div className="homequote hq-center">
            <h1>Phasellus ultricies augue sit amet interdum commodo.</h1>
            </div>
            </header>
            </article>

            </div>
        </section>;
    }
}

export default Home;