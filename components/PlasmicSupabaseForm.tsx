// import React, { useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// // Initialisez Supabase
// const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL || "",
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
// );

// interface PlasmicSupabaseFormProps {
//     children?: React.ReactNode;
//     onSuccess?: (user: any) => void; // Callback en cas de succès
//     onError?: (error: any) => void; // Callback en cas d'erreur
//     type?: "signup" | "login"; // Type du formulaire : inscription ou connexion
//     className?: string;
// }

// export function PlasmicSupabaseForm({
//     children,
//     onSuccess,
//     onError,
//     type = "signup",
//     className,
// }: PlasmicSupabaseFormProps) {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         setError(null);
//         setLoading(true);

//         const formData = new FormData(event.currentTarget);
//         const email = formData.get("email")?.toString();
//         const password = formData.get("password")?.toString();

//         if (!email || !password) {
//             setError("Email et mot de passe sont requis");
//             setLoading(false);
//             return;
//         }

//         try {
//             const authFn =
//                 type === "signup"
//                     ? supabase.auth.signUp({ email, password })
//                     : supabase.auth.signInWithPassword({ email, password });

//             const { data, error } = await authFn;

//             if (error) {
//                 setError(error.message);
//                 onError?.(error);
//             } else {
//                 onSuccess?.(data);
//             }
//         } catch (err) {
//             setError("Une erreur s'est produite");
//             console.error(err);
//             onError?.(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <form
//             className={`flex flex-col gap-4 ${className || ""}`}
//             onSubmit={handleSubmit}
//         >
//             {children}
//             {error && <p className="text-red-500">{error}</p>}
//             <button
//                 type="submit"
//                 disabled={loading}
//                 className="bg-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
//             >
//                 {loading ? "Chargement..." : type === "signup" ? "S'inscrire" : "Se connecter"}
//             </button>
//         </form>
//     );
// }

// export default PlasmicSupabaseForm;
