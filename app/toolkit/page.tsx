"use client"
import ReduxForm from "@/components/ReduxForm/ReduxForm";
import {appUseSelector} from "@/redux/store";

type Props = {};
const ToolkitPage = (props: Props) => {

    const userName = appUseSelector((state) => state.AuthReducer.value.name)

    return (
        <div>
            <h1>Toolkit Page</h1>
            <ReduxForm/>
            <h2>{userName}</h2>
        </div>
    );
};
export default ToolkitPage;
