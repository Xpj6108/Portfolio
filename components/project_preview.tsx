import Image from "next/image";
import Link from "next/link";

const   ProjectPreview = () => {

    const title: string = "Data Analytics App";
    const desc: string = "Processes data in nibba";
    const linkURL: string = "/data_analytics";

    return (
        <div className="flex gap-6">
            <div className="relative w-28 h-20">
                <Image src={"/headphones.jpg"} alt="headphones" fill/>
            </div>
            <div className="my-auto">
                <Link href={linkURL}>
                    <a className="font-semibold underline hover:text-indigo-600">
                        {title}
                    </a>
                </Link>
                <div>{desc}</div>
            </div>
        </div>
    );
};

export default  ProjectPreview;