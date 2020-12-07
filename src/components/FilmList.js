import Film from './Film'

const FilmList = ({films}) => {

    const filmList = films.map(film => {
        return (
            <Film name={film.name} key={film.id}></Film>
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