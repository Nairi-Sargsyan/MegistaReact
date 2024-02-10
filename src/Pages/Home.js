import ScrollToUp from "../Components/ScrollToUp/ScrollToUp";
import Company from "../Components/Company/Company";
import Subscribe from "../Components/Subscribe/Subscribe";
import Game from "../Components/Game/Game";
import Statistics from "../Components/Statistics/Statistics";

const Home = () => {
    return (
        <main>
            <div className="container">
                <ScrollToUp />
                <Company />
                <Subscribe />
                <Game />
                <Statistics />
            </div>
        </main>
    )
}

export default Home;