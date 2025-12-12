import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { X } from "lucide-react";
import Typography from "@mui/material/Typography";
import { useBotiquin } from "@/services/Botiquin";

export default function DialogBotiquin({
  open,
  handleClose,
  id,
}: {
  open: boolean;
  handleClose: () => void;
  id: number | undefined;
}) {
  const { dataBotiquin } = useBotiquin(undefined, id);

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
        <span style={{ flex: 1, textAlign: "center" }}>Detalle Inspección Botiquín</span>
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
      {dataBotiquin.map((items, index) => (
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
                Documento Responsable
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.responsable_documento}
                  rows={2}
                />
              </label>

              <label className="block text-center mt-1 uppercase">
                Lugar Inspección
                <textarea
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                  disabled
                  defaultValue={items.lugar_inspeccion}
                  rows={2}
                />
              </label>

              {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
                <div key={num} className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 border p-4 rounded-lg bg-gray-50">
                  <label className="block text-center uppercase">
                    Elemento/Material {num}
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items[`pregunta${num}` as keyof typeof items]}
                      rows={2}
                    />
                  </label>
                  <label className="block text-center uppercase">
                    Ubicación
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items[`ubicacion${num}` as keyof typeof items]}
                      rows={2}
                    />
                  </label>
                  <label className="block text-center uppercase">
                    Capacidad
                    <textarea
                      className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                      disabled
                      defaultValue={items[`capacidad${num}` as keyof typeof items]}
                      rows={2}
                    />
                  </label>
                  {items[`observacion${num}` as keyof typeof items] && (
                    <label className="block text-center uppercase col-span-3">
                      Observación
                      <textarea
                        className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-lg border cursor-not-allowed"
                        disabled
                        defaultValue={items[`observacion${num}` as keyof typeof items]}
                        rows={2}
                      />
                    </label>
                  )}
                </div>
              ))}
            </div>
          </Typography>
        </DialogContent>
      ))}
      <DialogActions>
        <button onClick={handleClose} className="cursor-pointer flex items-center px-3 py-2.5 md:px-[18px] md:py-3.5 text-white no-underline transition-colors duration-200 hover:text-gray-200 bg-gradient-to-r from-[#3245ff] to-[#bc52ee] rounded-[10px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-2px_0_rgba(0,0,0,0.24)] hover:shadow-none">cerrar</button>
      </DialogActions>
    </Dialog>
  );
}
