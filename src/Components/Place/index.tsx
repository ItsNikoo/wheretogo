import {useParams} from "react-router";
import {useSinglePlace} from "../../Hooks/useSinglePlace.ts";
import {Link} from "@mui/material";
import Redirection from "../Redirection";
import {motion} from "framer-motion";

export default function Place() {

    const {id} = useParams();
    const numericId = id ? parseInt(id) : NaN;
    const {data, isLoading} = useSinglePlace(numericId);

    if (isNaN(numericId)) {
        return <div>Неверный ID места</div>;
    }

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div className="flex flex-col min-h-[600px]">
            <Redirection/>
            <div
                className="mx-5 my-2">
                <motion.h1 className="text-3xl font-sans font-bold"
                           initial={{y: -15}}
                           animate={{y: 0}}
                           exit={{opacity: 0}}
                           transition={{duration: 0.5}}
                >{data?.title}</motion.h1>
                <motion.p className="py-3"
                          initial={{y: -25}}
                          animate={{y: 0}}
                          exit={{opacity: 0}}
                          transition={{duration: 0.5}}
                >{data?.address}</motion.p>
                <motion.p
                    initial={{y: -25}}
                    animate={{y: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                    className="pb-3 font-bold">Метро {data?.subway}</motion.p>
                <motion.div
                    initial={{y: -35}}
                    animate={{y: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                    className="mb-2">
                    <Link href={`${data?.site_url}`}>{data?.site_url}</Link>
                </motion.div>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
                    {data?.images.map((img, index) => (
                        <motion.img
                            whileHover={{scale: 1.05}}
                            key={index} className="" src={`${img.image}`} alt=""/>
                    ))}
                </div>
            </div>
        </div>
    )
}