function Targyak() {
    const tomb = ["C#", "Kliens prog", "Szerver prog","Adatbázis" ];
    return(
        <>
            <ul>
                {tomb.map((elem, idx) => <li key = {idx}>{elem}</li>)}
            </ul>
        </>
    )
}

export default Targyak;