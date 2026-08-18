import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

// Bright Volition's control styling, applied on top of the shadcn primitives:
// cream ground, lavender rule, and a gold border on focus so the focused field
// is marked with the same colour the eyebrow rules use.
const CONTROL =
  'h-auto rounded-lg border-[1.5px] border-lavender bg-cream px-4 py-3.5 text-[.96rem] text-navy focus-visible:border-gold focus-visible:ring-0';

export function Field({ id, label, textarea = false, className = '', ...props }) {
  const Control = textarea ? Textarea : Input;
  return (
    <div className="mb-5">
      <Label htmlFor={id} className="mb-2 block text-[.88rem] font-bold text-navy">
        {label}
      </Label>
      <Control id={id} className={`${CONTROL} ${textarea ? 'resize-y' : ''} ${className}`} {...props} />
    </div>
  );
}

export function FieldRow({ children }) {
  return <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">{children}</div>;
}
