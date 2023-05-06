import { useContext, ReactNode, useState, createContext } from "react";

interface IContext {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}
interface PrinpicalProviderProps {
  children: ReactNode;
}

const PrincipalContexto = createContext<IContext>({} as IContext);


export function PrincipalProvider({ children }: PrinpicalProviderProps) {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <PrincipalContexto.Provider value={{ handleClickButton, selectedGenreId }} >
      {children}
    </PrincipalContexto.Provider>
  )
}
export function Contexto() {
  const context = useContext(PrincipalContexto)

  return context
}
