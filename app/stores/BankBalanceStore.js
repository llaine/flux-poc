/**
 * Les stores dans Flux, conservent l'état de l'app et "s'abonnent" aux dispatcher.
 * Ainsi, pour chaque action qui est dispatché tout les stores sont invoqués et seul ceux
 * concernant l'action vont changer leur etat et emit un evenement pour que les views soient re-render.
 */


