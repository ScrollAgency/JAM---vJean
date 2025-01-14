import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { AuthButton } from "./components/AuthButton";
import { AuthForm } from "./components/AuthForm";
import TextInput from "./components/TextInput";
import Icons from "./components/Icons";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import FileUploader from "./components/FileUploader";
import CardJob from "./components/JobCard";
import ProgressBar from "./components/ProgressBar";
import Switch from "./components/Switch";
import TextLink from "./components/TextLink";
import ButtonWalk from "./components/ButtonWalk";


export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "f7DE9y7qp46fyCw5nuY8f9",  // ID of a project you are using
      token: "MbfTgnLngWKW6r2sjjKszD0QR0IEyjlKb6jfrxGaXXvu2ahBO3RaSu8TdfJCVSazD06yVW3tXJeOldNd0kw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.substituteComponent(AuthButton, "AuthButton");
PLASMIC.substituteComponent(AuthForm, "AuthForm");
//Registering the TextInput component
PLASMIC.registerComponent(TextInput, {
  name: "TextInput",
  props: {
    Label: "string",
    Placeholder: "string",
    error: "boolean",
    disabled: "boolean",
    icon: "imageUrl",
    type: {
      type: "choice",
      defaultValue: "email",
      options: ["email", "password", "text", "number", "tel"],
      required: false,
    },
  },
  figmaPropsTransform(props) {
    return {
      Label: props["_TextInputBase.Label"],
      Placeholder: props["_TextInputBase.Placeholder"],
    };
  },
  importPath: "@/components/text-input",
});
//Registering the Icons component (which contains all the icons)
Object.keys(Icons).forEach((iconName) => {
  PLASMIC.registerComponent(Icons[iconName as keyof typeof Icons], {
    name: `Icons_${iconName}`,
    props: {},
    importPath: "./components/icons",
  });
});
//Registering the CheckBox component
PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {
    children: "string",
    variant: {
      type: "choice",
      defaultValue: "primary",
      options: ["primary", "secondary"],
      required: false,
    },
    size: {
      type: "choice",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      required: false,
    },
    disabled: "boolean",
    loading: "boolean",
  },
  importPath: "./components/button",
});
//Registering the CheckBox component
PLASMIC.registerComponent(CheckBox, {
  name: "CheckBox",
  props: {
    checked: "boolean",
    type: {
      type: "choice",
      defaultValue: "Checkbox",
      options: ["Checkbox", "Check circle"],
      required: false,
    },
    disabled: "boolean",
  },
  importPath: "./components/CheckBox",
});
//Registering the FileUploader component
PLASMIC.registerComponent(FileUploader, {
  name: "FileUploader",
  props: {},
  importPath: "./components/FileUploader",
});
//Registering the CardJob component
PLASMIC.registerComponent(CardJob, {
  name: "CardJob",
  props: {
    title: "string",
    description: "string",
    location: "string",
    date: "string",
    time: "string",
    icon: "imageUrl",
  },
  importPath: "./components/JobCard",
});
//Registering the progress bar component
PLASMIC.registerComponent(ProgressBar, {
  name: "ProgressBar",
  props: {
    progress: "number",
  },
  importPath: "./components/ProgressBar",
});
//Registering the Switch
PLASMIC.registerComponent(Switch, {
  name: "Switch",
  props: {
    disabled: "boolean",
  },
  importPath: "./components/Switch",
});
//Registering the TextLink component
PLASMIC.registerComponent(TextLink, {
  name: "TextLink",
  props: {
    label: "string",
    size: {
      type: "choice",
      defaultValue: "Small",
      options: ["Small", "Large"],
      required: false,
    },
    icon: {
      type: "choice",
      defaultValue: "None",
      options: ["Start", "None", "End"],
      required: false,
    },
    destructive: "boolean",
    uppercase: "boolean",
    iconImage: "imageUrl",
    disabled: "boolean",
  },
  importPath: "./components/TextLink",
});
//Registering the ButtonWalk component
PLASMIC.registerComponent(ButtonWalk, {
  name: "ButtonWalk",
  props: {
    variant: {
      type: "choice",
      defaultValue: "active",
      options: ["active", "inactive", "disabled"],
      required: false,
    },
    size: {
      type: "choice",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      required: false,
    },
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "none", "end"],
      required: false,
    },
    destructive: "boolean",
    uppercase: "boolean",
    iconImage: "imageUrl",
    disabled: "boolean",
  },
  importPath: "./components/ButtonWalk",
});