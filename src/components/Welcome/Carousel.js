//@flow
import React from 'react';

const Carousel = () => (
  <div id="carouselExampleControls" className="w-100 nvx-h-100 carousel slide" data-ride="carousel" data-interval="5000">
    <div className="carousel-inner nvx-h-100">

      <div className="carousel-item nvx-h-100 active">
        <div className="d-flex nvx-h-100 justify-content-center">
          <div className="row px-3 justify-content-around nvx-h-100">

            <div className="col-4 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="nvx-thumb"></div>
              <div className="nvx-thumb-text text-center"><span>Artist name</span></div>
            </div>
            <div className="col-4 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="nvx-thumb"></div>
              <div className="nvx-thumb-text text-center">Artist name</div>
            </div>
            <div className="col-4 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="nvx-thumb"></div>
              <div className="nvx-thumb-text text-center">Artist name</div>
            </div>

          </div>
        </div>
      </div>

      <div className="carousel-item nvx-h-100">
        <div className="d-flex nvx-h-100 justify-content-center">
          <div className="row px-3 justify-content-around nvx-h-100">

            <div className="col-4 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="nvx-thumb"></div>
              <div className="nvx-thumb-text text-center"><span>Artist name</span></div>
            </div>
            <div className="col-4 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="nvx-thumb"></div>
              <div className="nvx-thumb-text text-center">Artist name</div>
            </div>
            <div className="col-4 nvx-h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="nvx-thumb"></div>
              <div className="nvx-thumb-text text-center">Artist name</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Carousel;