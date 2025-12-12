import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { X } from "lucide-react";
import Typography from "@mui/material/Typography";
import { useExtintor } from "@/services/Extintor";

export default function CustomizedDialogs({
  open,
  handleClose,
  id,
}: {
  open: boolean;
  handleClose: () => void;
  id: number | undefined;
}) {
  const { dataExtintor } = useExtintor(undefined, id);

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
        <span style={{ flex: 1, textAlign: "center" }}>Detalle Inspección Extintor</span>
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
      {dataExtintor.map((items, index) => (
        <DialogContent dividers key={index}>
          <Typography gutterBottom>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-center mt-1 uppercase">
                Fecha Inspección
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.fecha_inspeccion}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Responsable Inspección
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.responsable_inspeccion}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Documento Responsable
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.responsable_documento}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Lugar Inspección
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.lugar_inspeccion}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Número
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.numero}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Tipo
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.tipo}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Ubicación
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.ubicación}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Capacidad
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.capacidad}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Próxima Recarga
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.proxima_recarga}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Golpes
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.golpes}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Manómetro
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.manómetro}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Pasador Seguridad
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.pasador_seguridad}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Manguera
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.manguera}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Boquilla
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.boquilla}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Manija
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.manija}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Cilindro
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.cilindro}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Pintura
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.pintura}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Señalización
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.señalización}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Acceso
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.acceso}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Visibilidad
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={items.visibilidad}
                />
              </label>
            </div>

            {items.observacion && (
              <label className="block text-center mt-5 uppercase col-span-2">
                Observación
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.observacion}
                  rows={1}
                />
              </label>
            )}

            {items.recomendaciones && (
              <label className="block text-center mt-5 uppercase col-span-2">
                Recomendaciones
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.recomendaciones}
                  rows={1}
                />
              </label>
            )}      
          </Typography>
        </DialogContent>
      ))}
      <DialogActions>
        <button onClick={handleClose} className="cursor-pointer flex items-center px-3 py-2.5 md:px-[18px] md:py-3.5 text-white no-underline transition-colors duration-200 hover:text-gray-200 bg-gradient-to-r from-[#3245ff] to-[#bc52ee] rounded-[10px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-2px_0_rgba(0,0,0,0.24)] hover:shadow-none">cerrar</button>
      </DialogActions>
    </Dialog>
  );
}
