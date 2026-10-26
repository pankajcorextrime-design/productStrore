import Spinner from 'react-bootstrap/Spinner';

function Spinner1() {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </div>
        </div>
    );
}

export default Spinner1;