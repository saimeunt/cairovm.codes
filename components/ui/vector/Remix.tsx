import * as React from 'react'

function SvgRemix(props: any) {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
      }}
      xmlns="http://www.w3.org/2000/svg"
      overflow="hidden"
      {...props}
    >
      <defs>
        <symbol id="remix_svg__ri-arrow-down-s-line" viewBox="0 0 32 32">
          <path d="M16 17.563l6.6-6.6 1.885 1.885L16 21.333l-8.485-8.485L9.4 10.963z" />
        </symbol>
        <symbol id="remix_svg__ri-arrow-go-forward-line" viewBox="0 0 32 32">
          <path d="M24.229 9.333h-9.563a8 8 0 000 16h12V28h-12C8.775 28 3.999 23.224 3.999 17.333S8.775 6.666 14.666 6.666h9.563l-3.381-3.381L22.733 1.4l6.6 6.6-6.6 6.6-1.885-1.885 3.381-3.381z" />
        </symbol>
        <symbol id="remix_svg__ri-arrow-left-s-line" viewBox="0 0 32 32">
          <path d="M14.437 16l6.6 6.6-1.885 1.885L10.667 16l8.485-8.485L21.037 9.4z" />
        </symbol>
        <symbol id="remix_svg__ri-arrow-right-s-line" viewBox="0 0 32 32">
          <path d="M17.563 16l-6.6-6.6 1.885-1.885L21.333 16l-8.485 8.485-1.885-1.885z" />
        </symbol>
        <symbol id="remix_svg__ri-command-line" viewBox="0 0 32 32">
          <path d="M13.333 10.667h5.333v-2a4.667 4.667 0 114.667 4.667h-2v5.333h2a4.667 4.667 0 11-4.667 4.667v-2h-5.333v2a4.667 4.667 0 11-4.667-4.667h2v-5.333h-2a4.667 4.667 0 114.667-4.667v2zm-2.666 0v-2a2 2 0 10-2 2h2zm0 10.666h-2a2 2 0 102 2v-2zm10.666-10.666h2a2 2 0 10-2-2v2zm0 10.666v2a2 2 0 102-2h-2zm-8-8v5.333h5.333v-5.333h-5.333z" />
        </symbol>
        <symbol id="remix_svg__ri-contrast-2-line" viewBox="0 0 32 32">
          <path d="M16 29.333C8.636 29.333 2.667 23.364 2.667 16S8.636 2.667 16 2.667 29.333 8.636 29.333 16 23.364 29.333 16 29.333zm0-2.666c5.891 0 10.667-4.776 10.667-10.667S21.891 5.333 16 5.333 5.333 10.109 5.333 16 10.109 26.667 16 26.667zm-6.667-6.24a11.939 11.939 0 007.609-3.484 11.92 11.92 0 003.482-7.57l.002-.04c2.161 1.455 3.564 3.893 3.564 6.658a8 8 0 01-14.64 4.464l-.018-.029z" />
        </symbol>
        <symbol id="remix_svg__ri-fullscreen-line" viewBox="0 0 32 32">
          <path d="M26.667 4h2.667v8h-2.667V6.667h-5.333V4h5.333zM5.333 4h5.333v2.667H5.333V12H2.666V4h2.667zm21.334 21.333V20h2.667v8h-8v-2.667h5.333zm-21.334 0h5.333V28h-8v-8h2.667v5.333z" />
        </symbol>
        <symbol id="remix_svg__ri-gas-station-fill" viewBox="0 0 32 32">
          <path d="M4 25.333v-20C4 4.597 4.597 4 5.333 4h12c.736 0 1.333.597 1.333 1.333V16h2.667A2.667 2.667 0 0124 18.667V24a1.333 1.333 0 002.666 0v-9.333h-2.667a1.333 1.333 0 01-1.333-1.333V8.553l-2.209-2.209 1.885-1.885 6.6 6.6c.241.241.391.574.391.941v12.001a4 4 0 01-8 0v-5.333h-2.667v6.667h1.333v2.667H2.666v-2.667h1.333zM6.667 6.667v8H16v-8H6.667z" />
        </symbol>
        <symbol id="remix_svg__ri-git-branch-line" viewBox="0 0 32 32">
          <path d="M9.473 20.28A4.01 4.01 0 0112 24a4 4 0 11-5.361-3.764l.028-.009v-8.453c-1.568-.566-2.668-2.041-2.668-3.773a4 4 0 115.362 3.764l-.028.009v4.227a6.638 6.638 0 014-1.333h5.333a4.003 4.003 0 003.853-2.918l.007-.028a4.009 4.009 0 01-2.528-3.72 4 4 0 115.265 3.797l-.028.008c-.563 3.16-3.29 5.528-6.569 5.528h-5.333a4.003 4.003 0 00-3.853 2.919l-.007.028zM8 22.667a1.333 1.333 0 000 2.666 1.333 1.333 0 000-2.666zm0-16a1.333 1.333 0 000 2.666 1.333 1.333 0 000-2.666zm16 0a1.333 1.333 0 000 2.666 1.333 1.333 0 000-2.666z" />
        </symbol>
        <symbol id="remix_svg__ri-links-line" viewBox="0 0 32 32">
          <path d="M17.413 10.813L19.3 12.7c1.689 1.689 2.734 4.023 2.734 6.6s-1.045 4.911-2.734 6.6l-.472.471a9.334 9.334 0 01-13.2-13.2l1.887 1.887a6.667 6.667 0 109.428 9.429l.472-.472c1.206-1.206 1.952-2.873 1.952-4.713s-.746-3.507-1.952-4.713l-1.887-1.887 1.887-1.885zm8.958 8.015l-1.885-1.885a6.667 6.667 0 10-9.428-9.429l-.472.472c-1.206 1.206-1.952 2.873-1.952 4.713s.746 3.507 1.952 4.713l1.887 1.887-1.887 1.885-1.885-1.885c-1.689-1.689-2.734-4.023-2.734-6.6s1.045-4.911 2.734-6.6l.472-.471a9.334 9.334 0 0113.2 13.2z" />
        </symbol>
        <symbol id="remix_svg__ri-play-circle-line" viewBox="0 0 32 32">
          <path d="M16 29.333C8.636 29.333 2.667 23.364 2.667 16S8.636 2.667 16 2.667 29.333 8.636 29.333 16 23.364 29.333 16 29.333zm0-2.666c5.891 0 10.667-4.776 10.667-10.667S21.891 5.333 16 5.333 5.333 10.109 5.333 16 10.109 26.667 16 26.667zM14.163 11.22l6.505 4.336a.535.535 0 01.002.887l-.002.001-6.507 4.336a.533.533 0 01-.828-.442v-8.675a.533.533 0 01.831-.441l-.002-.001z" />
        </symbol>
        <symbol id="remix_svg__ri-search-line" viewBox="0 0 32 32">
          <path d="M24.041 22.156l5.711 5.709-1.887 1.887-5.709-5.711a11.871 11.871 0 01-7.472 2.625h-.018.001c-6.624 0-12-5.376-12-12s5.376-12 12-12 12 5.376 12 12v.017c0 2.838-.99 5.446-2.643 7.495l.018-.023zm-2.674-.989A9.27 9.27 0 0024 14.682v-.015.001a9.33 9.33 0 00-9.333-9.333 9.33 9.33 0 00-9.333 9.333 9.33 9.33 0 009.333 9.333h.015a9.273 9.273 0 006.487-2.635l-.002.002.2-.2z" />
        </symbol>
        <symbol id="remix_svg__ri-timer-line" viewBox="0 0 32 32">
          <path d="M23.491 7.957l1.937-1.937 1.885 1.885-1.937 1.937a11.927 11.927 0 012.625 7.49c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12c2.844 0 5.457.989 7.513 2.643l-.023-.018zM16 26.667a9.333 9.333 0 100-18.666 9.333 9.333 0 100 18.666zm-1.333-16h2.667v8h-2.667v-8zm-4-9.334h10.667V4H10.667V1.333z" />
        </symbol>
      </defs>
    </svg>
  )
}

export default SvgRemix