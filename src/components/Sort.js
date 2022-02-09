import { set } from "date-fns/esm";
import React from "react";

function Sort ({sortBy, setSortBy, onChangeSort}) {

    function handleChangeSort(e) {
        setSortBy(e.target.checked)
        console.log(sortBy)
        onChangeSort()
    }

    return(
        <>
            <label for="alphaSort">Sort A-Z</label>
                 <input type="checkbox" name="alphaSort" onChange={handleChangeSort} checked={sortBy}/>
                 
        </>
    )
}

export default Sort