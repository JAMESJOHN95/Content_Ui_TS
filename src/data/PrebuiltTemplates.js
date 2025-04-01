import React, { useState } from "react";
import one from "../Images/1on1.png";
import two from "../Images/choose.webp";
import { v4 as uuidv4 } from "uuid";

//This is where the user can create their own custom template with data
const PrebuiltTemplates = [
  {
    id: uuidv4(),
    templateName: "One-on-One Template",
    categoryName: "SD",
    status: "Yes",
    templateBody: "<p>This is a One-on-One Template</p>",
    columns: [],
    containerContent: [
      {
        type: "image",
        content: {
          imageData: one,
          fileName: "Template Image",
        },
      },
    ],
    desc: "Marketing Templates from One-on-One Template",
    emailList: [
      "SDI_OAA_FHSA_Submitted_Day4",
      "SDI_OAA_FHSA_Submitted_Day11",
      "SDI_OAA_FHSA_PartialDocsRecvd_Day4",
      "SDI_OAA_FHSA_PartialDocsRecvd_Day11",
    ],
  },
  {
    id: uuidv4(),
    templateName: "Stellar Template",
    categoryName: "QWP",
    status: "Yes",
    templateBody: "<p>This is a Stellar Template</p>",
    columns: [],
    containerContent: [
      {
        type: "image",
        content: {
          imageData: two,
          fileName: "Template Image",
        },
      },
    ],
    desc: "Buisness Templates from Stellar Template",
    emailList: [
      "SDI_OAA_FHSA_Submitted_Day6",
      "SDI_OAA_FHSA_Submitted_Day13",
      "SDI_OAA_FHSA_PartialDocsRecvd_Day6",
      "SDI_OAA_FHSA_PartialDocsRecvd_Day13",
    ],
  },
];

export default PrebuiltTemplates;
