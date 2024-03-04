function Card() {
    return (
        <div className="d-flex justify-content-center">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <img class="card-img-top" src="#" alt="Meal Name"></img>
                    <div className="card text-bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Meal Name</h5></div>
                    </div> 
                </div>
                <div className="col">
                    <img class="card-img-top" src="#" alt="Meal Name"></img>
                    <div className="card text-bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Meal Name</h5></div>
                    </div> 
                </div>
                <div className="col">
                    <img class="card-img-top" src="#" alt="Meal Name"></img>
                    <div className="card text-bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Meal Name</h5></div>
                    </div> 
                </div>
                <div className="col">
                    <img class="card-img-top" src="#" alt="Meal Name"></img>
                    <div className="card text-bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Meal Name</h5></div>
                    </div> 
                </div>
            </div> 
        </div>
    );
  }

  export default Card;