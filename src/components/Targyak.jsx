function Targyak() {
    const tomb = ["C#", "Kliens prog", "Szerver prog","Adatbázis" ];
    return(
        <>
            <ul>
                {tomb.map((elem) => <li>{elem}</li>)}
            </ul>
        </>
    )
}

export default Targyak;