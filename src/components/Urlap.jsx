import { useState } from "react";

function Urlap(){
    const [szoveg, setSzoveg] = useState("");
    const [user, setUser] = useState({nev: "", evf: 13, aktiv: 1});
    const kuldes = (event) =>{
        event.preventDefault();
    }
    return(
        <>
            <input type="text" value={szoveg} onChange={event => setSzoveg(event.target.value)}/>
            <p>{szoveg}</p>
            <form onSubmit={kuldes}>
                <fieldset>
                    <legend>Adatok</legend>
                    <label htmlFor="nev">Név</label>
                    <input type="text" name="nev" id="nev" value={user.nev} onChange={e => setUser({...user, nev: e.target.value})} />
                    <br />

                    <label htmlFor="evf">Évfolyam</label>
                    <select name="evf" id="evf" value={user.evf} onChange={e => setUser({evf: e.target.value, ...user})}>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                    </select>
                    <br />
                    
                    <label htmlFor="aktiv">Aktív</label>
                    <input type="checkbox" name="aktiv" id="aktiv" checked={user.aktiv} onChange={e =>setUser({...user, aktiv: e.target.checked})}/>
                    <br />

                    <label htmlFor="megj">Megjegyzés</label>
                    <textarea name="megj" id="megj" value={user.megj} onChange={e => setUser({...megj, megj:e.target.value})}/>
                </fieldset>
            </form>
            <p>Helló {user.nev} ({user.evf} évfolyam, {user. aktiv? "aktív" : "passzív"})</p>
            <p>Megjegyzés: {user.megj}</p>
        </>
    )
}

export default Urlap;