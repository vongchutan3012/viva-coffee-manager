import Image from "next/image";
import Header from "./Header";
import Search from "./Search";


export default function AccountAdd() {
    return (
        <div>
            {/* left content  */}
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
            <div className="div-content-right"><Header />

                   {/* table div */}
                

            {/* Phần thô */}
                <div className="form-container">
                    <h2 className="">Tạo tài khoản người dùng</h2>

                    <div className="input-group">
                        <input className="input-text-account" type="text" placeholder="Username" required />
                        <input className="input-text-account" type="password" placeholder="Password" required />
                    </div>

                    <div className="input-group">
                        <input className="input-text-account" type="text" placeholder="FullName" required />
                        <select className="input-text-account" name="Permission" id="Phân quyền">
                            <option value="None">Chưa chọn</option>
                            <option value="1">Admin</option>
                            <option value="0">Employee</option>
                        </select>
                    </div>

                    <button className="button-account">Thêm tài khoản</button>
                </div>
            </div>

        </div>
    );
}