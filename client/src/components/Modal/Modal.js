import React, { useCallback, useEffect } from 'react';
import "./Modal.css";

import { IoClose } from "react-icons/io5";

export default function Modal(props) {
	const handleEscape = useCallback((evt) => {
		if(evt.key === "Escape") {
			props.hideModal();
		}
	}, [props]);

	useEffect(() => {
		window.addEventListener("keydown", handleEscape);
		return () => {
			window.removeEventListener("keydown", handleEscape);
		};
	}, [handleEscape, props]);

	return (
		<div className='Modal'>
			<div onClick={props.hideModal} className="Modal_Backdrop"></div>
			<div className="Modal_Content">
				{props.hideModal && <IoClose className="Modal_Close_Icon" onClick={props.hideModal} />}
				{props.children}
			</div>
		</div>
	)
}