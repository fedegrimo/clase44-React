
export default function TableRow(props){
    return (
        <div className="container-fluid">

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premio</th>
                </tr>
            </thead>
            <tbody>
            {
                props.data.map((items,idx) => {
                    return (
                        <tr key={idx}>
                            <th>{items.titulo}</th>
                            <th>{items.duracion}</th>
                            <th>{items.rating}</th>
                            <th>{items.genero}</th>
                            <th>{items.premio}</th>
                        </tr>);
                })
            }   
            </tbody>
            
        </table>
        </div>
        
    );
}