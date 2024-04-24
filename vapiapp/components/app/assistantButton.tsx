import {CALL_STATUS, useVapi} from "@/hooks/useVapi";
import {Loader2, Mic, Square} from "lucide-react";
import {Button} from "../ui/button";

const AssistantButton = ({
                             toggleCall,
                             callStatus,
                             audioLevel = 0,
                         }: Partial<ReturnType<typeof useVapi>>) => {
    const color =
        callStatus === CALL_STATUS.ACTIVE
            ? "#E16269"
            : callStatus === CALL_STATUS.LOADING
                ? "#F2B5A0"
                : "#A5D0A3";
    const iconStyle = {
      width: "4em",
      height: "4em",
    };

    const buttonStyle = {
        borderRadius: "50%",
        width: "15em",
        height: "15em",
        color: "white",
        border: "none",
        boxShadow: `1px 1px ${10 + audioLevel * 40}px ${
            audioLevel * 10
        }px ${color}`,
        backgroundColor:
            callStatus === CALL_STATUS.ACTIVE
                ? "#E16269"
                : callStatus === CALL_STATUS.LOADING
                    ? "#F2B5A0"
                    : "#A5D0A3",
        cursor: "pointer",
    };

    return (
        <Button
            style={buttonStyle}
            className={`transition ease-in-out ${
                callStatus === CALL_STATUS.ACTIVE
                    ? "bg-red-500 hover:bg-red-700"
                    : callStatus === CALL_STATUS.LOADING
                        ? "bg-orange-500 hover:bg-orange-700"
                        : "bg-green-500 hover:bg-green-700"
            } flex items-center justify-center`}
            onClick={toggleCall}
        >
            {callStatus === CALL_STATUS.ACTIVE ? (
                <Square style={iconStyle}/>
            ) : callStatus === CALL_STATUS.LOADING ? (
                <Loader2 style={iconStyle} className="animate-spin"/>
            ) : (
                <Mic style={iconStyle}/>
            )}
        </Button>
    );
};

export {AssistantButton};
