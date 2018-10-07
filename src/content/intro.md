---
nextText: 'Core concepts'
nextUrl: '/docs/intro/concepts'
---

# 什么是 Ionic 框架？

<!-- TOC goes here -->

<p class="intro" markdown="1">
Ionic 框架是一套开源的 UI 组件库。通过借助 Ionic 及其背后的 Web 技术（HTML, CSS 和 JavaScript），可以构建高性能，高质量的移动及桌面应用程序。
</p>
<p class="intro" markdown="1">
Ionic 框架专注于前端用户体验，以及应用程序的 UI 交互（其中包括了控制、交互、手势、动画）。它学起来很简单，并且可以与其他库和框架有机地结合起来（如 Angular）。若是使用其自带的简易脚本，甚至能不依赖任何前端框架独立使用。
</p>
<p class="intro" markdown="1">
目前，Ionic 框架提供了开箱即用的 <a href="https://angular.io/" target="_blank">Angular</a> 支持，而对 <strong>Vue</strong> 及 <strong>React</strong> 的支持则还在开发之中。如果你想在入坑之前了解更多关于 Ionic 框架的基础知识，可以观看我们制作的一段<a href="https://youtu.be/p3AN3igqiRc" target="_blank">介绍视频</a>。
</p>

## 目标

### 跨平台

构建并部署可跨越多个平台运行的应用程序，其中包括了 iOS, Android, 桌面端，以及 Progressive Web App 形式的 Web 端 - 所有这些都仅仅只依赖同一个代码库。一次编码， 随处运行。

### 基于 Web 标准

Ionic 框架基于可靠、[标准化的 Web 技术](/docs/faq/glossary#web-standards)之上：HTML, CSS, 以及 JavaScript，使用了现代的
Web API（如 Custom Elements 和 Shadow DOM）。正因如此，Ionic 组件拥有稳定的 API，而不是某个平台供应商一时兴起的产物。

### 设计精美

干净，简洁，且实用。Ionic 
框架旨在在所有平台上都能开箱即用、美轮美奂。其内置了经过预先设计的组件、字体、互动范例，以及一套优雅（并且可扩展）的基础主题。

### 简单

Ionic 框架在设计过程之中就考虑了简单性，因此创造 Ionic 应用程序是一件十分有趣的事情。它易于学习，几乎任何拥有 Web 开发技能的人都可以使用。

## 许可证

Ionic 框架是一个免费并且开源的项目，采用宽松的 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 许可证</a>进行发布。这也就意味着它可以被免费地用于个人及商业项目中。许多流行的开源项目，比如 jQuery 以及 Ruby on Rails 都是使用 MIT 许可进行授权的。

而本文档的内容（位于 <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> 仓库）则是基于 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 许可证</a>授权发布。

## Ionic CLI

借助 Ionic 官方提供的 [Ionic CLI](/docs/cli/overview) 脚手架，开发者可以快速搭建 Ionic 应用程序，并使用其自带的大量实用命令行工具。除了安装和更新 Ionic 之外，该脚手架也内置了开发服务器、构建及调试工具等。如果你是 [Ionic Pro](#ionic-pro) 用户，还可以使用该脚手架在云端构建部署 Ionic 应用程序，以及管理 Ionic 账户。

## 框架兼容性

虽然过去所发布的 Ionic 版本都依赖于 Angular，但经过 V4 版本的重写，Ionic 框架既可以作为一个独立的 Web Component 库，也可以集成最新的 JavaScript 框架（如 Angular）。如今的 Ionic 
可被用在大多数现代前端框架中（其中就包括了 React 和 Vue），尽管某些框架需要一些额外的处理才获得完整的 Web Component 支持。

### JavaScript

不依赖任何前端框架独立使用，是 Ionic 4 的主要目标之一。This means the core components can work standalone with just a script tag in a web page. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Ionic as a standalone library in a single page even in a context like WordPress.

### Angular

Angular has always been at the center of what makes Ionic great. While the core components have been written to work as a standalone Web Component library, the `@ionic/angular` package makes integration with the Angular ecosystem a breeze. `@ionic/angular` includes all the functionality that Angular developers would expect coming from Ionic 2/3, and integrates with core Angular libraries, like the Angular router.

### Future Support

Support for other frameworks are expected in future release. Currently official bindings for Vue and React are being developed, though some components Just Work out of the box in those frameworks.

## Ionic Framework V4+

Ionic Framework V4 is a major advance in the underlying technology and capabilities of the project, with a focus on performance, compatibility, and overall extensibility. Although V4 still integrates deeply with Angular through the `@ionic/angular` package, it is now also framework-agnostic, meaning it can work with any other JavaScript framework (Vue, React, Preact, etc), or with no framework at all.

By moving to web standards, V4 allows the core of Ionic to rely on the standard component model supported in modern browsers, rather than a framework-specific model. This can mean faster load time, better performance, and less overall code.

## Ionic Pro

To help manage Ionic apps throughout their lifecycle, we also offer a commercial app platform for production apps called <a href="https://ionicframework.com/pro" target="_blank">Ionic Pro</a>, which is <strong>separate from the open source Framework.</strong>

Ionic Pro helps developers and teams monitor and track runtime errors, compile native app builds, and deploy live code updates to Ionic apps from a centralized dashboard. Pro requires an <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> and comes with a free “Starter” plan for those interested in playing around with some of its features. Optional upgrades to paid plans for more advanced capabilities and scale are available as well.

## Ecosystem

Ionic Framework is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere.

### Join the Community

There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> A lively place for devs to meet and chat in real time.
* <a href="https://twitter.com/Ionicframework" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
* <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> Write a technical blog or share your story with the Ionic community.
