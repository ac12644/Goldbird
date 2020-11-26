import React from 'react'
import CastBillets from './CastBillets';
import Rcs from "./Rcs";
import Hrrb from "./Hrrb";
import WireRod from "./WireRod";
import Brb from "./Brb";
import Forging from "./Forging";
import Sbrb from "./Sbrb";
import Sstb from "./Sstb";

function AllProducts() {
    return (
        <div>
            <CastBillets/>
            <Forging/>
            <Rcs/>
            <Hrrb/>
            <WireRod/>
            <Brb/>
            <Sbrb/>
            <Sstb/>

        </div>
    )
}

export default AllProducts;
