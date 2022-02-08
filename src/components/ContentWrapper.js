import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';
import TableRow from './TableRow';
import Footer from './Footer';

export default function ContentWrapper (){
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <TableRow data={[{titulo: "Billy Elliot", duracion: 123, rating: "5", genero:"Drama", premio:2},
                                {titulo: "Alicia en el pais de la maravillas", duracion: 145, rating: "3.2", genero:"Comedia", premio:1}]} />
                <Footer />
            </div>
        </div>
    );
}