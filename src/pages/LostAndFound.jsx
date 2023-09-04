import Search from "../components/Search"
import Card from "../components/Card";
import LostPopUp from "../components/LostPopUp";

function LostAndFound(){
    return(<>
     <Search placeholder="Seach for the lost item ...."/>
     <LostPopUp />
        <Card />
        </>
    );
}

export default LostAndFound;