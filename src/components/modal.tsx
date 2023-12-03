import { ReactNode } from 'react';

type ModalProps = {
	children: ReactNode;
	onCancel: () => void;
};

export function Modal({children, onCancel}: ModalProps) {
	return (
		<div className='ModalOverlay'>
			<div className='Modal'>
				<div className='ModalContents'>
					{children}
				</div>
				<button className='ModalButton' onClick={onCancel}>X</button>
			</div>
		</div>
	);
}