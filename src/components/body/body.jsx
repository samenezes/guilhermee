function Body () {
    function Api() {
        const valores = fetch('https://opentdb.com/api.php?amount=30&category=16').then(res => {
            res.json().then(resp => {          
                var pergunta = document.querySelector('#pergunta')
                var dificuldade = document.querySelector('#dificuldade')

                pergunta.innerHTML = `Pergunta: ${resp.results.question}`
                dificuldade.innerHTML = ` Dificuldade: ${resp.results.difficulty}`
            })
        })
    }

    return(
        <>
            <body onLoad={Api()}>
                <label id="pergunta"> </label> <p> </p>
                <label id="dificuldade"> </label>
            </body>
        </>
    )
}

export default Body