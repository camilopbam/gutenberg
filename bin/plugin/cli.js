#!/usr/bin/env node

/**
 * External dependencies
 */
const program = require( 'commander' );

/**
 * Internal dependencies
 */
const { releaseRC, releaseStable } = require( './commands/release' );
const { prepublishNpmStablePackages } = require( './commands/packages' );

program
	.command( 'release-plugin-rc' )
	.alias( 'rc' )
	.description(
		'Release an RC version of the plugin (supports only rc.1 for now)'
	)
	.action( releaseRC );

program
	.command( 'release-plugin-stable' )
	.alias( 'stable' )
	.description( 'Release a stable version of the plugin' )
	.action( releaseStable );

program
	.command( 'prepublish-packages-stable' )
	.alias( 'npm-stable' )
	.description(
		'Prepublish to npm steps for the next stable version of WordPress packages'
	)
	.action( prepublishNpmStablePackages );

program.parse( process.argv );
