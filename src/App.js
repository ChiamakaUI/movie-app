// import './App.css';
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from "@xstyled/styled-components";
// import { x } from '@xstyled/styled-components'
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tv from "./pages/Tv";
import Movies from "./pages/Movies";

const theme = {
  ...defaultTheme,
  // Customize your theme here
  fonts: {
    outfit: "Outfit, sans-serif",
  },
};

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Preflight />
        {/* ... */}
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={ <Movies />} />
            <Route path="/tv" element={<Tv />} />
          </Routes>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
