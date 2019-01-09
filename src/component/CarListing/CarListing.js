import React from 'react';

function TableBodyComponent(props) {
    const item = props.item
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Model</th>
                    <th scope="col">Price</th>
                    <th scope="col">Buy</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{item.Year}</td>
                    <td>{item.Model}</td>
                    <td>&#36; {item.Price}</td>
                    <td><button>Buy Now</button></td>
                </tr>
            </tbody>
        </table>
    )
}

function TableComponent(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            {props.items.map((item, index) => (
                <TableBodyComponent item={item} />
            ))}
        </div>
    )
}

function CarListing() {
    const carsData = [
        { "Year": 2013, "Model": "A", "Price": 32000 },
        { "Year": 2011, "Model": "B", "Price": 44000 },
        { "Year": 2016, "Model": "B", "Price": 15500 }
    ]

    return (
        <div className="card card-body">
            <TableComponent title="Cars" items={carsData} />
        </div>
    )
}

export default CarListing;