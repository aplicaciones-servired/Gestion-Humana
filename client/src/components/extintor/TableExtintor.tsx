import { useEffect, useState } from "react";
import type { Extintor } from "@/Types/Extintor.d";
import { useFiltersExtintor } from "@/Hooks/useFiltersExtintor";
import CustomizedDialogs from "./DalogExtintor";

interface TableExtintorProps {
    DataExtintor: Extintor[];
    pagination?: React.ReactNode;
}

const TableExtintor = ({ DataExtintor, pagination }: TableExtintorProps) => {
    const { filteredPDV, searchfecha, setSearchFecha } = useFiltersExtintor(DataExtintor);
    const [selectedItem, setSelectedItem] = useState<Extintor | null>(null);
    const [open, setOpen] = useState(false);
    return (
        <section className="container px-4 mx-auto bg-white rounded-md h-full">
            {/* Header con título y filtro de fecha */}
            <div className="flex items-center justify-between mt-6 mb-4">
                <div>
                    <h2 className="text-lg font-medium text-gray-800">
                        Inspecciones de Extintores
                    </h2>
                </div>

                <div className="flex items-center gap-2 mt-3">
                    <label htmlFor="fecha-filter" className="text-sm font-medium text-gray-700">
                        Filtrar por fecha:
                    </label>
                    <input
                        id="fecha-filter"
                        type="date"
                        className="block w-60 h-10 py-2 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                        onChange={(e) => setSearchFecha(e.target.value)}
                        value={searchfecha}
                    />
                </div>
            </div>

            {/* Tabla */}
            <div className="flex flex-col">
                <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 px-4 text-xs font-semibold text-left text-gray-700 uppercase tracking-wider">
                                        Fecha Inspección
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-xs font-semibold text-left text-gray-700 uppercase tracking-wider">
                                        Responsable
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-xs font-semibold text-left text-gray-700 uppercase tracking-wider">
                                        Documento
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-xs font-semibold text-left text-gray-700 uppercase tracking-wider">
                                        Lugar
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-xs font-semibold text-left text-gray-700 uppercase tracking-wider">
                                        Ubicación
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-xs font-semibold text-left text-gray-700 uppercase tracking-wider">
                                        Próxima Recarga
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredPDV.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-12 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <p className="text-gray-500 font-medium">No hay datos disponibles</p>
                                                <p className="text-gray-400 text-sm mt-1">Intenta cambiar los filtros o la fecha</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredPDV.map((extintor) => (
                                        <tr key={extintor.ID} onClick={() => {
                                            setOpen(true);
                                            setSelectedItem(extintor);
                                        }} className="hover:bg-blue-100 hover:shadow-md transition-all cursor-pointer">
                                            <td className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                {extintor.fecha_inspeccion}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                {extintor.responsable_inspeccion}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                {extintor.responsable_documento}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                {extintor.lugar_inspeccion}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                {extintor.ubicación}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                                                {extintor.proxima_recarga}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {open && (
                <CustomizedDialogs
                    open={open}
                    handleClose={() => setOpen(false)}
                    id={selectedItem?.ID ? Number(selectedItem.ID) : undefined}
                />
            )}
            {pagination && (
                <div className="mt-6 mb-4">
                    {pagination}
                </div>
            )}
        </section>
    );
}

export default TableExtintor;