<?php
/*
 * Plugin Name: YouTube-360-Embed
 * Version: 1.0
 * Plugin URI: http://github.com/wouterla/YouTube-360-Embed
 * Description: Plugin to easily embed youtube 360 video's.
 * Author: Wouter Lagerweij
 * Author URI: http://www.lagerweij.com/
 * Requires at least: 4.0
 * Tested up to: 4.0
 *
 * Text Domain: youtube-360-embed
 * Domain Path: /lang/
 *
 * @package WordPress
 * @author Wouter Lagerweij
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Load plugin class files
require_once( 'class-youtube-360-embed.php' );

/**
 * Returns the main instance of 360-YouTube-Embed to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object YouTube-360-Embed
 */
function YouTube360Embed () {
	$instance = YouTube360Embed::instance( __FILE__, '1.0.0' );

	return $instance;
}

YouTube360Embed();
