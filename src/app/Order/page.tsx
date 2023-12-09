"use client";
import { useState } from "react";

export default function Order(){
  
    const [isFormVisible, setFormVisible] = useState(true);

    const showForm = () => {
      setFormVisible(true); // Sửa thành true để hiển thị form
    }
  
    const closeForm = () => {
      setFormVisible(false); // Sửa thành false để ẩn form
    }
  
    return (
      <div>
        <div className="search">
          <label htmlFor="orderSearch">Đơn hàng : </label>
          <div className="input-wrapper">
            <input type="text" className="order-search" id="orderSearch" placeholder="Tìm kiếm hóa đơn" required />
            <button className="button-search" type="submit">Tìm kiếm</button>
            <button className="btn-searchadd" type="button" onClick={showForm}>Thêm</button>
          </div><br /><br />
        </div><br/>
        <table border={1} cellPadding={5} id="productTable">
           <thead>
            <tr>
                <th>Mã đơn hàng</th>
                <th>Người tạo</th>
                <th>Ngày tạo</th>
                <th>Tổng tiền</th>
                <th>Loại sản phẩm</th>
                <th>Số lượng</th>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td>HD01</td>
                <td>hiếu</td>
                <td>01/01/2023</td>
                <td>$100</td>
                <td>Trà</td>
                <td>1</td>
                <td>

                    <button className="button-update">Cập nhập</button><br/>
                    <button className="button-delete">Xóa</button>
                </td>
               
            </tr>
           </tbody>
            
        
        </table>
        {isFormVisible && (
          <div className="from-overlay" id="form-Overlay">
            <div className="container-oder">
              <form className="form-oder">
                <span className="close-btn" onClick={closeForm}>X</span>
                <h2>Đơn hàng</h2>
                <input className="orderId" type="text" placeholder="Mã đơn hàng" required />
                <select className="orderUser">
                        <option value="noUser">Người tạo</option>
                        <option>Khuyến</option>
                        <option>Tân</option>
                        <option>Hiếu</option>
                </select><br/>
                <input className="orderDate" type="date" placeholder="Ngày tạo" required /><br/>
                <input className="orderTotal" type="number" placeholder="Tổng tiền" required /><br/>
                 <div className="form-add">
                    <select className="orderItem">
                    <option value="noItem">Loại sản phẩm</option>
                            <option></option>
                            <option></option>
                    </select>
                    <input className="orderAmout" type="number" placeholder="Số lượng"  required />
                    <button className="btn-add" type="submit">Thêm</button>
                 </div>
                 <table border={1} cellPadding={5} id="productOrder">
                    <thead>

                        <tr>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Trà đào</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                    </table><br></br>
                <button className="btn-order" type="submit">Đặt hàng</button><br />
              </form>
            </div>
          </div>
        )}
    </div>
);
}
