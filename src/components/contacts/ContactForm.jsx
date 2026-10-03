import React, { useMemo, useState, useEffect } from "react";
import { getStudioScopes,submitQuotation } from "../../api/api";
import { generateQuotationPDF } from "../../utils/generateQuotationPDF";
function ContactForm() {
  const [step, setStep] = useState(1);
  const [studioScopes, setStudioScopes] = useState([]);

  useEffect(() => {
    async function loadStudioScopes() {
      try {
        const data = await getStudioScopes();
        console.log("STUDIO SCOPES:", data);
        setStudioScopes(data);
      } catch (error) {
        console.error("Failed to load studio scopes:", error);
      }
    }

    loadStudioScopes();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    postcode: "",

    projectType: "",
    projectStage: "",

    plotArea: "",
    firstFloor: "",
    secondFloor: "",
    thirdFloor: "",

    studioScope: "",
    studioScopeId: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // -----------------------------
  // TOTAL AREA
  // -----------------------------

  const totalArea = useMemo(() => {
    return (
      Number(formData.plotArea || 0) +
      Number(formData.firstFloor || 0) +
      Number(formData.secondFloor || 0) +
      Number(formData.thirdFloor || 0)
    );
  }, [
    formData.plotArea,
    formData.firstFloor,
    formData.secondFloor,
    formData.thirdFloor,
  ]);

  // -----------------------------
  // QUOTATION
  // -----------------------------

  const quotation = useMemo(() => {
    switch (formData.studioScope) {
      case "Architecture":
        return totalArea * 80;

      case "Interior":
        return totalArea * 100;

      case "Architecture + Structure + Interior":
        return totalArea * 150;

      case "Measured Drawing":
        return 3000;

      default:
        return 0;
    }
  }, [formData.studioScope, totalArea]);

  const formatPrice = (price) => new Intl.NumberFormat("en-IN").format(price);

  // -----------------------------
  // VALIDATION + NEXT
  // -----------------------------

  const nextStep = () => {
    console.log("NEXT STEP CLICKED:", step);
    if (step === 1) {
      if (!formData.name || !formData.phone) {
        alert("Please complete your contact information.");
        return;
      }
    }

    if (step === 2) {
      if (!formData.projectType || !formData.projectStage) {
        alert("Please select project type and project stage.");
        return;
      }
    }

    if (step === 3) {
      if (totalArea <= 0) {
        alert("Please enter your project area.");
        return;
      }
    }

    if (step === 4) {
      if (!formData.studioScope) {
        alert("Please select studio scope.");
        return;
      }
    }

    setStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //    console.log("HANDLE SUBMIT FIRED — STEP:", step);

  //   if (!formData.requirement) {
  //     alert("Please enter your project requirement.");
  //     return;
  //   }

  //   console.log("FORM:", formData);
  //   console.log("TOTAL AREA:", totalArea);
  //   console.log("QUOTATION:", quotation);

  //   alert("Quotation form working successfully!");
  // };

const handleSubmit = async () => {
  // Requirement validation
  if (!formData.requirement.trim()) {
    alert("Please enter your project requirement.");
    return;
  }

  try {
    console.log("SENDING:", formData);

    // 1. Save quotation request in WordPress
    const response = await submitQuotation(formData);

    console.log("QUOTATION RESPONSE:", response);

    // 2. Generate & download quotation PDF
    await generateQuotationPDF({
      formData,
      response,
    });

    // 3. Success message
    alert(
      `Quotation request submitted successfully!\nEstimated Fee: ₹${Number(
        response.quotation
      ).toLocaleString("en-IN")}`
    );
  } catch (error) {
    console.error(
      "QUOTATION ERROR:",
      error.response?.data || error
    );

    alert(
      error.response?.data?.message ||
        "Something went wrong. Please try again."
    );
  }
};

  const inputClass =
    "w-full bg-[#0B1623] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 outline-none focus:border-white/40 transition";

  const selectClass =
    "w-full bg-[#0B1623] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-white/40 transition";

  return (
    <section className="bg-[#111827] border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10 text-white">
      {/* PROGRESS */}

      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-gray-400">Step {step} of 5</p>

          <p className="text-sm text-gray-400">{step * 20}% Complete</p>
        </div>

        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-500"
            style={{ width: `${step * 20}%` }}
          />
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* ================= STEP 1 ================= */}

        {step === 1 && (
          <div>
            <p className="text-sm text-gray-400 mb-2">STEP 01</p>

            <h2 className="text-3xl font-bold mb-2">Client Information</h2>

            <p className="text-gray-400 mb-8">Tell us how we can reach you.</p>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                type="text"
                name="street"
                placeholder="Street / Area"
                value={formData.street}
                onChange={handleChange}
                className={inputClass}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClass}
                />

                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2 ================= */}

        {step === 2 && (
          <div>
            <p className="text-sm text-gray-400 mb-2">STEP 02</p>

            <h2 className="text-3xl font-bold mb-2">Project Details</h2>

            <p className="text-gray-400 mb-8">
              Tell us what kind of project you're planning.
            </p>

            <div className="space-y-5">
              <div>
                <label className="block mb-3 font-medium">Project Type</label>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select Project Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Office">Office</option>
                  <option value="Retail">Retail</option>
                  <option value="F&B Retail">F&B Retail</option>
                  <option value="Institutional">Institutional</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 font-medium">Project Stage</label>

                <select
                  name="projectStage"
                  value={formData.projectStage}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select Project Stage</option>
                  <option value="Space">Space</option>
                  <option value="Fresh Plotted">Fresh Plotted</option>
                  <option value="Renovation Floor">Renovation Floor</option>
                  <option value="Renovation Apartment">
                    Renovation Apartment
                  </option>
                  <option value="Renovation Plotted">Renovation Plotted</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3 ================= */}

        {step === 3 && (
          <div>
            <p className="text-sm text-gray-400 mb-2">STEP 03</p>

            <h2 className="text-3xl font-bold mb-2">Project Area</h2>

            <p className="text-gray-400 mb-8">
              Enter the approximate area in sq.ft.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="number"
                min="0"
                name="plotArea"
                placeholder="Plot / Ground Floor"
                value={formData.plotArea}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                type="number"
                min="0"
                name="firstFloor"
                placeholder="1st Floor"
                value={formData.firstFloor}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                type="number"
                min="0"
                name="secondFloor"
                placeholder="2nd Floor"
                value={formData.secondFloor}
                onChange={handleChange}
                className={inputClass}
              />

              <input
                type="number"
                min="0"
                name="thirdFloor"
                placeholder="3rd Floor"
                value={formData.thirdFloor}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5 flex justify-between items-center">
              <span className="text-gray-400">Total Area</span>

              <span className="text-xl font-bold">
                {totalArea.toLocaleString("en-IN")} sq.ft.
              </span>
            </div>
          </div>
        )}

        {/* ================= STEP 4 ================= */}
        {step === 4 && (
          <div>
            <p className="text-sm text-gray-400 mb-2">STEP 04</p>

            <h2 className="text-3xl font-bold mb-2">Studio Scope</h2>

            <p className="text-gray-400 mb-8">Select the service you need.</p>

            <div className="space-y-3">
              {studioScopes.map((scope) => (
                <button
                  key={scope.id}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      studioScope: scope.name,
                      studioScopeId: scope.id,
                    }))
                  }
                  className={`w-full text-left p-5 rounded-xl border transition ${
                    formData.studioScope === scope.name
                      ? "bg-white text-black border-white"
                      : "bg-[#0B1623] border-white/10 hover:border-white/40"
                  }`}
                >
                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">{scope.name}</span>

                    <span
                      className={
                        formData.studioScope === scope.name
                          ? "text-gray-600"
                          : "text-gray-400"
                      }
                    >
                      {scope.rateType === "per_sqft"
                        ? `₹${scope.rate.toLocaleString("en-IN")} / sq.ft.`
                        : `Starting ₹${scope.rate.toLocaleString("en-IN")}`}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 5 ================= */}

        {step === 5 && (
          <div>
            <p className="text-sm text-gray-400 mb-2">STEP 05</p>

            <h2 className="text-3xl font-bold mb-2">Your Estimate</h2>

            <p className="text-gray-400 mb-8">
              Add any additional project requirements.
            </p>

            <textarea
              rows="5"
              name="requirement"
              placeholder="Tell us about your project requirements..."
              value={formData.requirement}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />

            <div className="mt-6 bg-white text-black rounded-2xl p-6">
              <p className="text-gray-500 text-sm">Estimated Design Fee</p>

              <p className="text-3xl md:text-4xl font-bold mt-2">
                {formData.studioScope === "Measured Drawing"
                  ? `Starting ₹${formatPrice(quotation)}`
                  : `₹${formatPrice(quotation)}`}
              </p>

              {formData.studioScope !== "Measured Drawing" && (
                <p className="text-gray-500 mt-3">
                  {totalArea.toLocaleString("en-IN")} sq.ft. ·{" "}
                  {formData.studioScope}
                </p>
              )}
            </div>
          </div>
        )}

        {/* ================= NAVIGATION ================= */}

        <div className="flex gap-4 mt-10">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="w-1/3 border border-white/20 py-4 rounded-xl hover:bg-white/10 transition"
            >
              Back
            </button>
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex-1 bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Get Quotation
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
