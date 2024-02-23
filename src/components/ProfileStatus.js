import React from 'react';
function ProfileStatus() {
  return (
    <div className="col-md-12">
      <p className="h4" style={{textAlign: 'left'}}> <b />My Orders</p>
      <div className="table-responsive">
        <table className="table table-responsive" style={{ borderRadius: '10px' }}>
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Company Name</th>
              <th>Product Name</th>
              <th>Order Status</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Company A</td>
              <td>Product Z</td>
              <td  style={{textAlign:'left'}}>
                <div className="progress" style={{ height: '5px', width: '150px' }}>
                  <div className="progress-bar bg-success" style={{ width: '100%' }}></div>
                </div>
                Recieved
              </td>
              <td>3</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Company B</td>
              <td>Product Y</td>
              <td  style={{textAlign:'left'}}>
                <div className="progress" style={{ height: '5px', width: '150px' }}>
                  <div className="progress-bar bg-danger" style={{ width: '60%' }}></div>
                </div>
                Shipping
              </td>
              <td>1</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Company C</td>
              <td>Product X</td>
              <td style={{textAlign:'left'}}>
                <div className="progress" style={{ height: '5px', width: '150px'}}>
                  <div className="progress-bar bg-info" style={{ width: '30%' }}></div>
                </div>
                Started
              </td>
              <td>4</td>
               <td>$500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfileStatus;