[{"Owner":"royibernthal","Date":"2016-08-30T18:59:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m experiencing a bug that I was not yet able to reproduce in an isolated environment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using bjs 2.5 alpha.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDuring the loading of assets I_t_m creating a ScreenSpaceCanvas2D for the preloader UI in my custom loading screen (shown and hidden via a class implementing ILoadingScreen).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created a Sprite2D bar from an image texture (image was loaded previously)_co_ and I change the scaleX of the bar according to the loading progress.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe bar is not updated accordingly. The scaleX variable is changed properly but visually it looks like it_t_s stuck on scaleX 0 or 1. The values I pass are fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe bar Sprite2D is a child of a Group2D. I set the origin of the Sprite2D to (0_co_ 0).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe bug persists even after the loading is ended if I choose for testing purposes to not hide the preloader UI.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have no idea if this is related to the loading situation or not_co_ I just gave as many details as possible. I tried reproducing scaling a simple Sprite2D on the playground and it worked as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny idea what might be going on here?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-31T18:41:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-31T18:55:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI feel bad for Nockawa having to field all these questions.  Please create a PG and someone here will try to help.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-31T18:57:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_142062_qt_ data-ipsquote-contentid_eq__qt_24865_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472583560_qt_ data-ipsquote-userid_eq__qt_8420_qt_ data-ipsquote-username_eq__qt_royibernthal_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t23 hours ago_co_ royibernthal said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI tried reproducing scaling a simple Sprite2D on the playground and it worked as expected.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-31T18:59:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you using the very latest version of BJS?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNockawa has made some recent commits_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pulls?q_eq_is%3Apr+author%3Anockawa_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pulls?q_eq_is%3Apr+author%3Anockawa_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-08-31T19:28:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/_qt_ rel_eq__qt__qt__gt_@royibernthal_lt_/a_gt_ please_co_ confirm you use the very latest version of the 2.5 alpha locally_co_ and if you still have issues we can investigate. But it indeed looks like something that was once bugged_co_ but should have been solved.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me know_co_ thanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-08-31T20:37:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ I am using the latest 2.5 alpha version_co_ just re-downloaded it to make sure.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-08-31T20:44:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tand you still have the issue_co_ right? can you share the code so I can test it locally. sometimes there are some texture loading latency that introduce issues. I _lt_strong_gt_wish_lt_/strong_gt_ it would be over by now_co_ but well...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-08-31T20:48:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI still have the issue yes. I_t_m waiting for the textures assets to finish loading before attempting to do this_co_ if it matters.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_d be a bit of a problem for me to upload the whole code_co_ would you be willing to do a remote control session in private?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-01T12:56:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ I managed to isolate the issue_co_ attached the uploaded project.\n_lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9318_qt__gt_Babylon Preloader Bar.rar_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-01T18:41:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you test again locally with the version I pushed few hours ago in the official repo? (you have to recompile the source code_co_ the preview file was not updated).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-01T20:13:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_142368_qt_ data-ipsquote-contentid_eq__qt_24865_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472755262_qt_ data-ipsquote-userid_eq__qt_18979_qt_ data-ipsquote-username_eq__qt_Nockawa_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Nockawa said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCan you test again locally with the version I pushed few hours ago in the official repo? (you have to recompile the source code_co_ the preview file was not updated).\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt didn_t_t solve it. There_t_s no need to even recompile the typescript project just replace babylon.js in the lib dir and it should be fine. (since babylon.d.ts is not being compiled anyway)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-01T20:16:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy point was_co_ the babylon.js file is updated nightly by DK_co_ so if you took the file from here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/babylon.js_lt_/a_gt_ you won_t_t have the changes I commit today.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe I didn_t_t understand what you said.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-01T22:04:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ I was the one who didn_t_t understand what you said_co_ I thought you were having problems compiling my typescript for some reason and were asking me to do it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould I have to wait for DK to update it or are you saying there_t_s a way for me to see your new commits before that?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-02T07:06:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe_t_ve updated the _qt_preview release_qt_ folder_co_ you can get the new version of babylon.js there_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview release_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTell me if the issue is solved_co_ if it_t_s still not_co_ I_t_ll check right away locally. Thanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-02T09:14:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSolved. Thank you\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]