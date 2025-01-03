import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { AuthButton } from "./components/AuthButton";
import { AuthForm } from "./components/AuthForm";
import TextInput from "@/components/text-input";



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