import { TooltipProvider,Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react'
import React from 'react'
interface Props{
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@mdasifchy5313",
    icon: <Youtube className='w-5 h-5'/>
  },
  {
    title: "Github",
    href: "https://www.github.com/mdasif131",
    icon: <Github className='w-5 h-5'/>
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com",
    icon: <Linkedin className='w-5 h-5'/>
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/mdasif131",
    icon: <Facebook className='w-5 h-5'/>
  },
  {
    title: "Slack",
    href: "https://www.slack.com/mdasif131",
    icon: <Slack className='w-5 h-5'/>
  },
]

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-3.5', className)}>
        {socialLink?.map(item => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <a href={item?.href} target='_blank' rel='noopener noreferre' className={cn('p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect', iconClassName)}>{item?.icon}</a>
            </TooltipTrigger>
            <TooltipContent className={cn('bg-white text-darkColor font-semibold', tooltipClassName)}>
            {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia