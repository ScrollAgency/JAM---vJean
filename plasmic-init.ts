import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import {
  SupabaseProvider,
  SupabaseProviderMeta,
  SupabaseUserGlobalContext,
  SupabaseUserGlobalContextMeta,
  SupabaseUppyUploader,
  SupabaseUppyUploaderMeta,
  SupabaseStorageGetSignedUrl,
  SupabaseStorageGetSignedUrlMeta,
} from "plasmic-supabase";

// Import des composants locaux
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
import PhoneSelector from "./components/PhoneSelector/PhoneSelector";
import DropDownSelector from "./components/DropDownSelector/DropDownSelector";

// Initialisation du loader Plasmic
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "f7DE9y7qp46fyCw5nuY8f9",  // ID du projet
      token: "MbfTgnLngWKW6r2sjjKszD0QR0IEyjlKb6jfrxGaXXvu2ahBO3RaSu8TdfJCVSazD06yVW3tXJeOldNd0kw"  // Token API pour le projet
    }
  ],
  // Désactiver pour la production afin d'assurer que seules les modifications publiées sont rendues
  preview: true,
});

// Enregistrement du contexte global Supabase
PLASMIC.registerGlobalContext(SupabaseUserGlobalContext, SupabaseUserGlobalContextMeta);

// Enregistrement des composants Supabase
PLASMIC.registerComponent(SupabaseProvider, SupabaseProviderMeta);
PLASMIC.registerComponent(SupabaseUppyUploader, SupabaseUppyUploaderMeta);
PLASMIC.registerComponent(SupabaseStorageGetSignedUrl, SupabaseStorageGetSignedUrlMeta);

// Remplacement des composants
PLASMIC.substituteComponent(AuthButton, "AuthButton");
PLASMIC.substituteComponent(AuthForm, "AuthForm");

// Enregistrement du composant TextInput avec ses propriétés
PLASMIC.registerComponent(TextInput, {
  name: "TextInput",
  props: {
    Label: "string",
    Placeholder: "string",
    Required: "boolean",
    Type: {
      type: "choice",
      options: ["Default", "Leading Text", "TextArea", "Password", "Phone"],
      defaultValue: "Default",
    },
    Destructive: "boolean",
    disabled: "boolean",
    iconImage: "string",
    prefixedText: "string",
    Hint: "string",
    className: "string",
    iconUrl: "imageUrl",
  },
});

// Enregistrement des composants Icons
Object.entries(Icons).forEach(([iconName, iconComponent]) => {
  PLASMIC.registerComponent(iconComponent, {
    name: `Icons_${iconName}`,
    props: {},
    importPath: "./components/icons",
  });
});

// Enregistrement des composants Button et CheckBox
PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {
    icon: {
      type: "choice",
      defaultValue: "none",
      options: ["start", "none", "end"],
      required: false,
    },
    iconImage: "imageUrl",
    label: "string",
  },
  importPath: "./components/Button",
});

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

// Enregistrement des autres composants (Uploader, CardJob, ProgressBar, Switch, etc.)
PLASMIC.registerComponent(FileUploader, {
  name: "FileUploader",
  props: {},
  importPath: "./components/FileUploader",
});

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

PLASMIC.registerComponent(ProgressBar, {
  name: "ProgressBar",
  props: {
    progress: "number",
  },
  importPath: "./components/ProgressBar",
});

PLASMIC.registerComponent(Switch, {
  name: "Switch",
  props: {
    disabled: "boolean",
  },
  importPath: "./components/Switch",
});

PLASMIC.registerComponent(TextLink, {
  name: "TextLink",
  props: {
    redirect: {
      type: "string",
      defaultValue: "",
    },
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

PLASMIC.registerComponent(ButtonWalk, {
  name: "ButtonWalk",
  props: {
    label: "string",
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

PLASMIC.registerComponent(PhoneSelector, {
  name: "PhoneSelector",
  props: {},
  importPath: "./components/PhoneSelector/PhoneSelector",
});

// Enregistrement du composant DropDownSelector
PLASMIC.registerComponent(DropDownSelector, {
  name: "DropDownSelector",
  props: {},
  importPath: "./components/DropDownSelector/DropDownSelector",
});