/**
 * External dependencies
 */
import { noop } from 'lodash';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { DOWN } from '@wordpress/keycodes';
import {
	Button,
	Dropdown,
	ToolbarGroup,
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl,
} from '@wordpress/components';

export function BlockAlignmentMatrixToolbar( props ) {
	const {
		label = __( 'Change matrix alignment' ),
		onChange = noop,
		value = 'center',
	} = props;

	const icon = <AlignmentMatrixControl.Icon value={ value } />;
	const className = 'block-editor-block-alignment-matrix-toolbar';

	return (
		<Dropdown
			position="bottom right"
			className={ className }
			popoverProps={ { className } }
			renderToggle={ ( { onToggle, isOpen } ) => {
				const openOnArrowDown = ( event ) => {
					if ( ! isOpen && event.keyCode === DOWN ) {
						event.preventDefault();
						event.stopPropagation();
						onToggle();
					}
				};

				return (
					<ToolbarGroup>
						<Button
							onClick={ onToggle }
							aria-haspopup="true"
							aria-expanded={ isOpen }
							onKeyDown={ openOnArrowDown }
							label={ label }
							icon={ icon }
							showTooltip
						/>
					</ToolbarGroup>
				);
			} }
			renderContent={ () => (
				<AlignmentMatrixControl
					hasFocusBorder={ false }
					onChange={ onChange }
					value={ value }
				/>
			) }
		/>
	);
}

export default BlockAlignmentMatrixToolbar;
