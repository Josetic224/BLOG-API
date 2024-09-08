'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">blog-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-861685ab4d4147d571079a4f75c7f2cf0227be1762cba4ceb50e9638133b43fe766a78cdfa20a97d695ea01cddd6cb348e32c2c5f638b2769613f2ed5e0811dd"' : 'data-bs-target="#xs-controllers-links-module-AppModule-861685ab4d4147d571079a4f75c7f2cf0227be1762cba4ceb50e9638133b43fe766a78cdfa20a97d695ea01cddd6cb348e32c2c5f638b2769613f2ed5e0811dd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-861685ab4d4147d571079a4f75c7f2cf0227be1762cba4ceb50e9638133b43fe766a78cdfa20a97d695ea01cddd6cb348e32c2c5f638b2769613f2ed5e0811dd"' :
                                            'id="xs-controllers-links-module-AppModule-861685ab4d4147d571079a4f75c7f2cf0227be1762cba4ceb50e9638133b43fe766a78cdfa20a97d695ea01cddd6cb348e32c2c5f638b2769613f2ed5e0811dd"' }>
                                            <li class="link">
                                                <a href="controllers/BlogController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-861685ab4d4147d571079a4f75c7f2cf0227be1762cba4ceb50e9638133b43fe766a78cdfa20a97d695ea01cddd6cb348e32c2c5f638b2769613f2ed5e0811dd"' : 'data-bs-target="#xs-injectables-links-module-AppModule-861685ab4d4147d571079a4f75c7f2cf0227be1762cba4ceb50e9638133b43fe766a78cdfa20a97d695ea01cddd6cb348e32c2c5f638b2769613f2ed5e0811dd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-861685ab4d4147d571079a4f75c7f2cf0227be1762cba4ceb50e9638133b43fe766a78cdfa20a97d695ea01cddd6cb348e32c2c5f638b2769613f2ed5e0811dd"' :
                                        'id="xs-injectables-links-module-AppModule-861685ab4d4147d571079a4f75c7f2cf0227be1762cba4ceb50e9638133b43fe766a78cdfa20a97d695ea01cddd6cb348e32c2c5f638b2769613f2ed5e0811dd"' }>
                                        <li class="link">
                                            <a href="injectables/BlogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-05a90736511fa4633bb4a4ed6837a6f033c9115812fe8cb30b474bc574dad3a883436361e9e827b72631d2146915c2e2a34ab7a35b122bfbcccbe3189ba5830d"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-05a90736511fa4633bb4a4ed6837a6f033c9115812fe8cb30b474bc574dad3a883436361e9e827b72631d2146915c2e2a34ab7a35b122bfbcccbe3189ba5830d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-05a90736511fa4633bb4a4ed6837a6f033c9115812fe8cb30b474bc574dad3a883436361e9e827b72631d2146915c2e2a34ab7a35b122bfbcccbe3189ba5830d"' :
                                        'id="xs-injectables-links-module-PrismaModule-05a90736511fa4633bb4a4ed6837a6f033c9115812fe8cb30b474bc574dad3a883436361e9e827b72631d2146915c2e2a34ab7a35b122bfbcccbe3189ba5830d"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});