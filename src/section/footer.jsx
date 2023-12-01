import React from 'react';

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://www.envato.com" target="_blank" rel="noreferrer">
                            <span className="copy">Fabián Quintanilla H.</span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="https://github.com/FabianIsaac" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                            <a href="https://www.instagram.com/verdeavocado.q" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/fquintanillah" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;