import { useState } from "react";
import Divider from "../components/Divider";
import LoadingSpinner from "../components/LoadingSpinner";
import Modal from "../components/Modal";
import SocialLogin from "../components/SocialLogin";

const RegistrationRelated = () => {
  const [openModal, setOpenModal] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* social login */}
      <section className="mt-4">
        <SocialLogin />
      </section>

      <div className="my-20">
        <hr />
      </div>

      {/* divider */}
      <section>
        <Divider />
      </section>

      {/* loading spinner */}
      <section>
        <LoadingSpinner />
      </section>

      {/* modal */}
      <section className="mt-4">
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <h3 className="text-center text-3xl uppercase text-orange-600">
            Please Register
          </h3>
          <form onSubmit={submitHandler} className="space-y-2">
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="w-full rounded p-2 focus:outline-none focus:ring-2"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                className="w-full rounded p-2 focus:outline-none focus:ring-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                className="w-full rounded p-2 focus:outline-none focus:ring-2"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
              />
            </div>

            <div>
              <button
                className="w-full rounded-md bg-orange-600 px-4 py-2 font-medium uppercase text-white"
                type="submit"
              >
                submit
              </button>
            </div>
          </form>
        </Modal>

        {/* button */}
        <div className="text-center">
          <button
            onClick={() => setOpenModal(true)}
            className="rounded-md bg-orange-600 px-4 py-2 font-medium uppercase text-white"
          >
            modal open
          </button>
        </div>
      </section>
    </div>
  );
};

export default RegistrationRelated;
