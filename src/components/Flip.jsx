import styles from "../css/flip.module.css"

function Piros(){
    return <div className={styles.piros}>Piros</div>
}
function Fekete(){
    return <div className={styles.fekete}>Fekete</div>
}

function Flip(){
    var hit = Math.random() < 0.5;
    return(
        <>
            {hit ? <Piros/> : <Fekete/>}
        </>
    )
}

function Flip2(){
    var hit = Math.random() < 0.5;
            if (hit) {
               return <Piros/>
            }
            else {
               return <Fekete/> 
            }
}

export {Flip, Flip2};