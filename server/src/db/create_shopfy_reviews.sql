CREATE TABLE IF NOT EXISTS `shopify_app_reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopify_domain` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `app_slug` varchar(255) NOT NULL,
  `star_rating` int(11) DEFAULT NULL,
  `previous_star_rating` int(11) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
