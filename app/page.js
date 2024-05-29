import PageTitle from "@/components/PageTitle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <PageTitle title="About me" subtitle="developer, car enthusiast, cook" />
      <h2 className="text-xl font-semibold text-zinc-800">I am Web Developer</h2>
      <div className="flex flex-col md:flex-row md:space-x-4 ">
        <div className=" md:w-1/2 pt-8">
          <p className=" text-gray-600 text-lg">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, libero in luctus ultricies, nunc erat ultricies justo, nec
            fermentum nunc nunc nec nisi. Sed nec nunc nec nisi. Sed nec nunc
            nec nisi. Sed nec nunc nec nisi. Sed nec nunc nec nisi. Sed nec nunc
            nec nisi. Sed nec nunc nec nisi. Sed nec nunc nec nisi. Sed nec nunc
            nec nisi. Sed nec nunc nec nisi. Sed nec nunc nec nisi. Sed nec nunc
            nec nisi. Sed nec nunc nec nisi. Sed nec nunc nec nisi. Sed nec nunc
            nec nisi. Sed nec nunc nec nisi. Sed nec nunc nec nisi. Sed nec nunc
            nec nisi. Sed nec nunc nec nisi. Sed nec nunc nec nisi. Sed nec nunc
            nec nisi. Sed nec nunc nec nisi. Sed nec nunc nec nisi. Sed nec nunc

          </p>
        </div>
        <div className=" md:w-1/2 pt-8">
          <ul className="space-y-3">
            <li className="text-gray-600">
              <span className="font-semibold border-b-2 pb-1 border-orange-600">
                Age
              </span>{" "}
              {new Date().getFullYear() - 1994}
            </li>
            <li className="text-gray-600">
              <span className="font-semibold border-b-2 pb-1 border-orange-600">
                Residence
              </span>{" "}
              USA
            </li>
            <li className="text-gray-600">
            <span className="font-semibold border-b-2 pb-1 border-orange-600">Address</span> Hayden, AL
            </li>
            <li className="text-gray-600">
              <span className="font-semibold border-b-2 pb-1 border-orange-600">
                Email
              </span>{" "}
              <a href="mailto:bilazor@gmail.com" className="text-blue-500">bilazor@gmail.com</a>
            </li>
            <li className="text-gray-600">
              <span className="font-semibold border-b-2 pb-1 border-orange-600">
                Phone
              </span>{" "}
              <a href="tel:+1-732-567-7237" className="text-blue-500">+1-732-567-7237</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
