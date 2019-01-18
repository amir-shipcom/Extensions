[{"Owner":"Mark Bufton","Date":"2017-10-07T16:37:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m having a spot of trouble with my latest practice project - my class 150 DMU simulator. I_t_ve got the throttle and brake levers working perfectly_co_ but the horn lever refuses to work at all_co_ despite the code being almost completely identical. Tried everything from resizing to complete code rewriting_co_ even adjusting the order of the code but caught no joy. I also find that when moving the throttle (right) lever_co_ it will often move the horn_t_s _qt_imposter_qt_ (hornImp mesh)_co_ which is also weird as to my knowledge there should be absolutely no connection between them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve set up a playground sample which functions the same as it does on my tablet (save for sounds_co_ local textures etc) so if anyone has any ideas on what_t_s going on. The horn lever should remain upright but have two tones when pushed or pulled (currently simulated with the console log). I apologise if the code seems _qt_messy_qt_. I_t_m in the process of changing a lot of the code to simplify it all.....especially making use of the (awesome!!!!!) new Polygon Mesh (whichever legend is responsible for this_co_ I owe you a pint!!!).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDarn beginner blues strike again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#YN94DW_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#YN94DW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers chaps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark Bufton","Date":"2017-10-07T16:42:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOh_co_ and if anyone knows how I can blend the wiper animations (currently you have to click the black wiper control by the horn lever to toggle off_co_ half speed and full speed) so the wiper doesn_t_t teleport back to the off position at the start of each sequence - they_t_ll deserve brownie points.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-07T20:41:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Mark.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tline 1988\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        var pickInfo _eq_ scene.pick(scene.pointerX_co_ scene.pointerY_co_ function (mesh) { return ((mesh !_eq__eq_ ground) &amp_sm_&amp_sm_ ((mesh _eq__eq_ throttleImp) || (mesh _eq__eq_ brakeImp)))_sm_ })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould hornImp be included in that predicate?  Any other imps?  Perhaps red button?  *shrug*.  Just quick thoughts.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   Excellent project_co_ btw_co_ love it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark Bufton","Date":"2017-10-07T23:15:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ll check that out now and let you know. Thank you _dd_-)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark Bufton","Date":"2017-10-08T10:37:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ that certainly solved the problem of not being able to select it. It is working to some degree_co_ I just need to tweak the code a little and add another reset for the horn.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFlaming knew it was something obvious haha. Guess I probably owe you at least a barrel of beer at this rate.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-08T17:20:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI got lucky.  The darned thing just refused to drag_co_ so me and mister _qt_pick_qt_ needed to meet at the console.log.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I actually added hornImp to the list of allowed pickables (that predicate at the end of that line)... and I saw hornImp drag a little bit_co_ then freeze-up and refuse to drag any further.  But hey_co_ it dragged!  Yay!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt was not really obvious_co_ though.  Predicates are not what you would call _qt_old school_qt_ or automatically intuitive.  When I was growing up_co_ coding on vacuum tube computers_co_ we didn_t_t have predicates... just switch/case (case hornImp {blah}_co_ case brakeImp {blah}_co_ etc).  Predicates are VERY handy_co_ but I didn_t_t see/understand them... until about 2 years ago_co_ and it happened right here in the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe it_t_s not even called a _qt_predicate_qt_.  Maybe that is called a _qt_conditional_qt_.  Not sure_co_ still learning.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI really like your scene.  It_t_s turning out real nice.  Auran_co_ eat your heart out!  (Does Auran still make train sims?  *shrug*)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo_co_ I never coded on vacuum tube computers.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  But I visited a transistor or two.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark Bufton","Date":"2017-10-08T21:59:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ this one will prove.....interesting. The 3 _qt_imps_qt_ are limited by the limit() function I wrote and added into the drag and drop onPointerMove event listener (hark at me speaking like I know what I_t_m talking about haha). Mostly so they don_t_t end up flying off somewhere never to be seen again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust got to get my function working to reset the hornImp to the horn off position on pointer up without having it immovable the 2nd (+) time_co_ like I did the last time I tried it! At least it is moving now_co_ and the horn is _t_sort of_t_ reacting.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-09T13:05:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think it_t_s all good.  You_t_re doing _qt_virtual dashboard_qt_ things with webGL/BJS... that have probably never been done before.  You are the first.  The _qt_virtual joystick_qt_ thing_co_ controlling a submarine... that I helped-with...  same thing.  We moved the pivot point of the _qt_lever_qt__co_ and then monitored with a _qt_limit_qt_ just like yours.  If .rotation &gt_sm_ maxLimit || .rotation &lt_sm_ minLimit... return.  You_t_re probably the #1 pro at pointer drag-limiting_co_ currently.  Who would do it better than you?  You are elbows-deep in it_co_ right now.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPointerOver / pointerEnter is rather important on these DnD VR dashboards/controlpanels.  If you can change a color or turn-on an edgesRender or highlightLayer... when pointerOver that particular controller... that tells user what they will hit... IF they pick/click.  Another cool _qt_pointerOver_qt_ effect... is a little popup GUI label.  You know about all this stuff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_re blazing trails_co_ innovating_co_ and there is no _qt_right way_qt_ to blaze trails.  You_t_ll try things_co_ abandon them_co_ return to them_co_ it is sure to _lt_em_gt_seem_lt_/em_gt_ chaotic... but it_t_s all cool_co_ right? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor future playgrounds and tests_co_ try to separate the dashboard... from the loco_co_ programmatically_co_ structurally.  Someday_co_ each _qt_control_qt_ on the dashboard... might be a subClass of a baseController class.  There might be subClass _lt_em_gt_types_lt_/em_gt_... switch(2 position snap-slider)_co_ positioner (notched slider)_co_ slider/dial (smooth variable)... and then these controller-class objects are _qt_carried_qt_ in dashboard.controllers array.  Each _lt_em_gt_type_lt_/em_gt_ of controller_co_ will require its own type of limiter_co_ right?  They each operate slightly different and have different ranges.  A throttle controller_co_ for example_co_ (usually 9 notched positions including idle?) has special limit needs... different from a brake controller.  But whether its a brake controller_co_ horn controller_co_ throttle controller_co_ they all start with _lt_em_gt_new BuftonUniversalController()_lt_/em_gt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSame with the train itself...  train.dashboards array holds all dashboard-class objects.  MyTrain is a _lt_em_gt_new BuftonTrainClass _lt_/em_gt_object.  Dashboard1 is a _lt_em_gt_BuftonDashboardClass_lt_/em_gt_ object.  Fun!  Hierarchies!  OOP-stuff.  It starts looking just like BJS framework... Node -&gt_sm_ AbstractMesh -&gt_sm_ Mesh -&gt_sm_ myMesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ once you _qt_feel_qt_ that _qt_modularity_qt__co_ you will be able to easily make playgrounds with JUST a dashboard.  Remember me mentioning those pointerOver popup labels?  Well_co_ while moving a controller_co_ controller.label could be continuously updated with controller.currentValue... so you don_t_t even need to watch the console anymore.  Your controllerClass objects have a controller.label and controller.labelText... and perhaps a controller.imp and controller.meshShape. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSlowly but surely_co_ you gather all the _qt_common_qt_ features that apply to all BuftonDashboardControllers... and you put them on your base class controller (_qt_superClass_qt_ of all your in-game controllers).  You_t_re getting modular and re-usable.  Yum!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ one last fun thing.  A user named _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10968-altreality/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10968_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10968-altreality/_qt_ rel_eq__qt__qt__gt_@altreality_lt_/a_gt_ is _qt_into_qt_ trains_co_ too.  He is building a website called _qt_Age of Steam_qt_... and he was/is doing work on REAL OLD steam engines.  During his adventures_co_ I stole a package of _qt_stuff_qt_ from him.  I have not investigated it at all_co_ but it makes a Cannon physics train car (a box with 4 torus wheels) go around on a fairly large circular track.  Inside the package... are 3 rather complex physics files ... _lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt_loco.js_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt_railVehicle.js_lt_/span_gt__co_ and _lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt_wheelInfo.js_lt_/span_gt_.  I don_t_t know if any of their code is being used in AltReality_t_s demo_co_ here.  You_t_ll want to investigate.. if wanted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//webpages.charter.net/wingthing/misc/altRealityTrain.zip_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//webpages.charter.net/wingthing/misc/altRealityTrain.zip_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI thought you should have that package.  It_t_s carrying an OLD BJS and likely an OLD CannonJS... who knows?  Still_co_ the _qt_stuff_qt_ in those 3 physics files... looks... way good. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ it looks WAY complicated... and in properly simulating locomotive physics... I think complicated HAS TO BE good. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAuthor of those files... unknown.  Likely_co_ it is the same person who coded the Cannon rayCast rigidBody car.  It might be worth determining WHO_co_ and get perms... if releasing something commercial.  Thanks to _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10968-altreality/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10968_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10968-altreality/_qt_ rel_eq__qt__qt__gt_@altreality_lt_/a_gt_ for loaning us this package!  Party on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHell_co_ let_t_s ping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5907_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/_qt_ rel_eq__qt__qt__gt_@schteppe_lt_/a_gt_ for a visit... see if he_t_ll stay for cookies and cider_co_ and perhaps tell us what he knows about these train files.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  He_t_s good company_co_ and the heroic author of CannonJS.  (Wingy hugs Schteppe for CannonJS and for the hell of it.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark Bufton","Date":"2017-10-09T20:19:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNever thought of myself as a bit of a pro haha [he goes red]. Heck yes_co_ I shall have a good read of those files. Will be challenging but I do enjoy a bit of a challenge _dd_-D Cookies are in the oven!!!!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark Bufton","Date":"2017-10-09T20:59:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan_t_t believe that I have finally got it working. It didn_t_t help that in my limit function call for the hornImp_co_ I_t_d accidentally passed the minZ and maxZ arguments in the wrong order. The result was that the imp would move backwards_co_ but not forwards. So_co_ learned a valuable lesson in the process _sm_-)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-11T23:21:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tProgramming does exactly what you tell it to do_co_ eh?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ we still got a windshield wipers issue?  Is that why this thread is not marked solved?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIf I wuz yoo_co_ I would just make one basic wiper animation.  If you can_co_ change the animation speed for the different wiper-speed settings.  Don_t_t re-start the animation with each speed change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBetween each full wipe-cycle_co_ check if the switch changed.  It will either be a speed change_co_ or a stop command.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you do it this way_co_ no need for any animation blending_co_ right?  You CAN do animation speed-changes mid-wipe_co_ too_co_ I think.  But for animation stop_co_ that would be checked after completion of a cycle.  If switch @stop_co_ don_t_t re-start the animation.  Wiper is already _qt_home_qt__co_ yes? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThoughts?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_  I picked-up Train Sim World the other day_co_ the 2-pack with the CSX Heavy Haul and the Great Western high-speed transit route.  Its pretty stripped yet_co_ but I got it with Steam_co_ so I hope to see some free updates come down the line... or at least some fixes.  The tunnels are quite terrible yet_co_ from external cam view.  Could be my MPU pukin_t_ on a shader or something_co_ I suppose.  Other things are annoying_co_ too.  But... nice graphics/realism.  After I played_co_ I swear my computer room smelled like locomotive grease and diesel smoke.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark Bufton","Date":"2017-10-12T00:11:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tShould work. Can_t_t see why not. I_t_ll try it now _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]