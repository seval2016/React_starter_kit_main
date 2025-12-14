import { Menu, Button, Avatar, Dropdown, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import "./layout.css";

function Header() {
  const userMenuItems = [
    {
      key: "profile",
      label: "Profilim",
      icon: <UserOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Çıkış Yap",
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Kurslarım</div>

      {/* Menü */}
      <div className="menu">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["courses"]}
          items={[
            { key: "home", label: "Ana Sayfa" },
            { key: "courses", label: "Kurslarım" },
            { key: "profile", label: "Profil" },
          ]}
        />
      </div>

      {/* Sağ taraf – modern */}
      <div className="right-actions">
        <Dropdown
          menu={{ items: userMenuItems }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Space className="user-area">
            <Avatar size="small" style={{ backgroundColor: "#1677ff" }}>
              S
            </Avatar>
            <span className="username">Seval</span>
          </Space>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
