function FavoritesCard() {
    return (
        <div className="d-flex justify-content-center">
            <div className="row row-cols-4 row-cols-md-1 g-4">
                <div className="col">
                   
                    <div className="card text-bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Recipe</h5></div>
                    </div> 
                </div>
                <div className="col">
                    
                    <div className="card text-bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Recipe</h5></div>
                    </div> 
                </div>
                <div className="col">
                    
                    <div className="card text-bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Recipe</h5></div>
                    </div> 
                </div>
                <div className="col">
                    
                    <div className="card text-bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header"><h5 className="card-title">Recipe</h5></div>
                    </div> 
                </div>
            </div> 
        </div>
    );
  }

  export default FavoritesCard;