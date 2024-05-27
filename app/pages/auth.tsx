import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const { data: { user }, error } = await supabase.auth.signUp({ email, password });
    if (error) console.error('Error signing up:', error.message);
    else console.log('User signed up:', user);
  };

  const handleSignIn = async () => {
    const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error('Error signing in:', error.message);
    else console.log('User signed in:', user);
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
