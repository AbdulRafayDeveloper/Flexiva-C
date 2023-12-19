import React from 'react'
import { Helmet } from 'react-helmet'

export default function UserFooter() {
  return (
    <Helmet>
    <script defer src="/user/assets/js/jquery.min.js"></script>
    <script defer src="/user/assets/js/bootstrap.bundle.min.js"></script>

    <script defer src="/user/assets/vendor/overlay-scroll/jquery.overlayScrollbars.min.js"></script>
    <script defer src="/user/assets/vendor/overlay-scroll/custom-scrollbar.js"></script>

    <script defer src="/user/assets/vendor/calendar/js/main.min.js"></script>
    <script defer src="/user/assets/vendor/calendar/custom/daygrid-calendar.js"></script>

    <script defer src="/user/assets/js/custom.js"></script>
  </Helmet>
  )
}
