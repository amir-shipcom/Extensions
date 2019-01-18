[{"Owner":"Richard C","Date":"2016-10-29T13:21:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHelp again please.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith a lot of help from Wingnut I have a mesh that is joystick being used to control the movement of an object (submarine in this case). The sub moves around based on the rotation of the joystick but isn_t_t facing the direction of travel thus yawing across the screen rather than turning to face the direction of travel.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny pointers to set me off in the right direction (pun intended) would be gratefully received.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRichard C \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-29T13:32:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis PG might be helpful_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ZJ5KL%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#ZJ5KL#14_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2016-10-29T14:04:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Adam but it_t_s the object I need to face the direction of travel not the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-29T14:14:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#2JXSKY%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#2JXSKY#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou just need to stretch your imagination_co_ RC... and change camera to sub.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWay at the top of Adam_t_s #14 demo... are two _qt_overload_qt_ functions.  Overloading is term for adding extra functionality to an _qt_established_qt_ class of object.  All BJS mesh are subClasses of Mesh_co_ which are subClasses of AbstractMesh_co_ which are subClasses of Node.  Those two funcs... and the way they are defined... cause ALL mesh to have two new functions... _lt_em_gt_getDirection_lt_/em_gt_ and _lt_em_gt_getDirectionToRef_lt_/em_gt_.  Cool_co_ huh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSidenote_dd_  Cameras and lights are ALSO subClasses of Node.  That is why we used the same overloads... for Adam_t_s camera-based usage_co_ AND our mesh-based usage.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ you can see those two functions added to our original joystick demo... at lines 125-135.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDown in the renderLoop...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 146  - I set a slow rotation on the sub... just for testing._lt_br /_gt_\n\tLines 148-151  - establish some helpers - calling our new _lt_em_gt_sub.getDirection() ... _lt_/em_gt_which also calls its friend_lt_em_gt_... sub.getDirectionToRef_lt_/em_gt_()_lt_br /_gt_\n\tLines 154-155  - Here we apply our beloved xspeed and zspeed_co_ but in a more-advanced and wiser way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see_co_ as the sub rotates around_co_ its forward_co_ backward_co_ left_co_ and right... all act correctly_co_ yes?  They take the sub_t_s rotation into consideration.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe code lines for submarine positioning AFTER sub pitch-up and pitch-down are there_co_ but remarked-out.  I don_t_t know if your sub is allowed to pitch the nose up/down.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis should get you rolling... and let it be known that I could not have built this new joystick demo... without Adam_t_s help.  He showed us a fine demo... but you were just a little scared to convert it from camera... to submarine.  It_t_s ok_co_ we_t_ll let you live another day.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  (I was a little scared_co_ too.)  Thanks Adam.  Hope this helps_co_ RC.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2016-10-29T14:31:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAdam - I_t_m feeling foolish for not looking closer at your code - sorry for being so dismissive\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingnut - thanks for putting me straight\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet the experimenting begin\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks again both\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-29T14:48:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_149273_qt_ data-ipsquote-contentid_eq__qt_26097_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477750478_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t32 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWay at the top of Adam_t_s #14 demo... are two _qt_overload_qt_ functions. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI didn_t_t realize I linked to a PG that had the hacked functions.  Node.getDirection is now in BJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ZJ5KL%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#ZJ5KL#15_lt_/a_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-29T14:52:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ And thusly....  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#2JXSKY%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#2JXSKY#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo need to add overload funcs.  Coooooool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdam... you_t_re just the best.  Would you mind taking a nap for 10 years... so I could catch-up with your intelligence?  Thx!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2016-10-29T15:06:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry to say_co_ but unless I_t_m missing something more that I ought to be doing but it isn_t_t doing what_t_s necessary. I am struggling to understand the code. The sub isn_t_t rotating in line with the joystick rotation and thus isn_t_t moving as it should. For example_co_ if the joystick is pulled back from the forward position_co_ the sub should turn around to face the opposite way and then follow the direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry to sound ungrateful for all your help but I really am struggling.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much\n_lt_/p_gt_\n\n_lt_p_gt_\n\t. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-29T15:44:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm... you seem to be mixing rotation with position.  Our current joystick demo is a position-setting joystick_co_ not a rotation-setting joystick.  Are you using two joysticks now?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll in all_co_ you_t_ve only been _qt_struggling_qt_ with this new issue... for about an hour.  Keep experimenting... and think about what you want this joystick to actually do.  Up to this point_co_ you wanted back-pull... to back-up the sub.  Now_co_ suddenly_co_ you want back-pull to turn the sub 180 degrees and throttle _qt_forward_qt_ after the turn?  hmm.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2016-10-29T15:51:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe problem with forums / messaging / chat - so easy to not give a clear explanation of what is required. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes you have summed it up and it was always so except I obviously didn_t_t make that clear. Turn the sub in line with the rotation of the joystick and then / or at the same time throttle forward.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre you thinking it can_t_t be achieved with one joystick?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-29T19:12:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think it_t_s possible.  Allow me to try to clarify.  We are talking about the in-cockpit joystick_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIF sub is aimed north (all stop)... and IF pilot pulls joystick south (toward the pilot) and holds it there...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthen sub turns south_co_ and then moves forward... south-bound?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ a southbound sub... is driven _qt_forward_qt_... by pulling the joystick toward the pilot?\n_lt_/p_gt_\n\n_lt_p_gt_\n\thmm.  Seems strange.  I think I am confused.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2016-10-29T20:05:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes the cockpit JS. I_t_m back to not having explained things well so let me try to get it right this time!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe sub has two horizontal motors/propellers (thrusters). It also has two vertical thrusters - forget them for now - they control up and down movement via a separate toggle switch.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThey are all variable speed thrusters. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing compass points for this description rather than nautical terms (port/starboard/aft etc) .........\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPulling the JS back towards the pilot will indeed send the sub backwards - used mainly to manoeuvre and like any marine thruster reversing forward movement bringing the sub to a halt.. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPushing the JS away from the pilot sends the sub forward.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo to turn south from north_co_ the JS to the left or to the right turns the sub on it_t_s own footprint as it were and once the sub is facing whatever the pilot wants to navigate to he pushes the JS forward.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe JS to the left operates the left thruster only. JS to the right operates the right thruster only. Pushing JS forward operates both thrusters.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the pilot wants to _t_bear_t_ left rather than turn on the spot he would move the JS to north west. This causes the right thruster to slow and therefore left thruster is rotating more than the right thruster and the sub is moving north west.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope that explains things more clearly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have been trying pickpoints from the ground plane start and current position - your diff statement. I have declared 3 variables - axis1_co_ axis2 and axis3 as per a number of PG tutorials.  Axis1 _eq_ diff_co_ Axis2 _eq_ vector3(0_co_0_co_0) and axis3 is a cross of axis1 and 2.   sub.rotation _eq_ BABYLON.Vector3.RotationFromAxis(axis2_co_ axis3_co_ axis1)_sm_ But the results are somewhat irregular!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI shall keep trying to perfect it. Unless of course there is a better and easier alternative.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much again for your patience.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-30T06:26:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tahh_co_ thanks.   Ok_co_ rotate sub (around Y axis) with JS right/left.  Translate (along local Z axis) with JS forward/backward.  I think that can be done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo such move as _qt_stafe_qt_ or _qt_slew_qt_  (side-sliding).  *nod*. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tXspeed needs to be applied to sub.rotation.y and not sub.position.x.  Yep_co_ yep_co_ yep.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_ll take a look in the morning.  I just finished a pair of busy Halloween weekend gigs with _lt_a href_eq__qt_http_dd_//webpages.charter.net/wingthing/img/lake_effect/bankjob_04.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_the band_lt_/a_gt_... and I need a bowl of rice krispies and some quality snoring-time.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Talk soon_co_ party on. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAw heck_co_ let_t_s try one.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#2JXSKY%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#2JXSKY#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLeft/right (xspeed) is now applied to sub.rotation.y (line 137).  I attempted a JS forward/backward _lt_em_gt_dead-zone_lt_/em_gt_ in line 138.  (Allows you to turn left/right in-place_co_ easier.  Lower chance of accidentally translating forward/backward... when attempting left/right rotation in-place.)  (_qt_in-place_qt_ _eq__eq_ _qt_in footprint_qt_)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  You probably knew that.  Hope this helps.  Cya tomorrow.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2016-10-30T11:45:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWingy. That looks pretty much perfect. I shall apply this code to the actual joystick and sub. Exciting !!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMany many thanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope the krispies and snoring went well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-30T12:55:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood deal!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs daring_co_ shocking_co_ and rebellious as it might seem_co_ I went-with the apple cinnamon cheerios_co_ instead.  Woah.  Radical!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2016-10-30T15:54:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tKrispies - hardly the energy force for a punk_co_ hardcore_co_ melodic heavy metal bass player eh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-30T16:13:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thehe.  Yeah_co_ did you see the size of those amplifiers?  Yeah_co_ we_t_re quite the smash-mouth mosh-pit welders_co_ eh?  hah.  (not!) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBefore the gig_co_ we all eat/snort Doan_t_s Pills_co_ and wash _t_em down with Geritol and Ensure.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWe can_t_t LIFT bigger amps.  We would break a hip... or poop our pants.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I_t_m curious about that long PM from you... that got lost.  Sorry I missed that. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWere you offering me bus tickets to come see the real submarines?  Could I get there by bus?  If ya don_t_t mind me asking_co_ what part of Earth do you hang-out-at?  (thx)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2016-10-30T19:58:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am in Oxford_co_ England although born and bred in Wales.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe sub business is in Cairns_co_ Australia\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNone of these places have introduced me to Doan_t_s Pills_co_ Geritol or Ensure but I imagine in the right combination and enough strength they would have the power to get you anywhere in the world without the aid of car_co_ bus_co_ boat or plane. However you got there_co_ it would be a pleasure and honour to take you diving I one of our little yellow beauties_co_ although passing the medical tests may be a bit of a strain.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also sent you a short message yesterday - did you get that. I will re-send the first.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-31T00:35:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYep_co_ yesterday_t_s message arrived fine.  I answered in public... here... as you know. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHeck_co_ it would be MY pleasure and honor to meet you guys and SEE the subs.  No need for me to enter into one.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Perhaps someday you can take us on a little ride... with a video.  I would enjoy seeing that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVery kind words_co_ RC... I appreciate that.  And thanks for the info about yourself... very cool. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI live here in the sticks (woodlands)...  a tiny friendly town_co_ 15 miles south of Lake Superior_co_ in an area called the snow belt.  We get lots of _qt_Lake Effect_qt_ snow_co_ and it is a bit hilly_co_ here.  So... I am surrounded by snow-skiing facilities/resorts.  I am a professional snow blower operator out of pure postal-service and vehicle-parking necessity.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI feed/train black and gray squirrels as a hobby_co_ and with that activity... it seems every other woodland critter comes to visit_co_ too.  Deer_co_ bear_co_ raccoons_co_ wolves_co_ they all have visited me_co_ and been caught on my webcams.  A red fox and I... had a short conversation the other day... discussing whether or not he/she should be trying to snack from my bluejay-proof squirrel feeder (loaded with Walmart peanuts). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMid-winter_co_ squirrel feeding can cost up to $80 per month.  Weird hobby_co_ huh?  In previous years_co_ I placed webcams near mirrors (on my front porch) and have watched how squirrels and birds react when they become self-aware (when they see themselves in the mirrors).  Quite interesting!  (But I am a simpleton_co_ so nearly everything interests me.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  And_co_ I never kill animals if I can avoid it_co_ but... I am still not vegan... so... you know... animals ARE killed to feed me.  Darn.  But if I were a vegan_co_ I_t_d surely kill plants_co_ and I don_t_t like doing that_co_ either.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I prefer NOT _qt_cropping_qt_ plants_co_ but instead_co_ wait for them to _qt_fall_qt_ their bounty.  The truck-it-green fruits and vegetables industries don_t_t agree_co_ and prefer to haul the food to the herds (of people) instead of trucking the people to the naturally-fallen foods.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also don_t_t kill insects... and have studied some of those_co_ too.  I have learned a technique to _qt_befriend_qt_ house flies_co_ and get them to come land on the back of my hands_co_ and ride-along with me_co_ as I go about my day.  (Weird!)  (I do that MOSTLY when I_t_m outdoors_co_ of course)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou just think loving thoughts toward them_co_ then place your finger near them_co_ and keep thinking how much you love them.  The fly will_co_ within 20 seconds... walk over to your finger and taste your skin.  Once they taste the love juice on your skin_co_ they are no longer scared_co_ and will walk around on your skin_co_ licking love juice.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   Truth.  It works 90% of the time_co_ and on MANY breeds of flies and other insects.  WEIRD!!!  I think MOST of nature... can smell or taste a human_t_s intent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn another apartment in Minneapolis_co_ I _qt_ran_qt_ an unknown-to-landlord colony of Pharoah ants... and we were all good buddies.  I have a couple of stereoscopic microscopes that I was given... by the local high school... when they upgraded to microscope-cameras and big screen monitors.  Some of my friends call me a bug-hugger.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I am also fascinated by the vast occurrences of Fibonacci number sequences... found in nature... and have studied that.  And I have studied how critters react to music_co_ but have learned very little from that. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m also anti-capitalism... so I guess I am a people-who-hate-competing -hugger_co_ too.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTMI_co_ eh?  Way more than ANYONE EVER wanted to know about Mr. Wingnut.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  RC/anyone... you are always cordially invited to visit Wingy_t_s squirrel farm and snow-blower training facility... anytime.  heh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]