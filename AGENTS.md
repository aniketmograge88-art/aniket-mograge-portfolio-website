<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep this portfolio on the index route with section anchors, because it is intentionally a single-page experience.
- Store the supplied project records and animation timings in the browser-safe portfolio module so the gallery and tests share one source of truth.
- Use global semantic design tokens and Button variants for all portfolio styling; follow the operating system for theme and reduced-motion preferences.
- Keep profile links noninteractive until real profile URLs are supplied, to avoid fabricated destinations.
- Prebundle React and the active Radix menu/slot dependencies together at startup to prevent late dependency optimization from mixing React module instances in the preview.

- Use nullable thumbnail records with name-only abstract fallbacks until matching user-approved pictures are available; never reuse a different project's image for a changed destination.
- Derive carousel offsets and counters from the shared project count so adding projects preserves wrapping and visibility.
