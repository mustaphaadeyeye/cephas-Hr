import { useState } from "react";
import { X, Building2, MapPin, Mail, CheckCircle2 } from "lucide-react";

const fields = [
  {
    name: "companyName",
    label: "Company Name",
    placeholder: "e.g. Cephas Logistics Ltd",
    type: "text",
    icon: Building2,
  },
 
  {
    name: "companyEmail",
    label: "Company Email",
    placeholder: "e.g. hr@yourcompany.com",
    type: "email",
    icon: Mail,
  },

   {
    name: "contactAddress",
    label: "Contact Address",
    placeholder: "e.g. 12 Adeola Odeku St, Lagos",
    type: "text",
    icon: MapPin,
  },
];

const BookDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactAddress: "",
    companyEmail: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demo request:", formData);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setSubmitted(false);
    setFormData({ companyName: "", contactAddress: "", companyEmail: "" });
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1730]/50 backdrop-blur-sm px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[480px] overflow-hidden rounded-[28px] border border-[#e2efff] bg-white px-6 py-8 sm:px-9 sm:py-10"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#e2efff] bg-[#f7fbff] text-[#1744d8] transition hover:bg-[#eaf3ff]"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="mb-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#dcecff] bg-[#f7fbff] px-3 py-1.5 text-[10px] font-medium text-[#1744d8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#55bfff]" />
                Book a Demo
              </div>
              <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.6px] text-[#292929] sm:text-[30px]">
                See CephasHR in action
              </h2>
              <p className="mt-2 text-sm leading-[1.6] text-[#666]">
                Tell us a bit about your company and we'll set up a
                personalized walkthrough tailored to your workflows.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {fields.map(({ name, label, placeholder, type, icon: Icon }) => (
                <div key={name} className="flex flex-col gap-1.5 text-left">
                  <label htmlFor={name} className="text-xs font-medium text-[#292929]">
                    {label}
                  </label>
                  <div className="flex items-center gap-2 rounded-2xl border border-[#e2efff] bg-[#f9fbff] px-4 py-3 transition focus-within:border-[#193FD3] focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(25,63,211,0.08)]">
                    <Icon className="h-4 w-4 shrink-0 text-[#7c93d1]" />
                    <input
                      id={name}
                      name={name}
                      type={type}
                      required
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full bg-transparent text-sm text-[#292929] placeholder:text-[#a8b3c9] focus:outline-none"
                    />
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#193FD3] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[#1535b8]"
              >
                Request Demo
              </button>

              <p className="text-center text-[11px] text-[#9aa3b5]">
                We'll reach out within 1 business day.
              </p>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef3fd]">
              <CheckCircle2 className="h-8 w-8 text-[#193FD3]" />
            </div>
            <h3 className="text-xl font-bold text-[#292929]">
              Request received!
            </h3>
            <p className="mt-2 max-w-[320px] text-sm text-[#666]">
              Thanks — our team will reach out to{" "}
              <span className="font-medium text-[#292929]">
                {formData.companyEmail}
              </span>{" "}
              shortly to schedule your demo.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-full bg-[#193FD3] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#1535b8]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDemoModal;