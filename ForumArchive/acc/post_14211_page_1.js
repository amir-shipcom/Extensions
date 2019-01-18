[{"Owner":"root77","Date":"2015-05-01T02:05:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello. I_t_ve been experimenting and enjoying Babylon.JS_sm_ thanks for all the hard work on the library._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve been trying to blend loaded model bone animations and run into issues._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The simplest case would be idle-&gt_sm_walk-&gt_sm_run loops. This has been mentioned a while back (pre v2) _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/3559-playing-multiple-animations/_qt__gt_here_lt_/a_gt__co_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/9144-controlling-specific-bones/?hl_eq_bones_qt__gt_here_lt_/a_gt__co_ and _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12678-transitioning-between-animations/?hl_eq_bones_qt__gt_here_lt_/a_gt_. While you can call custom animations on each bone (ie_co_ arms get one frame set_co_ legs get another)_co_ this doesn_t_t help with easing between animations that use the same bone. Another suggestion was storing the combined animations in the model_co_ but that doesn_t_t allow for smooth transitions (or permutes up very quickly)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As a learning experiment_co_ I dove into the code. _lt_a href_eq__qt_http_dd_//codepen.io/anon/pen/GJJvxo?editors_eq_001_qt_ rel_eq__qt_external nofollow_qt__gt_Here_t_s a demo of my results._lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The babylon.js it references is a hack experiment where I do the following_dd__lt_/p_gt__lt_p_gt_1) allow multiple animations per target by not calling stopAnimation(target) on beginAnimation_lt_/p_gt__lt_p_gt_2) on every call to a scene_t_s animation_co_ pass along a cache_lt_/p_gt__lt_p_gt_3) on every animation._interpolate() where datatype _eq__eq_ Animation.ANIMATIONTYPE_MATRIX_co_ write the matrix to the cache_lt_/p_gt__lt_p_gt_4) if the animation._interpolate() has a cache hit_co_ invoke the otherwise unused matrixInterpolateFunction() with a factor value to interpolate between the 2 matrix_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The result plays the animations_co_ mostly. The result is flipped_co_ both in normals and on the z-axis_co_ which I don_t_t understand (my grasp of matrix math is not great)._lt_/p_gt__lt_p_gt_Most of the work revolved around getting data passed between the otherwise isolated animation instances so they could be aware of the other animation to blend. This hack also doesn_t_t handle an arbitrary number of animations to merge or an easy way to work with them_co_ since calls to stop use the target as the common factor._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What is the best way to approach this? Is there something I missed in the library? Or how could I implement this correctly for Babylon.js?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-05-01T22:31:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Your approach appears to be working reasonably well.  We need a function in BJS to blend animations more smoothly - especially for bones transforms.  But I think I_t_ll try and use your _qt_Easing_qt_ function on characters I have to build in a week or so.  Again_co_ it appears to be a good first approach._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As for the _qt_flipping_qt_ of axis_t_ and normals_co_ this depends on the result of exporting from whatever 3D package you built your skeleton and animations in.  Often_co_ it is a result of not freezing your transforms on the bones before you animate_co_ and/or using different binding poses from one animation to another.  But I would start troubleshooting by freezing your transforms on the bones and meshes before you bind to the mesh_co_ and then animate.  That should correct any flipping problems - unless there_t_s something else in your pipeline I_t_m unaware of._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for this example.  Hopefully I_t_ll apply this to a scene soon_co_ and see what results I find._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-02T05:58:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWOW!  _lt_a href_eq__qt_http_dd_//www.imdb.com/name/nm0062616/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.imdb.com/name/nm0062616/_lt_/a_gt_  Check it out!  A friggin_t_ superstar... hangin_t_ out right here with folks like me! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHoly cow_co_ db!  Nice job!  Thanks for entertaining us!  Unreal.  I_t_m starstruck!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI once speculated that you were a Hollywood-type superstar just because of where you lived and your mocap experience.  But_co_ I thought I was just kidding.  _lt_img alt_eq__qt__dd_o_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWelcome to the forum_co_ Root77!  Interesting project you have going.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWanna see dbawel REALLY blow your mind?  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/3083-spaces-world-parent-pivot-local/page-2#entry63384_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/3083-spaces-world-parent-pivot-local/page-2#entry63384_lt_/a_gt_  ... (and the next 2-50 posts_co_ too).  I_t_m starting to think dbawel is a cyborg_co_ and a well-programmed one.  _lt_img alt_eq__qt__sm_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-11-10T18:56:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow if I could only separate my head from my ass.... You_t_re the superstar on this forum_co_ my friend.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-11-10T19:19:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCould be a risky operation_co_ since you just replied to a 2 1/2 year old topic._lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-10T22:15:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJeff_co_ you always measure things.  12 pages here_co_ 2.5 years there.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI got this stuff called Lemon Haze... pretty good-at making one lose total track of time and space.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYa know_co_ Bohm once talked about time and space... as enfolding.  His example was... put a tiny droplet of ink into a bucket of clear_co_ viscous bison snot.  Put the droplet deep-into the snot with a long eyedropper_co_ and place it near the side of the bucket.  Now put a stirring stick on a drill in the center of the snot bucket_co_ and start stirring/spinning.  The ink droplet will get longer and longer_co_ and eventually disappear_co_ apparently mixed-in with the snot (enfolded).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow reverse the drill_co_ spin the snot in the opposite direction_co_ and after the SAME amount of rotations_co_ the ink dot will re-appear (unfold)_co_ completely unscathed.  Ok_co_ perhaps some MINOR scathing_co_ but nothing Fox-newsworthy.  Bohm claimed that this is how space and time worked_co_ as well.  Neither are what they might appear to be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow is this information any bit apropos to measuring things?  I have no idea.  I guess I_t_d have to say... the enfolded ink droplet SEEMS FAR AWAY from its starting point_co_ and appears to no longer have any structure in _qt_the now_qt_ Yet_co_ its enfolded portions are in concentric rings right beside each other_co_ and completely sound/intact.  It is only enfolding and perspectives-from-edges... that makes time and space APPEAR to exist at all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy point is... Bohm had some Lemon Haze when he thought-up this idea.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  heh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-11-11T22:51:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_ I tried some of that Lemon Haze_co_ and this is what happened!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_extraction.gif_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_506_qt_ src_eq__qt_https_dd_//palmer-jc.github.io/scenes/head_extraction/extraction.gif_qt_ width_eq__qt_490_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tActually_co_ my smoking days have long since passed.  It was just beer_co_ and a whiff of Lemon scented furniture polish.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt__co_ you now have an example to follow_lt_/span_gt__lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_.  FYI_co_ the scene to make the GIF is _lt_a href_eq__qt_https_dd_//palmer-jc.github.io/scenes/head_extraction/_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.  Be sure to size / adjust the character to fit in the window_co_ as well as size the window to the desired GIF size.  Play first to check without checking _t_Make GIF_t_ checkbox.  The first frame takes about 10 seconds.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]