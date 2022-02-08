import T from 'prop-types';

export default function ContentRowMoview (props){
    return (
        <div className="row">
            {
                props.data.map((items,idx) => {
                    return (
                        <div key={idx} className="col-md-4 mb-4">
                            <div className={items.border}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{items.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{items.encryp}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={items.icon}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }   
        </div>
    );
}

ContentRowMoview.propType = {
    title : T.string.isRequired,
    border: T.string.isRequired,
    encryp: T.oneOfType([
        T.string.isRequire,
        T.number.isRequired
    ]),
    icon : T.string
}

