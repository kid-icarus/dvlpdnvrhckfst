


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>paper.js/src/paper.js at master · paperjs/paper.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe16.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="2xDSZg4xNKRn50L+mE9azTkL1p27KMVSSLgiTBT4QYA=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-c6ca95663cba6496fe7a5bdd98671b82cd956df3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-d35b02ba3940bde9b9f2c3e58f2dfb1ceff5886c.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-eae23340ab2a6ba722166712e699c87aaf60ad8f.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-a72a714a307592a4803dc7bed1e49523e71ff53e.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="babad972cb81ce7ba9200a9ccc34ae98">

        <link data-pjax-transient rel='permalink' href='/paperjs/paper.js/blob/5e8ec2066bf9bb46e7a5b1bbd5c75d240f65213e/src/paper.js'>
  <meta property="og:title" content="paper.js"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/paperjs/paper.js"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="paper.js - The Swiss Army Knife of Vector Graphics Scripting – Scriptographer ported to JavaScript and the browser, using HTML5 Canvas. Created by @lehni &amp; @puckey"/>

  <meta name="description" content="paper.js - The Swiss Army Knife of Vector Graphics Scripting – Scriptographer ported to JavaScript and the browser, using HTML5 Canvas. Created by @lehni &amp; @puckey" />

  <meta content="846856" name="octolytics-dimension-user_id" /><meta content="paperjs" name="octolytics-dimension-user_login" /><meta content="1338813" name="octolytics-dimension-repository_id" /><meta content="paperjs/paper.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1338813" name="octolytics-dimension-repository_network_root_id" /><meta content="paperjs/paper.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/paperjs/paper.js/commits/master.atom" rel="alternate" title="Recent Commits to paper.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production ">

    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fpaperjs%2Fpaper.js%2Fblob%2Fmaster%2Fsrc%2Fpaper.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="paperjs/paper.js"
      data-branch="master"
      data-sha="0011938753463f7bd18c97233354c962ce330225"
  >

    <input type="hidden" name="nwo" value="paperjs/paper.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Fpaperjs%2Fpaper.js"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards "
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/paperjs/paper.js/stargazers">
  3,031
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Fpaperjs%2Fpaper.js"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/paperjs/paper.js/network" class="social-count">
        293
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/paperjs" class="url fn" itemprop="url" rel="author"><span itemprop="title">paperjs</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/paperjs/paper.js" class="js-current-repository js-repo-home-link">paper.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/paperjs/paper.js" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /paperjs/paper.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/paperjs/paper.js/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /paperjs/paper.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>20</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/paperjs/paper.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /paperjs/paper.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>6</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/paperjs/paper.js/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /paperjs/paper.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/paperjs/paper.js/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /paperjs/paper.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/paperjs/paper.js/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /paperjs/paper.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/paperjs/paper.js.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/paperjs/paper.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/paperjs/paper.js" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/paperjs/paper.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>



                <a href="/paperjs/paper.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:f6911b415809b6b16b53c6ac83a4e9e1 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:f6911b415809b6b16b53c6ac83a4e9e1 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/paperjs/paper.js/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/master/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/nearest-point/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="nearest-point" data-skip-pjax="true" rel="nofollow" title="nearest-point">nearest-point</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.9/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.9" data-skip-pjax="true" rel="nofollow" title="v0.9.9">v0.9.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.8/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.8" data-skip-pjax="true" rel="nofollow" title="v0.9.8">v0.9.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.7/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.7" data-skip-pjax="true" rel="nofollow" title="v0.9.7">v0.9.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.6/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.6" data-skip-pjax="true" rel="nofollow" title="v0.9.6">v0.9.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.5/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.5" data-skip-pjax="true" rel="nofollow" title="v0.9.5">v0.9.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.4/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.4" data-skip-pjax="true" rel="nofollow" title="v0.9.4">v0.9.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.3/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.3" data-skip-pjax="true" rel="nofollow" title="v0.9.3">v0.9.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.2/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.2" data-skip-pjax="true" rel="nofollow" title="v0.9.2">v0.9.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.1/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.1" data-skip-pjax="true" rel="nofollow" title="v0.9.1">v0.9.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.9.0/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.9.0" data-skip-pjax="true" rel="nofollow" title="v0.9.0">v0.9.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.8.3/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.8.3" data-skip-pjax="true" rel="nofollow" title="v0.8.3">v0.8.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.8.2/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.8.2" data-skip-pjax="true" rel="nofollow" title="v0.8.2">v0.8.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.8.1/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.8.1" data-skip-pjax="true" rel="nofollow" title="v0.8.1">v0.8.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.8.0/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.8.0" data-skip-pjax="true" rel="nofollow" title="v0.8.0">v0.8.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.2.2/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.2" data-skip-pjax="true" rel="nofollow" title="v0.2.2">v0.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.2.1/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.1" data-skip-pjax="true" rel="nofollow" title="v0.2.1">v0.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.2.0/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.0" data-skip-pjax="true" rel="nofollow" title="v0.2.0">v0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/paperjs/paper.js/blob/v0.1.0/src/paper.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.1.0" data-skip-pjax="true" rel="nofollow" title="v0.1.0">v0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/paperjs/paper.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">paper.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/paperjs/paper.js/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">paper.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/paper.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/c8e5bdf2c8508e7f5e6da3c37bfcd246?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/lehni" rel="author">lehni</a></span>
    <time class="js-relative-date" datetime="2013-06-27T14:31:03-07:00" title="2013-06-27 14:31:03">June 27, 2013</time>
    <div class="commit-title">
        <a href="/paperjs/paper.js/commit/899ec1d3604937c25366ab3015cfec28f1d291fa" class="message" data-pjax="true" title="Make built version of paper.js for node work and work towards using that...

