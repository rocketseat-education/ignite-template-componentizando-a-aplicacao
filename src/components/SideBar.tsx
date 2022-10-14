import { useEffect, useState } from "react";
import { GenreResponseProps } from "../@types/types";
import { Contexto } from "../hooks/Contexto";
import { api } from "../services/api";
import { Button } from "./Button";

export function SideBar() {

  const { selectedGenreId, handleClickButton } = Contexto()

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
      
    </nav>
  )
}
