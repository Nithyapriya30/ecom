import React from 'react';
const CollectionSection = ({ items }) => {
  return (
    <section id="collection" className="py-5">
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">New Collection</h2>
        </div>
        <div className="row g-0">
          <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
          </div>
          <div className="collection-list mt-4 row gx-0 gy-3">
            {items.map((item, index) => (
              <div key={index} className={`col-md-6 col-lg-4 col-xl-3 p-2 ${item.category}`}>
                <div className="collection-img position-relative">
                  <img src={item.imageSrc} alt={item.title} className="w-100" />
                </div>
                <div className="text-center">
                  <p className="text-capitalize my-1">{item.title}</p>
                  <span className="fw-bold">{`$ ${item.price}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