... in NPM.">Make built version of paper.js for node work and work towards using t…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="lehni" href="/paperjs/paper.js/commits/master/src/paper.js?author=lehni"><img height="20" src="https://secure.gravatar.com/avatar/c8e5bdf2c8508e7f5e6da3c37bfcd246?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="puckey" href="/paperjs/paper.js/commits/master/src/paper.js?author=puckey"><img height="20" src="https://secure.gravatar.com/avatar/6b42c6c432b27ed6c4a21e03c494b989?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="rdworth" href="/paperjs/paper.js/commits/master/src/paper.js?author=rdworth"><img height="20" src="https://secure.gravatar.com/avatar/d92ea7772f465256ad836de1ce642b37?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="Phara0h" href="/paperjs/paper.js/commits/master/src/paper.js?author=Phara0h"><img height="20" src="https://secure.gravatar.com/avatar/a92ac147c03b4c222cab4f9ea0440075?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/c8e5bdf2c8508e7f5e6da3c37bfcd246?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/lehni">lehni</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/6b42c6c432b27ed6c4a21e03c494b989?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/puckey">puckey</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/d92ea7772f465256ad836de1ce642b37?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/rdworth">rdworth</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/a92ac147c03b4c222cab4f9ea0440075?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/Phara0h">Phara0h</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>141 lines (119 sloc)</span>
        <span>3.942 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/paperjs/paper.js/raw/master/src/paper.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/paperjs/paper.js/blame/master/src/paper.js" class="button minibutton ">Blame</a>
          <a href="/paperjs/paper.js/commits/master/src/paper.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon js-entice" href=""
               data-entice="You must be signed in and on a branch to make or propose changes">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * Paper.js v*#=* options.version - The Swiss Army Knife of Vector Graphics Scripting.</span></div><div class='line' id='LC3'><span class="cm"> * http://paperjs.org/</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * Copyright (c) 2011 - 2013, Juerg Lehni &amp; Jonathan Puckey</span></div><div class='line' id='LC6'><span class="cm"> * http://lehni.org/ &amp; http://jonathanpuckey.com/</span></div><div class='line' id='LC7'><span class="cm"> *</span></div><div class='line' id='LC8'><span class="cm"> * Distributed under the MIT license. See LICENSE file for details.</span></div><div class='line' id='LC9'><span class="cm"> *</span></div><div class='line' id='LC10'><span class="cm"> * All rights reserved.</span></div><div class='line' id='LC11'><span class="cm"> *</span></div><div class='line' id='LC12'><span class="cm"> * Date: *#=* options.date</span></div><div class='line' id='LC13'><span class="cm"> *</span></div><div class='line' id='LC14'><span class="cm"> ***</span></div><div class='line' id='LC15'><span class="cm"> *</span></div><div class='line' id='LC16'><span class="cm"> * straps.js - Class inheritance library with support for bean-style accessors</span></div><div class='line' id='LC17'><span class="cm"> *</span></div><div class='line' id='LC18'><span class="cm"> * Copyright (c) 2006 - 2013 Juerg Lehni</span></div><div class='line' id='LC19'><span class="cm"> * http://lehni.org/</span></div><div class='line' id='LC20'><span class="cm"> *</span></div><div class='line' id='LC21'><span class="cm"> * Distributed under the MIT license.</span></div><div class='line' id='LC22'><span class="cm"> *</span></div><div class='line' id='LC23'><span class="cm"> ***</span></div><div class='line' id='LC24'><span class="cm"> *</span></div><div class='line' id='LC25'><span class="cm"> * acorn.js</span></div><div class='line' id='LC26'><span class="cm"> * http://marijnhaverbeke.nl/acorn/</span></div><div class='line' id='LC27'><span class="cm"> *</span></div><div class='line' id='LC28'><span class="cm"> * Acorn is a tiny, fast JavaScript parser written in JavaScript,</span></div><div class='line' id='LC29'><span class="cm"> * created by Marijn Haverbeke and released under an MIT license.</span></div><div class='line' id='LC30'><span class="cm"> *</span></div><div class='line' id='LC31'><span class="cm"> */</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="kd">var</span> <span class="nx">paper</span> <span class="o">=</span> <span class="k">new</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC34'><span class="c1">// Inline Bootstrap core (the Base class) inside the paper scope first:</span></div><div class='line' id='LC35'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;../components/straps/straps.js&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">exports</span><span class="o">:</span> <span class="kc">false</span> <span class="p">});</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'><span class="cm">/*#*/</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">stats</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;../components/stats.js/build/stats.min.js&#39;</span><span class="p">);</span></div><div class='line' id='LC39'><span class="cm">/*#*/</span> <span class="p">}</span> <span class="c1">// options.stats</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'><span class="cm">/*#*/</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">version</span> <span class="o">==</span> <span class="s1">&#39;dev&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC42'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;constants.js&#39;</span><span class="p">);</span></div><div class='line' id='LC43'><span class="cm">/*#*/</span> <span class="p">}</span> <span class="c1">// options.version == &#39;dev&#39;</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;core/Base.js&#39;</span><span class="p">);</span></div><div class='line' id='LC46'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;core/Callback.js&#39;</span><span class="p">);</span></div><div class='line' id='LC47'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;core/PaperScope.js&#39;</span><span class="p">);</span></div><div class='line' id='LC48'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;core/PaperScopeItem.js&#39;</span><span class="p">);</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;util/Formatter.js&#39;</span><span class="p">);</span></div><div class='line' id='LC51'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;util/Numerical.js&#39;</span><span class="p">);</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'><span class="c1">// Include Paper classes, which are later injected into PaperScope by setting</span></div><div class='line' id='LC54'><span class="c1">// them on the &#39;this&#39; object, e.g.:</span></div><div class='line' id='LC55'><span class="c1">// var Point = Base.extend(...);</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;basic/Point.js&#39;</span><span class="p">);</span></div><div class='line' id='LC58'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;basic/Size.js&#39;</span><span class="p">);</span></div><div class='line' id='LC59'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;basic/Rectangle.js&#39;</span><span class="p">);</span></div><div class='line' id='LC60'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;basic/Matrix.js&#39;</span><span class="p">);</span></div><div class='line' id='LC61'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;basic/Line.js&#39;</span><span class="p">);</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;project/Project.js&#39;</span><span class="p">);</span></div><div class='line' id='LC64'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;project/Symbol.js&#39;</span><span class="p">);</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;item/Item.js&#39;</span><span class="p">);</span></div><div class='line' id='LC67'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;item/Group.js&#39;</span><span class="p">);</span></div><div class='line' id='LC68'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;item/Layer.js&#39;</span><span class="p">);</span></div><div class='line' id='LC69'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;item/Shape.js&#39;</span><span class="p">);</span></div><div class='line' id='LC70'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;item/Raster.js&#39;</span><span class="p">);</span></div><div class='line' id='LC71'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;item/PlacedSymbol.js&#39;</span><span class="p">);</span></div><div class='line' id='LC72'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;item/HitResult.js&#39;</span><span class="p">);</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/Segment.js&#39;</span><span class="p">);</span></div><div class='line' id='LC75'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/SegmentPoint.js&#39;</span><span class="p">);</span></div><div class='line' id='LC76'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/Curve.js&#39;</span><span class="p">);</span></div><div class='line' id='LC77'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/CurveLocation.js&#39;</span><span class="p">);</span></div><div class='line' id='LC78'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/PathItem.js&#39;</span><span class="p">);</span></div><div class='line' id='LC79'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/Path.js&#39;</span><span class="p">);</span></div><div class='line' id='LC80'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/Path.Constructors.js&#39;</span><span class="p">);</span></div><div class='line' id='LC81'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/CompoundPath.js&#39;</span><span class="p">);</span></div><div class='line' id='LC82'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/PathFlattener.js&#39;</span><span class="p">);</span></div><div class='line' id='LC83'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/PathFitter.js&#39;</span><span class="p">);</span></div><div class='line' id='LC84'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;path/PathItem.Boolean.js&#39;</span><span class="p">);</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;text/TextItem.js&#39;</span><span class="p">);</span></div><div class='line' id='LC87'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;text/PointText.js&#39;</span><span class="p">);</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;style/Color.js&#39;</span><span class="p">);</span></div><div class='line' id='LC90'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;style/Gradient.js&#39;</span><span class="p">);</span></div><div class='line' id='LC91'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;style/GradientStop.js&#39;</span><span class="p">);</span></div><div class='line' id='LC92'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;style/Style.js&#39;</span><span class="p">);</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'><span class="cm">/*#*/</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">node</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;dom/node.js&#39;</span><span class="p">);</span></div><div class='line' id='LC96'><span class="cm">/*#*/</span> <span class="p">}</span> <span class="c1">// options.node</span></div><div class='line' id='LC97'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;dom/DomElement.js&#39;</span><span class="p">);</span></div><div class='line' id='LC98'><span class="cm">/*#*/</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">browser</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'><span class="c1">// DomEvent doesn&#39;t make sense outside of the browser (yet)</span></div><div class='line' id='LC100'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;dom/DomEvent.js&#39;</span><span class="p">);</span></div><div class='line' id='LC101'><span class="cm">/*#*/</span> <span class="p">}</span> <span class="c1">// options.browser</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;ui/View.js&#39;</span><span class="p">);</span></div><div class='line' id='LC104'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;ui/CanvasView.js&#39;</span><span class="p">);</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'><span class="cm">/*#*/</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">browser</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC107'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;ui/Event.js&#39;</span><span class="p">);</span></div><div class='line' id='LC108'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;ui/KeyEvent.js&#39;</span><span class="p">);</span></div><div class='line' id='LC109'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;ui/Key.js&#39;</span><span class="p">);</span></div><div class='line' id='LC110'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;ui/MouseEvent.js&#39;</span><span class="p">);</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;ui/Palette.js&#39;</span><span class="p">);</span></div><div class='line' id='LC113'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;ui/Component.js&#39;</span><span class="p">);</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;tool/ToolEvent.js&#39;</span><span class="p">);</span></div><div class='line' id='LC116'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;tool/Tool.js&#39;</span><span class="p">);</span></div><div class='line' id='LC117'><span class="cm">/*#*/</span> <span class="p">}</span> <span class="c1">// options.browser</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;canvas/CanvasProvider.js&#39;</span><span class="p">);</span></div><div class='line' id='LC120'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;canvas/BlendMode.js&#39;</span><span class="p">);</span></div><div class='line' id='LC121'><span class="cm">/*#*/</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">version</span> <span class="o">==</span> <span class="s1">&#39;dev&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;canvas/ProxyContext.js&#39;</span><span class="p">);</span></div><div class='line' id='LC123'><span class="cm">/*#*/</span> <span class="p">}</span> <span class="c1">// options.browser</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'><span class="cm">/*#*/</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">svg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC126'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;svg/SVGStyles.js&#39;</span><span class="p">);</span></div><div class='line' id='LC127'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;svg/SVGNamespaces.js&#39;</span><span class="p">);</span></div><div class='line' id='LC128'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;svg/SVGExport.js&#39;</span><span class="p">);</span></div><div class='line' id='LC129'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;svg/SVGImport.js&#39;</span><span class="p">);</span></div><div class='line' id='LC130'><span class="cm">/*#*/</span> <span class="p">}</span> <span class="c1">// options.svg</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;export.js&#39;</span><span class="p">);</span></div><div class='line' id='LC133'><span class="k">return</span> <span class="nx">paper</span><span class="p">;</span></div><div class='line' id='LC134'><span class="p">};</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'><span class="c1">// include PaperScript separately outside the main paper scope, due to its use</span></div><div class='line' id='LC137'><span class="c1">// of with(). This also simplifies making its inclusion optional.</span></div><div class='line' id='LC138'><span class="cm">/*#*/</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">paperscript</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'><span class="cm">/*#*/</span> <span class="nx">include</span><span class="p">(</span><span class="s1">&#39;core/PaperScript.js&#39;</span><span class="p">);</span></div><div class='line' id='LC140'><span class="cm">/*#*/</span> <span class="p">}</span> <span class="c1">// options.paperscript</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.04523s from fe16.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/paperjs/paper.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

