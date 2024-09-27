import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteService } from "../Redux/slice/serviceSlice";
import { toast } from "react-toastify";

function ServiceList() {
  const dispatch = useDispatch();
  const servicedata = useSelector((state) => state.services.service);

  const handleDelete = (id) => {
    dispatch(deleteService({ id }));
    toast.success("Service Delete Successfully");
  };

  return (
    <>
      <Navbar />
      <div class="relative overflow-x-auto mx-auto w-5/6 mt-4">
        <h1 className="text-5xl text-center my-5 mb-6 pb-6 font-semibold font-serif">
          Service List
        </h1>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-transparent">
          <thead class="text-xs text-gray-700 uppercase ">
            <tr>
              <th scope="col" class="px-6 py-3 text-xl">
                SI.No.
              </th>
              <th scope="col" class="px-6 py-3 text-xl">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-xl">
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-xl">
                Price
              </th>
              <th scope="col" class="px-6 py-3 text-xl">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {servicedata && servicedata.length > 0 ? (
              servicedata.map((data) => (
                <tr class="border-b border-white text-xl">
                  <td class="px-6 py-4">{data.id}</td>
                  <td class="px-6 py-4">{data.name}</td>
                  <td class="px-6 py-4">{data.description}</td>
                  <td class="px-6 py-4">Rs. {data.price}</td>
                  <td class="px-4 py-4 flex gap-4">
                    <Link to={`/edit/${data.id}`}>
                      <FaEdit className="text-4xl text-green-500" />
                    </Link>
                    <p>
                      <MdDelete
                        className="text-4xl text-red-500"
                        onClick={() => handleDelete(data.id)}
                      />
                    </p>
                  </td>
                </tr>
              ))
            ) : (
              <div className=" text-3xl my-6 text-center">
                <h1>ServiceList is Empty</h1>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ServiceList;
