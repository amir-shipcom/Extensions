[{"Owner":"Rajkumar","Date":"2016-04-15T12:43:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to use babylonjs from a touch device.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tZoom in and zoom out by means of pinch works in a touch device (mobile/ tablet)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AMEB6%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AMEB6#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPanning works on pc by holding CTRL+Drag.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is the best way to implement panning on a touch device ? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tone touch drag would rotate the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill it be possible if I want to use 2 touches and drag to pan ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRajkumar\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-15T15:39:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfirst of all you can turn off touch to rotate by not calling camera.attachControl.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to add panning with 2 fingers_co_ I recommend adding an event handler for pointerDown event.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA good read_dd_ _lt_a href_eq__qt_https_dd_//blogs.msdn.microsoft.com/davrous/2015/08/10/unifying-touch-and-mouse-how-pointer-events-will-make-cross-browsers-touch-support-easy/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//blogs.msdn.microsoft.com/davrous/2015/08/10/unifying-touch-and-mouse-how-pointer-events-will-make-cross-browsers-touch-support-easy/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]