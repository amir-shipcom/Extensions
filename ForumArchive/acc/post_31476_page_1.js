[{"Owner":"amorgan","Date":"2017-07-06T17:54:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnother 2.4 to 3.0 issue. I have assigned W_co_ A_co_ S_co_ D to a camera for movement ( _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#3H5RJW_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#3H5RJW_lt_/a_gt_ ). In my app I need to click before being able to use movement controls. I think I duplicated the issue in the playground linked_co_ but it also seems like it is a focus issue_co_ but I don_t_t have a 2.4 playground to compare it against (this appears to happen in 2.5 also).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust to be clear_co_ in my app_co_ using 2.4_co_ I can immediately press movement controls (W_co_ A_co_ S_co_ or D) and move_co_ but now with 3.0 I need to click before this is possible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tamorgan\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"haestflod","Date":"2017-07-06T18:25:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIn your app is your canvas focused?_lt_br /_gt__lt_br /_gt_\n\tI added_lt_br /_gt_\n\t`document.getElementById(_qt_renderCanvas_qt_).focus()_sm_`_lt_br /_gt__lt_br /_gt_\n\tand it works for me in the playground you have._lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#3H5RJW%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#3H5RJW#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amorgan","Date":"2017-07-06T18:34:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22760-haestflod/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22760_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22760-haestflod/_qt_ rel_eq__qt__qt__gt_@haestflod_lt_/a_gt_ _lt_/span_gt_Thanks for the response. That does resolve the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt makes sense that it would need focus_co_ is there documentation on this change anywhere? Or what resulted in this change?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tamorgan\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]