import { cn } from "@/lib/utils";

const Title = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return <h2 className={cn('text-3xl md:text-3xl font-bold text-shop-dark-green tracking-wide capitalize mb-5 font-sans', className)}>{children}</h2>
}

export {Title,}