[{"Owner":"fateriddle","Date":"2018-11-14T07:14:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there any plan to extract a light weight core of babylon.js for mobile? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCurrently_co_ I downloaded the babylon.js file from mdn and size is around 2.1 M. That_t_s way too big for me to run some simple game on smart phone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan we extract a lighter version that only contains the core functionalities? And maybe then add everything else back onto the core using plugins / npm packages?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI build a game to play on phone_co_ and share it (qr code) internally in our company_co_ the performance is not impressive to say the least_co_ and we are considering switching to something lighter right now. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I actually like babylon.js so it feels like a shame. Just asking.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-11-14T09:20:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can build your own custom version. The only way I could do it I will describe below. Others may know alternatives\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou build from a local version of the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_BabylonJS/Babylon.js github repository_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRead _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_start_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_start_lt_/a_gt_ and rather than creating your own fork and cloning from that just clone directly to your local computer. Before doing the build part read _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/workloads_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/workloads_lt_/a_gt_ to see which workloads to select and place in the `buildConfigurations` and set the `currentConfig` to this. The do the build part with gulp --max-old-space-size_eq_8192 and you build of javascript files will be in the dist folder.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-14T15:44:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tv4.0 will let you treeshake the code in order to get only what you need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo far with current version you can rely on workloads (as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ mentioned )to build your own version with only what you need\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso 2.1M is without gzip so I highly encourage you to turn on gzip on your server and then the entire library is around 400K\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you mean by _qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_the performance is not impressive_lt_span_gt_ _lt_/span_gt__lt_/span_gt__qt_? Is that related to size of are you facing perf issues (_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/optimizing_your_scene_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/optimizing_your_scene_lt_/a_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]