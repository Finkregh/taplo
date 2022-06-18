import{_ as a,o as e,c as s,a as t}from"./app.3f800dbf.js";const g=JSON.parse('{"title":"Language Server","description":"","frontmatter":{},"headers":[{"level":2,"title":"Via Standard i/o","slug":"via-standard-i-o"},{"level":2,"title":"Via TCP","slug":"via-tcp"}],"relativePath":"cli/usage/language-server.md","lastUpdated":1655552391000}'),n={name:"cli/usage/language-server.md"},i=t(`<h1 id="language-server" tabindex="-1">Language Server <a class="header-anchor" href="#language-server" aria-hidden="true">#</a></h1><p>The TOML language server can be used via the CLI and it supports communication via standard i/o or TCP.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The language server is not part of the default builds, and is not available if Taplo was installed via NPM.</p><p>Consult the build or installation documentation on how to enable the functionality.</p></div><h2 id="via-standard-i-o" tabindex="-1">Via Standard i/o <a class="header-anchor" href="#via-standard-i-o" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">taplo lsp stdio</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>In this mode Taplo expects messages from the standard input, and will print messages intended for the client to the standard output.</p><h2 id="via-tcp" tabindex="-1">Via TCP <a class="header-anchor" href="#via-tcp" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">taplo lsp tcp --address 0.0.0.0:9181</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The server will listen on the given TCP address.</p><p>Multiple clients are not supported.</p>`,10),l=[i];function r(o,d,p,c,u,h){return e(),s("div",null,l)}var _=a(n,[["render",r]]);export{g as __pageData,_ as default};
