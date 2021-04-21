import React from "react";
import "./card-notes.styles.scss"

const CardNotes = () => {
    return (
        <div className="card-notes">
            <div className="notes-heading">
                <p>Notes</p>
                {/* <p>hii</p> */}
            </div>
            <br />
            <br />
            <p>06/01/2020</p>
            <p>
                Patients having severe sinusits about two to three months
                ago with facial discomfort, nasal congestion, eye pain, and postnasal
                drip symptioms
            </p>
            <br />
            <p>
                Probable environmental inhalant allergies, probable food
                allergies, and history of asthama
            </p>
        </div>
    )
}

export default CardNotes