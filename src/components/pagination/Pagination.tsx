import React from "react";
import {Pagination as MaterialPagination} from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";

interface PaginationProps {
    activePage: number;
    onChange: any;
    totalItems: number;
    itemsPerPage: number;
}

const useStyles = makeStyles(() => ({
    ul: {
        fontFamily: "Helvetica Neue"
    }
}));

const Pagination = (props: PaginationProps) => {
    const {activePage, onChange, totalItems, itemsPerPage} = props;
    const classes = useStyles();

    return (
        <MaterialPagination
            page={activePage}
            onChange={(event, value) => onChange(value)}
            count={Math.ceil(totalItems / itemsPerPage)}
            color="primary"
            classes={{
                ul: classes.ul
            }}
        />
    );
};

Pagination.defaultProps = {
    itemsPerPage: 5
};

export default Pagination;