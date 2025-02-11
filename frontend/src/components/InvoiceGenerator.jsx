/* eslint-disable react/prop-types */
import { useRef } from "react";
import html2pdf from "html2pdf.js";

const InvoiceGenerator = ({ products, setShowInvoice, showInvoice }) => {
    const pdfRef = useRef();



    const calculateTotal = () => {
        return products.reduce((total, item) => {
            const numericPrice = parseFloat(item.price.replace(/,/g, ""));
            return total + numericPrice * item.quantity;
        }, 0);
    };

    const generatePDF = () => {
        window.print()
    };

    return (
        <div className={`p-8 bg-gray-100 min-h-screen flex items-center justify-center fixed inset-0 z-[1000] ${showInvoice?"visible":"invisible"}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-6">Invoice Generator</h1>
                <div ref={pdfRef} className="p-4 border rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Invoice</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">#</th>
                                <th className="border border-gray-300 p-2">Product</th>
                                <th className="border border-gray-300 p-2">Price</th>
                                <th className="border border-gray-300 p-2">Quantity</th>
                                <th className="border border-gray-300 p-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                const numericPrice = parseFloat(product.price.replace(/,/g, ""));
                                const productTotal = numericPrice * product.quantity;
                                return (
                                    <tr key={product._id}>
                                        <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                                        <td className="border border-gray-300 p-2">{product.name}</td>
                                        <td className="border border-gray-300 p-2 text-right">
                                            ₹{numericPrice.toLocaleString()}
                                        </td>
                                        <td className="border border-gray-300 p-2 text-center">{product.quantity}</td>
                                        <td className="border border-gray-300 p-2 text-right">
                                            ₹{productTotal.toLocaleString()}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="text-right mt-4 text-xl font-bold">
                        Grand Total: ₹{calculateTotal().toLocaleString()}
                    </div>
                </div>
                <button
                    onClick={generatePDF}
                    className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Download PDF
                </button>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Go To Home Page
                </button>
            </div>
        </div>
    );
};

export default InvoiceGenerator;