import one from "../Images/1on1.png";
import two from"../Images/choose.webp";
import { v4 as uuidv4 } from "uuid";

// Define the structure for container content
interface ImageContent {
  imageData: string;
  fileName: string;
}

interface ContainerContent {
  type: "image";
  content: ImageContent;
}

// Define the structure for the template
interface Template {
  id: string;
  templateName: string;
  categoryName: string;
  status: "Yes" | "No"; // Assuming status is always "Yes" or "No"
  templateBody: string;
  columns: any[]; // You can define a more specific type if columns have a structure
  containerContent: ContainerContent[];
  desc: string;
  type: string;
  emailList: string[];
}
// Array of prebuilt templates
const PrebuiltTemplates: Template[] = [
  {
    id: uuidv4(),
    templateName: "One-on-One Content Template",
    categoryName: "SD",
    status: "Yes",
    templateBody: "<p>This is a One-on-One Content Template</p>",
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
    desc: "Marketing Templates from One-on-One Content Template",
    type:"block",
    emailList: [
      "SDI_OAA_FHSA_Submitted_Day4",
      "SDI_OAA_FHSA_Submitted_Day11",
      "SDI_OAA_FHSA_PartialDocsRecvd_Day4",
      "SDI_OAA_FHSA_PartialDocsRecvd_Day11",
    ],
  },
  {
    id: uuidv4(),
    templateName: "Stellar Email Template",
    categoryName: "QWP",
    status: "Yes",
    templateBody: "<p>This is a Stellar Email Template</p>",
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
    desc: "Buisness Templates from Stellar Email Template",
    type:"email",
    emailList: [
      "SDI_OAA_FHSA_Submitted_Day6",
      "SDI_OAA_FHSA_Submitted_Day13",
      "SDI_OAA_FHSA_PartialDocsRecvd_Day6",
      "SDI_OAA_FHSA_PartialDocsRecvd_Day13",
    ],
  },
];

export default PrebuiltTemplates;
