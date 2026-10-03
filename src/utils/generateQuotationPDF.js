import jsPDF from "jspdf";

export async function generateQuotationPDF({
  formData,
  response,
  company,
}) {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const left = 20;
  const right = pageWidth - 20;
  const contentWidth = pageWidth - 40;

  // =====================================================
  // BASIC DATA
  // =====================================================

  const quotation = Number(response?.quotation || 0);
  const totalArea = Number(response?.total_area || 0);
  const rate = Number(response?.rate || 0);

  const studioScope =
    response?.studio_scope ||
    formData?.studioScope ||
    "";

  const rateType = response?.rate_type || "";

  const quotationNo = `AA-Q-${response?.post_id || "000"}`;

  const date = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const clientAddress = [
    formData?.street,
    formData?.city,
    formData?.postcode,
  ]
    .filter(Boolean)
    .join(", ");

  const formatMoney = (value) =>
    Number(value || 0).toLocaleString("en-IN");

  // =====================================================
  // LOAD LOGO
  // Logo is inside /public/LOGO AMARTYA ARCHITECTS.png
  // =====================================================

  let logo = null;

  try {
    const logoResponse = await fetch(
      "/LOGO AMARTYA ARCHITECTS.png"
    );

    if (!logoResponse.ok) {
      throw new Error("Logo could not be loaded.");
    }

    const blob = await logoResponse.blob();

    logo = await new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("PDF LOGO ERROR:", error);
  }

  // =====================================================
  // TOP BAR
  // =====================================================

  pdf.setFillColor(18, 18, 18);
  pdf.rect(0, 0, pageWidth, 5, "F");

  // =====================================================
  // HEADER
  // =====================================================

 if (logo) {
  try {
    const imageProperties = pdf.getImageProperties(logo);

    // Fixed logo height — prevents oversized logo
    const logoHeight = 18;

    const logoWidth =
      (imageProperties.width * logoHeight) /
      imageProperties.height;

    pdf.addImage(
      logo,
      "PNG",
      left,
      14,
      logoWidth,
      logoHeight
    );
  } catch (error) {
      console.error("PDF ADD LOGO ERROR:", error);

      // Fallback if logo rendering fails
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.setTextColor(20);

      pdf.text(
        (company?.companyName || "AMARTYA ARCHITECTS").toUpperCase(),
        left,
        25
      );
    }
  } else {
    // Fallback text if image fails to load
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(20);

    pdf.text(
      (company?.companyName || "AMARTYA ARCHITECTS").toUpperCase(),
      left,
      25
    );
  }

  // Right side quotation information
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8);
  pdf.setTextColor(40);

  pdf.text("QUOTATION", right, 22, {
    align: "right",
  });

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7);
  pdf.setTextColor(110);

  pdf.text(quotationNo, right, 28, {
    align: "right",
  });

  // Header divider
  pdf.setDrawColor(210);
  pdf.setLineWidth(0.3);
  pdf.line(left, 39, right, 39);

  // =====================================================
  // DOCUMENT TITLE
  // =====================================================

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7);
  pdf.setTextColor(110);

  pdf.text(
    "PROFESSIONAL CONSULTANCY",
    left,
    53
  );

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(28);
  pdf.setTextColor(20);

  pdf.text(
    "QUOTATION",
    left,
    66
  );

  // Date / Reference
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7);
  pdf.setTextColor(100);

  pdf.text(
    `DATE  ${date.toUpperCase()}`,
    right,
    55,
    {
      align: "right",
    }
  );

  pdf.text(
    `REF  ${quotationNo}`,
    right,
    62,
    {
      align: "right",
    }
  );

  // =====================================================
  // CLIENT INFORMATION
  // =====================================================

  const infoTop = 84;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7);
  pdf.setTextColor(130);

  pdf.text(
    "PREPARED FOR",
    left,
    infoTop
  );

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(12);
  pdf.setTextColor(25);

  pdf.text(
    (formData?.name || "CLIENT").toUpperCase(),
    left,
    infoTop + 9
  );

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(90);

  let clientY = infoTop + 16;

  if (formData?.phone) {
    pdf.text(
      String(formData.phone),
      left,
      clientY
    );

    clientY += 5;
  }

  if (formData?.email) {
    pdf.text(
      String(formData.email),
      left,
      clientY
    );

    clientY += 5;
  }

  if (clientAddress) {
    const addressLines = pdf.splitTextToSize(
      clientAddress,
      72
    );

    pdf.text(
      addressLines,
      left,
      clientY
    );
  }

  // =====================================================
  // PROJECT INFORMATION
  // =====================================================

  const projectX = 115;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7);
  pdf.setTextColor(130);

  pdf.text(
    "PROJECT DETAILS",
    projectX,
    infoTop
  );

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(12);
  pdf.setTextColor(25);

  pdf.text(
    (formData?.projectType || "PROJECT").toUpperCase(),
    projectX,
    infoTop + 9
  );

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(90);

  pdf.text(
    `Stage: ${formData?.projectStage || "-"}`,
    projectX,
    infoTop + 16
  );

  pdf.text(
    `Total Area: ${formatMoney(totalArea)} sq. ft.`,
    projectX,
    infoTop + 22
  );

  // =====================================================
  // COMMERCIAL PROPOSAL
  // =====================================================

  const proposalY = 126;

  pdf.setDrawColor(215);
  pdf.setLineWidth(0.3);

  pdf.line(
    left,
    proposalY,
    right,
    proposalY
  );

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7);
  pdf.setTextColor(120);

  pdf.text(
    "COMMERCIAL PROPOSAL",
    left,
    proposalY + 11
  );

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(14);
  pdf.setTextColor(20);

  const scopeLines = pdf.splitTextToSize(
    studioScope.toUpperCase(),
    110
  );

  pdf.text(
    scopeLines,
    left,
    proposalY + 22
  );

  // Rate
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(100);

  const rateLabel =
    rateType === "starting_price"
      ? `Starting from INR ${formatMoney(rate)}`
      : `INR ${formatMoney(rate)} / sq. ft.`;

  pdf.text(
    rateLabel,
    left,
    proposalY + 35
  );

  // =====================================================
  // ESTIMATED FEE BOX
  // =====================================================

  const feeY = 169;

  pdf.setFillColor(246, 246, 246);

  pdf.roundedRect(
    left,
    feeY,
    contentWidth,
    38,
    2,
    2,
    "F"
  );

  // Fee label
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7);
  pdf.setTextColor(120);

  pdf.text(
    rateType === "starting_price"
      ? "STARTING DESIGN FEE"
      : "ESTIMATED DESIGN FEE",
    left + 7,
    feeY + 10
  );

  // Main amount
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(23);
  pdf.setTextColor(20);

  pdf.text(
    `INR ${formatMoney(quotation)}`,
    left + 7,
    feeY + 25
  );

  // Calculation
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7.5);
  pdf.setTextColor(100);

  if (rateType === "per_sqft") {
    pdf.text(
      `${formatMoney(totalArea)} sq. ft.`,
      right - 7,
      feeY + 16,
      {
        align: "right",
      }
    );

    pdf.text(
      `x INR ${formatMoney(rate)} / sq. ft.`,
      right - 7,
      feeY + 23,
      {
        align: "right",
      }
    );
  } else {
    pdf.text(
      "Starting Price",
      right - 7,
      feeY + 20,
      {
        align: "right",
      }
    );
  }

  // =====================================================
  // PROJECT REQUIREMENT
  // =====================================================

  const requirementY = 220;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7);
  pdf.setTextColor(120);

  pdf.text(
    "PROJECT REQUIREMENT",
    left,
    requirementY
  );

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(65);

  const requirement =
    formData?.requirement?.trim() ||
    "No additional requirements specified.";

  const requirementLines =
    pdf.splitTextToSize(
      requirement,
      contentWidth
    );

  // Keep first page clean
  const limitedRequirement =
    requirementLines.slice(0, 6);

  pdf.text(
    limitedRequirement,
    left,
    requirementY + 8
  );

  // =====================================================
  // DISCLAIMER
  // =====================================================

  const disclaimer =
    "This quotation is an indicative estimate based on the information provided. Final professional fees and scope of services may be revised after detailed project discussion and assessment.";

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(6.5);
  pdf.setTextColor(135);

  const disclaimerLines =
    pdf.splitTextToSize(
      disclaimer,
      contentWidth
    );

  pdf.text(
    disclaimerLines,
    left,
    pageHeight - 39
  );

  // =====================================================
  // FOOTER
  // =====================================================

  pdf.setDrawColor(210);
  pdf.setLineWidth(0.3);

  pdf.line(
    left,
    pageHeight - 26,
    right,
    pageHeight - 26
  );

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7);
  pdf.setTextColor(50);

  pdf.text(
    (
      company?.companyName ||
      "AMARTYA ARCHITECTS"
    ).toUpperCase(),
    left,
    pageHeight - 17
  );

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(6.5);
  pdf.setTextColor(120);

  pdf.text(
    "Thank you for considering us for your project.",
    right,
    pageHeight - 17,
    {
      align: "right",
    }
  );

  // Page number
  pdf.setFontSize(6);

  pdf.text(
    "01 / 01",
    right,
    pageHeight - 9,
    {
      align: "right",
    }
  );

  // =====================================================
  // DOWNLOAD
  // =====================================================

  pdf.save(`${quotationNo}.pdf`);
}