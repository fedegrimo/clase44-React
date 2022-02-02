import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";


export default function ContentRowTop (){
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
			<ContentRowMovies data={[{title: "Movies in Data Base", encryp: 21, border: "card border-left-primary shadow h-100 py-2", icon:"fas fa-film fa-2x text-gray-300"},
                                    {title: "Total awards", encryp: 79, border: "card border-left-success shadow h-100 py-2", icon:"fas fa-award fa-2x text-gray-300"},
                                    {title: "Actors Quantity", encryp: 49, border: "card border-left-warning shadow h-100 py-2", icon:"fas fa-user fa-2x text-gray-300"}]}  />
            <div className="row">
                <LastMovieInDb />
                <GenresInDb /> 
            </div>
        </div>
    );
}