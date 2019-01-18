[{"Owner":"kavsnzre","Date":"2016-06-05T15:04:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone!_lt_br /_gt__lt_br /_gt_\n\tI_t_m trying to understand how to use physics engine in Babylon. I understood the basical instructions and all about this is clear._lt_br /_gt_\n\tBut I_t_ve a serious problem that I_t_ll explain with an example._lt_br /_gt__lt_br /_gt_\n\tI_t_ve a cube that falls onto a plane having a fixed angular velocity_co_ here is the playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UQNWL_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UQNWL_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tObviously_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tif I set the frictions with very large values then the box will very fastly loose its angular velocty when it_t_ll fall onto the plane\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tif I set both the frictions values equals to 0 then the box will never stop and will rotate onto the plane forever...\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tBut...what if I want that the cube will stop in 5.76746 seconds? In this case_co_ which values I have to put into the _qt_friction_qt_ variables? Maybe I_t_ve the answer_dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tI have to know the physical equations used by cannon.js_co_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tthen I_t_ve to solve my physics  exercise_co_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tand then I_t_ve to put the correct values into the _qt_friction_qt_ variables.\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\tIf I_t_m right_co_ where can I find the EXACT equations used by cannon.js? Is there a sort of manual? Or I_t_ve to deduce them from the code?_lt_br /_gt_\n\tIs there another way to solve the problem? _lt_br /_gt__lt_br /_gt_\n\tThank you so much!_lt_br /_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-06-05T18:15:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWelcome kavsnzre as a non expert in cannon physics I can suggest only trial and error but am sure the experts will give you a better answer. To help the experts answer your question would you put the relevant parts of your code into a playground. This way the lovely people on the forum can make changes and suggestions and be even more helpful.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kavsnzre","Date":"2016-06-05T20:16:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHy JohnK_co__lt_br /_gt_\n\tthak you so much for the tips!_lt_br /_gt__lt_br /_gt_\n\tI created the playground and edited my question. Is it ok now?_lt_br /_gt__lt_br /_gt_\n\tThank you again_co_ best regards.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-06-06T04:40:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22086-kavsnzre/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22086_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22086-kavsnzre/_qt_ rel_eq__qt__qt__gt_@kavsnzre_lt_/a_gt__co_ welcome to the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   Here_t_s some links for the third party Cannon.js physics engine.  Hope this helps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/schteppe/cannon.js/tree/master/src/equations_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/schteppe/cannon.js/tree/master/src/equations_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/FrictionEquation.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//schteppe.github.io/cannon.js/docs/classes/FrictionEquation.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_You might see a method in mainline Cannon.js code_dd_  this_lt_/span_gt_._lt_span_gt_updateFriction_lt_/span_gt_(timeStep)_sm_ and it is likely related to\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/babylon.physicsEngine.js#L99_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/babylon.physicsEngine.js#L99_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBJS interfaces with the third party CannonJS engine... via 3-4 various objects.  They can all be seen here...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/src/Physics_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/src/Physics_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I imagine the _lt_em_gt_timestep_lt_/em_gt_ is related to frames per second and thus affected by platform performance_co_ but that_t_s way over my head.   Just for fun_co_ I made _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UQNWL%231_qt_ rel_eq__qt_external nofollow_qt__gt_another playground where spin lasts about 5 secs_lt_/a_gt_ (trial and error method as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ mentioned).  Your spin duration may vary.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5907_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/_qt_ rel_eq__qt__qt__gt_@schteppe_lt_/a_gt_ DOES have a forum membership here_co_ but it is unclear how often he visits.  Good luck_co_ keep us posted.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kavsnzre","Date":"2016-06-06T09:32:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Thank you for your answer!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll keep you posted._lt_br /_gt__lt_br /_gt_\n\tBye.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"schteppe","Date":"2016-06-06T11:14:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the mention _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_! I don_t_t hang out here every day but sometimes it happens _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22086-kavsnzre/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22086_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22086-kavsnzre/_qt_ rel_eq__qt__qt__gt_@kavsnzre_lt_/a_gt_ you can read about the equations in this PDF. _lt_a href_eq__qt_http_dd_//www8.cs.umu.se/kurser/5DV058/VT15/lectures/SPOOKlabnotes.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www8.cs.umu.se/kurser/5DV058/VT15/lectures/SPOOKlabnotes.pdf_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hate to break it to you_co_ but the equations used in game physics are not exact. They usually use iterative solvers that can solve the equations more and more precise depending on how much CPU power you are willing to pay. Also_co_ the equation are only solvable _qt_in one direction_qt__co_ you can_t_t really input a time value and expect the engine to give you the friction constant. It_t_s optimized to only output game object transforms.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat you CAN do is run the simulation many times until you find a value for the friction that matches your time value.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this helps _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kavsnzre","Date":"2016-06-06T13:09:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tVery clear! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tThank you very much _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5907_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/_qt_ rel_eq__qt__qt__gt_@schteppe_lt_/a_gt_!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]