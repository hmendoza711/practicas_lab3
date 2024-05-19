import Table from "react-bootstrap/Table";
import AverageCalc from "../averageCalc/AverageCalc";


const TableComp = ({ netIncomes }) => {
    return (
        <Table striped bordered hover variant="info">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Net Income</th>
                </tr>
            </thead>
            <tbody>
                {netIncomes.map((component, index) => (
                    <tr key={index}>
                        <td>{component.brand}</td>
                        <td>{component.income}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2"><AverageCalc netIncomes={netIncomes} /></td>
                </tr>
            </tfoot>
        </Table>
    );
};

export default TableComp;