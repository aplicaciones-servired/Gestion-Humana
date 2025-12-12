import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { X } from "lucide-react";
import Typography from "@mui/material/Typography";
import { usePreopreacional } from "@/services/Preopreacional";

export default function DialogPreopreacional({
  open,
  handleClose,
  id,
}: {
  open: boolean;
  handleClose: () => void;
  id: number | undefined;
}) {
  const { dataPreopreacional } = usePreopreacional(undefined, id);

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
        <span style={{ flex: 1, textAlign: "center" }}>Detalle Inspección Preoperacional</span>
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
      {dataPreopreacional.map((items, index) => (
        <DialogContent dividers key={index}>
          <Typography gutterBottom>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-center mt-1 uppercase">
                Fecha
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.fecha}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Hora
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.hora}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Nombre
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.nombre}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Cédula
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.cedula}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Placa
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.placa}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Kilometraje
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.kilometraje}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Empresa
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.empresa}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Salud
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.salud}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Casco
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.casco}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Botas
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.botas}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Profundidad
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.profundidad}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Luces
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.luces}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Bocina
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.bocina}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Espejos
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.espejos}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Aceite
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.aceite}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Freno
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.freno}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Cadena
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.cadena}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                SOAT
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.soat}
                  rows={2}
                />
              </label>
            </div>

            {items.obervaciones && (
              <label className="block text-center mt-5 uppercase col-span-2">
                Observaciones
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.obervaciones}
                  rows={2}
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
