import Link from "next/link";

type Props = {};
const NotFound = (props: Props) => {
    return (
        <div>
            <h1>
                NotFound
            </h1>
            <Link href={"/"}>Go HOME</Link>
        </div>
    );
};
export default NotFound;
