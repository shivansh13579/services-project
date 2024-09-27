import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { formSchema } from "../validationSchema/FormValidation";
import { useNavigate, useParams } from "react-router-dom";
import { updateService } from "../Redux/slice/serviceSlice";
import { toast } from "react-toastify";

function EditServiceList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: "",
    price: "",
    description: "",
  });

  const { id } = useParams();

  const serviceData = useSelector((state) => state.services.service);

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values, helpers) => {
      dispatch(updateService({ id: parseInt(id), ...values }));
      toast.success("Updated Successfully");
      navigate("/");
    },
  });

  const getServiceData = (id) => {
    const serviceToEdit = serviceData.find((service) => service.id == id);

    if (serviceToEdit) {
      setValues(serviceToEdit);
    }
  };

  useEffect(() => {
    getServiceData(id);
  }, [id, serviceData]);

  return (
    <>
      <Navbar />
      <div className="mx-auto w-5/6 ">
        <h1 className="w-full text-center text-5xl mt-7 py-7">Add Service</h1>
        <div className="w-full sm:w-4/6 md:w-2/6  mx-auto flex items-center justify-center">
          <form onSubmit={handleSubmit} class="w-full  my-6 py-4 ">
            <div class="mb-5 flex gap-4 items-center w-full">
              <div className="flex-1">
                <input
                  type="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name"
                />
                {errors.name && touched.name ? (
                  <p className="text-red-600">{errors.name}</p>
                ) : null}
              </div>
              <div class="flex-1">
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Price"
                />
                {errors.price && touched.price ? (
                  <p className="text-red-600">{errors.price}</p>
                ) : null}
              </div>
            </div>
            <div class="mb-5">
              <textarea
                id="message"
                rows="3"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Description"
              ></textarea>
              {errors.description && touched.description ? (
                <p className="text-red-600">{errors.description}</p>
              ) : null}
            </div>
            <button
              type="submit"
              class="text-white  bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditServiceList;
