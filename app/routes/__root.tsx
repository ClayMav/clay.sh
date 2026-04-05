import TopNavigation from '../../components/TopNavigation'
import appCss from '../styles.css?url'
import {
    HeadContent,
    Outlet,
    Scripts,
    createRootRoute,
} from '@tanstack/react-router'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { title: 'Clay McGinnis' },
            {
                name: 'description',
                content: 'The portfolio of Clay McGinnis',
            },
        ],
        links: [
            { rel: 'stylesheet', href: appCss },
            {
                rel: 'icon',
                href: '/favicon.ico',
                media: '(prefers-color-scheme: light)',
            },
            {
                rel: 'icon',
                href: '/favicon-dark.ico',
                media: '(prefers-color-scheme: dark)',
            },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
        ],
    }),
    component: RootComponent,
})

function RootComponent() {
    return (
        <html
            lang="en"
            className="min-h-screen h-full overflow-x-hidden max-w-screen w-screen"
        >
            <head>
                <HeadContent />
            </head>
            <body className="bg-[#EAEADF] w-full min-h-full h-full font-sans z-0">
                <div className="w-full min-h-full p-4 md:p-10 flex flex-col">
                    <TopNavigation />
                    <Outlet />
                </div>
                <div className="absolute w-full pointer-events-none top-0 bottom-0 left-0 right overflow-x-hidden">
                    <img
                        src="/BlueShape.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute min-w-[600px] w-[60%] -z-40 left-[2%] top-[2%] pointer-events-none"
                    />
                    <img
                        src="/OrangeShape.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute min-w-[700px] w-[70%] -z-50 left-[30%] md:right-[2%] top-[28%] pointer-events-none"
                    />
                    <img
                        src="/OrangeShape.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute min-w-[700px] w-[70%] -z-30 opacity-60 left-[30%] md:right-[2%] top-[28%] pointer-events-none"
                    />
                </div>
                <Scripts />
            </body>
        </html>
    )
}
