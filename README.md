<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://v6-dev--twbs-bootstrap.netlify.app/docs/6.0/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Bootstrap Examples</h3>

<p align="center">
  Functional examples for building with Bootstrap using popular tools and frameworks.
  <br>
  <a href="https://v6-dev--twbs-bootstrap.netlify.app/docs/6.0/"><strong>Explore Bootstrap docs »</strong></a>
</p>

> [!IMPORTANT]
> This `v6-dev` branch previews [Bootstrap v6](https://github.com/twbs/bootstrap/tree/v6-dev), which is still in early alpha development. Expect frequent, breaking changes, and expect this branch to lag behind [`main`](https://github.com/twbs/examples/tree/main) (which tracks the stable Bootstrap 5 release) while both are maintained in parallel. See [issue #996](https://github.com/twbs/examples/issues/996) for background.
>
> The React example is temporarily removed from this branch: it depends on [React Bootstrap](https://react-bootstrap.github.io/), which has no Bootstrap v6-compatible release yet and renders its own v5 markup, so it can't work against v6's CSS. It'll come back once React Bootstrap ships v6 support, or as a rewrite using plain Bootstrap markup instead. Find it on [`main`](https://github.com/twbs/examples/tree/main/react-nextjs) in the meantime.

## Directory

- [Starter](starter/) – CDN links for our CSS and JS
- [Sass & JS](sass-js/) — Import Sass, Autoprefixer, Stylelint, and our JS bundle via npm
- [Sass & ESM JS](sass-js-esm/) — Import Sass, Autoprefixer, and Stylelint via npm, and then load our ESM JS with a shim
- [Color modes](color-modes/) – Color mode support and color mode picker built on our Sass & ESM JS example
- [Bootstrap Icons font](icons-font/) - Import and compile Sass, Stylelint, PurgeCSS, and our icon font
- [Parcel](parcel/) - Sass, JS via Parcel
- [Vite](vite/) - Sass, JS via Vite
- [Vue](vue/) - Sass, JS via Vue/Vite
- [Webpack](webpack/) - Import and bundle Sass and JS with Webpack
- PurgeCSS - import sass w/ purgecss and js via npm

## License

Licensed under the [MIT License](LICENSE).
