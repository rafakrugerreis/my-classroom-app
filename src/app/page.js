import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/Topbar';
import Card from '../../components/Card';

export default function Layout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      {/* Barra lateral */}
      <div style={{ position: 'fixed', width: '200px', height: '100vh', zIndex: 5 }}>
        <Sidebar />
      </div>

      {/* Conteúdo principal */}
      <div style={{ marginLeft: '200px', flex: 1 }}>
        <TopBar />
        <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap' }}>
          <Card/>
          {children}
        </div>
      </div>
    </div>
  );
}
