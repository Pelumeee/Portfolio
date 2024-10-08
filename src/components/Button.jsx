import { NavLink } from "react-router-dom";

const Button = ({ bg = "black", color = "white", border = "none", padding = "none", children, to = "/", clname="", radius = "12px" }) => {
    const style = {
        fontSize: "18px",
        lineHeight: "28px",
        backgroundColor: bg,
        color: color,
        border: border,
        paddingBlock: padding,
        borderRadius: radius,
        textDecoration: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };
    console.log(clname);

    return (
        <NavLink className="w-full md:max-w-[220px] text-center" to={to} style={style}>
            {children}
        </NavLink>
    );
};

export default Button;
