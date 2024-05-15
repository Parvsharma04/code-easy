import React, { useState } from 'react';
import './Pagenation.css';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // You can adjust this based on your requirements

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const renderPages = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li
                    key={i}
                    className={`numb ${currentPage === i ? 'active' : ''}`}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </li>
            );
        }
        return pages;
    };

    return (
        <div className="pagination">
            <ul>
                <li className={`btn prev ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => handleClick(currentPage - 1)}>
                    Prev
                </li>
                {renderPages()}
                <li className={`btn next ${currentPage === totalPages ? 'disabled' : ''}`} onClick={() => handleClick(currentPage + 1)}>
                    Next
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
