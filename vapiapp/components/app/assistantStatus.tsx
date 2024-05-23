import { useState } from "react";

import {CALL_STATUS, useVapi} from "@/hooks/useVapi";

// @ts-ignore
const AssistantStatus = ({callStatus}: Partial<ReturnType<typeof useVapi>>) => {


	const color =
		callStatus === CALL_STATUS.ACTIVE
			? "#C27F54"
			: callStatus === CALL_STATUS.LOADING
				? "#E16269"
				: "#536FA6";

	const labelStyle = {
		marginTop: '1.5em',
		borderRadius: "1.2em",
		lineHeight: '2.4em',
		width: "80%",
		height: "2.4em",
		color: color,
		marginLeft: 'auto',
		marginRight: 'auto',
		boxShadow: `1px 1px 3px 0px ${color}, 0px 0px 6px 1px ${color} inset`,
		backgroundColor: 'transparent',
		opacity: 0.9,
	};


	const buttonStyleHovered = {
		boxShadow: `1px 1px ${10  * 40}px ${
			10
		}px ${color}, 0px 0px 52px 8px ${color} inset`,
	}

	return (
		// inactive loading active
		<div
			style={{ ...labelStyle }}
			className={`transition ease-in-out flex items-center justify-center`}
		>
			{callStatus === 'inactive' && 'Give it a try.'}
			{callStatus === 'loading' && 'One sec...'}
			{callStatus === 'active' && 'Press to stop.'}
		</div>
	);
};

export {AssistantStatus};
