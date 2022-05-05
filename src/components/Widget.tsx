import { ChatTeardropDots } from 'phosphor-react';
// import { useState } from 'react';

import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {

    /* Sem a Biblioteca de acessibilidade Headless UI */
    /*const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <div className='absolute bottom-5 right-5'>
            { isWidgetOpen && <p>Hello World</p> }
            
            <button onClick={toggleWidgetVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6' />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'><span className='pl-2' />Feedback</span>
            </button>
        </div>
    )*/

    /* Com a Biblioteca de acessibilidade Headless UI */
    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-10 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            
            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6' />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'><span className='pl-2' />Feedback</span>
            </Popover.Button>
        </Popover>
    )
}