/*********************************************
 * @author Caleb Edwards
 * @brief Just placeholders for when users can favorite recipes and they show on the profile.
 *********************************************/

function ProfileFavoritesCard() {
  return (
      <div className="d-flex justify-content-center">
          <div className="row row-cols-4 row-cols-md-1 g-4">
              <div className="col">
                 
                  <div className="card text-bg-secondary" style={{width: '18rem'}}>
                      <div className="card-header"><h5 className="card-title">Favorite</h5></div>
                  </div> 
              </div>
              <div className="col">
                  
                  <div className="card text-bg-secondary" style={{width: '18rem'}}>
                      <div className="card-header"><h5 className="card-title">Favorite</h5></div>
                  </div> 
              </div>
              <div className="col">
                  
                  <div className="card text-bg-secondary" style={{width: '18rem'}}>
                      <div className="card-header"><h5 className="card-title">Favorite</h5></div>
                  </div> 
              </div>
              <div className="col">
                  
                  <div className="card text-bg-secondary" style={{width: '18rem'}}>
                      <div className="card-header"><h5 className="card-title">Favorite</h5></div>
                  </div> 
              </div>
          </div> 
      </div>
  );
}

export default ProfileFavoritesCard;