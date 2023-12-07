import React from "react";
import "./Signin.css";
import { Container } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
 
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3300/login",
        values
      );
      console.log("API Response:", response.data);
      navigate("/");
    } catch (error) {
      
      console.error("API Error:", error);
     
    } finally {
      setSubmitting(false);
    }
  };
  const { Formik } = formik;

  const schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),

    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });

  return (
    <div>
      <div className="headbg">
        <Container className="headwrapper1">
          <Row>
            <Col lg={6} className="order-2 order-lg-1">
              <div className="headwrapper">
                <h1 className="mt-5">Tech Career Programs</h1>

                <p className="headpara">
                  <ul>
                    <li className="fs-3 mb-2">100% Job Placement Support.</li>
                    <li className="fs-3 mb-2">
                      Mentors from Top Global Product companies.
                    </li>
                    <li className="fs-3 mb-2">
                      A Portfolio of Real-world Projects.
                    </li>
                    <li className="fs-3 mb-2">
                      Globally Recognized Certification.
                    </li>
                  </ul>
                </p>
                <h3>Live Classes available in English, தமிழ்</h3>
                <div className="clientcount">
                  <Row className="gy-4">
                    <Col className="col-xs-6 col-sm-3 col-lg-3 ">
                      <div>
                        <p className="clientCountNumber1">
                          2000<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter1">Students</p>
                      </div>
                    </Col>

                    <Col className="col-xs-6 col-sm-3 col-lg-3">
                      <div>
                        <p className="clientCountNumber2">
                          10<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter2">Courses</p>
                      </div>
                    </Col>

                    <Col className="col-xs-6 col-sm-3 col-lg-3">
                      <div>
                        <p className="clientCountNumber3">
                          30<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter3">Staffs</p>
                      </div>
                    </Col>

                    <Col className="col-xs-6 col-sm-3 col-lg-3">
                      <div>
                        <p className="clientCountNumber4">
                          30000<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter4">
                          Students Placed
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2">
              <div className="registerPage">
                <Formik
                  className="form"
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                  initialValues={{
                    userName: "",
                    password: "",
                    terms: false,
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <h1 className="headSign fs-2">Signin</h1>
                      <Form.Group
                        as={Col}
                        controlId="validationFormik105"
                        className="position-relative"
                      >
                        <Form.Label className="userNameLabels mt-4">
                          Username
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          name="userName"
                          value={values.userName}
                          onChange={handleChange}
                          isValid={touched.userName && !errors.userName}
                          isInvalid={!!errors.userName}
                          className="userName"
                          id="userNames"
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          tooltip
                          className="userNameErrors"
                        >
                          {errors.userName}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        controlId="validationFormik105"
                        className="position-relative"
                      >
                        <Form.Label className="passwordLabels mt-4">
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          isValid={touched.password && !errors.password}
                          className="password"
                          id="passwords"
                        />

                        <Form.Control.Feedback
                          type="invalid"
                          tooltip
                          className="passwordErrors"
                        >
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="position-relative mt-5 termsLabelss">
                        <Form.Check
                          required
                          name="terms"
                          label="Agree to terms and conditions"
                          onChange={handleChange}
                          isInvalid={!!errors.terms}
                          feedback={errors.terms}
                          feedbackType="invalid"
                          id="validationFormik106"
                          feedbackTooltip
                          className="termsLabels"
                        />
                      </Form.Group>
                      <Button type="submit" className="mt-5 registerBtns ">
                        Login
                      </Button>
                      <h5 className="mt-3 mb-0 text-black">Let's Register</h5>{" "}
                      <Link to="/Courses" type="submit mt-0" className="mt-5 ">
                        Register
                      </Link>{" "}
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Signin;
