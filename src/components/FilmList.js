import Film from './Film'

const FilmList = ({films}) => {

    const filmList = films.map(film => {
        return (
            <a href={film.url}><Film name={film.name} key={film.id}></Film></a>
        )
    })

    return(
        <>
        <ul>
            {filmList}
        </ul>
        </>
    )
};

export default FilmList;