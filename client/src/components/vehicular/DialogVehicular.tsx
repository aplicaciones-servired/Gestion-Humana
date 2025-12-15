import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { X } from "lucide-react";
import Typography from "@mui/material/Typography";
import { useVehicular } from "@/services/Vehicular";

export default function DialogVehicular({
    open,
    handleClose,
    id,
}: {
    open: boolean;
    handleClose: () => void;
    id: number | undefined;
}) {
    const { dataVehicular } = useVehicular(undefined, id);

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullWidth
            maxWidth="xl"
        >
            <DialogTitle
                sx={{
                    m: 0,
                    p: 2,
                    display: "flex",
                }}
                id="customized-dialog-title"
            >
                <X
                    aria-label="close"
                    onClick={handleClose}
                    className="cursor-pointer flex"
                />
                <span style={{ flex: 1, textAlign: "center" }}>
                    Detalle Inspección Vehicular
                </span>
            </DialogTitle>

            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            ></IconButton>
            {dataVehicular.map((items, index) => (
                <DialogContent dividers key={index}>
                    <Typography gutterBottom>
                        <div className="space-y-6">
                            {/* Información General */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Información General
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Fecha
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.fecha}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Cédula
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.cedula}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Kilometraje
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.kilometraje}
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Sistema de Luces */}
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Sistema de Luces
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Luz Baja
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.l_baja}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Luz Alta
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.l_alta}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Luz Marcha Atrás
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.l_marcha_atras}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Luz Interior
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.l_interior}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Luz Freno
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.l_freno}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Estacionarias
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.estacionarias}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Viraje Derecho
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.viraje_derecho}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Viraje Izquierdo
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.viraje_izquierdo}
                                        />
                                    </label>
                                </div>
                                {items.observacion1 && (
                                    <label className="block text-center mt-4 uppercase text-sm">
                                        Observación
                                        <textarea
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                            disabled
                                            rows={2}
                                            defaultValue={items.observacion1}
                                        />
                                    </label>
                                )}
                            </div>

                            {/* Accesorios */}
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Accesorios y Equipamiento
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Radio
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.radio}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Pitos
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.pitos}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Parabrisas
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.parabrisas}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Vidrios Laterales
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.vidrios_laterales}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Manillas Alza Vidrios
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.manillas_alza_vidrios}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Espejos Retrovisores
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.espejos_retrovisores}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Cerraduras
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.cerraduras}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Plumillas Limpia Vidrios
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.plumillas_limpia_vidrios}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Dispositivo Velocidad
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.dispositivo_velocidad}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Tapa Aceite
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.tapa_aceite}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Tapa Gasolina
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.tapa_gasolina}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Tapa Radiador
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.tapa_radiador}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Tapetes
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.tapetes}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Varilla Aceite
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.varilla_aceite}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Revisión Externa
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.revision_externa}
                                        />
                                    </label>
                                </div>
                                {items.observacion2 && (
                                    <label className="block text-center mt-4 uppercase text-sm">
                                        Observación
                                        <textarea
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                            disabled
                                            rows={2}
                                            defaultValue={items.observacion2}
                                        />
                                    </label>
                                )}
                            </div>

                            {/* Neumáticos */}
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Neumáticos
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Delanteros
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.delanteros}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Traseros
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.traseros}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Repuestos
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.repuestos}
                                        />
                                    </label>
                                </div>
                                {items.observacion3 && (
                                    <label className="block text-center mt-4 uppercase text-sm">
                                        Observación
                                        <textarea
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                            disabled
                                            rows={2}
                                            defaultValue={items.observacion3}
                                        />
                                    </label>
                                )}
                            </div>

                            {/* Sistema de Frenos */}
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Sistema de Frenos
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Principal
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.principal}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Emergencia
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.emergencia}
                                        />
                                    </label>
                                </div>
                                {items.observacion4 && (
                                    <label className="block text-center mt-4 uppercase text-sm">
                                        Observación
                                        <textarea
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                            disabled
                                            rows={2}
                                            defaultValue={items.observacion4}
                                        />
                                    </label>
                                )}
                            </div>

                            {/* Equipo de Carretera */}
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Equipo de Carretera
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Extintor Vigente
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.extintor_vigente}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Cinturones Seguridad
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.cinturones_seguridad}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Caja Herramientas
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.caja_herramientas}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Gato
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.gato}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Cuna
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.cuna}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Llave Rueda
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.llave_rueda}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Botiquín
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.botiquin}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Triángulo
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.triangulo}
                                        />
                                    </label>
                                </div>
                                {items.observacion5 && (
                                    <label className="block text-center mt-4 uppercase text-sm">
                                        Observación
                                        <textarea
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                            disabled
                                            rows={2}
                                            defaultValue={items.observacion5}
                                        />
                                    </label>
                                )}
                            </div>

                            {/* Documentación */}
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Documentación
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Licencia Tránsito
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.licencia_transito}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Seguro
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.seguro}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Licencia Conducción
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.licencia_conduccion}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Revisión
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.revision}
                                        />
                                    </label>
                                </div>
                                {items.observacion6 && (
                                    <label className="block text-center mt-4 uppercase text-sm">
                                        Observación
                                        <textarea
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                            disabled
                                            rows={2}
                                            defaultValue={items.observacion6}
                                        />
                                    </label>
                                )}
                            </div>

                            {/* Niveles de Líquidos */}
                            <div className="bg-teal-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Niveles de Líquidos
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Líquido Freno
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.liquido_freno}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Aceite
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.acite}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Refrigerante
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.refrigerante}
                                        />
                                    </label>
                                </div>
                                {items.observacion7 && (
                                    <label className="block text-center mt-4 uppercase text-sm">
                                        Observación
                                        <textarea
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                            disabled
                                            rows={2}
                                            defaultValue={items.observacion7}
                                        />
                                    </label>
                                )}
                            </div>

                            {/* Sistema Mecánico */}
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Sistema Mecánico
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Amortiguadores
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.amortiguadores}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Cardán
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.cardan}
                                        />
                                    </label>

                                    <label className="block text-center mt-1 uppercase text-sm">
                                        Caja Cambios
                                        <input
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                                            type="text"
                                            disabled
                                            defaultValue={items.caja_cambios}
                                        />
                                    </label>
                                </div>
                                {items.observacion8 && (
                                    <label className="block text-center mt-4 uppercase text-sm">
                                        Observación
                                        <textarea
                                            className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                            disabled
                                            rows={2}
                                            defaultValue={items.observacion8}
                                        />
                                    </label>
                                )}
                            </div>

                            {/* Imágenes */}
                            <div className="bg-pink-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                    Evidencias Fotográficas
                                </h3>
                                {(items.imagen_inspeccion1 && items.imagen_inspeccion1.length > 50) ||
                                    (items.imagen_inspeccion2 && items.imagen_inspeccion2.length > 50) ||
                                    (items.imagen_inspeccion3 && items.imagen_inspeccion3.length > 50) ? (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {(items.imagen_inspeccion1 && items.imagen_inspeccion1.length > 50) && (
                                            <div>
                                                <label className="block text-center mb-2 uppercase text-sm font-medium">
                                                    Imagen 1
                                                </label>
                                                <img
                                                    src={items.imagen_inspeccion1}
                                                    alt="Inspección 1"
                                                    className="w-full h-64 object-cover rounded-lg border"
                                                />
                                                {items.observacion9 && (
                                                    <textarea
                                                        className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                                        disabled
                                                        rows={2}
                                                        defaultValue={items.observacion9}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {(items.imagen_inspeccion2 && items.imagen_inspeccion2.length > 50) && (
                                            <div>
                                                <label className="block text-center mb-2 uppercase text-sm font-medium">
                                                    Imagen 2
                                                </label>
                                                <img
                                                    src={items.imagen_inspeccion2}
                                                    alt="Inspección 2"
                                                    className="w-full h-64 object-cover rounded-lg border"
                                                />
                                                {items.observacion10 && (
                                                    <textarea
                                                        className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                                        disabled
                                                        rows={2}
                                                        defaultValue={items.observacion10}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {(items.imagen_inspeccion3 && items.imagen_inspeccion3.length > 50) && (
                                            <div>
                                                <label className="block text-center mb-2 uppercase text-sm font-medium">
                                                    Imagen 3
                                                </label>
                                                <img
                                                    src={items.imagen_inspeccion3}
                                                    alt="Inspección 3"
                                                    className="w-full h-64 object-cover rounded-lg border"
                                                />
                                                {items.observacion11 && (
                                                    <textarea
                                                        className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                                                        disabled
                                                        rows={2}
                                                        defaultValue={items.observacion11}
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-8">
                                        <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-gray-500 font-medium text-center">No hay imágenes disponibles</p>
                                        <p className="text-gray-400 text-sm mt-1 text-center">Esta inspección no contiene evidencias fotográficas</p>
                                    </div>
                                )}
                            </div>

                            {(items.firma_administracion && items.firma_administracion.length > 50) ||
                                (items.firma_conductor && items.firma_conductor.length > 50) ? (
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                                        Firmas
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {items.firma_administracion && items.firma_administracion.length > 5 && (
                                            <div>
                                                <label className="block text-center mb-2 uppercase text-sm font-medium">
                                                    Firma Administración
                                                </label>
                                                <img
                                                    src={items.firma_administracion}
                                                    alt="Firma Administración"
                                                    className="w-full h-60 object-contain bg-white rounded-lg border"
                                                />
                                            </div>
                                        )}

                                        {items.firma_conductor && items.firma_conductor.length > 5 && (
                                            <div>
                                                <label className="block text-center mb-2 uppercase text-sm font-medium">
                                                    Firma Conductor
                                                </label>
                                                <img
                                                    src={items.firma_conductor}
                                                    alt="Firma Conductor"
                                                    className="w-full h-60 object-contain bg-white rounded-lg border"
                                                />
                                            </div>
                                        )}

                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-8">
                                    <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-gray-500 font-medium text-center">No hay firma disponibles</p>
                                    <p className="text-gray-400 text-sm mt-1 text-center">Esta inspección no contiene evidencias fotográficas</p>
                                </div>
                            )}
                        </div>
                    </Typography>
                </DialogContent>
            ))}
        </Dialog>
    );
}
