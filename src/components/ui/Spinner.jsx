export default function Spinner({ size = 'border-2 w-6 h-6' }) {
  return (
    <div className="w-full flex items-center justify-center"><div
        className={`animate-spin rounded-full border-amber-400/70  border-b-transparent ${size}`}/></div> );}
