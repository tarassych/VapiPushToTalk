import { useState } from "react";

import {CALL_STATUS, useVapi} from "@/hooks/useVapi";
import {Loader2, Mic, Square} from "lucide-react";
import {Button} from "../ui/button";

const AssistantButton = ({
                             toggleCall,
                             callStatus,
                             audioLevel = 0,
                         }: Partial<ReturnType<typeof useVapi>>) => {

    const [isHovered, setIsHovered] = useState(false);

    const color =
        callStatus === CALL_STATUS.ACTIVE
            ? "#C27F54"
            : callStatus === CALL_STATUS.LOADING
                ? "#E16269"
                : "#536FA6";
    const iconStyle = {
        width: "4em",
        height: "4em",
        color: color,
        opacity: 0.75,
    };

    const buttonStyle = {
        borderRadius: "50%",
        width: "12em",
        height: "12em",
        color: "white",
        border: "none",
        boxShadow: `1px 1px ${10 + audioLevel * 40}px ${
            audioLevel * 10
        }px ${color}, 0px 0px 26px 4px ${color} inset`,
        backgroundColor: 'transparent',
        // backgroundColor:
        //     callStatus === CALL_STATUS.ACTIVE
        //         ? "#E16269"
        //         : callStatus === CALL_STATUS.LOADING
        //             ? "#F2B5A0"
        //             : "#A5D0A3",
        cursor: "pointer",
    };

    const buttonStyleHovered = {
        boxShadow: `1px 1px ${10 + audioLevel * 40}px ${
            audioLevel * 10
        }px ${color}, 0px 0px 52px 8px ${color} inset`,
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

            style={{ ...buttonStyle, ...(isHovered && buttonStyleHovered) }}
            // className={`transition ease-in-out ${
            //     callStatus === CALL_STATUS.ACTIVE
            //         ? "bg-red-500 hover:bg-red-700"
            //         : callStatus === CALL_STATUS.LOADING
            //             ? "bg-orange-500 hover:bg-orange-700"
            //             : "bg-green-500 hover:bg-green-700"
            // } flex items-center justify-center`}
            className={`transition ease-in-out flex items-center justify-center`}
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
