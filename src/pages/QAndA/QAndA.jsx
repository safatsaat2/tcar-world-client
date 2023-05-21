import { FaQuestion } from "react-icons/fa";

const QAndA = () => {
    return (
        <div className='my-20 mx-auto'>
            <h1 className='text-4xl text-center text-[#E03C79] justify-center font-bold flex items-center my-10'>Q & A! <FaQuestion className='text-[#EF8716]'></FaQuestion></h1>
            <div className=" flex flex-col gap-3 justify-center items-center">
                <div className="collapse w-1/2 rounded-md">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#F9D1A6] font-semibold peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        Are products suited for children of all ages?
                    </div>
                    <div className="collapse-content bg-[#E03C79]  text-primary-content peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        <p>Our products suited for children from age 3.</p>
                    </div>
                </div>
                <div className="collapse w-1/2 rounded-md">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#F9D1A6] font-semibold peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                    Are your products safe?
                    </div>
                    <div className="collapse-content bg-[#E03C79]  text-primary-content peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        <p>Our products meet EU standards and are certificated with the CE mark, so you can rest assured about the safety of your child.</p>
                    </div>
                </div>
                <div className="collapse w-1/2 rounded-md">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#F9D1A6] font-semibold peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        Is the light used in the product hazardous to eyes?
                    </div>
                    <div className="collapse-content bg-[#E03C79]  text-primary-content peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        <p>LED RGB diodes are used inside the product. This lighting is less hazardous than other mostly use light sources (TV, phone, computer).
                            <br />
                            <br />
                            The light source is inside the wooden frame (Magic Light Easel) or have plexiglass (Magic Light Table, Magic Light Sandbox), so it does not emit light directly. The set has a remote control, with it you can lower the colour and brightness intensity.
                            <br />
                            <br />
                            People who are sensitive to light or the change in lighting it is advised to lower the light intensity and the speed of the color change programs with the help of the remote control.
                            <br />
                            <br />
                            It is not recommended to use it (or use with care) for people with epilepsy or similar conditions.</p>
                    </div>
                </div>
                <div className="collapse w-1/2 rounded-md">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#F9D1A6] font-semibold peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                    I have lost my product User Manual. Where could I get this information?
                    </div>
                    <div className="collapse-content bg-[#E03C79]  text-primary-content peer-checked:bg-[#E03C79] peer-checked:text-secondary-content">
                        <p>You can download User Manual of every product from the product page.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QAndA;