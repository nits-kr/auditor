import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faComment,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Header from "../Header";
import Navbar from "../Navbar";
import Swal from "sweetalert2";

import { useAddApproveMutation } from "../../services/Post";
import { useQuestionListMutation } from "../../services/Post";
import { useUpdateQuestionListMutation } from "../../services/Post";
import { useAddRejectMutation } from "../../services/Post";
import { useUpdateQuestionMutation } from "../../services/Post";
function AuditorQuestions() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [itemId, setItemId] = useState("");
  const [acceptbutton1, setAcceptbutton1] = useState();
  const [colorChange1, setColorChange1] = useState(false);
  const [colorChange2, setColorChange2] = useState(false);
  const [acceptbutton2, setAcceptbutton2] = useState();
  const [colorChange3, setColorChange3] = useState(false);
  const [colorChange4, setColorChange4] = useState(false);
  const [acceptbutton3, setAcceptbutton3] = useState();
  const [colorChange5, setColorChange5] = useState(false);
  const [colorChange6, setColorChange6] = useState(false);
  const [acceptbutton4, setAcceptbutton4] = useState();
  const [colorChange7, setColorChange7] = useState(false);
  const [colorChange8, setColorChange8] = useState(false);
  const [acceptbutton5, setAcceptbutton5] = useState();
  const [colorChange9, setColorChange9] = useState(false);
  const [colorChange10, setColorChange10] = useState(false);
  const [acceptbutton6, setAcceptbutton6] = useState();
  const [colorChange11, setColorChange11] = useState(false);
  const [colorChange12, setColorChange12] = useState(false);
  const [acceptbutton7, setAcceptbutton7] = useState();
  const [colorChange13, setColorChange13] = useState(false);
  const [colorChange14, setColorChange14] = useState(false);
  const [acceptbuttonValue1, setAcceptbuttonValue1] = useState("");
  const [acceptbuttonValue2, setAcceptbuttonValue2] = useState("");
  const [acceptbuttonValue3, setAcceptbuttonValue3] = useState("");
  const [acceptbuttonValue4, setAcceptbuttonValue4] = useState("");
  const [acceptbuttonValue5, setAcceptbuttonValue5] = useState("");
  const [acceptbuttonValue6, setAcceptbuttonValue6] = useState("");
  const [acceptbuttonValue7, setAcceptbuttonValue7] = useState("");
  const [qacceptbutton1, qsetAcceptbutton1] = useState();
  const [qcolorChange1, qsetColorChange1] = useState(false);
  const [qcolorChange2, qsetColorChange2] = useState(false);
  const [qacceptbutton2, qsetAcceptbutton2] = useState();
  const [qcolorChange3, qsetColorChange3] = useState(false);
  const [qcolorChange4, qsetColorChange4] = useState(false);
  const [qacceptbutton3, qsetAcceptbutton3] = useState();
  const [qcolorChange5, qsetColorChange5] = useState(false);
  const [qcolorChange6, qsetColorChange6] = useState(false);
  const [qacceptbutton4, qsetAcceptbutton4] = useState();
  const [qcolorChange7, qsetColorChange7] = useState(false);
  const [qcolorChange8, qsetColorChange8] = useState(false);
  const [qacceptbutton5, qsetAcceptbutton5] = useState();
  const [qcolorChange9, qsetColorChange9] = useState(false);
  const [qcolorChange10, qsetColorChange10] = useState(false);
  const [qacceptbutton6, qsetAcceptbutton6] = useState();
  const [qcolorChange11, qsetColorChange11] = useState(false);
  const [qcolorChange12, qsetColorChange12] = useState(false);
  const [qacceptbutton7, qsetAcceptbutton7] = useState();
  const [qcolorChange13, qsetColorChange13] = useState(false);
  const [qcolorChange14, qsetColorChange14] = useState(false);
  const [qAcceptbuttonValue1, qsetAcceptbuttonValue1] = useState("");
  const [qAcceptbuttonValue2, qsetAcceptbuttonValue2] = useState("");
  const [qAcceptbuttonValue3, qsetAcceptbuttonValue3] = useState("");
  const [qAcceptbuttonValue4, qsetAcceptbuttonValue4] = useState("");
  const [qAcceptbuttonValue5, qsetAcceptbuttonValue5] = useState("");
  const [qAcceptbuttonValue6, qsetAcceptbuttonValue6] = useState("");
  const [qAcceptbuttonValue7, qsetAcceptbuttonValue7] = useState("");

  const [approveIn, response] = useAddApproveMutation();
  const [reject, r] = useAddRejectMutation();
  const [updateQuestion, resInfo] = useUpdateQuestionListMutation();
  const [approveScore] = useUpdateQuestionMutation();
  const [questionList, re] = useQuestionListMutation();
  const [generatedId, setGeneratedId] = useState("");
  const [activeStep, setActiveStep] = useState(1);
  const [agentDetails, setAgentDetails] = useState("");
  const [acceptedMessage, setAcceptedMessage] = useState("");
  const [comments11, setComments11] = useState([]);
  const [comments12, setComments12] = useState([]);
  const [comments13, setComments13] = useState([]);
  const [comments14, setComments14] = useState([]);
  const [comments15, setComments15] = useState([]);
  const [comments16, setComments16] = useState([]);
  const [comments17, setComments17] = useState([]);

  const [qcomments11, qsetComments11] = useState([]);
  const [qcomments12, qsetComments12] = useState([]);
  const [qcomments13, qsetComments13] = useState([]);
  const [qcomments14, qsetComments14] = useState([]);
  const [qcomments15, qsetComments15] = useState([]);
  const [qcomments16, qsetComments16] = useState([]);
  const [qcomments17, qsetComments17] = useState([]);
  const [formData, setFormData] = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePostComment1 = () => {
    if (formData.comment1) {
      setComments11([...comments11, formData.comment1]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const handlePostComment2 = () => {
    if (formData.comment2) {
      setComments12([...comments12, formData.comment2]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const handlePostComment3 = () => {
    if (formData.comment3) {
      setComments13([...comments13, formData.comment3]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const handlePostComment4 = () => {
    if (formData.comment4) {
      setComments14([...comments14, formData.comment4]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const handlePostComment5 = () => {
    if (formData.comment5) {
      setComments15([...comments15, formData.comment5]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const handlePostComment6 = () => {
    if (formData.comment6) {
      setComments16([...comments16, formData.comment6]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const handlePostComment7 = () => {
    if (formData.comment7) {
      setComments17([...comments17, formData.comment7]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const qhandlePostComment1 = () => {
    if (formData.qcomment1) {
      console.log("formData.qcomment1", formData.qcomment1);
      qsetComments11([...qcomments11, formData.qcomment1]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const qhandlePostComment2 = () => {
    if (formData.qcomment2) {
      qsetComments12([...qcomments12, formData.qcomment2]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const qhandlePostComment3 = () => {
    if (formData.qcomment3) {
      qsetComments13([...qcomments13, formData.qcomment3]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const qhandlePostComment4 = () => {
    if (formData.qcomment4) {
      qsetComments14([...qcomments14, formData.qcomment4]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const qhandlePostComment5 = () => {
    if (formData.qcomment5) {
      qsetComments15([...qcomments15, formData.qcomment5]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const qhandlePostComment6 = () => {
    if (formData.qcomment6) {
      qsetComments16([...qcomments16, formData.qcomment6]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const qhandlePostComment7 = () => {
    if (formData.qcomment7) {
      qsetComments17([...qcomments17, formData.qcomment7]);
      // setFormData({ ...formData, comment5: '' });
    }
  };
  const handleSetData = async (data) => {
    try {
      await localStorage.setItem("governer", data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnSave = () => {
    const data = {
      auditorComment1: formData?.comment1,
      auditorComment2: formData?.comment2,
      auditorComment3: formData?.comment3,
      auditorComment4: formData?.comment4,
      auditorComment5: formData?.comment5,
      auditorComment6: formData?.comment6,
      auditorComment7: formData?.qcomment7,
      auditorComment8: formData?.qcomment1,
      auditorComment9: formData?.qcomment2,
      auditorComment10: formData?.qcomment3,
      auditorComment11: formData?.qcomment4,
      auditorComment12: formData?.qcomment5,
      auditorComment13: formData?.qcomment6,
      auditorComment14: formData?.qcomment7,
    };
    console.log("adda data 4567", data);
    axios
      .post(
        `http://ec2-65-2-108-172.ap-south-1.compute.amazonaws.com:5000/adda/add-comment/${id}`,
        data
      )
      .then(async (response) => {
        setFormData(response?.data?.results?.updatedata);
        await handleSetData(response?.data?.results?.updatedata);
        console.log(
          "response?.data?.results?.updatedata",
          response?.data?.results?.updatedata
        );
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  console.log("question list", re?.data?.results?.listData);
  console.log("question list response", re);
  const handleSaveChanges5 = () => {
    const editAddress = {
      id: id,
    };
    approveScore(editAddress);
  };
  const handlecolorchange2 = () => {
    setColorChange1(false);
    setColorChange2(true);
  };
  const handlecolorchange1 = () => {
    setColorChange1(true);
    setColorChange2(false);
  };
  const handlecolorchange4 = () => {
    setColorChange3(false);
    setColorChange4(true);
  };
  const handlecolorchange3 = () => {
    setColorChange3(true);
    setColorChange4(false);
  };
  const handlecolorchange6 = () => {
    setColorChange5(false);
    setColorChange6(true);
  };
  const handlecolorchange5 = () => {
    setColorChange5(true);
    setColorChange6(false);
  };
  const handlecolorchange8 = () => {
    setColorChange7(false);
    setColorChange8(true);
  };
  const handlecolorchange7 = () => {
    setColorChange7(true);
    setColorChange8(false);
  };
  const handlecolorchange10 = () => {
    setColorChange9(false);
    setColorChange10(true);
  };
  const handlecolorchange9 = () => {
    setColorChange9(true);
    setColorChange10(false);
  };
  const handlecolorchange12 = () => {
    setColorChange11(false);
    setColorChange12(true);
  };
  const handlecolorchange11 = () => {
    setColorChange11(true);
    setColorChange12(false);
  };
  const handlecolorchange14 = () => {
    setColorChange13(false);
    setColorChange14(true);
  };
  const handlecolorchange13 = () => {
    setColorChange13(true);
    setColorChange14(false);
  };
  const qhandlecolorchange2 = () => {
    qsetColorChange1(false);
    qsetColorChange2(true);
  };
  const qhandlecolorchange1 = () => {
    qsetColorChange1(true);
    qsetColorChange2(false);
  };
  const qhandlecolorchange4 = () => {
    qsetColorChange3(false);
    qsetColorChange4(true);
  };
  const qhandlecolorchange3 = () => {
    qsetColorChange3(true);
    qsetColorChange4(false);
  };
  const qhandlecolorchange6 = () => {
    qsetColorChange5(false);
    qsetColorChange6(true);
  };
  const qhandlecolorchange5 = () => {
    qsetColorChange5(true);
    qsetColorChange6(false);
  };
  const qhandlecolorchange8 = () => {
    qsetColorChange7(false);
    qsetColorChange8(true);
  };
  const qhandlecolorchange7 = () => {
    qsetColorChange7(true);
    qsetColorChange8(false);
  };
  const qhandlecolorchange10 = () => {
    qsetColorChange9(false);
    qsetColorChange10(true);
  };
  const qhandlecolorchange9 = () => {
    qsetColorChange9(true);
    qsetColorChange10(false);
  };
  const qhandlecolorchange12 = () => {
    qsetColorChange11(false);
    qsetColorChange12(true);
  };
  const qhandlecolorchange11 = () => {
    qsetColorChange11(true);
    qsetColorChange12(false);
  };
  const qhandlecolorchange14 = () => {
    qsetColorChange13(false);
    qsetColorChange14(true);
  };
  const qhandlecolorchange13 = () => {
    qsetColorChange13(true);
    qsetColorChange14(false);
  };
  useEffect(() => {
    handleAcceptbutton1();
  }, [acceptbutton1]);
  const handleAcceptbutton1 = () => {
    if (acceptbutton1 === true) {
      setAcceptbuttonValue1("Accepted");
    } else if (acceptbutton1 === false) {
      setAcceptbuttonValue1("Rejected");
    }
  };
  useEffect(() => {
    handleAcceptbutton2();
  }, [acceptbutton2]);
  const handleAcceptbutton2 = () => {
    if (acceptbutton2 === true) {
      setAcceptbuttonValue2("Accepted");
    } else if (acceptbutton2 === false) {
      setAcceptbuttonValue2("Rejected");
    }
  };
  useEffect(() => {
    handleAcceptbutton3();
  }, [acceptbutton3]);
  const handleAcceptbutton3 = () => {
    if (acceptbutton3 === true) {
      setAcceptbuttonValue3("Accepted");
    } else if (acceptbutton3 === false) {
      setAcceptbuttonValue3("Rejected");
    }
  };
  useEffect(() => {
    handleAcceptbutton4();
  }, [acceptbutton4]);
  const handleAcceptbutton4 = () => {
    if (acceptbutton4 === true) {
      setAcceptbuttonValue4("Accepted");
    } else if (acceptbutton4 === false) {
      setAcceptbuttonValue4("Rejected");
    }
  };
  useEffect(() => {
    handleAcceptbutton5();
  }, [acceptbutton5]);
  const handleAcceptbutton5 = () => {
    if (acceptbutton5 === true) {
      setAcceptbuttonValue5("Accepted");
    } else if (acceptbutton5 === false) {
      setAcceptbuttonValue5("Rejected");
    }
  };
  useEffect(() => {
    handleAcceptbutton6();
  }, [acceptbutton6]);
  const handleAcceptbutton6 = () => {
    if (acceptbutton6 === true) {
      setAcceptbuttonValue6("Accepted");
    } else if (acceptbutton6 === false) {
      setAcceptbuttonValue6("Rejected");
    }
  };
  useEffect(() => {
    handleAcceptbutton7();
  }, [acceptbutton7]);
  const handleAcceptbutton7 = () => {
    if (acceptbutton7 === true) {
      setAcceptbuttonValue7("Accepted");
    } else if (acceptbutton7 === false) {
      setAcceptbuttonValue7("Rejected");
    }
  };

  useEffect(() => {
    qhandleAcceptbutton1();
  }, [qacceptbutton1]);
  const qhandleAcceptbutton1 = () => {
    if (qacceptbutton1 === true) {
      qsetAcceptbuttonValue1("Accepted");
    } else if (qacceptbutton1 === false) {
      qsetAcceptbuttonValue1("Rejected");
    }
  };
  useEffect(() => {
    qhandleAcceptbutton2();
  }, [qacceptbutton2]);
  const qhandleAcceptbutton2 = () => {
    if (qacceptbutton2 === true) {
      qsetAcceptbuttonValue2("Accepted");
    } else if (qacceptbutton2 === false) {
      qsetAcceptbuttonValue2("Rejected");
    }
  };
  useEffect(() => {
    qhandleAcceptbutton3();
  }, [qacceptbutton3]);
  const qhandleAcceptbutton3 = () => {
    if (qacceptbutton3 === true) {
      qsetAcceptbuttonValue3("Accepted");
    } else if (qacceptbutton3 === false) {
      qsetAcceptbuttonValue3("Rejected");
    }
  };
  useEffect(() => {
    qhandleAcceptbutton4();
  }, [qacceptbutton4]);
  const qhandleAcceptbutton4 = () => {
    if (qacceptbutton4 === true) {
      qsetAcceptbuttonValue4("Accepted");
    } else if (qacceptbutton4 === false) {
      qsetAcceptbuttonValue4("Rejected");
    }
  };
  useEffect(() => {
    qhandleAcceptbutton5();
  }, [qacceptbutton5]);
  const qhandleAcceptbutton5 = () => {
    if (qacceptbutton5 === true) {
      qsetAcceptbuttonValue5("Accepted");
    } else if (qacceptbutton5 === false) {
      qsetAcceptbuttonValue5("Rejected");
    }
  };
  useEffect(() => {
    qhandleAcceptbutton6();
  }, [qacceptbutton6]);
  const qhandleAcceptbutton6 = () => {
    if (qacceptbutton6 === true) {
      qsetAcceptbuttonValue6("Accepted");
    } else if (qacceptbutton6 === false) {
      qsetAcceptbuttonValue6("Rejected");
    }
  };
  useEffect(() => {
    qhandleAcceptbutton7();
  }, [qacceptbutton7]);
  const qhandleAcceptbutton7 = () => {
    if (qacceptbutton7 === true) {
      qsetAcceptbuttonValue7("Accepted");
    } else if (qacceptbutton7 === false) {
      qsetAcceptbuttonValue7("Rejected");
    }
  };
  console.log("handleSaveChanges2");
  const handleSaveChanges2 = () => {
    const editAddress = {
      id: id,
      approved : true
    };
    approveIn(editAddress);

    // Swal.fire({
    //   icon: "success",
    //   title: "Approved",
    //   text: "Your have been Approved In.",
    //   timer: 3000,
    //   timerProgressBar: true,
    // });
    // window.location.href = "/home";
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };
  const handleSaveChanges4 = () => {
    const editAddress = {
      id: id,
    };
    reject(editAddress);

    Swal.fire({
      icon: "success",
      title: "Rejected",
      text: "Your have been Rejected.",
      timer: 10000,
      timerProgressBar: true,
    });
    window.location.href = "/home";
  };
  console.log(generatedId);

  useEffect(() => {
    const timer = setTimeout(() => {
      const storedItemId = localStorage.getItem("currentItemId");
      if (storedItemId) {
        setItemId(storedItemId);
        console.log("currentItemId at auditior:", storedItemId);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  console.log("item id at auditior", itemId);
  useEffect(() => {
    // if (itemId) {
      userDetails();
    // }
  }, [itemId]);
  const userDetails = async () => {
    const { data } = await axios.post(
      `http://ec2-65-2-108-172.ap-south-1.compute.amazonaws.com:5000/adda/adge-questionList/${id}`
    );
    setAgentDetails(data?.results?.listData);
    console.log(" auditor question Question Details", data?.results?.listData);
  };

  const handleSaveChanges3 = async () => {
    // const acceptValue = acceptbutton1 ? "Rejected" : "Accepted";
    console.log("handleSaveChanges1", itemId);
    const editAddress = {
      id: id,
      accept1: acceptbuttonValue1,
      accept2: acceptbuttonValue2,
      accept3: acceptbuttonValue3,
      accept4: acceptbuttonValue4,
      accept5: acceptbuttonValue5,
      accept6: acceptbuttonValue6,
      accept7: acceptbuttonValue7,
      qaccept1: qAcceptbuttonValue1,
      qaccept2: qAcceptbuttonValue2,
      qaccept3: qAcceptbuttonValue3,
      qaccept4: qAcceptbuttonValue4,
      qaccept5: qAcceptbuttonValue5,
      qaccept6: qAcceptbuttonValue6,
      qaccept7: qAcceptbuttonValue7,
    };
    await updateQuestion(editAddress).then(() => {
      Swal.fire({
        title: "Submited!",
        text: " Question Submited.",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/home";
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
    });
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="modal fade" id="ExtralargeModal">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Duplicate</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-3 col-form-label"
                  >
                    Title
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputText"
                      placeholder="Data Management Audit-June2023"
                    />
                  </div>
                </div>
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-3 pt-0">
                    Need Uploaded Evidences
                  </legend>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" htmlFor="gridCheck1">
                        {" "}
                        Example checkbox{" "}
                      </label>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <aside id="sidebar" className="sidebar">
        <div className="HeaderSec">
          <div className="Avatar">VK</div>
          <div className="py-3">Applicant Name/Username</div>
        </div>
        <div className="px-2">
          <div className="Title">Company Name</div>
          <p>UAE Chemical Private Ltd</p>
          <div className="Title">About Company</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            imperdiet risus nibh, vitae venenatis odio scelerisque et. Morbi
            eget neque sodales, dapibus orci consequat, bibendum lorem.d
          </p>
          <div className="Title">Application Name</div>
          <p>Green Environment Application</p>
          <div className="Title">Reviewer Name</div>
          <p>You</p>
        </div>
      </aside>

      <main id="main" className="main mainNew">
        <div className="container">
          <div className="card  StaticCard">
            <div className="card-body">
              <div className="step-progress">
                <div className="StepsHeader">
                  <div className="step-slider">
                    <div
                      data-id="step1"
                      className={
                        page >= 1
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Governance</div>
                    </div>
                    <div
                      data-id="step2"
                      className={
                        page >= 2
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Management </div>
                    </div>
                    <div
                      data-id="step3"
                      className={
                        page >= 3
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Catalogue</div>
                    </div>
                    <div
                      data-id="step4"
                      className={
                        page >= 4
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Modelling and Design</div>
                    </div>
                    <div
                      data-id="step5"
                      className={
                        page >= 5
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Architecture</div>
                    </div>
                    <div
                      data-id="step6"
                      className={
                        page >= 6
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Security and Privacy</div>
                    </div>
                    <div
                      data-id="step7"
                      className={
                        page >= 7
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Storage</div>
                    </div>
                    <div
                      data-id="step8"
                      className={
                        page >= 8
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">
                        Data Integration and Interoperability
                      </div>
                    </div>
                    <div
                      data-id="step9"
                      className={
                        page >= 9
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Open Data</div>
                    </div>
                    <div
                      data-id="step10"
                      className={
                        page >= 10
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Quality</div>
                    </div>
                  </div>
                </div>
                <div className="step-content">
                  {(() => {
                    switch (page) {
                      case 1:
                        return (
                          <div id="step1" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Governance</h2>
                            </div>
                            <div className="QuestionsStrip">
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.1</div>
                                  <div className="float-start">
                                    The Entity shall establish an organisational
                                    structure to support the Data Management
                                    Programme.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The organisation shall be positioned in
                                        the Entity with sufficient authority
                                        such that it is empowered to do its job
                                        effectively
                                      </li>
                                      <li>
                                        The organisation will take
                                        responsibility and accountability for
                                        Data Management
                                      </li>
                                      <li>
                                        The organisation will take
                                        responsibility and accountability for
                                        Data Management
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.status1 === "yes"
                                            ? agentDetails?.status1?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.doc1 === "" ||
                                            agentDetails.doc1 === "undefined")
                                            ? 0
                                            : [agentDetails?.doc1].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.comment1 === "" ||
                                            agentDetails.comment1 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.comment1].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange1
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton1(true);
                                            handlecolorchange1();
                                          }}
                                        >
                                          {colorChange1 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange2
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton1(false);
                                            handlecolorchange2();
                                          }}
                                        >
                                          {colorChange2 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample1"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value1"
                                          type="file"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded"
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          <p> {agentDetails &&
                                          (agentDetails.doc1 === "" ||
                                            agentDetails.doc1 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.doc1} </p>
                                            <Link
                                            to={agentDetails.doc1}
                                            className={agentDetails &&
                                              (agentDetails.doc1 === "" ||
                                                agentDetails.doc1 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                          {/* Upload your files here or
                                          <button className="btn bg-color-dblue btn-primary" style={{marginLeft:"5px"}}>
                                            Browse
                                          </button> */}
                                        </div>
                                        <span
                                          id="fileName1"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>
                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                                <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.comment1 === "" ||
                                            agentDetails.comment1 === "undefined")
                                            ? "No comment"
                                            : agentDetails.comment1}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="comment1"
                                                value={formData?.comment1}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={1}
                                                    onClick={
                                                      handlePostComment1
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>
                                                    ADGE
                                                  </h4>
                                                  <p>
                                                    {agentDetails &&
                                                    (agentDetails?.comment1 ===
                                                      "" ||
                                                      agentDetails?.comment1 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.comment1}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                  <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment1 ===
                                                      "" ||
                                                      agentDetails?.addaComment1 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment1}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        {/* {comments11.length}{" "} */}
                                                            {/* {comments11.length ===
                                                            1
                                                              ? "comment"
                                                              : "comments"} */}
                                                          <ul>
                                                            {comments11.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#">
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#">
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.2</div>
                                  <div className="float-start col-11">
                                    The Entity shall convene the Data Governance
                                    Board to manage delegated authority and
                                    responsibility within the Entity. The Board
                                    will be the final arbiter within the Entity
                                    for all matters relating to data management.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        This Board should have representatives
                                        from each area affected by data
                                        management initiatives, with the Data
                                        Manager responsible for the execution of
                                        the Boards actions through the programme
                                        management function of the Entit
                                      </li>
                                      <li>
                                        The Data Governance Board shall meet
                                        regularly (weekly, initially) to provide
                                        independent oversight and support for
                                        the Data Management initiatives being
                                        undertaken by the Entity
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.status2 == "yes"
                                            ? agentDetails?.status2?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample2"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.doc2 === "" ||
                                            agentDetails.doc2 === "undefined")
                                            ? 0
                                            : [agentDetails?.doc2].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample2"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.comment2 === "" ||
                                            agentDetails.comment2 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.comment2].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange3
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton2(true);
                                            handlecolorchange3();
                                          }}
                                        >
                                          {colorChange3 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange4
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton2(false);
                                            handlecolorchange4();
                                          }}
                                        >
                                          {colorChange4 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample2"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value2"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc2}
                                            alt="Not Uploaded"
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          <p> {agentDetails &&
                                          (agentDetails.doc2 === "" ||
                                            agentDetails.doc2 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.doc2} </p>
                                            <Link
                                            to={agentDetails.doc2}
                                            className={agentDetails &&
                                              (agentDetails.doc2 === "" ||
                                                agentDetails.doc2 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                          {/* Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                        </div>
                                        <span
                                          id="fileName2"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.comment2 === "" ||
                                            agentDetails.comment2 === "undefined")
                                            ? "No comment"
                                            : agentDetails.comment2}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="comment2"
                                                value={formData?.comment2}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={2}
                                                    onClick={
                                                      handlePostComment2
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.comment2 ===
                                                      "" ||
                                                      agentDetails?.comment2 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.comment2}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment2 ===
                                                      "" ||
                                                      agentDetails?.addaComment2 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment2}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {comments12.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.3</div>
                                  <div className="float-start col-11">
                                    The Entity shall appoint a Data Manager. The
                                    Data Manager shall have delegated authority
                                    from the Data Governance Board.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      The Data Manager shall:
                                      <li>
                                        Oversee the implementation of change
                                      </li>
                                      <li>
                                        Ensure compliance with governance,
                                        policy and standards
                                      </li>
                                      <li>
                                        Ensure the coordinated training and
                                        awareness programmes are executed within
                                        the Entity
                                      </li>
                                      <li>
                                        Ensure the coordinated training and
                                        awareness programmes are executed within
                                        the Entity
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.status3
                                            ? agentDetails?.status3?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample3"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails.doc3 === "" ||
                                          agentDetails.doc3 === "undefined"
                                            ? 0
                                            : [agentDetails?.doc3].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample3"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.comment3 === "" ||
                                            agentDetails.comment3 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.comment3].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange5
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton3(true);
                                            handlecolorchange5();
                                          }}
                                        >
                                          {colorChange5 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange6
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton3(false);
                                            handlecolorchange6();
                                          }}
                                        >
                                          {colorChange6 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample3"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value3"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.doc3 === "" ||
                                            agentDetails.doc3 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.doc3} </p>
                                            <Link
                                            to={agentDetails.doc3}
                                            className={agentDetails &&
                                              (agentDetails.doc3 === "" ||
                                                agentDetails.doc3 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName3"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.comment3 === "" ||
                                            agentDetails.comment3 === "undefined")
                                            ? "No comment"
                                            : agentDetails.comment3}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="comment3"
                                                value={formData?.comment3}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={3}
                                                    onClick={
                                                      handlePostComment3
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.comment3 ===
                                                      "" ||
                                                      agentDetails?.comment3 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.comment3}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment3 ===
                                                      "" ||
                                                      agentDetails?.addaComment3 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment3}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {comments13.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.4</div>
                                  <div className="float-start col-11">
                                    The Entity shall identify and appoint Data
                                    Architects to support the Data Manager.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      The Data Architects shall:
                                      <li>
                                        TWork with the Data Manager and the Data
                                        Governance Board to ensure the
                                        implementation of the Data Management
                                        Standards in all designs across the
                                        Entit
                                      </li>
                                      <li>
                                        Establish a clearly defined target state
                                        for all data sources
                                      </li>
                                      <li>
                                        Establish a clearly defined roadmap to
                                        achieve the target state for all data
                                        sources
                                      </li>
                                      <li>
                                        Be responsible for developing and
                                        maintaining a formal description of the
                                        data and data structures within the
                                        Entity, including
                                        <ol>
                                          <li>
                                            Data designs and design artefacts
                                          </li>
                                          <li>
                                            Data designs and design artefact
                                          </li>
                                          <li>
                                            Data flows throughout the Entity
                                          </li>
                                        </ol>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.status4
                                            ? agentDetails?.status4?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample4"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample4"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.doc4 === "" ||
                                            agentDetails.doc4 === "undefined")
                                            ? 0
                                            : [agentDetails?.doc4].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample4"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample4"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.comment4 === "" ||
                                            agentDetails.comment4 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.comment4].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange7
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton4(true);
                                            handlecolorchange7();
                                          }}
                                        >
                                          {colorChange7 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange8
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton4(false);
                                            handlecolorchange8();
                                          }}
                                        >
                                          {colorChange8 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample4"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value4"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.doc4 === "" ||
                                            agentDetails.doc4 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.doc4} </p>
                                            <Link
                                            to={agentDetails.doc4}
                                            className={agentDetails &&
                                              (agentDetails.doc4 === "" ||
                                                agentDetails.doc4 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName4"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.comment4 === "" ||
                                            agentDetails.comment4 === "undefined")
                                            ? "No comment"
                                            : agentDetails.comment4}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="comment4"
                                                value={formData?.comment4}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={4}
                                                    onClick={
                                                      handlePostComment4
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.comment4 ===
                                                      "" ||
                                                      agentDetails?.comment4 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.comment4}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment4 ===
                                                      "" ||
                                                      agentDetails?.addaComment4 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment4}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {comments14.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.5</div>
                                  <div className="float-start col-11">
                                    The Entity shall identify and appoint Data
                                    Stewards to support the Data Manager in both
                                    the business and technical areas of the
                                    organisation{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The Data Stewards will take
                                        responsibility for the lifecycle of the
                                        data as it passes through information
                                        systems and ownership boundaries
                                      </li>
                                      <li>
                                        The Data Stewards will take
                                        responsibility for the lifecycle of the
                                        data as it passes through information
                                        systems and ownership boundaries
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.status5
                                            ? agentDetails?.status5?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample5"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample5"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.doc5 === "" ||
                                            agentDetails.doc5 === "undefined")
                                            ? 0
                                            : [agentDetails?.doc5].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample5"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample5"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.comment5 === "" ||
                                            agentDetails.comment5 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.comment5].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange9
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton5(true);
                                            handlecolorchange9();
                                          }}
                                        >
                                          {colorChange9 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange10
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton5(false);
                                            handlecolorchange10();
                                          }}
                                        >
                                          {colorChange10 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample5"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value5"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.doc5 === "" ||
                                            agentDetails.doc5 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.doc5} </p>
                                            <Link
                                            to={agentDetails.doc5}
                                            className={agentDetails &&
                                              (agentDetails.doc5 === "" ||
                                                agentDetails.doc5 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName5"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.comment5 === "" ||
                                            agentDetails.comment5 === "undefined")
                                            ? "No comment"
                                            : agentDetails.comment5}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="comment5"
                                                value={formData?.comment5}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={5}
                                                    onClick={
                                                      handlePostComment5
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.omment5 ===
                                                      "" ||
                                                      agentDetails?.omment5 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.omment5}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment5 ===
                                                      "" ||
                                                      agentDetails?.addaComment5 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment5}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {comments15.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.6</div>
                                  <div className="float-start col-11">
                                    The Entity shall identify and appoint Data
                                    Owners (who are responsible for a particular
                                    dataset) to support the Data Stewards. Data
                                    Owners will be drawn from both the business
                                    and technical areas of the organisation.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The Data Owners will take responsibility
                                        for a particular dataset throughout the
                                        lifecycle across systems
                                      </li>
                                      <li>
                                        The Data Owners will ensure the quality
                                        standards for their dataset are met
                                      </li>
                                      <li>
                                        The Data Owners will liaise between the
                                        business and technical stakeholders to
                                        ensure that their dataset is maintained
                                        to the highest standards possible
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.status6
                                            ? agentDetails?.status6?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample6"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample6"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.doc6 === "" ||
                                            agentDetails.doc6 === "undefined")
                                            ? 0
                                            : [agentDetails?.doc6].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample6"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample6"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.comment6 === "" ||
                                            agentDetails.comment6 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.comment6].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange11
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton6(true);
                                            handlecolorchange11();
                                          }}
                                        >
                                          {colorChange11 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange12
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton6(false);
                                            handlecolorchange12();
                                          }}
                                        >
                                          {colorChange12 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample6"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value6"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.doc6 === "" ||
                                            agentDetails.doc6 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.doc6} </p>
                                            <Link
                                            to={agentDetails.doc6}
                                            className={agentDetails &&
                                              (agentDetails.doc6 === "" ||
                                                agentDetails.doc6 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName6"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.comment6 === "" ||
                                            agentDetails.comment6 === "undefined")
                                            ? "No comment"
                                            : agentDetails.comment6}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="comment6"
                                                value={formData?.comment6}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={6}
                                                    onClick={
                                                      handlePostComment6
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.comment6 ===
                                                      "" ||
                                                      agentDetails?.comment6 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.comment6}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment6 ===
                                                      "" ||
                                                      agentDetails?.addaComment6 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment6}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {comments16.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.7</div>
                                  <div className="float-start col-11">
                                    The Entity shall regularly undertake
                                    monitoring and compliance checking to ensure
                                    that information systems and data related
                                    processes are implemented in accordance with
                                    established policy, standards and best
                                    practices
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      Such reviews should include coverage of:
                                      <li>
                                        Such reviews should include coverage of
                                      </li>
                                      <li>
                                        The organisation will take
                                        responsibility and accountability for
                                        Data Management
                                      </li>
                                      <li>
                                        Such reviews should include coverage of
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.status7
                                            ? agentDetails?.status7?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample7"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample7"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.doc7 === "" ||
                                            agentDetails.doc7 === "undefined")
                                            ? 0
                                            : [agentDetails?.doc7].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample7"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample7"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.comment7 === "" ||
                                            agentDetails.comment7 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.comment7].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange13
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton7(true);
                                            handlecolorchange13();
                                          }}
                                        >
                                          {colorChange13 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange14
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton7(false);
                                            handlecolorchange14();
                                          }}
                                        >
                                          {colorChange14 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample7"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value7"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.doc7 === "" ||
                                            agentDetails.doc7 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.doc7} </p>
                                            <Link
                                            to={agentDetails.doc7}
                                            className={agentDetails &&
                                              (agentDetails.doc7 === "" ||
                                                agentDetails.doc7 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName7"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.comment7 === "" ||
                                            agentDetails.comment7 === "undefined")
                                            ? "No comment"
                                            : agentDetails.comment7}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="comment7"
                                                value={formData?.comment7}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={7}
                                                    onClick={
                                                      handlePostComment7
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.comment7 ===
                                                      "" ||
                                                      agentDetails?.comment7 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.comment7}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment7 ===
                                                      "" ||
                                                      agentDetails?.addaComment7 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment7}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {comments17.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      case 2:
                        return (
                          <div id="step2" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Management</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 3:
                        return (
                          <div id="step3" className="step-content-body ">
                            <div className="pagetitle">
                              <h2>Data Categlogue</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 4:
                        return (
                          <div id="step4" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Modeling and Design</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 5:
                        return (
                          <div id="step5" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Architecture</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 6:
                        return (
                          <div id="step6" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Security & Privacy</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 7:
                        return (
                          <div id="step7" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Storage</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 8:
                        return (
                          <div id="step8" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Integration and Interoperability</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 9:
                        return (
                          <div id="step9" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Open Data</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 10:
                        return (
                          <div id="step10" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Quality</h2>
                            </div>
                            <div className="QuestionsStrip">
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.1</div>
                                  <div className="float-start col-11">
                                    The Entity shall provide definitions of
                                    quality data. These definitions shall be
                                    used to determine whether data is of
                                    sufficient quality for the purposes of the
                                    Entity's business.
                                    <br />
                                    Data quality definitions shall be stored in
                                    the Entity's business glossary (business
                                    audience) and data dictionary (technical
                                    audience).{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      Definitions shall exist for:
                                      <li>
                                        Master profiles – the profiles used
                                        across the Entity's business, in key
                                        line-of-business systems, or across
                                        multiple departments and data silos (see
                                        Data Modelling domain) eg ‘Citizen’
                                        profile in multiple systems
                                      </li>
                                      <li>
                                        TSystem profiles – profiles within
                                        single systems, silos or departments eg
                                        Project (in a Project management system)
                                      </li>
                                      <li>
                                        Reference data – data that is
                                        effectively static within systems,
                                        subject to periodic refresh
                                      </li>
                                      <li>
                                        Audit data – data stored log files,
                                        history tables and monitoring systems
                                      </li>
                                      <li>
                                        Audit data – data stored log files,
                                        history tables and monitoring systems
                                      </li>
                                      <li>
                                        Spatial data – geographical, address,
                                        geolocation or other locationbased data
                                      </li>
                                      <li>
                                        Metadata – metadata that is gathered
                                        about structured datasets, such as
                                        ownership, definitions, access rights
                                        (see Metadata domain
                                      </li>
                                      <li>
                                        Metadata annotating unstructured or
                                        semi-structured data. This may include
                                        metadata attached to images, audio
                                        recordings, video recordings (such as
                                        duration, dimensions, location,
                                        encoding), etc. Metadata attached to
                                        semi-structured data may include, for
                                        example, author, workflow steps and
                                        access permissions of documents, etc
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.qstatus1
                                            ? agentDetails?.qstatus1?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.qdoc1 === "" ||
                                            agentDetails.qdoc1 === "undefined")
                                            ? 0
                                            : [agentDetails?.qdoc1].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.qcomment1 === "" ||
                                            agentDetails.qcomment1 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.qcomment1].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange1
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton1(true);
                                            qhandlecolorchange1();
                                          }}
                                        >
                                          {/* <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept */}
                                          {qcolorChange1 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange2
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton1(false);
                                            qhandlecolorchange2();
                                          }}
                                        >
                                          {/* <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject */}
                                          {qcolorChange2 ?<> <FontAwesomeIcon icon={faXmark} /> Reject </>: "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample1"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value1"
                                          type="file"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt="upload"
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button className="btn bg-color-dblue btn-primary">
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.qdoc1 === "" ||
                                            agentDetails.qdoc1 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.qdoc1} </p>
                                            <Link
                                            to={agentDetails.qdoc1}
                                            className={agentDetails &&
                                              (agentDetails.qdoc1 === "" ||
                                                agentDetails.qdoc1 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName1"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>
                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.qcomment1 === "" ||
                                            agentDetails.qcomment1 === "undefined")
                                            ? "No comment"
                                            : agentDetails.qcomment1}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="qcomment1"
                                                value={formData?.qcomment1}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={8}
                                                    onClick={
                                                      qhandlePostComment1
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.qcomment1 ===
                                                      "" ||
                                                      agentDetails?.qcomment1 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.qcomment1}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#">
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#">
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment8 ===
                                                      "" ||
                                                      agentDetails?.addaComment8 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment8}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#">
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#">
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {qcomments11.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#">
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#">
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#">
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#">
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.2</div>
                                  <div className="float-start col-11">
                                    Data quality definitions shall be mapped to
                                    business processes. This shall provide the
                                    capability to assess the impact of both high
                                    and low quality data on business processes.
                                    <br />
                                    For example, a business process may include
                                    contacting a citizen. Where there is poor
                                    data quality in telephone number or address
                                    capture (such as the omission of a country,
                                    area or postal code), there may be a severe
                                    impact upon the business process. Accurate
                                    and timely capture of a telephone number
                                    enables the business process to continue
                                    <br />
                                    Data quality definitions shall include – but
                                    are not limited to – the minimum measures of
                                    data quality for
                                    <span className="badge bg-danger">
                                      High
                                    </span>
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    .{" "}
                                    <ul>
                                      <li>
                                        Validity – Describing what constitutes
                                        valid data. This will show how data
                                        validity is controlled and measured.
                                        This shall include a description of the
                                        business rules (expressed both as a
                                        text-based description, and technically
                                        eg as a regular expression) that enforce
                                        this validity. Data validity may include
                                        the range of acceptable values or
                                        combination of values across multiple
                                        attributes and tables
                                        <br />
                                        <br />
                                        For example: a Citizen is valid if there
                                        is at least one Address marked active in
                                        the last year
                                      </li>
                                      <li>
                                        Timeliness – Describing the acceptable
                                        latency between data capture, use,
                                        transformation, reporting, and sharing.
                                        <br />
                                        For example: The correct departments
                                        have access to Citizen data in order to
                                        process a service request with
                                        sufficient time to meet an SLA; mapping
                                        data changes over time as properties are
                                        constructed, so mapping data that is a
                                        year old may be less useful than mapping
                                        data that is two months’ old.
                                      </li>
                                      <li>
                                        Integrity – Describing how the integrity
                                        between different data sources is
                                        maintained both within and across and
                                        business functions
                                        <br />
                                        For example, using the Emirates ID
                                        across multiple information systems to
                                        uniquely identify a person, using a
                                        contact reference number across multiple
                                        systems, and enforcing validation
                                        through a master service.
                                      </li>
                                      <li>
                                        Accuracy – Describing the acceptable
                                        margin of error against reality to
                                        support the intended purpose(s) of the
                                        data. For example, historical dates of
                                        Citizen access to a government service
                                        must be accurate to within +/- one week
                                        to support capacity planning.
                                      </li>
                                      <li>
                                        Reliability – Determining the level of
                                        consistency and completeness required
                                        for the intended purpose(s) of the data.
                                        For example, telephone numbers are
                                        always captured in the same format to be
                                        consistent, and address records must
                                        contain the correct district in order to
                                        be considered complete
                                      </li>
                                      For each of these measures, the Entity
                                      shall:
                                      <li>
                                        Assess the impact on business processes
                                        for failing to reach the specified
                                        criteria
                                      </li>
                                      <li>
                                        Assess the impact on business processes
                                        for failing to reach the specified
                                        criteria
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.qstatus2
                                            ? agentDetails?.qstatus2?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample2"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.qdoc2 === "" ||
                                            agentDetails.qdoc2 === "undefined")
                                            ? 0
                                            : [agentDetails?.qdoc2].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample2"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.qcomment2 === "" ||
                                            agentDetails.qcomment2 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.qcomment2].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange3
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton2(true);
                                            qhandlecolorchange3();
                                          }}
                                        >
                                          {qcolorChange3 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange4
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton2(false);
                                            qhandlecolorchange4();
                                          }}
                                        >
                                          {qcolorChange4 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample2"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value2"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.qdoc2 === "" ||
                                            agentDetails.qdoc2 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.qdoc2} </p>
                                            <Link
                                            to={agentDetails.qdoc2}
                                            className={agentDetails &&
                                              (agentDetails.qdoc2 === "" ||
                                                agentDetails.qdoc2 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName2"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.qcomment2 === "" ||
                                            agentDetails.qcomment2 === "undefined")
                                            ? "No comment"
                                            : agentDetails.qcomment2}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="qcomment2"
                                                value={formData?.qcomment2}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={9}
                                                    onClick={
                                                      qhandlePostComment2
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.qcomment2 ===
                                                      "" ||
                                                      agentDetails?.qcomment2 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.qcomment2}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment9 ===
                                                      "" ||
                                                      agentDetails?.addaComment9 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment9}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {qcomments12.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.3</div>
                                  <div className="float-start col-11">
                                    The Entity shall appoint a Data Manager. The
                                    Data Manager shall have delegated authority
                                    from the Data Governance Board..{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      The Data Manager shall:
                                      <li>
                                        Oversee the implementation of change
                                      </li>
                                      <li>
                                        Ensure compliance with governance,
                                        policy and standards
                                      </li>
                                      <li>
                                        Ensure the coordinated training and
                                        awareness programmes are executed within
                                        the Entity
                                      </li>
                                      <li>
                                        Ensure the coordinated training and
                                        awareness programmes are executed within
                                        the Entity
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.qstatus3
                                            ? agentDetails?.qstatus3?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample3"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.qdoc3 === "" ||
                                            agentDetails.qdoc3 === "undefined")
                                            ? 0
                                            : [agentDetails?.qdoc3].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample3"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.qcomment3 === "" ||
                                            agentDetails.qcomment3 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.qcomment3].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange5
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton3(true);
                                            qhandlecolorchange5();
                                          }}
                                        >
                                          {qcolorChange5 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange6
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton3(false);
                                            qhandlecolorchange6();
                                          }}
                                        >
                                          {qcolorChange6 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample3"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value3"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.qdoc3 === "" ||
                                            agentDetails.qdoc3 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.qdoc3} </p>
                                            <Link
                                            to={agentDetails.qdoc3}
                                            className={agentDetails &&
                                              (agentDetails.qdoc3 === "" ||
                                                agentDetails.qdoc3 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName3"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.qcomment3 === "" ||
                                            agentDetails.qcomment3 === "undefined")
                                            ? "No comment"
                                            : agentDetails.qcomment3}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="qcomment3"
                                                value={formData?.qcomment3}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={10}
                                                    onClick={
                                                      qhandlePostComment3
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.qomment3 ===
                                                      "" ||
                                                      agentDetails?.qomment3 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.qomment3}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment10 ===
                                                      "" ||
                                                      agentDetails?.addaComment10 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment10}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {qcomments13.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.4</div>
                                  <div className="float-start col-11">
                                    The Entity shall identify and appoint Data
                                    Architects to support the Data Manager..{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      The Data Architects shall:
                                      <li>
                                        TWork with the Data Manager and the Data
                                        Governance Board to ensure the
                                        implementation of the Data Management
                                        Standards in all designs across the
                                        Entit
                                      </li>
                                      <li>
                                        Establish a clearly defined target state
                                        for all data sources
                                      </li>
                                      <li>
                                        Establish a clearly defined roadmap to
                                        achieve the target state for all data
                                        sources
                                      </li>
                                      <li>
                                        Be responsible for developing and
                                        maintaining a formal description of the
                                        data and data structures within the
                                        Entity, including
                                        <ol>
                                          <li>
                                            Data designs and design artefacts
                                          </li>
                                          <li>
                                            Data designs and design artefact
                                          </li>
                                          <li>
                                            Data flows throughout the Entity
                                          </li>
                                        </ol>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.qstatus4
                                            ? agentDetails?.qstatus4?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample4"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample4"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.qdoc4 === "" ||
                                            agentDetails.qdoc4 === "undefined")
                                            ? 0
                                            : [agentDetails?.qdoc4].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample4"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample4"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.qcomment4 === "" ||
                                            agentDetails.qcomment4 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.qcomment4].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange7
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton4(true);
                                            qhandlecolorchange7();
                                          }}
                                        >
                                          {qcolorChange7 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange8
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton4(false);
                                            qhandlecolorchange8();
                                          }}
                                        >
                                          {qcolorChange8 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample4"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value4"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.qdoc4 === "" ||
                                            agentDetails.qdoc4 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.qdoc4} </p>
                                            <Link
                                            to={agentDetails.qdoc4}
                                            className={agentDetails &&
                                              (agentDetails.qdoc4 === "" ||
                                                agentDetails.qdoc4 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName4"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.qcomment4 === "" ||
                                            agentDetails.qcomment4 === "undefined")
                                            ? "No comment"
                                            : agentDetails.qcomment4}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="qcomment4"
                                                value={formData?.qcomment4}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={11}
                                                    onClick={
                                                      qhandlePostComment4
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.qcomment4 ===
                                                      "" ||
                                                      agentDetails?.qcomment4 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.qcomment4}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.auditorComment11 ===
                                                      "" ||
                                                      agentDetails?.auditorComment11 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.auditorComment11}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {qcomments14.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.5</div>
                                  <div className="float-start col-11">
                                    The Entity shall identify and appoint Data
                                    Stewards to support the Data Manager in both
                                    the business and technical areas of the
                                    organisation
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The Data Stewards will take
                                        responsibility for the lifecycle of the
                                        data as it passes through information
                                        systems and ownership boundaries
                                      </li>
                                      <li>
                                        The Data Stewards will take
                                        responsibility for the lifecycle of the
                                        data as it passes through information
                                        systems and ownership boundaries
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.qstatus5
                                            ? agentDetails?.qstatus5?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample5"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample5"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.qdoc5 === "" ||
                                            agentDetails.qdoc5 === "undefined")
                                            ? 0
                                            : [agentDetails?.qdoc5].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample5"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample5"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.qcomment5 === "" ||
                                            agentDetails.qcomment5 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.qcomment5].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange9
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton5(true);
                                            qhandlecolorchange9();
                                          }}
                                        >
                                          {qcolorChange9 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange10
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton5(false);
                                            qhandlecolorchange10();
                                          }}
                                        >
                                          {qcolorChange10 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample5"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value5"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.qdoc5 === "" ||
                                            agentDetails.qdoc5 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.qdoc5} </p>
                                            <Link
                                            to={agentDetails.qdoc5}
                                            className={agentDetails &&
                                              (agentDetails.qdoc5 === "" ||
                                                agentDetails.qdoc5 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName5"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.qcomment5 === "" ||
                                            agentDetails.qcomment5 === "undefined")
                                            ? "No comment"
                                            : agentDetails.qcomment5}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="qcomment5"
                                                value={formData?.qcomment5}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={12}
                                                    onClick={
                                                      qhandlePostComment5
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.qcomment5 ===
                                                      "" ||
                                                      agentDetails?.qcomment5 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.qcomment5}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment12 ===
                                                      "" ||
                                                      agentDetails?.addaComment12 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment12}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {qcomments15.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.6</div>
                                  <div className="float-start col-11">
                                    The Entity shall identify and appoint Data
                                    Owners (who are responsible for a particular
                                    dataset) to support the Data Stewards. Data
                                    Owners will be drawn from both the business
                                    and technical areas of the organisation.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The Data Owners will take responsibility
                                        for a particular dataset throughout the
                                        lifecycle across systems
                                      </li>
                                      <li>
                                        The Data Owners will ensure the quality
                                        standards for their dataset are met
                                      </li>
                                      <li>
                                        The Data Owners will liaise between the
                                        business and technical stakeholders to
                                        ensure that their dataset is maintained
                                        to the highest standards possible
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.qstatus6
                                            ? agentDetails?.qstatus6?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample6"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample6"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.qdoc6 === "" ||
                                            agentDetails.qdoc6 === "undefined")
                                            ? 0
                                            : [agentDetails?.qdoc6].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample6"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample6"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.qcomment6 === "" ||
                                            agentDetails.qcomment6 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.qcomment6].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange11
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton6(true);
                                            qhandlecolorchange11();
                                          }}
                                        >
                                          {qcolorChange11 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange12
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton6(false);
                                            qhandlecolorchange12();
                                          }}
                                        >
                                          {qcolorChange12 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample6"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value6"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.qdoc6 === "" ||
                                            agentDetails.qdoc6 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.qdoc6} </p>
                                            <Link
                                            to={agentDetails.qdoc6}
                                            className={agentDetails &&
                                              (agentDetails.qdoc6 === "" ||
                                                agentDetails.qdoc6 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName6"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.qcomment6 === "" ||
                                            agentDetails.qcomment6 === "undefined")
                                            ? "No comment"
                                            : agentDetails.qcomment6}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="qcomment6"
                                                value={formData?.qcomment6}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={13}
                                                    onClick={
                                                      qhandlePostComment6
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.qcomment6 ===
                                                      "" ||
                                                      agentDetails?.qcomment6 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.qcomment6}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment13 ===
                                                      "" ||
                                                      agentDetails?.addaComment13 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment13}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {qcomments16.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.7</div>
                                  <div className="float-start col-11">
                                    The Entity shall regularly undertake
                                    monitoring and compliance checking to ensure
                                    that information systems and data related
                                    processes are implemented in accordance with
                                    established policy, standards and best
                                    practices
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      Such reviews should include coverage of:
                                      <li>
                                        Such reviews should include coverage of
                                      </li>
                                      <li>
                                        The organisation will take
                                        responsibility and accountability for
                                        Data Management
                                      </li>
                                      <li>
                                        Such reviews should include coverage of
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          {agentDetails?.qstatus7
                                            ? agentDetails?.qstatus7?.toUpperCase()
                                            : "N/A"}
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample7"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample7"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {agentDetails &&
                                          (agentDetails.qdoc7 === "" ||
                                            agentDetails.qdoc7 === "undefined")
                                            ? 0
                                            : [agentDetails?.qdoc7].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample7"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample7"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {agentDetails &&
                                          (agentDetails.qcomment7 === "" ||
                                            agentDetails.qcomment7 ===
                                              "undefined")
                                            ? 0
                                            : [agentDetails?.qcomment7].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange13
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton7(true);
                                            qhandlecolorchange13();
                                          }}
                                        >
                                          {qcolorChange13 ? <><FontAwesomeIcon icon={faCheck} /> Accept</> : "Accept"}
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange14
                                              ? "btn btn-danger"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton7(false);
                                            qhandlecolorchange14();
                                          }}
                                        >
                                          {qcolorChange14 ? <><FontAwesomeIcon icon={faXmark} /> Reject</> : "Reject"}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample7"
                                  >
                                    <form action="">
                                      <div className="form">
                                        {/* <input
                                          name="file"
                                          id="entry_value7"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                        /> */}
                                        <div>
                                          {" "}
                                          {/* <img
                                            src="upload.png"
                                            alt=""
                                            width="4%"
                                            className=""
                                          />{" "}
                                          Upload your files here or
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button> */}
                                          <p> {agentDetails &&
                                          (agentDetails.qdoc7 === "" ||
                                            agentDetails.qdoc7 === "undefined")
                                            ? "File Not Uploaded"
                                            : agentDetails.qdoc7} </p>
                                            <Link
                                            to={agentDetails.qdoc7}
                                            className={agentDetails &&
                                              (agentDetails.qdoc7 === "" ||
                                                agentDetails.qdoc7 === "undefined")
                                                ? "d-none"
                                                : "mx-2"} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                        <span
                                          id="fileName7"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                              <span style={{color:"#5058dd"}}>ADGE: {" "} </span>
                                              {agentDetails &&
                                          (agentDetails.qcomment7 === "" ||
                                            agentDetails.qcomment7 === "undefined")
                                            ? "No comment"
                                            : agentDetails.qcomment7}
                                              </span>{" "}
                                            </div>
                                            {/* <div className="float-end">
                                              {" "}
                                              <span className="sort_title">
                                                Sort by
                                              </span>
                                              <select className="sort_by">
                                                <option>Top</option>
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                              </select>
                                            </div> */}
                                          </div>
                                        </div>
                                        <div className="body_comment">
                                          <div className="row">
                                            <div className="avatar_comment col-md-1">
                                              {" "}
                                              <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                alt="avatar"
                                              />{" "}
                                            </div>
                                            <div className="box_comment col-md-11">
                                              <textarea
                                                className="commentar"
                                                placeholder="Add a comment..."
                                                name="qcomment7"
                                                value={formData?.qcomment7}
                                                onChange={handleInputChange}
                                              />
                                              <div className="box_post">
                                                <div className="pull-right">
                                                  {" "}
                                                  <span>
                                                    {" "}
                                                    <img
                                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                      alt="avatar"
                                                    />{" "}
                                                    <i className="fa fa-caret-down" />{" "}
                                                  </span>
                                                  <button
                                                    // onClick="submit_comment()"
                                                    type="button"
                                                    value={14}
                                                    onClick={
                                                      qhandlePostComment7
                                                    }
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>ADGE</h4>
                                                  <p>
                                                  {agentDetails &&
                                                    (agentDetails?.qcomment7 ===
                                                      "" ||
                                                      agentDetails?.qcomment7 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.qcomment7}
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay">
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>ADDA</h4>
                                                        <p>
                                                        {agentDetails &&
                                                    (agentDetails?.addaComment14 ===
                                                      "" ||
                                                      agentDetails?.addaComment14 ===
                                                        "undefined")
                                                      ? "No comment"
                                                      : agentDetails?.addaComment14}
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                    <li className="box_reply row">
                                                      <div className="avatar_comment col-md-1">
                                                        {" "}
                                                        <img
                                                          src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                          alt="avatar"
                                                        />{" "}
                                                      </div>
                                                      <div className="result_comment col-md-11">
                                                        <h4>Auditor</h4>
                                                        <p>
                                                        <ul>
                                                            {qcomments17.map(
                                                              (
                                                                comment,
                                                                index
                                                              ) => (
                                                                <li key={index}>
                                                                  {comment}
                                                                </li>
                                                              )
                                                            )}
                                                          </ul>
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#"
                                                          >
                                                            Reply
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <i className="fa fa-thumbs-o-up" />{" "}
                                                          <span className="count">
                                                            1
                                                          </span>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <span>26m</span>{" "}
                                                        </div>
                                                        <ul className="child_replay"></ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  <h4>Gung Wah</h4>
                                                  <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#"
                                                    >
                                                      Reply
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <i className="fa fa-thumbs-o-up" />{" "}
                                                    <span className="count">
                                                      1
                                                    </span>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <span>26m</span>{" "}
                                                  </div>
                                                  <ul className="child_replay"></ul>
                                                </div>
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      default:
                        return (
                          <div id="step2" className="step-content-body ">
                            <div className="pagetitle">
                              <h2>Data Management</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                    }
                  })()}

                  <div className="step-content-foot">
                    <button
                      type="button "
                      className="float-start active"
                      onClick={() => {
                        page <= 1 ? setPage(1) : setPage(page - 1);
                      }}
                      name="prev"
                    >
                      Prev
                    </button>
                    {page === 10 ? (
                      <div>
                        <button
                          type="button"
                          className="active"
                          name="next"
                          onClick={() => {
                            page === 10 ? setPage(10) : setPage(page + 1);
                            handleSaveChanges2();
                            handleOnSave();
                            handleSaveChanges3();
                          }}
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          className="active bg-danger ms-2"
                          name="next"
                          onClick={() => {
                            page === 10 ? setPage(10) : setPage(page + 1);
                            handleSaveChanges4();
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="active"
                        name="next"
                        onClick={() => {
                          page === 10 ? setPage(10) : setPage(page + 1);
                        }}
                      >
                        Next
                      </button>
                    )}

                    <button type="button" className="active out" name="finish">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="active out bg-danger"
                      name="finish"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Link
        to="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </Link>
    </>
  );
}

export default AuditorQuestions;
