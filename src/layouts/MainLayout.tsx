import { useState, useEffect, useMemo } from "react";
import type { MenuProps } from "antd";
import {
  Layout,
  Menu,
  Typography,
  Row,
  Col,
  Button,
  Drawer,
  Grid,
  Dropdown,
  Divider,
} from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import fesHeaderLogo from "../assets/images/fes.png";
import logofes from "../assets/images/logofes.png";
import logoico from "../assets/images/logoico.png";
import background from "../assets/images/background.png";
import aniv from "../assets/images/footer/50aniv.png";
import correo from "../assets/images/footer/mail-icon-white.png";
import wa from "../assets/images/footer/waicon.png";
import fb from "../assets/images/footer/facebooicon.png";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

/** Ancho mínimo del viewport para mostrar el menú horizontal (por debajo: hamburguesa). */
const ANCHO_MIN_MENU_HORIZONTAL_PX = 1300;

/** Altura máxima de la franja de logos (viewport ≥ md, logos en una fila). */
const CABECERA_LOGOS_MAX_ALTURA_PX = 176;
/** En pantallas pequeñas los logos suelen apilarse; se permite más altura para no recortar. */
const CABECERA_LOGOS_MAX_ALTURA_MOVIL_PX = 300;
/** Altura máxima de cada imagen de logo dentro de la cabecera. */
const CABECERA_LOGO_IMG_MAX_ALTURA_PX = 128;
const CABECERA_LOGO_IMG_MAX_ALTURA_MOVIL_PX = 112;

