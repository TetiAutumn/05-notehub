// import toast, { Toaster } from "react-hot-toast";
// import SearchBar from "../SearchBox/SearchBar";
import "./App.module.css"
// import { movieService } from "../../services/movieService";
// import { useEffect, useState, type ComponentType } from "react";
// import type { Movie } from "../../types/movie";
// import { Loader } from "../Pagination/Pagination";
// import { ErrorMessage } from "../NoteList/NoteList";
// import { MovieModal } from "../Modal/Modal";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import ReactPaginateModule, { type ReactPaginateProps } from "react-paginate";
import css from "./App.module.css";

// type ModuleWithDefault<T> = { default: T }

// const ReactPaginate = (ReactPaginateModule as unknown as ModuleWithDefault<ComponentType<ReactPaginateProps>>).default;

export default function App() {
  // const [query, setQuery] = useState("");
  // const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  // const [page, setPage] = useState<number>(1);

  // const { data: movies, isLoading, isError } = useQuery({
  //   queryKey: ["movies", query, page],
  //   queryFn: () => movieService(query, page),
  //   enabled: !!query,
  //   placeholderData: keepPreviousData,
  // });

  // const handleSearch = (newQuery: string) => {
  //   setQuery(newQuery);
  //   setPage(1);
  // };

  // useEffect(() => {
  //   if (movies?.results.length === 0 && query && !isLoading) {
  //     toast("No movies found for your request.")
  //   }

  // }, [movies?.results.length, isLoading, query]);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {/* Пагінація */}
        {/* Кнопка створення нотатки */}
      </header>
    </div>

  );
}
