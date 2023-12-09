import Image from "next/image";
import Header from "./Header";
import Search from "./Search";

export default function AccountList() {
    return (
        <div>
            {/* Left-content */}
            <div className="div-content-left">

                <div className="div-user">
                    <Image
                        src="/user.png"
                        alt="Description of the image"
                        width={50} // Độ rộng của hình ảnh
                        height={50} // Chiều cao của hình ảnh
                    />
                    <h4>Hoàng Khuyến</h4>
                    <label>-- Admin --</label>
                </div>

                <button className="line"></button>
                <div className="nav-manager">
                    <button>Quản lý loại sản phẩm</button>
                    <button>Quản lý sản phẩm</button>
                    <button>Quản lý tài khoản</button>
                    <button>Quản lý đơn hàng</button>
                </div>

            </div>

            {/* Right-content */}
            <div className="div-content-right">
                <Header />

                {/* container */}
            
                    <div className="account-search-container">
                        Tài khoản
                        <input type="text" name="" id="" placeholder="Nhập tài khoản cần tìm kiếm" />
                        <button>Tìm kiếm</button>
                        <button>Thêm tài khoản</button>
                    </div>


              


                {/* table div */}
                <div>
                    <table cellPadding={10}>
                        {/* phần đầu của bảng */}
                        <thead className="">
                            <tr>
                                <th>User</th>
                                <th>Password</th>
                                <th>FullName</th>
                                <th>Role</th>
                            </tr>
                        </thead>

                        {/* body của bảng */}
                        <tbody>
                            <tr>
                                <td>chutan</td>
                                <td>123</td>
                                <td>Vòng Chủ Tân</td>
                                <td>Employee</td>
                                <td><button className="updatedeleteButton">Cập nhật</button></td>
                                <td><button className=".updatedeleteButton">Xoá</button></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}