import React from 'react'






class Display extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
    
        return(
            <div>
<div>
                    <div class="container">
                           <div class="row">
                              <div class="col-sm news">
                               What's Trending   
                              </div>
                              <div class="col-sm">
                            
                              </div>
                              <div class="col-sm">
                                   
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-sm news">
                              <img class ="trending"src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SY1000_SX675_AL_.jpg"></img>
                              </div>
                              <div class="col-sm">
                              <img class ="trending"src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg"></img>
                              </div>
                              <div class="col-sm">
                              <img class ="trending" src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg" ></img>  
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-sm">
                               5.0 Rating
                              </div>
                              <div class="col-sm">
                              3.0 Rating
                              </div>
                              <div class="col-sm">
                              4.0 Rating  
                              </div>
                          </div>






                    </div>
              </div>
                
           
           </div>
        );
    }
}
export default Display;