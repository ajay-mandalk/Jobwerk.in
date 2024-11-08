import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

type AuthMode = 'login' | 'signup';

export function Login() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [loading, setLoading] = useState(false);
  const [signupEnabled, setSignupEnabled] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkSignupStatus = async () => {
      try {
        const { data, error } = await supabase
          .from('config')
          .select('signup_enabled')
          .single();
        
        if (error) throw error;
        setSignupEnabled(data?.signup_enabled ?? true);
      } catch (err) {
        console.error('Error checking signup status:', err);
        setSignupEnabled(true);
      }
    };

    checkSignupStatus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!signupEnabled) {
          throw new Error('Sign up is currently disabled');
        }

        const { error: signUpError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name,
            },
          },
        });

        if (signUpError) throw signUpError;
        alert('Check your email for the confirmation link!');
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (signInError) throw signInError;
        
        // Check if authentication was successful
        if (data && data.user) {
          // Use window.location.href for client-side navigation to success page
          window.location.href = '/success';
        }
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        {mode === 'login' ? 'Login' : 'Create Account'}
      </h2>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              aria-label="Full name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            aria-label="Email address"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            aria-label="Password"
            minLength={6}
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading || (mode === 'signup' && !signupEnabled)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Processing...' : mode === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>

      {signupEnabled && (
        <div className="mt-4 text-center">
          <button
            type='button'
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-blue-600 hover:text-blue-800"
          >
            {mode === 'login'
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Login'}
          </button>
        </div>           
      )}
    </div>
  );
}
