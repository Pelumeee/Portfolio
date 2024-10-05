import { NavLink } from "react-router-dom";

const Button = ({ bg = "black", color = "white", border = "none", padding = "none", children, to = "/", clname="" }) => {
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
    console.log(clname);

    return (
        <NavLink className={clname.includes('/work') ? 'active' : ''} to={to} style={style}>
            {children}
        </NavLink>
    );
};

export default Button;
