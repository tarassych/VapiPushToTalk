"use client";

import {useVapi} from "../../hooks/useVapi";
import {AssistantButton} from "./assistantButton";
import {AssistantStatus} from "./assistantStatus";
import {Display} from "./display";

function Assistant() {
    const {toggleCall, callStatus, audioLevel} = useVapi();
    // @ts-ignore
    return (
        <>
            <div className="chat-history">
                <Display/>
            </div>
            <div className="user-input">
                <AssistantButton
                    audioLevel={audioLevel}
                    callStatus={callStatus}
                    toggleCall={toggleCall}
                ></AssistantButton>
                <AssistantStatus callStatus={callStatus}/>
            </div>
        </>
    );
}

export {Assistant};
