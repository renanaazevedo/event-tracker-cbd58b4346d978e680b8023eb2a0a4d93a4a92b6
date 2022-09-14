import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"

const useAtualizarEvento = () => {
    const setListadeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (evento: IEvento) => {
        return setListadeEventos(listaAntiga => {
            const indice = listaAntiga.findIndex(e => e.id === evento.id)
            return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice + 1)]
        })
    }
}

export default useAtualizarEvento