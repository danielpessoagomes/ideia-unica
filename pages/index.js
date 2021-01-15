import { useState } from 'react'

function Home() {

    const [valorInicial, setValorInicial] = useState(0);
    const [valorFinal, setValorFinal] = useState(0);
    const [valorVariacao, setValorVariacao] = useState(0);

    function variacao() {
        if (valorInicial && valorFinal) {
            setValorVariacao((valorFinal / valorInicial - 1) * 100)
        }
    }

    return (
        <div>
            <h1>Calcular Variação</h1>
            <div>
                <label>
                    Valor Inicial
            </label>
                <input
                    placeholder="Valor Inicial"
                    type="text"
                    name="valorInicial"
                    value={valorInicial}
                    onChange={(event) => {
                        setValorInicial(event.target.value)
                    }}
                    required
                />
            </div>
            <div>
                <label>Valor Final</label>
                <input
                    placeholder="Valor Final"
                    type="text"
                    name="valorFinal"
                    value={valorFinal}
                    onChange={(event) => {
                        setValorFinal(event.target.value)
                    }}
                    required
                />
            </div>
            <div>
                <button type="button" onClick={variacao}>Calcular</button>
            </div>
            <div>
                <label>Variação em %</label>
                <input
                    placeholder="Variacao"
                    type="text"
                    name="valorVariacao"
                    value={`${valorVariacao.toPrecision(4)}%`}
                    disabled
                />
            </div>
        </div>
    )
}
export default Home