import { useEffect } from "react";
import { useState } from "react";


function useCardData() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('/properties.json')
            .then((res) => res.json())
            .then((data) => setCard(data));
    }, []);

    return [card];
}

export default useCardData