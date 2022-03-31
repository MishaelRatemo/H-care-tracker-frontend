import React from "react";

function Donor(){
    return(
        <div>
            <h1 className="nav navbar-dark ">Donor</h1>
            <div className="">
                <form>
                <label for="donors">Donor:</label>
                    <select id="donors" name="donor">
                        <option value="red-cross">Red-cross</option>
                        <option value="nhif">NHIF</option>
                        <option value="moh">MoH</option>
                        <option value="u.n">U.N</option>
                    </select>
                <label for="equipment">Equipment:</label>
                    <select id="equipment" name="equipment">
                        <option>Needles</option>
                        <option>Beds</option>
                        <option>Medicine</option>
                        <option>Masks</option>
                    </select>
                <label for="quantity">Equipment:</label>
                <label for="price">Price:</label>
                <input type="submit" value="Submit">Submit</input>
                </form>
            </div>
        </div>
    )
}

export default Donor