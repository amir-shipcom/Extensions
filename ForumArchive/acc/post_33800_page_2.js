[{"Owner":"thrice","Date":"2017-11-30T01:46:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso here is screenshot of profile_co_ all I did was pointer over a few cards to trigger hover states\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a1f5fa340a0b_Screenshot2017-11-2918_30_40.png.96841310cb254f5401b1c642b7b79267.png_qt_ data-fileid_eq__qt_16041_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16041_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a1f5fa3c9278_Screenshot2017-11-2918_30_40.thumb.png.8a8b81960966020a738f09f8ab2fe2f4.png_qt_ alt_eq__qt_5a1f5fa3c9278_Screenshot2017-11-2918_30_40.thumb.png.8a8b81960966020a738f09f8ab2fe2f4.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-30T01:50:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso in the comments of my profiling I did a count of materials .isFrozen_co_ because that is a new property / optimization I hadn_t_t seen before - Thought maybe it was recently added and all materials were frozen before by default. Anyways_co_ I just did a \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__.invokeMap(play_game.scene.babylon.materials_co_ _t_freeze_t_)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\ton all 600+ materials_co_ and while it looks like frame rate bumped up SLIGHTLY (seems to be hovering around low 50_t_s now)_co_ it is still much lower than the consistent 60fps when nothing is going on_co_ that I see with the older RC version\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-30T02:12:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSharing a repro would really help as your perf or hit analysis do not help that much unfortunately.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlodash on top of it is definitely making it even slower. Is the FPS increasing a lot if you reduce your canvas size ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-30T10:18:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tFrom the shared profiling I can_t_t seem to find a problem. You even have 3 seconds idle time... Is there a different in the profiling between earlier versions to the current version?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-30T12:48:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_196970_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1512007974_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSharing a repro would really help as your perf or hit analysis do not help that much unfortunately.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tlodash on top of it is definitely making it even slower. Is the FPS increasing a lot if you reduce your canvas size ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m not sure how lodash would make anything slower_co_ its just a (heavily optimized)_co_ utility library_co_ does not affect performance. I_t_m running those calls from the console_co_ not like it_t_s part of the render loop or anything.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-- Regarding the canvas size_dd_ Nope I tried that actually. Shrunk it to pretty much phone size_co_ seemed to run about the same\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-30T12:52:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_197013_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1512037136_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFrom the shared profiling I can_t_t seem to find a problem. You even have 3 seconds idle time... Is there a different in the profiling between earlier versions to the current version?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell since the instrumentation stuff was added after the current version_co_ it_t_s hard to compare apples to apples. I_t_m going to go through and do the lodash counts on older version right now though to see if there are any discrepancies. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh also_co_ may be worth mentioning that I_t_m running my app with renderEvenWhileInBackground _eq_ false_co_ I_t_m not sure if that has any affect on the idle time shown in the profiler or not (I clicked to debugger tools _co_which freezes the app_co_ started profile_co_ clicked back into app to resume_co_ and then triggered some hover states and what not)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-30T13:16:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor comparison_co_ here are the counts from the _lt_strong_gt_60 FPS 3.1.0-alpha3.5_lt_/strong_gt_ version_dd_ - Summary_dd_ there are actually slightly fewer meshes/materials active in the newer version - but also_co_ in the newer version_co_ you_t_ll note that there are 487 meshes enabled_co_ versus 616 in old version. So if anything you would think it would be rendering faster.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe one and ONLY count that appears higher in the newer version_co_ is count of undefined meshes in the _activeMeshes.data (23 versus 11)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ this furthers my belief that some change in the library itself is causing the slower performance. \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__.groupBy(_.map(play_game.scene.babylon.meshes_co_ _t_isWorldMatrixFrozen_t_))\nObject {false_dd_ Array[466]_co_ true_dd_ Array[1443]}\n\n_.groupBy(_.invokeMap(play_game.scene.babylon.meshes_co_ _t_isEnabled_t_))\nObject {true_dd_ Array[616]_co_ false_dd_ Array[1293]}\n\n_.groupBy(_.map(play_game.scene.babylon.meshes_co_ _t_areNormalsFrozen_t_))\nObject {false_dd_ Array[1313]_co_ undefined_dd_ Array[596]}\n\n_.groupBy(_.map(_.compact(play_game.scene.babylon._activeMeshes.data)_co_ _t_areNormalsFrozen_t_))\nObject {false_dd_ Array[91]_co_ undefined_dd_ Array[154]}\n\nplay_game.scene.babylon._activeMeshes.data.length\n256\n\n_.filter(play_game.scene.babylon._activeMeshes.data_co_ _.isUndefined).length\n11\n\n_.groupBy(_.invokeMap(_.compact(play_game.scene.babylon._activeMeshes.data)_co_ _t_getClassName_t_))_sm_\nObject {Mesh_dd_ Array[91]_co_ InstancedMesh_dd_ Array[154]}\n\n_.groupBy(_.invokeMap(_.compact(play_game.scene.babylon.meshes)_co_ _t_getClassName_t_))\nObject {Mesh_dd_ Array[1313]_co_ InstancedMesh_dd_ Array[596]}\n\nplay_game.scene.babylon.materials.length\n712\n\n_.groupBy(_.invokeMap(_.compact(play_game.scene.babylon.materials)_co_ _t_getClassName_t_))\nObject {ShaderMaterial_dd_ Array[7]_co_ GradientMaterial_dd_ Array[1]_co_ StandardMaterial_dd_ Array[702]_co_ PBRMaterial_dd_ Array[2]}\n\n_.groupBy(play_game.scene.babylon.materials_co_ _t_isFrozen_t_)\nObject {false_dd_ Array[712]}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-30T18:32:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you compare both Chrome profiling session ? This would help narrowing down the issue. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-12-01T05:07:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tProfile from alpha version - I_t_m not entirely sure what to make of it though. Seems like cpu issue if I_t_m reading it right_co_ but still unsure as to why. And also if I_t_m reading it right_co_ render % seems lower_co_ which would lead me to believe it should actually be performing better. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16062_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a20e370bd111_Screenshot2017-11-3006_29_12.png.c47dfdd4657b66678ccca0ebcc9f76e5.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a20e3715059b_Screenshot2017-11-3006_29_12.thumb.png.12ac11e9c81451e4b7af3e3c471dd9ba.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16062_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a20e3715059b_Screenshot2017-11-3006_29_12.thumb.png.12ac11e9c81451e4b7af3e3c471dd9ba.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-12-01T05:30:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs the fps does not change with resize it usually a proof that the bottleneck is on the cpu side.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you share your perf analysis (ctrl+s from the analysis result page to store in json) one in the old version and one in the new version ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis way we could all dig in the comparison.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-12-17T19:57:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_197150_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1512106211_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 11/30/2017 at 10_dd_30 PM_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAs the fps does not change with resize it usually a proof that the bottleneck is on the cpu side.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tCould you share your perf analysis (ctrl+s from the analysis result page to store in json) one in the old version and one in the new version ?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis way we could all dig in the comparison.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThx.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s a good point. I will try to find time to switch back to newer version to get the output in next couple of days.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the meantime_co_ I may or may not have noticed something that could be helpful in terms of reproducing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe sponza demo scene _lt_a href_eq__qt_https_dd_//www.babylonjs.com/demos/sponza/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs.com/demos/sponza/_lt_/a_gt_ _co_ is running for me at &lt_sm_ 10 FPS consistently. I don_t_t ever recall seeing it that low in the past_co_ perhaps it is suffering from the same issue(s)? Also_co_ the resize behavior you pointed out is consistent with that scene as well_co_ if I shrink the window down super small_co_ FPS not changing. Consistent &lt_sm_ 10 fps\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-18T21:45:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you run a profiler on your browser to see where the perf is going?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-12-18T22:00:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_198987_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513633525_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCan you run a profiler on your browser to see where the perf is going?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOn the sponza scene? sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.dropbox.com/s/ge6mc8olk4nsly8/sponza_lte_10fps_Profile-20171218T145557?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/ge6mc8olk4nsly8/sponza_lte_10fps_Profile-20171218T145557?dl_eq__lt_/a_gt_1\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-18T22:10:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you share screenshots?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-12-18T22:24:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_198992_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513635009_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCan you share screenshots?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOf the profile output? Sure but I_t_m no expert at interpreting the output_co_ and not entirely sure what normal looks like. Here are some shots of what appears to be relevant. One thing that does seem curious is on the line graph_co_ there does not appear to be a line for GPU memory as far as I can tell. Also the warning on the animation frame fired / recurring handler. -- it does seem consistent with the behavior I am seeing in my electron app (mostly doing nothing_co_ and fps is &lt_sm_ 60_co_ well in this case &lt_sm_ 10 fps). Also worth noting that when I had my app upgraded to the newest version_co_ I ran it on my laptop (new macbook pro)_co_ to make sure it wasn_t_t a computer thing/setting. Performance was consistent with my current computer (2015 iMac).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-- And I just ran sponza on my macbook pro also to make sure_co_ performance is &lt_sm_ 10 FPS there as well. Are you guys not seeing &lt_sm_ 10 FPS ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16306_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383eee6be04_Screenshot2017-12-1815_12_57.png.bd1a7d471996eb94d7f6177abcc70834.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a383eef0541e_Screenshot2017-12-1815_12_57.thumb.png.461455587429ac6dedf659189896f4f3.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16306_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383eef0541e_Screenshot2017-12-1815_12_57.thumb.png.461455587429ac6dedf659189896f4f3.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16307_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383ef98b5d8_Screenshot2017-12-1815_13_21.png.87d3c7199bee587c9f7df6f5cba1cbde.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a383efa2a1f5_Screenshot2017-12-1815_13_21.thumb.png.ea9f91c95193f042542a7ec49b7df2d5.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16307_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383efa2a1f5_Screenshot2017-12-1815_13_21.thumb.png.ea9f91c95193f042542a7ec49b7df2d5.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16308_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383f07e4248_Screenshot2017-12-1815_14_03.png.ae7c57d13562917f68872940120691b6.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a383f082ed6d_Screenshot2017-12-1815_14_03.thumb.png.c1176a05f0baeb4bcb29859a83808289.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16308_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383f082ed6d_Screenshot2017-12-1815_14_03.thumb.png.c1176a05f0baeb4bcb29859a83808289.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383f1cc4cf6_Screenshot2017-12-1815_15_34.png.dbaf0d70e36283b68bd3d592428b05db.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a383f1d4e667_Screenshot2017-12-1815_15_34.thumb.png.fce2407f328f2ace6d2fdc0451d5c84f.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16310_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383f1d4e667_Screenshot2017-12-1815_15_34.thumb.png.fce2407f328f2ace6d2fdc0451d5c84f.png_qt_ /_gt__lt_/a_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16309_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383f12b672f_Screenshot2017-12-1815_14_36.png.25d4672af33f55940e408d173c994a2d.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a383f12cb76d_Screenshot2017-12-1815_14_36.thumb.png.d986d411adc67a1d318575c0211c9198.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16309_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a383f12cb76d_Screenshot2017-12-1815_14_36.thumb.png.d986d411adc67a1d318575c0211c9198.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-12-19T02:45:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ im in the same boat and i dont know how to really interpret the profiler to be able to pin point what the problem is. All i can say for sure is_co_ i had the space shooter demo going (you saw it). That demo is using 3.1 alpha. That demo is use Cannon Physics for EVERYTHING... all the player_co_ enymnet and laser bolt movements_co_ all the the collision detection_co_ basically the whole game. But when i updated to 3.1 beta (or greater). All the stuff using cannon physics is just dog slow. Like my asteroids falling is just WAY slow_co_ collision are not happening (some are_co_ but most not). It just really funky... I will put up another demo of the same game but using the latest babylonjs... Maybe you can tell with the profiler.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt does not give any errors is just kinda funky...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the first _lt_a href_eq__qt_http_dd_//mackey.cloud/games/space/_qt_ rel_eq__qt_external nofollow_qt__gt_Space Shooter 3.1 Alpha_lt_/a_gt_ works great...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow here is same game with updated BabylonJS_dd_ _lt_a href_eq__qt_http_dd_//mackey.cloud/games/space2/_qt_ rel_eq__qt_external nofollow_qt__gt_Space Shooter 3.2 Alpha_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease see if you can tell what is going on... Or anyone else who might have some insight _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2017-12-19T09:52:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI read something this morning _dd_ _lt_a href_eq__qt_https_dd_//github.com/pissang/qtek-model-viewer_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/pissang/qtek-model-viewer_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I decided to test it with _qt_ Adam head _qt_ ( _lt_a href_eq__qt_https_dd_//sketchfab.com/features/gltf_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//sketchfab.com/features/gltf_lt_/a_gt_) on _lt_a href_eq__qt_https_dd_//pissang.github.io/qtek-model-viewer/editor/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pissang.github.io/qtek-model-viewer/editor/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_5a38dfb7d7c86_Capturedecran2017-12-19a10_36_52.png.01534e3edc53b2b2bcb28f37f247e2a4.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16316_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a38dfb7d7c86_Capturedecran2017-12-19a10_36_52.png.01534e3edc53b2b2bcb28f37f247e2a4.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI saw that it run with postprocesses perfectly on Sketchfab and QTEK-model-viewer but not on Babylon sandbox WITHOUT postprocesses ... (4fps _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I inspected_co_ I saw that response of GPU is 10x bigger on babylon than QTEK-model-viewer ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t• QTEK-model-viewer (with occlusion and glow posprocesses)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_5a38e3999c980_Capturedecran2017-12-19a10_58_04.png.cc1ac3be6141280266a2ef9ed8dd401e.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16318_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a38e3999c980_Capturedecran2017-12-19a10_58_04.png.cc1ac3be6141280266a2ef9ed8dd401e.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t• Babylon sandbox (without postprocesses)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_5a38e39948b60_Capturedecran2017-12-19a11_00_07.png.70aa69a5f7c96a58bc65914b581f89fd.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16317_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a38e39948b60_Capturedecran2017-12-19a11_00_07.png.70aa69a5f7c96a58bc65914b581f89fd.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ maybe you can easily test it with this model as a reference to find where our favorite engine drop _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this post will help you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\thave a nice day_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPierre. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt__lt_strong_gt_EDIT _dd_ _lt_/strong_gt__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTested with battle _qt_ damaged helmet _qt_ _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t• QTEK-model-viewer ( without postprocesses ) _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16319_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a38f24f5a01c_Capturedecran2017-12-19a11_59_20.png.4cbe8a42b29fc921293fd8d23fab1267.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a38f24fa0fac_Capturedecran2017-12-19a11_59_20.thumb.png.a752ccdfa698407691620c90a359d875.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16319_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a38f24fa0fac_Capturedecran2017-12-19a11_59_20.thumb.png.a752ccdfa698407691620c90a359d875.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t• Babylon sandbox (without postprocesses)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16320_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a38f26f2c1f1_Capturedecran2017-12-19a11_59_30.png.4a3f127ecc250f74a73cef1532ba56c4.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a38f26f5de7e_Capturedecran2017-12-19a11_59_30.thumb.png.8328c00e4aaac832384a8781c3a477e3.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16320_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a38f26f5de7e_Capturedecran2017-12-19a11_59_30.thumb.png.8328c00e4aaac832384a8781c3a477e3.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith this model_co_ frames rate is the same _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Adam head_qt_ work with PBRSpecularGlossinessMaterial and  _qt_damaged helmet_qt_ with PBRMetallicRoughnessMaterial. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see it when you click on the mesh in GLTF viewer ( qtek-model-viewer )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-19T17:19:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI cannot repro this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you make sure there are no error in the console when you load the Adam head model?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-19T18:27:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tok it is a bug when drag_t_n_t_dropping folders in the sandbox _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Will fix it ASAP and report here\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-19T19:12:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk fixed!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you so much. It was a really weird bug. You can test it now\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks again_co_ it was really an interesting bug\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2017-12-19T19:33:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe bug persist ... \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16321_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a396943ebd4a_Capturedecran2017-12-19a20_31_38.png.a5d613a53f37407c2e8011530b73aec7.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a39694507e95_Capturedecran2017-12-19a20_31_38.thumb.png.4734c4a82d91b7f7b085e77869df14c4.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16321_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a39694507e95_Capturedecran2017-12-19a20_31_38.thumb.png.4734c4a82d91b7f7b085e77869df14c4.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s weird because sometimes it show nothing and show me this in console _dd_ _qt_ Please provide a valid .babylon file. _qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr it render the model but not with all textures... \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tor this _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a396def51e3f_Capturedecran2017-12-19a20_51_39.png.94d2f00cbcd30761cc241c97d24a4652.png_qt_ data-fileid_eq__qt_16322_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16322_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a396defcf482_Capturedecran2017-12-19a20_51_39.thumb.png.53025b1609c355704c18319e0cbec3e0.png_qt_ alt_eq__qt_5a396defcf482_Capturedecran2017-12-19a20_51_39.thumb.png.53025b1609c355704c18319e0cbec3e0.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-19T20:42:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tClear your cache _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pierre Glibert","Date":"2017-12-19T22:00:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will write a new post because i see some trouble on gltf render _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-12-19T22:15:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_199068_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513708069_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tok it is a bug when drag_t_n_t_dropping folders in the sandbox _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Will fix it ASAP and report here\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ To be clear_co_ I assume this fix has nothing to do with the performance issues I and others are seeing with 3.2 correct? (because performance issues are happening outside of sandbox).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-12-19T22:20:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_199009_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513651551_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t19 hours ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ im in the same boat and i dont know how to really interpret the profiler to be able to pin point what the problem is. All i can say for sure is_co_ i had the space shooter demo going (you saw it). That demo is using 3.1 alpha. That demo is use Cannon Physics for EVERYTHING... all the player_co_ enymnet and laser bolt movements_co_ all the the collision detection_co_ basically the whole game. But when i updated to 3.1 beta (or greater). All the stuff using cannon physics is just dog slow. Like my asteroids falling is just WAY slow_co_ collision are not happening (some are_co_ but most not). It just really funky... I will put up another demo of the same game but using the latest babylonjs... Maybe you can tell with the profiler.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIt does not give any errors is just kinda funky...\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHere is the first _lt_a href_eq__qt_http_dd_//mackey.cloud/games/space/_qt_ rel_eq__qt_external nofollow_qt__gt_Space Shooter 3.1 Alpha_lt_/a_gt_ works great...\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tNow here is same game with updated BabylonJS_dd_ _lt_a href_eq__qt_http_dd_//mackey.cloud/games/space2/_qt_ rel_eq__qt_external nofollow_qt__gt_Space Shooter 3.2 Alpha_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tPlease see if you can tell what is going on... Or anyone else who might have some insight _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIs it possible to easily disable the physics engine in your project_co_ and update to 3.2 just to rule that out as the culprit? Because I am seeing the behavior without any physics enabled on my scenes (and not sure if the sponza demo is using physics but I would imagine not).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t^ (unless as I was theorizing earlier_co_ somehow physics is getting auto enabled or something_co_ since this all did start happening as soon as cannon.js was included as part of the bundle. I doubt that is it based on profiles and what not but the timing of cannon.js all of the sudden being packaged with babylon / performance issues arising_co_ does seem suspicious.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]