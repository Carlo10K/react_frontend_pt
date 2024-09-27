import { saveAs } from "file-saver";
import * as XLSX from 'xlsx';

const TableWithExport = ({ data }) => {
    // Función para exportar los datos a Excel
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Cases");

        // Convertir el libro a un archivo .xlsx
        const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([wbout], { type: "application/octet-stream" });

        saveAs(blob, "cases.xlsx");
    };
    return (
        <div>
            <button
                onClick={exportToExcel}
                className="mb-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
                Export to Excel
            </button>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">ID</th>
                        <th className="px-4 py-2 border-b">Description</th>
                        <th className="px-4 py-2 border-b">State</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="px-4 py-2 border-b">{item.id}</td>
                            <td className="px-4 py-2 border-b">{item.description}</td>
                            <td className="px-4 py-2 border-b">{item.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableWithExport;
