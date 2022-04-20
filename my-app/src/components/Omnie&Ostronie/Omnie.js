import React, { Component } from "react";
import './O.css';
import OFigure from './OFigure';


class Omnie extends Component {

    render() {
        return (<article>
            <div className="o">
                <div className="text">
                    <section>
                        <header>
                            <h2>Fotografka quam lorem, sit amet porta elit pharetra ac.</h2>
                        </header>
                        <article>
                            <p>
                                Zajmuję się fotografią od Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur tincidunt orci egestas, pulvinar neque a, mollis nibh.
                                Vivamus quis ipsum sit amet tortor tempus congue eget et tellus.
                                Morbi vehicula placerat finibus.Ut leo ipsum, ultricies non urna at,
                                porta cursus neque.
                                <span className="quote">
                                    Proin quis nunc sem.
                                </span>
                                Quisque facilisis arcu eu maximus efficitur.
                                Cras ornare erat ac euismod hendrerit.
                                Etiam nibh velit, tempor vel blandit sed.
                            </p>
                            <p>
                                Dapibus vitae augue.Integer convallis quam nec massa condimentum tincidunt.
                                Cras mollis metus consequat, rhoncus erat ac, aliquet lectus.
                                <span className="highlight">
                                    Sed sodales, odio sit
                                </span>
                                amet malesuada dignissim, quam libero blandit ex, non aliquet est augue at sapien.
                                Etiam iaculis ligula sit amet ex lacinia porttitor in quis dolor.In consectetur,
                                urna et semper accumsan, dolor metus placerat lorem, ac semper sapien turpis quis tellus.
                                Mauris eu dapibus nisi.Vestibulum in laoreet tellus, sit amet posuere dolor.
                            </p>
                            <p>
                                Sed lacus turpis, bibendum id augue eu, aliquam ultrices neque.
                                Phasellus vehicula pharetra orci, in euismod lacus aliquam ut.
                                Vestibulum nec tempus lorem.Sed tempus cursus tincidunt.
                                Nam tincidunt nunc nec
                                <span className="quote">
                                    nulla dignissim
                                </span>
                                nec sagittis nibh venenatis.
                                Fusce semper, est sed mollis  consectetur, felis mi lacinia tellus,
                                vitae tempus risus arcu at nisi.Fusce sed purus tincidunt,
                                imperdiet purus vitae, dictum purus.Donec nec dui justo.
                                Sed in pharetra lectus.Duis sit amet metus et velit egestas gravida.
                                Aliquam maximus lobortis lectus vitae rhoncus.
                            </p>
                        </article>
                        <header>
                            <h2>Graficzka Sed consequat mi vitae leo sollicitudin sollicitudin.</h2>
                        </header>
                        <article>
                            <p>
                                Ut sagittis porta aliquam.Morbi at volutpat tellus.
                                Etiam sollicitudin sapien sit amet aliquet gravida.Curabitur leo neque,
                                facilisis vitae aliquam eu, pellentesque quis mi.
                                Vivamus consectetur lobortis magna at accumsan.
                                Nullam maximus condimentum velit, eu vestibulum ex.
                                Integer in tellus vitae lorem posuere rutrum.
                                Maecenas suscipit justo id est sodales consectetur.
                            </p>
                            <p>
                                Aliquam a luctus libero.Suspendisse non tincidunt sem.Cras ligula tortor,
                                ultricies at ex nec, gravida placerat mauris.
                                Donec a rhoncus arcu.Nullam convallis rhoncus fermentum.
                                Vivamus et est sit amet orci rutrum tincidunt.
                                Cras eros dolor, varius a molestie sit amet, mollis vitae leo.
                                Donec nibh urna, viverra in aliquet euismod, cursus elementum est.
                                Sed consequat mi vitae leo sollicitudin sollicitudin.
                                Phasellus dictum tortor nibh, ac varius nunc venenatis nec.
                                Nunc dictum tincidunt tortor, at sagittis turpis scelerisque et.
                                Morbi nec justo nec tortor facilisis fermentum.
                            </p>
                            <p>
                                <span className="quote">
                                    "Nunc hendrerit luctus scelerisque. Praesent nec maximus dolor,
                                    id blandit diam.In facilisis consequat euismod.
                                    Integer scelerisque eu justo non pretium..."
                                </span>
                            </p>
                        </article>
                    </section>
                </div>
                <OFigure name="gory"/>
            </div>
        </article>
        )
    }
}

export default Omnie;