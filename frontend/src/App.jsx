import {Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Translate from './components/Translate.jsx';
import AiChat from './components/AiChat.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translator" element={<Translate />} />
            <Route path="/chatbot" element={<AiChat />} />
        </Routes>
    );
}

export default App;