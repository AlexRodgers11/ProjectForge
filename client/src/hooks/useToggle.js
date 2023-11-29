import React, { useState } from "react";

const useToggle = (bool) => {
    const [state, setState] = useState(bool);

    const toggleState = () => {
        setState(!state);
    };

    return [state, toggleState];
}

export default useToggle;