import type { TFunction } from "i18next";
import type { ReactNode } from "react";
import historialAcademicoT11 from "../../assets/images/documentos/historialAcademicoT11.png";
import cartaterminossfes from "../../assets/images/documentos/cartaterminossfes.png";
import constanciaidioma from "../../assets/images/documentos/constanciaidioma.png";
import constanciahoras from "../../assets/images/documentos/constanciahoras.png";
import certificadoestudios from "../../assets/images/documentos/certificadoestudios.png";
import certificadocch from "../../assets/images/documentos/certificadocch.png";

export type DetalleRequisito = {
  id: string;
  descripcion: ReactNode;
  imagen?: string;
};

export function construirDetallesRequisitos(
  t: TFunction,
): DetalleRequisito[] {
  return [
    {
      id: "requisitos-minimos-r1",
      descripcion: t("graduationGuide.detail.requisitos-minimos-r1"),
      imagen: historialAcademicoT11,
    },
    {
      id: "requisitos-minimos-r3",
      descripcion: t("graduationGuide.detail.requisitos-minimos-r3"),
      imagen: cartaterminossfes,
    },
    {
      id: "requisitos-minimos-r4",
      descripcion: t("graduationGuide.detail.requisitos-minimos-r4"),
      imagen: constanciaidioma,
    },
    {
      id: "requisitos-minimos-r5",
      descripcion: t("graduationGuide.detail.requisitos-minimos-r5"),
      imagen: constanciahoras,
    },
    {
      id: "requisitos-minimos-r8",
      descripcion: (
        <>
          {t("graduationGuide.detail.requisitos-minimos-r8_text")}
          {"\n\n"}
          <a
            href="https://www.dgae.unam.mx/tramites/fotos.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#072340", textDecoration: "underline" }}
          >
            {t("graduationGuide.detail.requisitos-minimos-r8_link")}
          </a>
        </>
      ),
      imagen: certificadoestudios,
    },
    {
      id: "requisitos-minimos-r9",
      descripcion: t("graduationGuide.detail.requisitos-minimos-r9"),
      imagen: certificadocch,
    },
    {
      id: "modalidad-a-r1",
      descripcion: t("graduationGuide.detail.modalidad-a-r1"),
    },
    {
      id: "modalidad-a-r2",
      descripcion: t("graduationGuide.detail.modalidad-a-r2"),
    },
    {
      id: "modalidad-a-r3",
      descripcion: t("graduationGuide.detail.modalidad-a-r3"),
    },
    {
      id: "modalidad-a-r4",
      descripcion: t("graduationGuide.detail.modalidad-a-r4"),
    },
    {
      id: "modalidad-a-r5",
      descripcion: t("graduationGuide.detail.modalidad-a-r5"),
    },
    {
      id: "modalidad-a-r6",
      descripcion: t("graduationGuide.detail.modalidad-a-r6"),
    },
    {
      id: "modalidad-a-r7",
      descripcion: t("graduationGuide.detail.modalidad-a-r7"),
    },
    {
      id: "modalidad-c-r2",
      descripcion: t("graduationGuide.detail.modalidad-c-r2"),
    },
    {
      id: "modalidad-c-r3",
      descripcion: t("graduationGuide.detail.modalidad-c-r3"),
    },
    {
      id: "modalidad-c-r4",
      descripcion: t("graduationGuide.detail.modalidad-c-r4"),
    },
    {
      id: "modalidad-c-r5",
      descripcion: t("graduationGuide.detail.modalidad-c-r5"),
    },
    {
      id: "modalidad-c-r6",
      descripcion: t("graduationGuide.detail.modalidad-c-r6"),
    },
    {
      id: "modalidad-c-r7",
      descripcion: t("graduationGuide.detail.modalidad-c-r7"),
    },
    {
      id: "modalidad-c-r8",
      descripcion: t("graduationGuide.detail.modalidad-c-r8"),
    },
    {
      id: "modalidad-c-r9",
      descripcion: t("graduationGuide.detail.modalidad-c-r9"),
    },
    {
      id: "modalidad-c-r10",
      descripcion: t("graduationGuide.detail.modalidad-c-r10"),
    },
    {
      id: "modalidad-c-r11",
      descripcion: t("graduationGuide.detail.modalidad-c-r11"),
    },
    {
      id: "modalidad-c-r12",
      descripcion: t("graduationGuide.detail.modalidad-c-r12"),
    },
    {
      id: "modalidad-c-r13",
      descripcion: t("graduationGuide.detail.modalidad-c-r13"),
    },
    {
      id: "modalidad-b-r1",
      descripcion: t("graduationGuide.detail.modalidad-b-r1"),
    },
    {
      id: "modalidad-b-r2",
      descripcion: t("graduationGuide.detail.modalidad-b-r2"),
    },
    {
      id: "modalidad-b-r3",
      descripcion: t("graduationGuide.detail.modalidad-b-r3"),
    },
    {
      id: "modalidad-b-r4",
      descripcion: t("graduationGuide.detail.modalidad-b-r4"),
    },
    {
      id: "modalidad-b-r5",
      descripcion: t("graduationGuide.detail.modalidad-b-r5"),
    },
    {
      id: "modalidad-b-r6",
      descripcion: t("graduationGuide.detail.modalidad-b-r6"),
      imagen: constanciaidioma,
    },
    {
      id: "modalidad-b-r7",
      descripcion: t("graduationGuide.detail.modalidad-b-r7"),
      imagen: constanciahoras,
    },
    {
      id: "modalidad-b-r8",
      descripcion: t("graduationGuide.detail.modalidad-b-r8"),
    },
    {
      id: "modalidad-b-r9",
      descripcion: t("graduationGuide.detail.modalidad-b-r9"),
    },
    {
      id: "modalidad-b-r10",
      descripcion: t("graduationGuide.detail.modalidad-b-r10"),
    },
    {
      id: "modalidad-b-r11",
      descripcion: t("graduationGuide.detail.modalidad-b-r11"),
    },
  ];
}
