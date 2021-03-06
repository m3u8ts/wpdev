# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.9](https://github.com/feryardiant/wpdev/compare/v0.2.8...v0.2.9) (2020-06-13)


### Features

* **buildpack:** add envvar default values ([be2baa9](https://github.com/feryardiant/wpdev/commit/be2baa9421c4d6b00adc8f99c9fad4cea017024e))
* **ci:** use wp-cli phar ([da48aa3](https://github.com/feryardiant/wpdev/commit/da48aa3923f2520667b22f9607cfa2759030bb86))
* **heroku:** add post-deploy script ([7df3abd](https://github.com/feryardiant/wpdev/commit/7df3abd78501bb734a7ff9c0f9d55e2585b4bb6b))
* **release:** add github action to publish releases ([4f4c06f](https://github.com/feryardiant/wpdev/commit/4f4c06f65b8d9b2a551af2f8148bb935bfe1dd7e))
* **workflow:** cache action ([7f10b40](https://github.com/feryardiant/wpdev/commit/7f10b4073434e58945485df4d514fa67e66ea1dd))


### Bug Fixes

* **buildpack:** :unamused: ([c220f36](https://github.com/feryardiant/wpdev/commit/c220f36c656db9f13dcac8a9f020581265ba9449))
* **buildpack:** do 49cb38e before downoading ([c40fa4e](https://github.com/feryardiant/wpdev/commit/c40fa4ef20dd38f44bae235eb419603b5921392d))
* **buildpack:** do convert as multisite instead of direct install ([abc45c1](https://github.com/feryardiant/wpdev/commit/abc45c1767362432c195dfc809e9632cd50165e3))
* **buildpack:** https by default ([3335f29](https://github.com/feryardiant/wpdev/commit/3335f291f5b1645cd70d02f32b7c816a4ce6d3cc))
* **buildpack:** throw error from compile script ([1dff5ee](https://github.com/feryardiant/wpdev/commit/1dff5ee10d78d1ebe495a7d71309d7054c782253))
* **buildpack:** try to add more wp-cli envvars ([81b189e](https://github.com/feryardiant/wpdev/commit/81b189e8ba14a758ebb4238267ae430c4a5f55c3))
* **buildpack:** try to check whether wp-cli is installed ([49cb38e](https://github.com/feryardiant/wpdev/commit/49cb38e791344a3cea5f7400c660c6c67525b807))
* fix self-signed ssl issue while development ([ab3a42b](https://github.com/feryardiant/wpdev/commit/ab3a42b290bcbcd47b9d4306315c0c8155e9617f))
* **buildpack:** use $HOME instead of ~ ([112ef56](https://github.com/feryardiant/wpdev/commit/112ef562805ec9519c8491ba88095e5162cc5d9e))
* **deploy:** fix htaccess issue with wp-json ([401ecf5](https://github.com/feryardiant/wpdev/commit/401ecf52a05d393fec5874baceed9dc073485a96))
* **deploy:** fix post-deploy script ([f1f3aef](https://github.com/feryardiant/wpdev/commit/f1f3aefbd5e60e29315230dc0ec1f1d091c1a13b))
* **heroku:** review app env ([8b5f882](https://github.com/feryardiant/wpdev/commit/8b5f882ecc3f8a8861bb3e9cce577b9ec902f00a))
* **release:** fix release command on github action ([536b3ce](https://github.com/feryardiant/wpdev/commit/536b3ceaceafcdaee0e39a5f30303c2c2bfad59a))
* **test:** fix url while test on browserstack ([12ef50e](https://github.com/feryardiant/wpdev/commit/12ef50ea0258a1d177df00941aa3e7ea8eedbb7a))

### [0.2.8](https://github.com/feryardiant/wpdev/compare/v0.2.7...v0.2.8) (2020-06-06)

### [0.2.7](https://github.com/feryardiant/wpdev/compare/v0.2.6...v0.2.7) (2020-06-03)


### Features

* **theme:** add ability to extract html tag from string ([92323a2](https://github.com/feryardiant/wpdev/commit/92323a2b355eb96af4d988b1ebc0658eb1aea772))
* **theme:** add helper method to check is constant(s) enabled ([22cae27](https://github.com/feryardiant/wpdev/commit/22cae2741b04a37b3d0a476319654297784bd383))
* **theme:** autoload plugin files ([65fd429](https://github.com/feryardiant/wpdev/commit/65fd4295b44c5022acd36daf96c07d9cf769abef))
* **theme:** init option panel hook ([28c937f](https://github.com/feryardiant/wpdev/commit/28c937fdab861f923098511f7c023ff9b385d9f3))


### Bug Fixes

* **build:** dont create .env file ([93f607f](https://github.com/feryardiant/wpdev/commit/93f607f02ba6c94d66e0eb351d7dbaff76e2f892))
* **plugin:** fix theme integration ([1121dd6](https://github.com/feryardiant/wpdev/commit/1121dd65a233f2794f543203ed66183d71e44b47))
* **plugin:** remove plugin autoloader ([1e07aa0](https://github.com/feryardiant/wpdev/commit/1e07aa00c20b90732c779e73fdd91373bdcea342))
* **test:** fix browserstack test ([e567dce](https://github.com/feryardiant/wpdev/commit/e567dce10ed11191297c5d2d59343bfd827568ef))
* **test:** fix whitelist source ([354a486](https://github.com/feryardiant/wpdev/commit/354a486575a6ca56a9f203bc90f63f16d5e72a0e))
* **theme:** bring back missing icons ([6179942](https://github.com/feryardiant/wpdev/commit/6179942eb8c8aca1b80bad98658dd847de7bca84))
* **theme:** fix lint issues ([a1399f3](https://github.com/feryardiant/wpdev/commit/a1399f35575e1936f271b7540ad9d021f835f7ba))
* **theme:** fix option panel page ([fc26c70](https://github.com/feryardiant/wpdev/commit/fc26c7000b29e736ca6b62aafa560462e72fb7de))
* **theme:** primary menu not rendered poperly ([1598dae](https://github.com/feryardiant/wpdev/commit/1598dae69f960b06c07fac3d6e9961f454b8bf4b)), closes [#41](https://github.com/feryardiant/wpdev/issues/41)
* **theme:** searchform input not rendered poperly ([61aace0](https://github.com/feryardiant/wpdev/commit/61aace0617d9c561458f581a9e299c13b6e54184)), closes [#41](https://github.com/feryardiant/wpdev/issues/41)

### [0.2.6](https://github.com/feryardiant/wpdev/compare/v0.2.5...v0.2.6) (2020-06-01)


### Features

* **theme:** add ability to handle style attributes & add more kses ([ce234cf](https://github.com/feryardiant/wpdev/commit/ce234cfcfb2e78333805f44365a6fefd81e75ef8))
* **theme:** add new option for site layout ([a8685a9](https://github.com/feryardiant/wpdev/commit/a8685a9a90afcd31031311d834400bb1822d6737))
* **theme:** add site-wide wrapper and move `skip_link()` under body ([a79d423](https://github.com/feryardiant/wpdev/commit/a79d423638c842a781f885b651199bf64613432e))
* **theme:** cleanup menu output ([534fc20](https://github.com/feryardiant/wpdev/commit/534fc2017519f4bcb2d30850e641e2be5bd027e5))
* **theme:** clearfix each content segments ([84d29d7](https://github.com/feryardiant/wpdev/commit/84d29d766f33d2cc3c4ad5f588de4bbc3c9cad77))


### Bug Fixes

* **build:** things missing sometimes ([a204869](https://github.com/feryardiant/wpdev/commit/a204869d1a8556b52e4bc4aea1e928be5efb8783))
* **build:** use option instead of passing envvar ([90c42ee](https://github.com/feryardiant/wpdev/commit/90c42ee2e5e9b3eaef5364ba6d4821988b00f39e))
* **buildpack:** sed wp-cli.yml if possible ([38c1aa0](https://github.com/feryardiant/wpdev/commit/38c1aa056784d0d9841e7d96bd37e584ac4c88a7))
* **plugin:** fix undefined constant ([2caa814](https://github.com/feryardiant/wpdev/commit/2caa8148384627530db7100a62d2e123441dd451))
* **plugin:** fix undefined constant on testing ([87e13ff](https://github.com/feryardiant/wpdev/commit/87e13ff69f5a29577da9ca2620746bbf021a1423))
* **theme:** allow `name` attribute on input elements ([2254593](https://github.com/feryardiant/wpdev/commit/22545933e0a0c3f2fcf619c995fc360f101531c7))
* **theme:** fix form kses ([c743cf8](https://github.com/feryardiant/wpdev/commit/c743cf8fc2b2a92660ce91d4acc7e93f39fbe463))
* **theme:** fix menu, header and footer arrangement ([8b4f02c](https://github.com/feryardiant/wpdev/commit/8b4f02cf609f8f3eac3155c540c136762ccbe486))
* **theme:** fix missing hooks on 404 template ([b7ed9b1](https://github.com/feryardiant/wpdev/commit/b7ed9b16ee6392b354d538a9212309fb3f69988d))
* **theme:** fix undefined properties ([2cce02b](https://github.com/feryardiant/wpdev/commit/2cce02b8d49f2cd59a075886c133df2c9a54216c))
* **theme:** invoke `the_posts_navigation()` ([3d15818](https://github.com/feryardiant/wpdev/commit/3d1581828600d6cb1a7dfee32521bc9f3713ec6b))
* **theme:** patch 404 page ([1297cbd](https://github.com/feryardiant/wpdev/commit/1297cbd84c67c6fe7259fdc1e6110bdf0f685154))
* **theme:** patch clearfix ([9e0929e](https://github.com/feryardiant/wpdev/commit/9e0929eb9d293c4bb85d8a6a4118be8efb6c768e))
* **theme:** workaround with menu and some layouts ([d3dc77b](https://github.com/feryardiant/wpdev/commit/d3dc77bb3c43f7c120ec76df23912d7f9972ccc0))

### [0.2.5](https://github.com/feryardiant/wpdev/compare/v0.2.4...v0.2.5) (2019-10-31)


### Features

* **theme:** enhance flexibilities to customize theme layout ([1d280cc](https://github.com/feryardiant/wpdev/commit/1d280cc3ea5bd0f9f57feed0334173126115edbb))
* **theme:** implement WordPress built-in menu properties ([431fbce](https://github.com/feryardiant/wpdev/commit/431fbce21f76628b4916ea2399b096dc0810db64))


### Bug Fixes

* **theme:** wrong menu item arrangement ([0ecf936](https://github.com/feryardiant/wpdev/commit/0ecf936206c9fb7877aa936cd4b23a0941a64957))

### [0.2.4](https://github.com/feryardiant/wpdev/compare/v0.2.4-patch.1...v0.2.4) (2019-10-29)


### Features

* **buildpack:** if wp-cli.yml exists, rename to wp-cli.local.yml ([ae0f913](https://github.com/feryardiant/wpdev/commit/ae0f9138c771939a3e1e682d7c8cdde230cdeab1))
* **theme:** add ability to create nested html, ([6436b9f](https://github.com/feryardiant/wpdev/commit/6436b9f3a2be954c2e4931aecbb0c5cbca06a107))
* **theme:** add custom customizer control ([6ef3af7](https://github.com/feryardiant/wpdev/commit/6ef3af77c7463839e0e525160f60ffad3e2b59de))
* **theme:** add custom-logo hook & make use of make_html_tag helper ([ee2e41f](https://github.com/feryardiant/wpdev/commit/ee2e41ff79bcdce5723834c8d0db02a4e663f93a))
* **theme:** add default site logo filter ([86fd037](https://github.com/feryardiant/wpdev/commit/86fd037e9716f96369d7e6a4959a5aa66327c767))
* **theme:** add default theme option filter & change default logo size ([1e3fe30](https://github.com/feryardiant/wpdev/commit/1e3fe30aa773d50dc7bb1d7c0cd1456af9fada09))
* **theme:** init typography feature ([913af3d](https://github.com/feryardiant/wpdev/commit/913af3d9288dd86a4bd666eed1ef223cd8b0db04))
* **theme:** remove 'wp-block-styles' supports and use custom styling ([958d14b](https://github.com/feryardiant/wpdev/commit/958d14ba68a328b31fe6f927b169df9bb9e26e79))


### Bug Fixes

* **archive:** add commitAll flag ([d784a93](https://github.com/feryardiant/wpdev/commit/d784a935cc2136fbb23e758a9bffcf4d99d58bdd))
* **build:** remove skip bump flag on sub-package ([fe8f861](https://github.com/feryardiant/wpdev/commit/fe8f8617944177291a0e070fdf2ebc4e5b6eb3dc))
* **build:** try to use postbump hook ([49db7a9](https://github.com/feryardiant/wpdev/commit/49db7a900822835dad1f8ea3c8a10dd35ab61a15))
* **build:** use git add on precommit hook ([012bf5a](https://github.com/feryardiant/wpdev/commit/012bf5a827ee97a6121221a6a372577be736cf86))
* **buildpack:** bring back some ignored files :sweat_smile: ([f09d36a](https://github.com/feryardiant/wpdev/commit/f09d36a712f4557bdea6f2a885e32ddde23d4d33))
* **ci:** fix ci setup ([0be014e](https://github.com/feryardiant/wpdev/commit/0be014eb77819f8c5e08ca55bfa093d9eef53759))
* **ci:** fix ci setup (again and again) ([4ced1f1](https://github.com/feryardiant/wpdev/commit/4ced1f16c098866e8ded4e355042782a36edcc09))
* **ci:** fix ci setup (again) ([0d43a57](https://github.com/feryardiant/wpdev/commit/0d43a575ce97cff34ac3744bb5bb0cf0cf6b74a4))
* **ci:** fix ci setup (try again) :sweat_smile: ([ead42e0](https://github.com/feryardiant/wpdev/commit/ead42e04131159408f128be50ca6abc1d6346d2f))
* **ci:** make use of wp-cli.yml ([4383cb0](https://github.com/feryardiant/wpdev/commit/4383cb05bd0669bffbb80a0f5ca621694e763530))
* **deploy:** fix post-deploy script ([d7109d0](https://github.com/feryardiant/wpdev/commit/d7109d09a6cc4d281d0b361320d5d19cf6bc7ea1))
* **gulp:** fix missing php watcher ([14644d7](https://github.com/feryardiant/wpdev/commit/14644d79c06b38c15b6889b614c1bb6693d6eafb))
* **gulp:** fix reloading ([d307ce3](https://github.com/feryardiant/wpdev/commit/d307ce35c06dfda0dfadbe9945229d058f3490ec))
* **gulp:** only watch js and css tasks ([0d2969d](https://github.com/feryardiant/wpdev/commit/0d2969d02d46ffa567e387f7fe12cefae6b6a1b6))
* **workflow:** fix versioning ([ce8265d](https://github.com/feryardiant/wpdev/commit/ce8265de30f2bb777220c734708834a37062b6ce))

### [0.2.4-patch.1](https://github.com/feryardiant/wpdev/compare/v0.2.4-patch.0...v0.2.4-patch.1) (2019-10-29)

### [0.2.4-patch.0](https://github.com/feryardiant/wpdev/compare/v0.2.3...v0.2.4-patch.0) (2019-10-29)

### [0.2.3](https://github.com/feryardiant/wpdev/compare/v0.2.2...v0.2.3) (2019-10-29)

### [0.2.2](https://github.com/feryardiant/wpdev/compare/v0.2.1...v0.2.2) (2019-10-29)


### Features

* **build:** ability to skip task during build ([8a3ef91](https://github.com/feryardiant/wpdev/commit/8a3ef91b985685194515eb68dece1f5e38f85e1f))
* **build:** add ability to bump readme.txt & style.css version ([ecb146f](https://github.com/feryardiant/wpdev/commit/ecb146f62d1b20726cf99ef8b127ee00a713fab5)), closes [#23](https://github.com/feryardiant/wpdev/issues/23)
* **build:** add postbump hook to bump style.css & readme.txt ([3b22bc2](https://github.com/feryardiant/wpdev/commit/3b22bc22634f721aeac7ad723abd751e7137dec3))
* **deploy:** update postinstall script, WIP ([bdb8acf](https://github.com/feryardiant/wpdev/commit/bdb8acf9c9d917592b8813bb2a11aaedab86f089))
* **gulp:** add option whether to tag the release ([3823e81](https://github.com/feryardiant/wpdev/commit/3823e81c032b611ac74a6424c55b33e45a14077a))
* **gulp:** do not generate changelog if no version bump ([95ce1b3](https://github.com/feryardiant/wpdev/commit/95ce1b3785b801f277576a5e25ba0074eb9ed1f6))
* **gulp:** skip browserSync on testing env ([dc78195](https://github.com/feryardiant/wpdev/commit/dc78195205fbacacbe271dc83a9803ba2c25f1f4))
* **theme:** add ability to load theme option from directory ([ecb5023](https://github.com/feryardiant/wpdev/commit/ecb5023b54f76c976c5ed43f24bc0634a810eeb2))
* **theme:** add dump() function only for dev ([185e82f](https://github.com/feryardiant/wpdev/commit/185e82fcc7e3407742b92baa2cba237f884c1b0c))
* **theme:** add html helper to generate & normalize elements ([dfaac97](https://github.com/feryardiant/wpdev/commit/dfaac97d4d061eabf4cff59c522c1f0430521891))
* **theme:** add Schema.org helper function ([342d1d8](https://github.com/feryardiant/wpdev/commit/342d1d81a0756d5ae8620c897b3070d0c0da0965))
* **theme:** make sure not throwing errors when object non-exists ([f9c02f0](https://github.com/feryardiant/wpdev/commit/f9c02f02f1d79aa85046ac8e41502b0f0148b70f))
* **theme:** make theme option accessible thru array ([3da344d](https://github.com/feryardiant/wpdev/commit/3da344d58d9109f63907576bd8ca0540b92a715f))
* **theme:** make use of Template class to render header ([83cb7f2](https://github.com/feryardiant/wpdev/commit/83cb7f274f12e9bbcfc9421bec5fe2ecdad48e82))
* **theme:** method Theme::get_option() will throw error if  undefined ([27f755a](https://github.com/feryardiant/wpdev/commit/27f755a1df53741db2f948f89f00d39774680aa0))
* **theme:** patch microdata ([ffbfd83](https://github.com/feryardiant/wpdev/commit/ffbfd837e194cd991dc94012e55f6140fe68405d))
* **workflow:** apply changes ed1ec77 & db15503 ([e9bba3f](https://github.com/feryardiant/wpdev/commit/e9bba3f06f8db5e3b1fd80e2a86fe5bcbe863fdf))
* **workflow:** bumb each plugins & theme version ([ed1ec77](https://github.com/feryardiant/wpdev/commit/ed1ec7768333f66cbb507c4aba5e0114281c17ef))


### Bug Fixes

* **build:** remove unintended task ([05172ee](https://github.com/feryardiant/wpdev/commit/05172eefb47b382a00da71cd48567d276c17a28d))
* **buildpack:** final patch for the buildpack ([d967daa](https://github.com/feryardiant/wpdev/commit/d967daa2d388a0eeae9dc4e1621be740de7ea2bd))
* **buildpack:** fix compile phase ([455dea3](https://github.com/feryardiant/wpdev/commit/455dea37eb07e5ac6dbff13aedcfba14aabbae22))
* **buildpack:** keep wp-cli.yml as is ([9aa216c](https://github.com/feryardiant/wpdev/commit/9aa216cfd60a2ac00441cdc2ee66f8d410078179))
* **buildpack:** update build_dir ([d3b7175](https://github.com/feryardiant/wpdev/commit/d3b71756e1bcd02f5efaf98da30e0a5fecda55a9))
* **deploy:** fix wp-cli installer ([9c5fa19](https://github.com/feryardiant/wpdev/commit/9c5fa19bcc48543f761724fec1e2bfe954a910e8))
* **deploy:** move redis-cache to plugins instead of mu-plugins ([4e87f66](https://github.com/feryardiant/wpdev/commit/4e87f66990bec1930c8933254f117114b87ec3ca))
* **gulp:** fix base package folder ([0e05191](https://github.com/feryardiant/wpdev/commit/0e051915ed248259139c384f1ebbde488f69a0c2)), closes [#24](https://github.com/feryardiant/wpdev/issues/24)
* **gulp:** fix incorrect task ([82e7b46](https://github.com/feryardiant/wpdev/commit/82e7b46083fd004df9617767fd6dc691c9c81b62))
* **heroku:** fix nginx config ([2612063](https://github.com/feryardiant/wpdev/commit/2612063287ae7da76aefbf48cbf715ad53deedc6))
* **heroku:** remove release command ([503369a](https://github.com/feryardiant/wpdev/commit/503369a841ba2958bf02429f7b04aee549444d26))
* **heroku:** require WP_DEFAULT_THEME & move to free dyno :sweat_smile: ([17b460c](https://github.com/feryardiant/wpdev/commit/17b460c858baaf699f9efcbbde21212e2f0872ef))
* **release:** fix [#32](https://github.com/feryardiant/wpdev/issues/32) ([7f0c61e](https://github.com/feryardiant/wpdev/commit/7f0c61ef6a299e9f0e0dbaaf07e05bfab20cf0b5))
* **theme:** do not remove empty attributes ([55889de](https://github.com/feryardiant/wpdev/commit/55889de51a40c7340c69bb85fa7bcd49c8f2ef00))
* **theme:** don't render sidebar if no widgets ([cc59299](https://github.com/feryardiant/wpdev/commit/cc59299f945c97d7376cd298065b051dbd9c1a37))
* **theme:** fix 404 page dispay ([4078ce8](https://github.com/feryardiant/wpdev/commit/4078ce83e69ff0c89567742c098259267a29abc0))

### [0.2.1](https://github.com/feryardiant/wpdev/compare/v0.2.0...v0.2.1) (2019-10-17)


### ⚠ BREAKING CHANGES

* **tests:** wdio.config.js file moved to tests directory, because why not? 😆

### Bug Fixes

* **build:** fixes [#18](https://github.com/feryardiant/wpdev/issues/18) ([4209078](https://github.com/feryardiant/wpdev/commit/4209078))
* **theme:** fix admin_enqueue scripts ([de08be4](https://github.com/feryardiant/wpdev/commit/de08be4))
* **theme:** fix script_enqueue on customizer screen ([e198d89](https://github.com/feryardiant/wpdev/commit/e198d89))


### Features

* **tests:** ability to start php server before e2e test ([e4e9d60](https://github.com/feryardiant/wpdev/commit/e4e9d60))
* **tests:** init unit testing ([ea25bda](https://github.com/feryardiant/wpdev/commit/ea25bda)), closes [#19](https://github.com/feryardiant/wpdev/issues/19)

## [0.2.0](https://github.com/feryardiant/wpdev/compare/v0.1.3...v0.2.0) (2019-10-04)


### Bug Fixes

* **workflow:** missing WP_HOME env on gulp build ([82153dd](https://github.com/feryardiant/wpdev/commit/82153dd))

### [0.1.3](https://github.com/feryardiant/wpdev/compare/v0.1.2...v0.1.3) (2019-10-02)


### Bug Fixes

* **workflow:** remove previous post-install script & update composer ([d406da8](https://github.com/feryardiant/wpdev/commit/d406da8))

### [0.1.2](https://github.com/feryardiant/wpdev/compare/v0.1.1...v0.1.2) (2019-10-02)


### Bug Fixes

* **workflow:** move salts generator to post-install script ([6580a41](https://github.com/feryardiant/wpdev/commit/6580a41))

### [0.1.1](https://github.com/feryardiant/wpdev/compare/v0.1.1-alpha.2...v0.1.1) (2019-10-02)


### Bug Fixes

* **deploy:** remove certain envvar on multisite setup ([d240917](https://github.com/feryardiant/wpdev/commit/d240917))
* **theme:** fixes [#14](https://github.com/feryardiant/wpdev/issues/14) ([ed7c446](https://github.com/feryardiant/wpdev/commit/ed7c446))
* **workflow:** infinite loop on gulp watch ([1535ff8](https://github.com/feryardiant/wpdev/commit/1535ff8)), closes [#12](https://github.com/feryardiant/wpdev/issues/12)


### Features

* **theme:** make sure all html output escaped ([330b6be](https://github.com/feryardiant/wpdev/commit/330b6be))
* **theme:** rename some template hooks according to ed7c446 ([574ba9b](https://github.com/feryardiant/wpdev/commit/574ba9b))

### [0.1.1-alpha.2](https://github.com/feryardiant/wpdev/compare/v0.1.1-alpha.1...v0.1.1-alpha.2) (2019-09-29)


### Bug Fixes

* **workflow:** execute git add after gulp build ([24c9666](https://github.com/feryardiant/wpdev/commit/24c9666))

### [0.1.1-alpha.1](https://github.com/feryardiant/wpdev/compare/v0.1.0...v0.1.1-alpha.1) (2019-09-29)


### Bug Fixes

* linting issues ([3712916](https://github.com/feryardiant/wpdev/commit/3712916))


### Features

* **workflow:** add lint-staged & commitlint ([6537a9a](https://github.com/feryardiant/wpdev/commit/6537a9a))
* **workflow:** generate zip file and ignore files on .distignore ([c3b9879](https://github.com/feryardiant/wpdev/commit/c3b9879))
* **workflow:** improve archive generator workflows ([6b5afca](https://github.com/feryardiant/wpdev/commit/6b5afca))
* **workflow:** make use of standard-version ([bc003a6](https://github.com/feryardiant/wpdev/commit/bc003a6))