export default function MainLayout() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();
  const [drawerAbierto, setDrawerAbierto] = useState(false);
  const [usarMenuHamburguesa, setUsarMenuHamburguesa] = useState(() =>
    globalThis.window === undefined
      ? true
      : globalThis.window.innerWidth < ANCHO_MIN_MENU_HORIZONTAL_PX
  );

  useEffect(() => {
    const query = `(max-width: ${ANCHO_MIN_MENU_HORIZONTAL_PX - 1}px)`;
    const mq = globalThis.matchMedia(query);
    const sync = () => setUsarMenuHamburguesa(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const esPantallaPequena = !screens.md;
  const cabeceraLogosMaxAlturaPx = esPantallaPequena
    ? CABECERA_LOGOS_MAX_ALTURA_MOVIL_PX
    : CABECERA_LOGOS_MAX_ALTURA_PX;
  const cabeceraLogoImgMaxAlturaPx = esPantallaPequena
    ? CABECERA_LOGO_IMG_MAX_ALTURA_MOVIL_PX
    : CABECERA_LOGO_IMG_MAX_ALTURA_PX;

  const handleItemClick = (key: string) => {
    navigate(key);
    setDrawerAbierto(false);
  };

  const itemsMenu = useMemo(
    () => [
      { key: "/", label: t("nav.inicio") },
      { key: "/alumnos", label: t("nav.alumnos") },
      { key: "/plan-estudios", label: t("nav.planEstudios") },
      { key: "/profesores", label: t("nav.profesores") },
      { key: "/egresados", label: t("nav.egresados") },
      { key: "/ligas-interes", label: t("nav.ligasInteres") },
    ],
    [t],
  );

  const codigoIdiomaUi = i18n.resolvedLanguage?.startsWith("en")
    ? "en"
    : "es";

  const menuIdioma: MenuProps["items"] = useMemo(
    () => [
      {
        key: "es",
        label: t("nav.espanol"),
        onClick: () => {
          void i18n.changeLanguage("es");
        },
      },
      {
        key: "en",
        label: t("nav.ingles"),
        onClick: () => {
          void i18n.changeLanguage("en");
        },
      },
    ],
    [t, i18n],
  );

  const botonSelectorIdioma = (
    <Dropdown
      menu={{
        items: menuIdioma,
        selectable: true,
        selectedKeys: [codigoIdiomaUi],
      }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button
        type="text"
        style={{
          color: "#fff",
          flexShrink: 0,
          fontFamily: '"poppins-regular", sans-serif',
        }}
        aria-haspopup="menu"
      >
        {t("nav.idioma")} <DownOutlined style={{ fontSize: 12 }} />
      </Button>
    </Dropdown>
  );

  return (
    <Layout
      style={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          gap: esPantallaPequena ? 8 : 16,
          paddingInline: esPantallaPequena ? 12 : 24,
          background: "#001529",
          width: "100%",
          maxWidth: "100vw",
          flexWrap: usarMenuHamburguesa ? "wrap" : "nowrap",
        }}
      >
        {/* Contenedor para el logo */}
        <div
          className="header-logo-container"
          style={{
            width: 48,
            height: 48,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <img
            src={fesHeaderLogo}
            alt={t("layout.logoFesAlt")}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <Text
          className="header-titulo"
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: esPantallaPequena ? 14 : 17,
            fontWeight: 500,
            whiteSpace: esPantallaPequena ? "normal" : "nowrap",
            flexShrink: 1,
            minWidth: 0,
          }}
        >
          {esPantallaPequena
            ? t("header.facultadCorto")
            : t("header.facultadLargo")}
        </Text>
        {usarMenuHamburguesa ? (
          <>
            <div style={{ flex: 1 }} />
            {botonSelectorIdioma}
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: 22, color: "#fff" }} />}
              onClick={() => setDrawerAbierto(true)}
              aria-label={t("layout.abrirMenu")}
              style={{ flexShrink: 0 }}
            />
            <Drawer
              className="drawer-menu-nav"
              title={t("layout.menu")}
              placement="right"
              onClose={() => setDrawerAbierto(false)}
              open={drawerAbierto}
              styles={{
                body: { padding: 0, background: "#032047" },
                header: {
                  background: "#032047",
                  color: "#ba9a3a",
                  borderBottom: "1px solid rgba(186,154,58,0.35)",
                },
              }}
            >
              <Menu
                theme="dark"
                mode="vertical"
                selectedKeys={[location.pathname]}
                items={itemsMenu}
                onClick={({ key }) => handleItemClick(key)}
                style={{
                  borderRight: "none",
                  paddingTop: 8,
                  background: "transparent",
                }}
              />
              <Divider
                style={{
                  margin: "8px 0 0",
                  borderColor: "rgba(186, 154, 58, 0.35)",
                }}
              />
              <div
                style={{
                  padding: "12px 16px 16px",
                  fontFamily: '"poppins-regular", sans-serif',
                }}
              >
                <Text
                  style={{
                    display: "block",
                    marginBottom: 8,
                    color: "#ba9a3a",
                    fontFamily: '"poppins-semibold", sans-serif',
                  }}
                >
                  {t("nav.idioma")}
                </Text>
                <Button
                  type="text"
                  block
                  style={{
                    color: "#fff",
                    textAlign: "left",
                    height: "auto",
                    padding: "8px 0",
                  }}
                  onClick={() => {
                    void i18n.changeLanguage("es");
                    setDrawerAbierto(false);
                  }}
                >
                  {t("nav.espanol")}
                  {codigoIdiomaUi === "es" ? " ✓" : ""}
                </Button>
                <Button
                  type="text"
                  block
                  style={{
                    color: "#fff",
                    textAlign: "left",
                    height: "auto",
                    padding: "8px 0",
                  }}
                  onClick={() => {
                    void i18n.changeLanguage("en");
                    setDrawerAbierto(false);
                  }}
                >
                  {t("nav.ingles")}
                  {codigoIdiomaUi === "en" ? " ✓" : ""}
                </Button>
              </div>
            </Drawer>
          </>
        ) : (
          <>
            <Menu
              className="nav-menu-principal"
              theme="dark"
              mode="horizontal"
              selectedKeys={[location.pathname]}
              items={itemsMenu}
              onClick={({ key }) => navigate(key)}
              style={{
                flex: 1,
                borderBottom: "none",
                lineHeight: "64px",
                minWidth: "auto",
                justifyContent: "flex-end",
              }}
            />
            {botonSelectorIdioma}
          </>
        )}
      </Header>
      {/* Cabecera con logos */}
      <div
        style={{
          background:
            "linear-gradient(to right,rgb(8, 43, 88) 25%,rgb(210, 224, 240) 100%)",
          borderTop: "5px solid #ba9a3a",
          borderBottom: "5px solid #ba9a3a",
          padding: esPantallaPequena ? "8px 12px" : "8px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: esPantallaPequena ? 16 : 32,
          flexWrap: "wrap",
          flexGrow: 1,
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          overflow: "hidden",
          maxWidth: "100vw",
          maxHeight: cabeceraLogosMaxAlturaPx,
          boxSizing: "border-box",
        }}
      >
        <img
          src={logofes}
          alt={t("layout.logoFesAlt")}
          className="cabecera-logo-fes"
          style={{
            height: "auto",
            width: "750px",
            maxWidth: "100%",
            maxHeight: cabeceraLogoImgMaxAlturaPx,
            minWidth: 0,
            objectFit: "contain",
          }}
        />
        <img
          src={logoico}
          alt={t("layout.logoIcoAlt")}
          className="cabecera-logo-ico"
          style={{
            height: "auto",
            width: "400px",
            maxWidth: "100%",
            maxHeight: cabeceraLogoImgMaxAlturaPx,
            minWidth: 0,
            objectFit: "contain",
          }}
        />
      </div>
      <Content
        style={{
          padding: esPantallaPequena ? "16px 12px" : "24px 16px",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Row justify="center" style={{ margin: 0, maxWidth: "100%" }}>
          <Col
            xs={24}
            sm={24}
            md={22}
            lg={20}
            xl={18}
            xxl={16}
            className="main-content-wrap"
            style={{ minWidth: 0, maxWidth: "100%" }}
          >
            <Outlet />
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          background: "#032047",
          color: "rgba(255,255,255,0.85)",
          textAlign: "center",
          padding: esPantallaPequena ? "16px 12px" : "16px 24px",
          borderTop: "5px solid #ba9a3a",
          display: "flex",
          alignItems: "center",
          gap: esPantallaPequena ? 24 : 100,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "100vw",
        }}
      >
        <img
          src={aniv}
          alt={t("footer.aniversarioAlt")}
          style={{ width: "150px", height: "auto" }}
        />
        <div
          style={{
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          <div style={{ marginBottom: 8 }}>
            <div
              style={{
                fontWeight: 800,
                fontFamily: '"poppins-bold", sans-serif',
              }}
            >
              {t("footer.jefaCarrera")}
            </div>
            <div style={{ fontFamily: '"poppins-regular", sans-serif' }}>
              Ing. Ana Claudia Reyes Cruz
            </div>
          </div>
          <div>
            <div
              style={{
                fontWeight: 800,
                fontFamily: '"poppins-bold", sans-serif',
              }}
            >
              {t("footer.secretarioTecnico")}
            </div>
            <div style={{ fontFamily: '"poppins-regular", sans-serif' }}>
              Ing. Roberto Agustín García Castrejón
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
          }}
        >
          <a
            href="mailto:computacion@aragon.unam.mx"
            aria-label={t("footer.correoAria")}
          >
            <img
              src={correo}
              alt={t("footer.correoAlt")}
              style={{ width: "100px", height: "auto", display: "block" }}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5216632132912&text=Hola%21%20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.whatsappAria")}
          >
            <img
              src={wa}
              alt="WhatsApp"
              style={{ width: "100px", height: "auto", display: "block" }}
            />
          </a>
          <a
            href="https://www.facebook.com/FESAragon.computacion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.facebookAria")}
          >
            <img
              src={fb}
              alt="Facebook"
              style={{ width: "100px", height: "auto", display: "block" }}
            />
          </a>
        </div>
      </Footer>
    </Layout>
  );
}
