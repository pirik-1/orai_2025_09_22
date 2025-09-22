function Hello() {
    const sayHello = () => {
        window.alert("Helló, világ!")
    }
    const sayHelloVki = (nev) => {
        window.alert("Helló, " + nev + "!")
    }
    var vki = "Mekk Elek";
    return(
        <>
            <button onClick={sayHello}>Helló</button>
            <button onClick={() => sayHelloVki("Mekk Elek")}>Hello ismerős</button>
            
        </>
    )
}

export default Hello;