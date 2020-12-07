import Film from './Film'

const FilmList = ({films}) => {

    const filmList = films.map(film => {
        return (
            <a href={film.url}><Film name={film.name} key={film.id}></Film></a>
        )
    })

    return(
        <>
        <h2>This will be the film list</h2>
        <ul>
            {filmList}
        </ul>
        </>
    )
};

export default FilmList;