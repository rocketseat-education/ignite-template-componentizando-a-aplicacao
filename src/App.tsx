import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

import { PrincipalProvider } from './hooks/Contexto';

export function App() {

  return (
    <PrincipalProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </PrincipalProvider>
  )
}
