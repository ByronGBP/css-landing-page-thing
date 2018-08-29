//@flow
import React from 'react';

const Presentation = () => (
  <div className="container nvx-row-12 border nvx-bg-presentation">
    <div className="nvx-row-6 d-flex align-items-center">
      <div className="col nvx-font-size-lg nvx-line-height">Start jamming now!</div>
    </div>
    <div className="nvx-row-2 d-flex align-items-center">
      <div className="col position-relative d-flex"> 
        <input type="text" className="nvx-input nvx-font-size-m" name="search"/>
        <label className="nvx-placeholder nvx-font-size-m" htmlFor="search">Search chords for</label>
      </div>
    </div>
    <div className="nvx-row-4 d-flex justify-content-center align-items-center">
      <div id="carouselExampleControls" className="w-100 nvx-h-100 carousel slide" data-ride="carousel" data-interval="0">
        <div className="carousel-inner nvx-h-100">
        
          <div className="carousel-item nvx-h-100 active">
            <div className="row nvx-h-100 justify-content-center">
              <div className="col-8 nvx-h-100">
                <div className="row justify-content-around nvx-h-100">

                  <div className="col-6 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="nvx-thumb"></div>
                    <div className="nvx-thumb-text text-center">Tame impala</div>
                  </div>
                  <div className="col-6 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="nvx-thumb"></div>
                    <div className="nvx-thumb-text text-center">Tame impala</div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item nvx-h-100">
            <div className="row nvx-h-100 justify-content-center">
              <div className="col-8 nvx-h-100">
                <div className="row justify-content-around nvx-h-100">

                  <div className="col-6 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="nvx-thumb"></div>
                    <div className="nvx-thumb-text text-center">Tame impala</div>
                  </div>
                  <div className="col-6 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="nvx-thumb"></div>
                    <div className="nvx-thumb-text text-center">Tame impala</div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item nvx-h-100">
            <div className="row nvx-h-100 justify-content-center">
              <div className="col-8 nvx-h-100">
                <div className="row justify-content-around nvx-h-100">

                  <div className="col-6 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="nvx-thumb"></div>
                    <div className="nvx-thumb-text text-center">Tame impala</div>
                  </div>
                  <div className="col-6 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="nvx-thumb"></div>
                    <div className="nvx-thumb-text text-center">Tame impala</div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
);

export default Presentation;
