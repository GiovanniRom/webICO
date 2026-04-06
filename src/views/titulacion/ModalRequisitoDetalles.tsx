import { Button, Modal } from "antd";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { construirDetallesRequisitos, type DetalleRequisito } from "./detalles";

type ModalRequisitoDetallesProps = {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly requisitoId: string | null;
  readonly requisitoTexto: string | null;
};

export default function ModalRequisitoDetalles({
  open,
  onClose,
  requisitoId,
  requisitoTexto,
}: ModalRequisitoDetallesProps) {
  const { t } = useTranslation();
  const [mostrarEjemplo, setMostrarEjemplo] = useState(false);

  const detalles = useMemo(() => construirDetallesRequisitos(t), [t]);

  const detalle: DetalleRequisito | undefined = detalles.find(
    (d) => d.id === requisitoId,
  );

  return (
    <Modal
      open={open}
      title={t("graduationGuide.modal.title")}
      footer={null}
      onCancel={onClose}
      destroyOnHidden
    >
      {requisitoTexto ? (
        <div
          style={{
            fontFamily: '"poppins-semibold", sans-serif',
            marginBottom: 12,
          }}
        >
          {requisitoTexto}
        </div>
      ) : null}

      {detalle ? (
        <div style={{ fontFamily: '"poppins-regular", sans-serif' }}>
          <div style={{ whiteSpace: "pre-line" }}>
            {detalle.descripcion}
          </div>

          {detalle.imagen ? (
            <div style={{ marginTop: 16 }}>
              <Button
                type="primary"
                onClick={() => setMostrarEjemplo((prev) => !prev)}
                style={{
                  fontFamily: '"poppins-semibold", sans-serif',
                  backgroundColor: "#ba9a3a",
                  borderColor: "#ba9a3a",
                }}
              >
                {mostrarEjemplo
                  ? t("graduationGuide.modal.ocultarEjemplo")
                  : t("graduationGuide.modal.verEjemplo")}
              </Button>

              {mostrarEjemplo ? (
                <div
                  style={{
                    width: "100%",
                    marginTop: 12,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={detalle.imagen}
                    alt={t("graduationGuide.modal.ejemploAlt")}
                    style={{
                      width: "100%",
                      maxWidth: 520,
                      height: "auto",
                      borderRadius: 8,
                      border: "1px solid rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : (
        <div style={{ color: "rgba(0,0,0,0.65)" }}>
          {t("graduationGuide.modal.sinInfoExtra")}
        </div>
      )}

      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}
      >
        <Button
          onClick={onClose}
          style={{ fontFamily: '"poppins-semibold", sans-serif' }}
        >
          {t("graduationGuide.modal.cerrar")}
        </Button>
      </div>
    </Modal>
  );
}
