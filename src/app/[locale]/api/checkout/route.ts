import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUPPORT_EMAIL = "inicio@cloudza.com.mx";
const BRAND_NAME = "Vexora";
const BRAND_URL = "vexora.com.mx";
const BRAND_LOGO = "https://cloudza.com.mx/title.png"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { locale, orderId, amount, customer, items, metadata } = body;

    // Inicializamos traducciones dinámicas con el locale recibido
    const t = await getTranslations({ locale, namespace: "Emails.checkout" });

    if (!orderId || !amount || !customer || !items) {
      return NextResponse.json(
        { error: t("errorMissingFields") },
        { status: 400 }
      );
    }

    const formattedAmount = amount.toFixed(2);

    // 1. EMAIL PARA EL CLIENTE (TICKET / RECIBO DE COMPRA - FONDO BLANCO)
    const clientReceiptHtml = renderReceiptTemplate({
      title: t("client.title"),
      subtitle: t("client.subtitle", { orderId }),
      orderId,
      amount,
      customer,
      items,
      metadata,
      isBusiness: false,
      t,
    });

    await resend.emails.send({
      from: `${BRAND_NAME} <${SUPPORT_EMAIL}>`,
      to: customer.email,
      subject: t("client.subject", { orderId, brandName: BRAND_NAME }),
      html: clientReceiptHtml,
    });

    // 2. EMAIL PARA EL NEGOCIO (NOTIFICACIÓN DE VENTA - FONDO AZUL)
    const businessNotificationHtml = renderReceiptTemplate({
      title: t("business.title"),
      subtitle: t("business.subtitle", { amount: formattedAmount }),
      orderId,
      amount,
      customer,
      items,
      metadata,
      isBusiness: true,
      t,
    });

    await resend.emails.send({
      from: `${BRAND_NAME} Sales <${SUPPORT_EMAIL}>`,
      to: SUPPORT_EMAIL, // Corregido para enviarse al correo de soporte en lugar del cliente
      subject: t("business.subject", { orderId, amount: formattedAmount }),
      html: businessNotificationHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error" },
      { status: 500 }
    );
  }
}

