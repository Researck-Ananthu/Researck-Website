"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

import BlackSection from "@/components/ui/BlackSection";
import SimpleParagraph from "@/components/ui/SimpleParagraph";

import {
    infoFunSecGrid,
    infoFunSecHeading,
    infoFunSecParagraph, placeHolderImg,
} from "@/lib/constant";
import SimpleGridHeading from "@/components/ui/SimpleGridHeading";

// import { TArray } from "ts-interface-checker";
// import {
//     motion,
//     AnimatePresence,
//     useAnimate,
//     usePresence,
// } from "framer-motion";
// import { FiClock, FiPlus, FiTrash2 } from "react-icons/fi";

// type TODO = {
//     id: number;
//     text: string;
//     checked: boolean;
//     time: string;
// };
//
// const [todos, setTodos] = useState<TODO[]>([
//     {
//         id: 1,
//         text: "Update software patches",
//         checked: false,
//         time: "30 mins",
//     },
//     {
//         id: 2,
//         text: "Backup database",
//         checked: false,
//         time: "1 hr",
//     },
//     {
//         id: 3,
//         text: "Resolve server downtime",
//         checked: true,
//         time: "3 hrs",
//     },
//     {
//         id: 4,
//         text: "Conduct code review",
//         checked: false,
//         time: "2 hrs",
//     },
//     {
//         id: 5,
//         text: "Update firewall settings",
//         checked: false,
//         time: "15 mins",
//     },
// ]);

const InfoAndFunSection = () => {
    // const handleCheck = (id: number) => {
    //     setTodos((pv) =>
    //         pv.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    //     );
    // };
    //
    // const removeElement = (id: number) => {
    //     setTodos((pv) => pv.filter((t) => t.id !== id));
    // };

    return (
        <BlackSection
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
        >

            {/* Open - Heading */}
            <SimpleGridHeading
                whiteScheme={false}
                grid={false}
                cover={true}
                startText={infoFunSecHeading.headingStart}
                highlightText={infoFunSecHeading.headingHighlight}
                endText={infoFunSecHeading.headingEnd}
            />
            {/* Close - Heading */}

            {/* Open - SimpleParagraph */}
            <SimpleParagraph
                whiteScheme={false}
                paragraph1={infoFunSecParagraph.paragraphStart}
                paragraph2={infoFunSecParagraph.paragraphEnd}
            />
            {/* Close - SimpleParagraph */}

            {/* Grid */}
            <GridContainer />

            {/* Info */}
            <InfoContainer />

            {/*<div className="mx-auto w-full max-w-xl px-4">*/}
            {/*    <Header />*/}
            {/*    <Todos*/}
            {/*        removeElement={removeElement}*/}
            {/*        todos={todos}*/}
            {/*        handleCheck={handleCheck}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<Form setTodos={setTodos} />*/}
        </BlackSection>
    );
};
export default InfoAndFunSection;

