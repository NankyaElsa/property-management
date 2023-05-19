CREATE DATABASE IF NOT EXISTS `property_management` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `property_management`;

CREATE TABLE IF NOT EXISTS `access_levels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

INSERT INTO `access_levels` (`id`, `name`, `description`) VALUES
(1, 'Administrator', 'Administrator'),
(2, 'Landlord', 'Landlord');
(3, 'Tenant', 'Tenant');


CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `access_level_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;


ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`access_level_id`) REFERENCES `access_levels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE IF NOT EXISTS `properties` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` text NOT NULL,
    `price` decimal(10,2) NOT NULL,
    `available_rooms` int(11) NOT NULL,
    `number_of_bathrooms` int(11) NOT NULL,
    `address` varchar(255) NOT NULL,
    `image` varchar(255) NOT NULL,
    `type` varchar(255) NOT NULL,
    `created` datetime NOT NULL,
    `modified` datetime NOT NULL,
    `owner_id` int(11) NOT NULL,
    `city` varchar(255) NOT NULL,
    `approved` tinyint(1) NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

    ALTER TABLE `properties`
    ADD CONSTRAINT `properties_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;


CREATE TABLE IF NOT EXISTS `lease_request` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `property_id` int(11) NOT NULL,
    `tenant_id` int(11) NOT NULL,
    `landlord_id` int(11) NOT NULL,
    `created` datetime NOT NULL,
    `modified` datetime NOT NULL,
    `status` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

    ALTER TABLE `lease_request`
    ADD CONSTRAINT `lease_request_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `properties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    ADD CONSTRAINT `lease_request_ibfk_2` FOREIGN KEY (`tenant_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    ADD CONSTRAINT `lease_request_ibfk_3` FOREIGN KEY (`landlord_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE IF NOT EXISTS `messages` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `sender_id` int(11) NOT NULL,
    `receiver_id` int(11) NOT NULL,
    `message` text NOT NULL,
    `created` datetime NOT NULL,
    `modified` datetime NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

    ALTER TABLE `messages`
    ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;