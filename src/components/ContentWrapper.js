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
                <TableRow />
                <Footer />
            </div>
        </div>
    );
}