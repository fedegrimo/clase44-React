import ContentWrapper from './components/ContentWrapper';
import SideBar from './components/Sidebar';
import './assets/css/App.css';

export default function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
    </div>
  );
}

