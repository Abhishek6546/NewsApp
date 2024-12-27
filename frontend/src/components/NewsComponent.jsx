import React from "react";
import { Link } from "react-router-dom";

function NewsComponent({ article }) {
    return (
        <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{article.content}</p>
            <div className="text-sm text-gray-500">
                <p>Category: {article.category}</p>
                <p>Source: {article.source}</p>
                <Link to={`${article.link}`}>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition duration-200 mt-2">
                        Know More
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default NewsComponent;
