<?php

//Disable the default WooCommerce stylesheet.
if ( version_compare( WOOCOMMERCE_VERSION, "2.1" ) >= 0 ) {
    add_filter( 'woocommerce_enqueue_styles', '__return_false' );
} else {
    define( 'WOOCOMMERCE_USE_CSS', false );
}

/**
 * WooCommerce Extra Feature
 * --------------------------
 *
 * Change number of related products on product page
 * Set your own value for 'posts_per_page'
 *
 */ 
function woo_related_products_limit() {
  global $product;
    
    $args = array(
        'post_type'             => 'product',
        'no_found_rows'         => 1,
        'posts_per_page'        => 4
    );
    return $args;
}
add_filter( 'woocommerce_related_products_args', 'woo_related_products_limit' );

// Redefine woocommerce_output_upsell_products()
function woocommerce_upsell_display($posts_per_page = 4, $columns = 4, $orderby = 'rand') {
    woocommerce_get_template('single-product/up-sells.php', array(
        'posts_per_page' => $posts_per_page,
        'orderby' => $orderby,
        'columns' => $columns
    ));
}

// Display 12 products per page.
add_filter('loop_shop_per_page', create_function('$cols', 'return 12;'), 20);


// Hook in
add_filter('woocommerce_checkout_fields', 'custom_override_checkout_fields');

/**
 * Overrides placeholder values for checkout fields
 * @param array all checkout fields
 * @return array checkout fields with overriden values
 */
function custom_override_checkout_fields($fields) {
    //billing fields
    $args_billing = array(
        'first_name' => 'First name',
        'last_name'  => 'Last name',
        'company'    => 'Company name',
        'address_1'  => 'Address',
        'email'      => 'Email',
        'phone'      => 'Phone'
    );
    
    //shipping fields
    $args_shipping = array(
        'first_name' => 'First name',
        'last_name'  => 'Last name',
        'company'    => 'Company name',
        'address_1'  => 'Address'
    );
    
    //override billing placeholder values
    foreach ($args_billing as $key => $value) {
        $fields["billing"]["billing_{$key}"]["placeholder"] = $value;
    }
    
    //override shipping placeholder values
    foreach ($args_shipping as $key => $value) {
        $fields["shipping"]["shipping_{$key}"]["placeholder"] = $value;
    }

    return $fields;
}

// Ads theme support for woocommerce 
add_theme_support('woocommerce');

if (!function_exists('woocommerce_content')){

    /**
     * Output WooCommerce content.
     *
     * This function is only used in the optional 'woocommerce.php' template
     * which people can add to their themes to add basic woocommerce support
     * without hooks or modifying core templates.
     *
     * @access public
     * @return void
     */
    function woocommerce_content() {

        if ( is_singular( 'product' ) ) {

            while ( have_posts() ) : the_post();

                woocommerce_get_template_part( 'content', 'single-product' );

            endwhile;

        } else {

            ?>

            <?php do_action( 'woocommerce_archive_description' ); ?>

            <?php if ( have_posts() ) : ?>

                <?php do_action('woocommerce_before_shop_loop'); ?>

                <?php woocommerce_product_loop_start(); ?>

                    <?php woocommerce_product_subcategories(); ?>

                    <?php while ( have_posts() ) : the_post(); ?>

                        <?php woocommerce_get_template_part( 'content', 'product' ); ?>

                    <?php endwhile; // end of the loop. ?>

                <?php woocommerce_product_loop_end(); ?>

                <?php do_action('woocommerce_after_shop_loop'); ?>

            <?php elseif ( ! woocommerce_product_subcategories( array( 'before' => woocommerce_product_loop_start( false ), 'after' => woocommerce_product_loop_end( false ) ) ) ) : ?>

                <?php woocommerce_get_template( 'loop/no-products-found.php' ); ?>

            <?php endif;

        }
    }
}

?>