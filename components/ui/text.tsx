import { cn } from "@/lib/utils";

const Title = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return <h2 className={cn('text-3xl md:text-3xl font-bold text-shop-dark-green tracking-wide capitalize mb-5 font-sans', className)}>{children}</h2>
}
const SubTitle = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return <h3 className={cn('font-semibold text-gray-900 font-sans text-lg ', className)}>{children}</h3>
}


const SubText = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  return <p className={cn('text-gray-500 text-sm', className)}>{children}</p>;
}

export {Title, SubTitle ,SubText}