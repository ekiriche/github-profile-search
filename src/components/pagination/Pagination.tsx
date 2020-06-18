import React from "react";
import {Pagination as MaterialPagination} from '@material-ui/lab';

interface PaginationProps {
    activePage: number;
    onChange: any;
    totalItems: number;
    itemsPerPage: number;
}

const Pagination = (props: PaginationProps) => {
    const {activePage, onChange, totalItems, itemsPerPage} = props;

    return (
        <MaterialPagination
            page={activePage}
            onChange={(event, value) => onChange(value)}
            count={Math.ceil(totalItems / itemsPerPage)}
            color="primary"
        />
    );
};

Pagination.defaultProps = {
    itemsPerPage: 5
};

export default Pagination;