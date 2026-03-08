import { Typography, Collapse } from "antd";
import VistaPreviaDocumento from "../../components/VistaPreviaDocumento.tsx";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";

const { Title } = Typography;

export default function AlumnosRedes() {
  return (
    <div
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ margin: "-10px -10px 0 -10px" }}>
        <CabeceraTitulo variante="dorado">
          PRÁCTICAS DE REDES DE COMPUTADORAS
        </CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          PRÁCTICAS DE LABORATORIO
        </CabeceraTitulo>
      </div>
      <Collapse
        style={{ marginTop: 16 }}
        items={[
          {
            key: "redes1",
            label: (
              <span style={{ fontFamily: '"poppins-bold", sans-serif' }}>
                PRÁCTICAS DE REDES I
              </span>
            ),
            children: (
              <>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 1
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1T3oUF7pGVdJTny5YWjbmbkiWyS7doZm8/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1jDMULVdkKYPj515XWs4PnQMCnKntripx/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 2
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1CC8xRzVwZ1kL_X3lTRUXzt8RuD2HYSg0/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1P8zp95-P-JdXxUHBeYjj3A4y7xEdQ9yd/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 3
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1ZAICYz_vMdrLD00GNIUz0wrcjhJG-ixx/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1ygoA9PFBwk99g6RvXiaOzie4meyi7b4i/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 4
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1wXET7QqxIPklv4A5U7ZcvE8gWurNswFa/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1q-jKAOQiwUZ-fweVbSvW0qx8zJ7oEVWN/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 5
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/10oCGuWABNrCQSVQw4ob_6N9fhGAj1TNr/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1jp6cKCZ3boUv_J3Kbfh6JAy7c1f1MKDi/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 6 y 7
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1_I6pQK-9KsYGvB5uW1TBckkEbnLel18B/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1cy772-M3YM0PSffh7UVpfJnQUpY2Mlmj/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 8
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1m47luVsugOh70AOmhaJqic0SqkogOBqi/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
              </>
            ),
          },
          {
            key: "redes2",
            label: (
              <span style={{ fontFamily: '"poppins-bold", sans-serif' }}>
                PRÁCTICAS DE REDES II
              </span>
            ),
            children: (
              <>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 1
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1N2vmXT72TROCjpZGo3rSy6QpwqluEFnj/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/19crEJ3pE7sPoTcBNOF_cDFesQJ0amRVf/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 2
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1m-4UKI5009KOUgmx3CTNiSdNjKBJSZLI/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1w_VmJLHLmzCUWWkRClaLuXHX9aFwPlB3/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 3
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1pEBwnM3EHntpIXZpZaQu53YGVQ5XdEDi/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1uhONzaH8COwxmWTTjIhHjbNoSjkgepYW/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1j4ZPtO8E2G4ahTay_oZWUF3mXE6A04jS/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
                <Title
                  level={3}
                  style={{
                  marginBottom: 16,
                  textAlign: "center",
                  fontFamily: '"poppins-semibold", sans-serif',
                }}
                >
                  PRÁCTICA 4
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 16,
                    padding: 16,
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    borderBottom: "1px solid #032047",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1Qg-GitofzAxbubvLHqtf3zOUL2PQTFU6/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                  <div
                    style={{
                      width: 4,
                      flexShrink: 0,
                      alignSelf: "stretch",
                      backgroundColor: "#032047",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 280 }}>
                    <VistaPreviaDocumento
                      url="https://drive.google.com/file/d/1fTzn2uaO4UsawnxpLO6gJs0Md1odtZI2/preview"
                      iframeStyle={{ minHeight: 500 }}
                    />
                  </div>
                </div>
              </>
            ),
          },
        ]}
      />
    </div>
  );
}
