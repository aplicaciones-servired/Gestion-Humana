import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { X } from "lucide-react";
import Typography from "@mui/material/Typography";
import { useCamilla } from "@/services/Camilla";

export default function DialogCamilla({
  open,
  handleClose,
  id,
}: {
  open: boolean;
  handleClose: () => void;
  id: number | undefined;
}) {
  const { dataCamilla } = useCamilla(undefined, id);

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
        <span style={{ flex: 1, textAlign: "center" }}>Detalle Inspección Camilla</span>
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
      {dataCamilla.map((items, index) => (
        <DialogContent dividers key={index}>
          <Typography gutterBottom>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-center mt-1 uppercase">
                Fecha Inspección
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.fecha_inspeccion}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Responsable Inspección
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.responsable_inspeccion}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Lugar
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.lugar}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Ubicación
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.ubicacion}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Señalización
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.senalizacion}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Acceso
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.aceso}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Estado
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.estado}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Instalación
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.instalacion}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Correas
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.correas}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Inmovilizador
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.inmovilizador}
                  rows={2}
                />
              </label>

              {items.ubicacion1 && (
                <>
                  <label className="block text-center mt-1 uppercase">
                    Ubicación 1
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items.ubicacion1}
                      rows={2}
                    />
                  </label>

                  <label className="block text-center mt-1 uppercase">
                    Señalización 1
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items.senalizacion1}
                      rows={2}
                    />
                  </label>

                  <label className="block text-center mt-1 uppercase">
                    Acceso 1
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items.aceso1}
                      rows={2}
                    />
                  </label>

                  <label className="block text-center mt-1 uppercase">
                    Estado 1
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items.estado1}
                      rows={2}
                    />
                  </label>

                  <label className="block text-center mt-1 uppercase">
                    Instalación 1
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items.instalacion1}
                      rows={2}
                    />
                  </label>

                  <label className="block text-center mt-1 uppercase">
                    Correas 1
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items.correas1}
                      rows={2}
                    />
                  </label>

                  <label className="block text-center mt-1 uppercase">
                    Inmovilizador 1
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items.inmovilizador1}
                      rows={2}
                    />
                  </label>
                </>
              )}
            </div>

            {items.observacion && (
              <label className="block text-center mt-5 uppercase col-span-2">
                Observación
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.observacion}
                  rows={2}
                />
              </label>
            )}

            {items.observacion1 && (
              <label className="block text-center mt-5 uppercase col-span-2">
                Observación 1
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.observacion1}
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