// Función helper para generar el HTML del ticket
function renderReceiptTemplate({
  title,
  subtitle,
  orderId,
  amount,
  customer,
  items,
  metadata,
  isBusiness,
  t,
}: {
  title: string;
  subtitle: string;
  orderId: string;
  amount: number;
  customer: any;
  items: any[];
  metadata: any;
  isBusiness: boolean;
  t: any;
}) {
  // Configuración de paletas de color
  // Negocio (isBusiness: true) -> Tema Azul
  // Cliente (isBusiness: false) -> Tema Blanco
  const theme = isBusiness
    ? {
        bodyBg: "#172554",         // Azul muy oscuro (blue-950)
        containerBg: "#1e3a8a",    // Azul intermedio (blue-900)
        containerBorder: "rgba(255, 255, 255, 0.2)",
        headerBg: "#1e3a8a",
        textColor: "#ffffff",      // Blanco para el texto
        textMuted: "#93c5fd",      // Azul claro (blue-300)
        cardBg: "#1e40af",         // Azul destacado (blue-800)
        cardBorder: "rgba(255, 255, 255, 0.1)",
        dashedBorder: "rgba(255, 255, 255, 0.2)",
        labelColor: "#bfdbfe",     // Azul muy claro (blue-200)
        accentColor: "#60a5fa",    // Azul brillante
        totalLabelColor: "#ffffff",
        totalAmountColor: "#ffffff",
        footerBg: "#172554",
        footerLink: "#ffffff",
      }
    : {
        bodyBg: "#f8fafc",         // Blanco grisáceo muy suave (slate-50)
        containerBg: "#ffffff",    // Blanco puro
        containerBorder: "#e2e8f0",// Borde gris suave (slate-200)
        headerBg: "#ffffff",
        textColor: "#0f172a",      // Gris casi negro (slate-900)
        textMuted: "#475569",      // Gris intermedio (slate-600)
        cardBg: "#f1f5f9",         // Gris claro (slate-100)
        cardBorder: "#e2e8f0",
        dashedBorder: "#cbd5e1",
        labelColor: "#64748b",     // Gris apagado (slate-500)
        accentColor: "#1e3a8a",    // Azul corporativo como acento principal
        totalLabelColor: "#0f172a",
        totalAmountColor: "#1e3a8a",
        footerBg: "#f1f5f9",
        footerLink: "#0f172a",
      };

  const currentYear = new Date().getFullYear();

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
          background-color: ${theme.bodyBg}; 
          color: ${theme.textColor}; 
          margin: 0; 
          padding: 0; 
          -webkit-font-smoothing: antialiased; 
        }
        .wrapper { max-width: 600px; margin: 40px auto; padding: 20px; }
        .container { 
          background-color: ${theme.containerBg}; 
          border: 1px solid ${theme.containerBorder}; 
          border-radius: 24px; 
          overflow: hidden; 
          box-shadow: ${isBusiness ? '0 20px 50px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.05)'}; 
        }
        .header { 
          padding: 36px 24px 24px 24px; 
          text-align: center; 
          border-bottom: 1px solid ${theme.cardBorder}; 
          background-color: ${theme.headerBg}; 
        }
        .logo { 
          height: 30px; 
          width: auto; 
          object-fit: contain; 
          ${isBusiness ? 'filter: brightness(0) invert(1);' : ''} 
        }
        .content { padding: 36px 36px; }
        .title { font-size: 24px; font-weight: 700; color: ${theme.textColor}; margin: 0 0 10px 0; letter-spacing: -0.02em; }
        .subtitle { font-size: 14px; color: ${theme.textMuted}; margin: 0 0 28px 0; line-height: 1.6; }
        .section-label { 
          font-size: 11px; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 0.18em; 
          color: ${theme.accentColor}; 
          margin-bottom: 12px; 
        }
        
        /* Estilos de Ticket de compra */
        .ticket-box { 
          background-color: ${theme.cardBg}; 
          border-radius: 18px; 
          border: 1px solid ${theme.cardBorder}; 
          padding: 22px; 
          margin-bottom: 28px; 
        }
        .ticket-row { 
          display: table; 
          width: 100%; 
          margin-bottom: 12px; 
          padding-bottom: 12px; 
          border-bottom: 1px dashed ${theme.dashedBorder}; 
        }
        .ticket-row:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
        .item-name { display: table-cell; font-size: 14px; color: ${theme.textColor}; font-weight: 500; }
        .item-qty { font-size: 12px; color: ${theme.textMuted}; margin-left: 6px; }
        .item-price { display: table-cell; text-align: right; font-size: 14px; color: ${theme.textColor}; font-weight: 600; }
        
        .total-box { 
          margin-top: 16px; 
          padding-top: 16px; 
          border-top: 2px solid ${theme.accentColor}; 
        }
        .total-label { font-size: 14px; font-weight: 700; color: ${theme.totalLabelColor}; text-transform: uppercase; }
        .total-amount { font-size: 20px; font-weight: 700; color: ${theme.totalAmountColor}; text-align: right; }
        
        .grid { display: table; width: 100%; table-layout: fixed; margin-bottom: 24px; }
        .col { display: table-cell; width: 50%; vertical-align: top; }
        .info-label { 
          font-size: 11px; 
          font-weight: 600; 
          text-transform: uppercase; 
          color: ${theme.labelColor}; 
          letter-spacing: 0.08em; 
          margin-bottom: 4px; 
        }
        .info-value { font-size: 13px; color: ${theme.textColor}; line-height: 1.5; padding-right: 10px; }
        
        .meta-box { 
          font-size: 13px; 
          color: ${theme.textColor}; 
          background-color: ${theme.cardBg}; 
          padding: 14px 18px; 
          border-radius: 14px; 
          border-left: 3px solid ${theme.accentColor}; 
          margin-bottom: 28px; 
        }
        .footer { 
          text-align: center; 
          padding: 28px; 
          font-size: 12px; 
          color: ${theme.textMuted}; 
          border-top: 1px solid ${theme.cardBorder}; 
          background-color: ${theme.footerBg}; 
        }
        .footer a { color: ${theme.footerLink}; text-decoration: none; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          
          <!-- Header Logo -->
          <div class="header">
            <img src="${BRAND_LOGO}" alt="${BRAND_NAME}" class="logo" />
          </div>

          <!-- Body Content -->
          <div class="content">
            <h1 class="title">${title}</h1>
            <p class="subtitle">${subtitle}</p>

            <!-- Datos Generales de la Transacción -->
            <div class="grid">
              <div class="col">
                <div class="info-label">${t("labels.orderId")}</div>
                <div class="info-value" style="font-family: monospace; font-size: 14px; font-weight: 700;">${orderId}</div>
              </div>
              <div class="col">
                <div class="info-label">${t("labels.paymentDate")}</div>
                <div class="info-value">${new Date().toLocaleDateString(t("localeCode") === "en" ? "en-US" : "es-MX", { timeZone: "America/Mexico_City" })}</div>
              </div>
            </div>

            <!-- Detalles del Cliente & Envío -->
            <div class="section-label">${isBusiness ? t("labels.buyerInfo") : t("labels.billingDetails")}</div>
            <div class="grid">
              <div class="col">
                <div class="info-label">${t("labels.customer")}</div>
                <div class="info-value">
                  <strong>${customer.nombre} ${customer.apellido}</strong><br/>
                  ${customer.email}<br/>
                  ${customer.telefono}
                </div>
              </div>
              <div class="col">
                <div class="info-label">${t("labels.address")}</div>
                <div class="info-value">
                  ${customer.direccion}<br/>
                  ${customer.direccion2 ? customer.direccion2 + '<br/>' : ''}
                  ${customer.ciudad}, ${customer.estado}<br/>
                  CP: ${customer.cp}, ${customer.pais}
                  ${customer.empresa ? `<br/><strong>${t("labels.company")}:</strong> ` + customer.empresa : ''}
                </div>
              </div>
            </div>

            <!-- Notas o Metadata del Cupón -->
            ${metadata && (metadata.notes || Object.keys(metadata).length > 0) ? `
              <div class="info-label">${t("labels.operationDetails")}</div>
              <div class="meta-box">
                ${metadata.notes || JSON.stringify(metadata)}
              </div>
            ` : ''}

            <!-- Desglose de Productos (Ticket) -->
            <div class="section-label">${t("labels.modulesSummary")}</div>
            <div class="ticket-box">
              ${items.map((item: any) => `
                <div class="ticket-row">
                  <div class="item-name">
                    ${item.product.name}
                    <span class="item-qty">x${item.quantity || 1}</span>
                  </div>
                  <div class="item-price">
                    $${(Number(item.product.price) * (item.quantity || 1)).toFixed(2)} MXN
                  </div>
                </div>
              `).join('')}
              
              <!-- Total -->
              <div class="ticket-row total-box">
                <div class="item-name total-label">${t("labels.totalPaid")}</div>
                <div class="item-price total-amount">$${amount.toFixed(2)} MXN</div>
              </div>
            </div>

          </div>

          <!-- Footer Legal -->
          <div class="footer">
            ${t("footer.copyright", { year: currentYear, brandName: BRAND_NAME })
              .replace(BRAND_NAME, `<a href="${BRAND_URL}">${BRAND_NAME}</a>`)}<br/>
            ${t("footer.specialty")}
          </div>

        </div>
      </div>
    </body>
    </html>
  `;
}