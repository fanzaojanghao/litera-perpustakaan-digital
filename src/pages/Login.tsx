import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { AuthShell, authInput, authButton, authLabel } from '@/components/AuthShell';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) toast.error('Gagal masuk', { description: error.message });
    else {
      toast.success('Berhasil masuk!');
      navigate('/');
    }
  };

  return (
    <AuthShell
      title="Masuk ke Litera"
      subtitle="Lanjutkan bacaanmu dari terakhir kali."
      footer={<>Belum punya akun? <Link to="/register" className="font-bold text-primary underline underline-offset-4">Daftar sekarang</Link></>}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className={authLabel}>Email</label>
          <input id="email" type="email" autoComplete="email" placeholder="nama@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className={authInput} required />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className={authLabel}>Kata sandi</label>
            <Link to="/forgot-password" className="mb-1.5 text-xs font-bold text-primary">Lupa kata sandi?</Link>
          </div>
          <div className="relative">
            <input id="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Masukkan kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} className={`${authInput} pr-11`} required />
            <button type="button" onClick={() => setShowPassword((v) => !v)} aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'} className="absolute right-0 top-0 grid h-11 w-11 place-items-center text-muted-foreground hover:text-foreground">
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <button type="submit" disabled={loading} className={authButton}>
          {loading ? 'Memproses...' : <>Masuk <ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
    </AuthShell>
  );
}
