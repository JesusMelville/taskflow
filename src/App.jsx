import { AppProvider } from '@context';
import { MainTemplate } from '@components/templates';
import '@styles/global.css';

function App() {
    return (
        <AppProvider>
            <MainTemplate />
        </AppProvider>
    );
}

export default App;
