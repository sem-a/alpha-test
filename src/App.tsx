import React from "react";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import CardsList from "./components/CardsList";

function App() {
    return (
        <div className="App">
            <Header />
            <Container>
                <CardsList />
            </Container>
        </div>
    );
}

export default App;
