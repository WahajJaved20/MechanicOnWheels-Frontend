import Backdrop from "@mui/material/Backdrop";
import { Bars } from "react-loader-spinner";
import {useLoading} from "../Contexts/loadingContext";

export default function LoadingBackdrop() {
  const {isLoading} = useLoading();
  return (
    isLoading && 
    <div>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 10 })}
        open={true}
      >
        <Bars
          height="80"
          width="80"
          radius="9"
          color="#ff844b"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </Backdrop>
    </div>
  );
}
