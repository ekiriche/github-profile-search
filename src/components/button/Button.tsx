import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button as MaterialButton} from "@material-ui/core";

interface ButtonProps {
    text?: string;
    linkToProfile: string;
}

const useStyles = makeStyles(() => ({
    root: {
        height: "40px",
        background: "#FFFFFF",
        border: "1px solid #000000",
        boxSizing: "border-box",
        borderRadius: "34px",
        fontSize: "12px",
        lineHeight: "15px",
        fontWeight: 500,
        padding: "6px 18px",
        textTransform: "none"
    }
}));

const Button = (props: ButtonProps) => {
    const classes = useStyles();
    const {text, linkToProfile} = props;

    return (
        <MaterialButton
            classes={{
                root: classes.root
            }}
            href={linkToProfile}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text || "Кнопка"}
        </MaterialButton>
    );
};

export default Button;