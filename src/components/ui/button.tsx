
export function Button({ children, variant = 'default', className = '' }) {
  const base = 'px-4 py-2 rounded-lg';
  const styles = variant === 'outline'
    ? 'border border-gray-200 text-white hover:bg-white hover:text-black'
    : 'bg-blue-600 text-white';
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}
