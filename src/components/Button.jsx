import { NavLink } from "react-router-dom";

const Button = ({ bg = "blue", color = "white", border = "none", padding = "none", children, to = "/" }) => {
    const style = {
        fontSize: "18px",
        lineHeight: "28px",
        backgroundColor: bg,
        color: color,
        border: border,
        padding: padding,
        borderRadius: "12px",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    return (
        <NavLink to={to} style={style}>
            {children}
        </NavLink>
    );
};

export default Button;
