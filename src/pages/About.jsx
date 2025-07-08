import React, { useState } from 'react';

function About() {
  const [inp, setInp] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    text: ''
  });

  const [visible, setVisible] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    setVisible(true);
    console.log(inp);
  };

  const changeFunction = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 lg:px-20 py-10 bg-white">
      <div className="flex-1">
        <p className="text-4xl font-extrabold font-sans">
          We Have <span className="text-orange-600">28+</span>
        </p>
        <p className="text-4xl font-extrabold font-sans">Years Working</p>
        <p className="text-4xl font-extrabold font-sans">Experience</p>

        <p className="mt-10 text-lg font-serif font-medium text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis
          impedit perferendis blanditiis, soluta ipsa nostrum pariatur cumque.
        </p>

        <p className="mt-6 text-base text-gray-500 font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          voluptas nesciunt natus officia ratione, itaque unde sequi dolores!
          Laborum, quo. Cupiditate delectus numquam accusamus molestiae quidem
          cumque ea, tempore nostrum!
        </p>

        <button className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-6 py-2 rounded-3xl shadow-md hover:from-orange-600 hover:to-yellow-600 transition duration-300">
          Read More
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-md bg-blue-950 p-6 rounded-lg shadow-lg">
          <p className="text-orange-600 font-bold text-sm">Get Any Services</p>
          <p className="text-white font-extrabold text-xl mb-4">
            If you needed any service, fill this form.
          </p>

          <form className="space-y-4" onSubmit={handle}>
            <div className="flex gap-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={changeFunction}
                className="flex-1 bg-cyan-950 border-b-4 border-orange-600 h-[40px] text-white px-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={changeFunction}
                className="flex-1 bg-cyan-950 border-b-4 border-orange-600 h-[40px] text-white px-3"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={changeFunction}
                className="flex-1 bg-cyan-950 border-b-4 border-orange-600 h-[40px] text-white px-3"
              />
              <input
                type="text"
                name="service"
                placeholder="Services"
                onChange={changeFunction}
                className="flex-1 bg-cyan-950 border-b-4 border-orange-600 h-[40px] text-white px-3"
              />
            </div>

            <textarea
              name="text"
              placeholder="Your Requirements"
              onChange={changeFunction}
              className="w-full h-[100px] bg-cyan-950 border-b-4 border-orange-600 text-white px-3 py-2"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl px-4 py-2 text-white shadow-md hover:from-orange-600 hover:to-yellow-600 transition duration-300 w-full"
            >
              Submit Information
            </button>
          </form>

          {visible && (
            <p className="text-green-400 font-semibold mt-4">
              Submitted Successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
