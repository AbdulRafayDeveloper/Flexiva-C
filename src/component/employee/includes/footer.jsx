import React from 'react'
import { Helmet } from "react-helmet";

export default function EmployeeFooter() {
    
  return (
   <Helmet>
    
{/* 
<!-- *************
************ JavaScript Files *************
************* --> */}
{/* <!-- Required jQuery first, then Bootstrap Bundle JS --> */}
<script defer src="/employee/assets/js/jquery.min.js"></script>
<script defer src="/employee/assets/js/bootstrap.bundle.min.js"></script>
{/* 
<!-- *************
************ Vendor Js Files *************
************* --> */}


<script defer src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>
<script defer src="https://cdn.datatables.net/1.10.23/js/dataTables.bootstrap4.min.js"></script> 
<script defer src="https://cdn.datatables.net/select/1.7.0/js/dataTables.select.min.js"></script> 


{/* <!-- Overlay Scroll JS --> */}
<script defer src="/employee/assets/vendor/overlay-scroll/jquery.overlayScrollbars.min.js"></script>
<script defer src="/employee/assets/vendor/overlay-scroll/custom-scrollbar.js"></script>

{/* <!-- Toastify JS --> */}
<script defer src="/employee/assets/vendor/toastify/toastify.js"></script>
<script defer src="/employee/assets/vendor/toastify/custom.js"></script>

{/* <!-- Apex Charts --> */}
<script defer src="/employee/assets/vendor/apex/apexcharts.min.js"></script>
<script defer src="/employee/assets/vendor/apex/custom/home2/visitorsStats.js"></script>
<script defer src="/employee/assets/vendor/apex/custom/home2/customersData.js"></script>

{/* <!-- Vector Maps --> */}
<script defer src="/employee/assets/vendor/jvectormap/jquery-jvectormap-2.0.5.min.js"></script>
<script defer src="/employee/assets/vendor/jvectormap/world-mill-en.js"></script>
<script defer src="/employee/assets/vendor/jvectormap/gdp-data.js"></script>
<script defer src="/employee/assets/vendor/jvectormap/continents-mill.js"></script>
<script defer src="/employee/assets/vendor/jvectormap/in-merc.js"></script>
<script defer src="/employee/assets/vendor/jvectormap/custom/world-map-markers2.js"></script>

{/* <!-- Custom JS files --> */}
<script defer src="/employee/assets/js/custom.js"></script>

<script>
  
</script>
   </Helmet>
  )
}