const GridContainer = () => {
    return (
        <div className="mx-auto px-6 lg:px-8">
            {/*<h2 className="text-center text-base/7 font-semibold text-emerald-600">*/}
            {/*    What We focus*/}
            {/*</h2>*/}
            {/*<p className="mx-auto mt-2 max-w-1xl text-center text-4xl sm:text-5xl font-semibold tracking-tight text-balance text-gray-400">*/}
            {/*    Everything you need to deploy your application*/}
            {/*</p>*/}
            <div className="mt-4 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
                {/* Column 1 */}
                <div className="relative lg:row-span-2">
                    <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                {infoFunSecGrid[0].title}
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                {infoFunSecGrid[0].description}
                            </p>
                        </div>
                        <div className="container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                            <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[3rem] border-x-[0.9rem] border-t-[0.9rem] border-gray-700 bg-gray-900 shadow-2xl">
                                <Image
                                    className="size-full object-cover object-top"
                                    src={infoFunSecGrid[0].imageUrl as StaticImageData}
                                    alt={infoFunSecGrid[0].title}
                                    height={150}
                                    width={30}
                                    loading={"lazy"}
                                    placeholder={"blur"}
                                    blurDataURL={placeHolderImg}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                </div>

                {/* Column 2 */}
                <div className="relative max-lg:row-start-1">
                    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                {infoFunSecGrid[1].title}
                            </p>
                            <p className="my-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                {infoFunSecGrid[1].description}
                            </p>
                        </div>
                        <div className="flex flex-1 items-center justify-center px-8 sm:px-10 pt-4 pb-8">
                            <Image
                                className="w-full max-lg:max-w-xs"
                                src={infoFunSecGrid[1].imageUrl as StaticImageData}
                                alt={infoFunSecGrid[1].title}
                                width={100}
                                height={100}
                                loading={"lazy"}
                                placeholder={"blur"}
                                blurDataURL={placeHolderImg}
                            />
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                </div>

                {/* Column 3 */}
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                    <div className="absolute inset-px rounded-lg bg-white"></div>
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                {infoFunSecGrid[2].title}
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                {infoFunSecGrid[2].description}
                            </p>
                        </div>
                        <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                            <Image
                                className="w-full h-[min(160px,40rem)] object-cover bg-center"
                                src={infoFunSecGrid[2].imageUrl as StaticImageData}
                                alt={infoFunSecGrid[2].title}
                                width={100}
                                height={100}
                                loading={"lazy"}
                                placeholder={"blur"}
                                blurDataURL={placeHolderImg}
                            />
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                </div>

                {/* Column 4 */}
                <div className="relative lg:row-span-2">
                    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                {infoFunSecGrid[3].title}
                            </p>
                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                {infoFunSecGrid[3].description}
                            </p>
                        </div>
                        <div className="relative min-h-[30rem] w-full grow">
                            <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                            {infoFunSecGrid[3].codeFileName}
                                        </div>
                                        <div className="border-r border-gray-600/10 px-4 py-2">
                                            {infoFunSecGrid[3].mainFile}
                                        </div>
                                    </div>
                                </div>
                                <div className="px-6 pt-6 pb-14 text-white custom-scrollbar">
                                    {/* <SyntaxHighlighter
                                        language="javascript"
                                        style={darcula}
                                        customStyle={{
                                            background: "transparent",
                                            margin: "0",
                                            padding: "1 0 1rem 0",
                                            width: "-webkit-fill-available",
                                            border: "0px solid",
                                            borderRadius: "0px",
                                            boxShadow: "none",
                                            fontSize: "0.9rem",
                                            whiteSpace: "nowrap",
                                            scrollbarWidth: "thin",
                                            scrollbarColor: "transparent",
                                            backgroundClip: "content-box",
                                        }}
                                    >
                                        {`${infoFunSecGrid[3].codeSnippet as string}`}
                                    </SyntaxHighlighter> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                </div>
            </div>
        </div>
    );
};

const InfoContainer = () => {
    return (
        <div className="mt-32 px-6 lg:px-8">
            <div className=" py-16 rounded-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-200 sm:text-4xl">
                            Your Trusted Software Development Partner
                        </h2>
                        <p className="mt-3 sm:mt-4 text-gray-500">
                            Transforming ideas into robust, scalable, and user-friendly
                            software solutions tailored to meet your business goals.
                        </p>
                    </div>
                </div>
                <div className="mt-10 pb-1">
                    <div className="relative">
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Successful Projects
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-gray-700">
                                            150+
                                        </dd>
                                    </div>
                                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Client Satisfaction Rate
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-gray-700">
                                            95%
                                        </dd>
                                    </div>
                                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            New Clients Each Month
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-gray-700">
                                            20+
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

// const Header = () => {
//     return (
//         <div className="mb-6">
//             <h1 className="text-xl font-medium text-white">Good morning! ☀️</h1>
//             <p className="text-zinc-400">
//                 Let's see what we've got to do today.
//             </p>
//         </div>
//     );
// };

// const Form = ({ setTodos }: { setTodos: Dispatch<SetStateAction<TODO[]>> }) => {
//     const [visible, setVisible] = useState(false);
//
//     const [time, setTime] = useState(15);
//     const [text, setText] = useState("");
//     const [unit, setUnit] = useState<"mins" | "hrs">("mins");
//
//     const handleSubmit = () => {
//         if (!text.length) {
//             return;
//         }
//
//         setTodos((pv) => [
//             {
//                 id: Math.random(),
//                 text,
//                 checked: false,
//                 time: `${time} ${unit}`,
//             },
//             ...pv,
//         ]);
//
//         setTime(15);
//         setText("");
//         setUnit("mins");
//     };
//
//     return (
//         <div className="absolute bottom-0 left-1/2 w-full max-w-xl -translate-x-1/2 px-4">
//             <AnimatePresence>
//                 {visible && (
//                     <motion.form
//                         initial={{ opacity: 0, y: 25 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 25 }}
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             handleSubmit();
//                         }}
//                         className="mb-6 w-full rounded border border-zinc-700 bg-zinc-900 p-3"
//                     >
//                         <textarea
//                             value={text}
//                             onChange={(e) => setText(e.target.value)}
//                             placeholder="What do you need to do?"
//                             className="h-24 w-full resize-none rounded bg-zinc-900 p-3 text-sm text-zinc-50 placeholder-zinc-500 caret-zinc-50 focus:outline-0"
//                         />
//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center gap-1.5">
//                                 <input
//                                     type="number"
//                                     className="w-24 rounded bg-zinc-700 px-1.5 py-1 text-sm text-zinc-50 focus:outline-0"
//                                     value={time}
//                                     onChange={(e) =>
//                                         setTime(parseInt(e.target.value))
//                                     }
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => setUnit("mins")}
//                                     className={`rounded px-1.5 py-1 text-xs ${unit === "mins" ? "bg-white text-zinc-950" : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"}`}
//                                 >
//                                     mins
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={() => setUnit("hrs")}
//                                     className={`rounded px-1.5 py-1 text-xs ${unit === "hrs" ? "bg-white text-zinc-950" : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"}`}
//                                 >
//                                     hrs
//                                 </button>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="rounded bg-indigo-600 px-1.5 py-1 text-xs text-indigo-50 transition-colors hover:bg-indigo-500"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </motion.form>
//                 )}
//             </AnimatePresence>
//             <button
//                 onClick={() => setVisible((pv) => !pv)}
//                 className="grid w-full place-content-center rounded-full border border-zinc-700 bg-zinc-900 py-3 text-lg text-white transition-colors hover:bg-zinc-800 active:bg-zinc-900"
//             >
//                 <FiPlus
//                     className={`transition-transform ${visible ? "rotate-45" : "rotate-0"}`}
//                 />
//             </button>
//         </div>
//     );
// };

// const Todos = ({
//     todos,
//     handleCheck,
//     removeElement,
// }: {
//     todos: TODO[];
//     handleCheck: Function;
//     removeElement: Function;
// }) => {
//     return (
//         <div className="w-full space-y-3">
//             <AnimatePresence>
//                 {todos.map((t) => (
//                     <Todo
//                         handleCheck={handleCheck}
//                         removeElement={removeElement}
//                         id={t.id}
//                         key={t.id}
//                         checked={t.checked}
//                         time={t.time}
//                     >
//                         {t.text}
//                     </Todo>
//                 ))}
//             </AnimatePresence>
//         </div>
//     );
// };

// const Todo = ({
//     removeElement,
//     handleCheck,
//     id,
//     children,
//     checked,
//     time,
// }: {
//     removeElement: Function;
//     handleCheck: Function;
//     id: number;
//     children: string;
//     checked: boolean;
//     time: string;
// }) => {
//     const [isPresent, safeToRemove] = usePresence();
//     const [scope, animate] = useAnimate();
//
//     useEffect(() => {
//         if (!isPresent) {
//             const exitAnimation = async () => {
//                 animate(
//                     "p",
//                     {
//                         color: checked ? "#6ee7b7" : "#fca5a5",
//                     },
//                     {
//                         ease: "easeIn",
//                         duration: 0.125,
//                     }
//                 );
//                 await animate(
//                     scope.current,
//                     {
//                         scale: 1.025,
//                     },
//                     {
//                         ease: "easeIn",
//                         duration: 0.125,
//                     }
//                 );
//
//                 await animate(
//                     scope.current,
//                     {
//                         opacity: 0,
//                         x: checked ? 24 : -24,
//                     },
//                     {
//                         delay: 0.75,
//                     }
//                 );
//                 safeToRemove();
//             };
//
//             exitAnimation();
//         }
//     }, [isPresent]);
//
//     return (
//         <motion.div
//             ref={scope}
//             layout
//             className="relative flex w-full items-center gap-3 rounded border border-zinc-700 bg-zinc-900 p-3"
//         >
//             <input
//                 type="checkbox"
//                 checked={checked}
//                 onChange={() => handleCheck(id)}
//                 className="size-4 accent-indigo-400"
//             />
//
//             <p
//                 className={`text-white transition-colors ${checked && "text-zinc-400"}`}
//             >
//                 {children}
//             </p>
//             <div className="ml-auto flex gap-1.5">
//                 <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
//                     <FiClock />
//                     <span>{time}</span>
//                 </div>
//                 <button
//                     onClick={() => removeElement(id)}
//                     className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200"
//                 >
//                     <FiTrash2 />
//                 </button>
//             </div>
//         </motion.div>
//     );
// };
