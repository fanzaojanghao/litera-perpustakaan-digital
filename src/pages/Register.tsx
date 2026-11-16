import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { AuthShell, authInput, authButton, authLabel } from '@/components/AuthShell';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error('Kata sandi minimal 6 karakter');
      return;
    }
    setLoading(true);
    const { error } = await signUp(email, password, name);
    setLoading(false);
    if (error) toast.error('Gagal mendaftar', { description: error.message });
    else {
      toast.success('Berhasil!', { description: 'Silakan cek email untuk konfirmasi akun.' });
      navigate('/login');
    }
  };

  return (
    <AuthShell
      title="Buat akun Litera"
      subtitle="Gratis. Mulai baca dan tulis cerita hari ini."
      footer={<>Sudah punya akun? <Link to="/login" className="font-bold text-primary underline underline-offset-4">Masuk</Link></>}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className={authLabel}>Nama lengkap</label>
          <input id="name" autoComplete="name" placeholder="Nama kamu" value={name} onChange={(e) => setName(e.target.value)} className={authInput} required />
        </div>
        <div>
          <label htmlFor="email" className={authLabel}>Email</label>
          <input id="email" type="email" autoComplete="email" placeholder="nama@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className={authInput} required />
        </div>
        <div>
          <label htmlFor="password" className={authLabel}>Kata sandi</label>
          <div className="relative">
            <input id="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="Minimal 6 karakter" value={password} onChange={(e) => setPassword(e.target.value)} className={`${authInput} pr-11`} required />
            <button type="button" onClick={() => setShowPassword((v) => !v)} aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'} className="absolute right-0 top-0 grid h-11 w-11 place-items-center text-muted-foreground hover:text-foreground">
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <button type="submit" disabled={loading} className={authButton}>
          {loading ? 'Memproses...' : <>Daftar <ArrowRight className="h-4 w-4" /></>}
        </button>
      </form>
    </AuthShell>
  );
}
