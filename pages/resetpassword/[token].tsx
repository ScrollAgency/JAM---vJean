import { useRouter } from 'next/router';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import '../styles/resetpassword.css';

// Ensure environment variables are defined
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ResetPassword = () => {
    const router = useRouter();
    const { token } = router.query;
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleResetPassword = async () => {
        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas.');
            return;
        }

        const { error } = await supabase.auth.updateUser({
            access_token: token as string,
            password: password,
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess('Mot de passe réinitialisé avec succès.');
        }
    };

    return (
        <div className="reset-password-container">
            <h1>Réinitialiser le mot de passe</h1>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <input
                type="password"
                placeholder="Nouveau mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Réinitialiser le mot de passe</button>
        </div>
    );
};

export default ResetPassword;
