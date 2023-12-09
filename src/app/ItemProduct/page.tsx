"use client";

import { useState } from "react";

export default function ItemProductPage() {
    const [isItemVisible, setItemVisible] = useState(true);

    const showFormItem = () => {
      setItemVisible(true); // Sửa thành true để hiển thị form
    }
  
    const closeFormItem = () => {
      setItemVisible(false); // Sửa thành false để ẩn form
    }
    return (
        <div>

        <div className="search-item">
          <label htmlFor="itemLabel">Loại sản phẩm :</label>
          <div className="inputitem-wrapper">
            <input type="text" className="item-search" id="itemLabel" placeholder="Tìm kiếm loại sản phẩm" required />
            <button className="buttonitem-search" type="submit">Tìm kiếm</button>
            <button className="btnitem" type="button" onClick={showFormItem}>Thêm</button>
          </div>
        </div><br/>
        <table border={1} cellPadding={2} id="itemTable">
            <thead>
                <tr>
                    <th>Mã loại sản phẩm</th>
                    <th>Tên loại sản phẩm</th>
                </tr>
            </thead>
                <tbody>
                    <tr>

                    <td>LSP1</td>
                    <td>Trà</td>

                    <td>
                    <button className="btnit-update">Cập nhập</button><br/>
                    <button className="btnit-delete">Xóa</button>
                    </td>                   
                    </tr>
                
                </tbody>
        </table>
        {isItemVisible && (
            
        <div className="from-overlayitem" id="form-Overlayitem">
            <div className="container-itemPoduct">
                <form className="form-itemProduct">
                    <span className="close-btnitem" onClick={closeFormItem}>X</span>
                    <h2>Loại sản phẩm</h2>
                    <input className="itemProduct-id" type="text" placeholder="Mã loại" required /><br/>
                    <input className="itemProduct-name" type="text" placeholder="Tên loại" required /><br />
                    <button className="button-itemProduct" type="submit">Thêm</button>
                </form>
            </div>
        </div>
        )}
    </div>
    );
}