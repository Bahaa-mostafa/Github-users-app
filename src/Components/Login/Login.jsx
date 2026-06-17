import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();


    const formik = useFormik({

        initialValues: {
            email: "",
            password: ""
        },


        validationSchema: Yup.object({

            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),


            password: Yup.string()
                .min(6, "Password must be 6 characters")
                .required("Password is required")

        }),


        onSubmit: (values) => {

            formik.setValues({
                email: "",
                password: ""
            });

            navigate("/home");

        }
    });



    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">


            <form
                onSubmit={formik.handleSubmit}
                className="bg-white p-6 rounded-xl shadow w-96"
            >


                <h1 className="text-2xl font-bold mb-5 text-center">
                    Login
                </h1>



                <input

                    type="email"
                    name="email"
                    placeholder="Email"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}

                    className="border p-3 w-full rounded mb-2"

                />


                {formik.touched.email && formik.errors.email &&
                    <p className="text-red-500">
                        {formik.errors.email}
                    </p>
                }
                <input

                    type="password"
                    name="password"
                    placeholder="Password"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}

                    className="border p-3 w-full rounded mb-2"

                />
                {formik.touched.password && formik.errors.password &&
                    <p className="text-red-500">
                        {formik.errors.password}
                    </p>
                }
                <button type="submit" className="bg-black text-white w-full py-3 rounded mt-4">
                    Login
                </button>
            </form>
        </div>
    );
}