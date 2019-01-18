[{"Owner":"Hazardus","Date":"2015-10-20T21:36:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have several primitives in my scene as *placeholder meshes*. These meshes have actions (and subsequent animations) attached to them._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I would like to do is to simply replace a placeholder mesh with the real mesh_co_ while maintaining properties like actions_co_ position_co_ etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What would be the most simple way to accomplish this?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2015-10-20T22:09:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Animations and locations etc are easy_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Animation / skeleton_dd__lt_/p_gt__lt_p_gt_newMesh.skeleton _eq_ placeHolder.skeleton_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will this work without doing x_co_ y_co_ z specificially?_lt_/p_gt__lt_p_gt_newMesh.position _eq_ placeHolder.position_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If not... then_lt_/p_gt__lt_p_gt_newMesh.position.(x_co_y_co_z) _eq_ placeHolder.position.(x_co_y_co_z)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_same for rotation and scale as position..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Don_t_t know much about actions. haven_t_t had to mess with them yet._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hazardus","Date":"2015-10-21T00:14:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actions/their animations are the main thing I_t_m having trouble with_co_ but I_t_d like to be able to cleanly transfer everything except the vertices to my new mesh before calling .dispose() on the original._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I actually wrote a function that copies all the properties in the object until it gets to .constructor_co_ because that stuff is added automatically via prototype extension._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess I_t_ll have to re-register the actions on the new mesh?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-21T02:00:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If you copy the actionManager from source mesh to new mesh this should be good_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hazardus","Date":"2015-10-21T03:08:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_101836_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_18030_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1445392846_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_If you copy the actionManager from source mesh to new mesh this should be good_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Right you are_co_ dunno why I didn_t_t think of that._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Are there any properties I should exclude from copying to the new mesh besides _dd_ [ uniqueId_co_ geometry_co_ _boundingInfo_co_ subMeshes ] ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It _lt_em_gt_seems_lt_/em_gt_ to be working fine so long as I exclude those 4 (and the inherited prototype properties as mentioned above)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-21T03:37:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_generally speaking_co_ do not copy _something. Geometry and submeshes as well _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think you found everything actually _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hazardus","Date":"2015-10-21T03:53:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nice. I started to do a blanket exclude on private properties_co_ but I have a few of my own baked in. Lovin_t_ your software bro!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-21T04:21:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I appreciate _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]