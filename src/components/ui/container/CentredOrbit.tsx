import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type OrbitProps = {
    position?: string // Custom position class
    customSize?: string // Custom size class
    children?: React.ReactNode // Allows children inside the div
} & HTMLAttributes<HTMLDivElement>

const CentredOrbit: React.FC<OrbitProps> = ({
    position = 'absolute-centre',
    customSize = 'size-[200px] border border-gray-700 rounded-full',
    children,
    className,
    ...otherProps // Other HTML props
}) => {
    return (
        <div
            className={cn('isolate -z-10', position, className)}
            {...otherProps}
        >
            <div className={cn(customSize)} />
            {children && <div>{children}</div>}
        </div>
    )
}

export default CentredOrbit

// Example
// <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
//   <div className="size-[200px] border border-gray-700 rounded-full"></div>
// </div>
// <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
//   <div className="size-[350px] border border-gray-700 rounded-full"></div>
// </div>
// <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
//   <div className="size-[500px] border border-gray-700 rounded-full"></div>
// </div>
// <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
//   <div className="size-[650px] border border-gray-700 rounded-full"></div>
// </div>
