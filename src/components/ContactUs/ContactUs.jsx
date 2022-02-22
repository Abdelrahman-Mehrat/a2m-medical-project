import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Joi from "joi";
import { toast } from "react-toastify";
import "./ContactUs.css";
function ContactUs() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    user__firstName: "",
    user__lastName: "",
    user__email: "",
    user__phoneNumber: "",
    user__messageSubject: "",
    user__message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const schema = Joi.object({
    user__firstName: Joi.string().min(3).max(30).required(),
    user__lastName: Joi.string().min(3).max(30).required(),
    user__phoneNumber: Joi.string()
      .length(11)
      .pattern(/^[0-9]+$/, "phone number only")
      .required(),
    user__email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    user__messageSubject: Joi.string().required(),
    user__message: Joi.string().required(),
  });
  const sendEmail = (e) => {
    e.preventDefault();
    let errors = handleValidate();
    if (errors) return;
    formValues.user__phoneNumber = 2 + formValues.user__phoneNumber;
    emailjs
      .send(
        "service_b8u8eqa",
        "template_ukaazmr",
        formValues,
        "user_J8py4xLCtI4CP1ki7zaQp"
      )
      .then(
        (result) => {
          setFormValues({
            user__firstName: "",
            user__lastName: "",
            user__email: "",
            user__phoneNumber: "",
            user__messageSubject: "",
            user__message: "",
          });
          toast.success("The message has been sent successfully");
        },
        (error) => {
          toast.error("The message was not sent successfully");
        }
      );
  };
  const handleValidate = () => {
    const errors = {};
    let res = schema.validate({ ...formValues }, { abortEarly: false });
    if (!res.error) {
      setFormErrors({ errors });
      return null;
    }
    for (let error of res.error.details) {
      errors[error.path] = error.message;
    }
    setFormErrors({ ...errors });
    return errors;
  };
  const handleErrorMessage = (errorMessage) => {
    return errorMessage.slice(errorMessage.lastIndexOf('"') + 2);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="contactus py-5">
      <div className="container">
        <fieldset className="py-5">
          <legend className="text-capitalize">get in touch</legend>
          <div className="row justify-content-center">
            <div className="mb-3 col-12  col-sm-8 col-md-4">
              <label
                htmlFor="first__name"
                className="form-label text-capitalize"
              >
                first name
                <span className="ms-1 text-danger">*</span>
              </label>
              <input
                type="text"
                name="user__firstName"
                className="form-control"
                id="first__name"
                onChange={handleChange}
                value={formValues.user__firstName}
              />
              {formErrors?.user__firstName && (
                <div className="text-danger">
                  <span className="text-capitalize">first name </span>
                  {handleErrorMessage(formErrors?.user__firstName)}
                </div>
              )}
            </div>
            <div className="mb-3 col-12  col-sm-8 col-md-4">
              <label
                htmlFor="last__name"
                className="form-label text-capitalize"
              >
                last name
                <span className="ms-1 text-danger">*</span>
              </label>
              <input
                type="text"
                name="user__lastName"
                className="form-control"
                id="last__name"
                onChange={handleChange}
                value={formValues.user__lastName}
              />
              {formErrors?.user__lastName && (
                <div className="text-danger">
                  <span className="text-capitalize">last name </span>
                  {handleErrorMessage(formErrors?.user__lastName)}
                </div>
              )}
            </div>
            <div className="mb-3 col-12 col-sm-8">
              <label
                htmlFor="email__address"
                className="form-label text-capitalize"
              >
                email
                <span className="ms-1 text-danger">*</span>
              </label>
              <input
                type="email"
                name="user__email"
                className="form-control"
                id="email__address"
                onChange={handleChange}
                value={formValues.user__email}
              />
              {formErrors?.user__email && (
                <div className="text-danger">
                  <span className="text-capitalize">email </span>
                  {handleErrorMessage(formErrors?.user__email)}
                </div>
              )}
            </div>
            <div className="mb-3 col-12 col-sm-8">
              <label
                htmlFor="phone__number"
                className="form-label text-capitalize"
              >
                phone number
                <span className="ms-1 text-danger">*</span>
              </label>
              <input
                type="text"
                name="user__phoneNumber"
                className="form-control"
                id="phone__number"
                onChange={handleChange}
                value={formValues.user__phoneNumber}
              />
              {formErrors?.user__phoneNumber && (
                <div className="text-danger">
                  <span className="text-capitalize">phone number </span>
                  {handleErrorMessage(formErrors?.user__phoneNumber)}
                </div>
              )}
            </div>
            <div className="mb-3 col-12 col-sm-8">
              <label
                htmlFor="message__subject"
                className="form-label text-capitalize"
              >
                subject
                <span className="ms-1 text-danger">*</span>
              </label>
              <input
                type="text"
                name="user__messageSubject"
                className="form-control"
                id="message__subject"
                onChange={handleChange}
                value={formValues.user__messageSubject}
              />
              {formErrors?.user__messageSubject && (
                <div className="text-danger">
                  <span className="text-capitalize">subject </span>
                  {handleErrorMessage(formErrors?.user__messageSubject)}
                </div>
              )}
            </div>
            <div className="col-12 col-sm-8 mb-3">
              <label
                htmlFor="message__text"
                className="form-label text-capitalize"
              >
                message
                <span className="ms-1 text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                name="user__message"
                id="message__text"
                rows="5"
                onChange={handleChange}
                value={formValues.user__message}
              ></textarea>
              {formErrors?.user__message && (
                <div className="text-danger">
                  <span className="text-capitalize">message </span>
                  {handleErrorMessage(formErrors?.user__message)}
                </div>
              )}
            </div>
            <div className=" text-center mt-3">
              <button type="submit" className="btn btn-primary text-uppercase">
                send message
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </form>
  );
}
export default ContactUs;
