
from django.contrib import admin
from django.urls import path
from django.conf.urls import url


from .API.testConnection.test_connection import test_conn
from .API.Product.product_is_valid import check_validity
from .API.ProductDetails.collect_details import details_collector
from .API.ProductDetails.get_product_details import get_product_information
from .API.ValidateProduct.validate_product import pharma_validity
from .API.ProductReport.counterfeit_list import get_counterfeit_list
from .API.ProductReport.counterfeit_cords import get_city_cords
from .API.ReportOfCity.report_of_city import get_count_by_city
from .API.PasswordAuth.validate_manufacturer import validate_manufacturer
from .API.UpdateProductScan.add_productscan_info import add_scan_info
from .API.UpdateProductScan.trace_product import get_product_status


urlpatterns = [

    path('testconnection/', test_conn),
    path('api/productdetails/collectdetails/', details_collector),
    path('api/productdetails/getdetails', get_product_information),
    path('api/validateManufacturer/validate/',validate_manufacturer),

    path('api/product/isvaild/', check_validity),
    path('api/validityproduct/pharmavalidity/', pharma_validity),
    path('api/counterfeitlist/counterfeiltcount/', get_counterfeit_list),
    path('api/counterfeitlist/counterfeitcords/',get_city_cords),
    path('api/counterfeitlist/citycount/',get_count_by_city),
    path('api/updateproductscan/add/',add_scan_info),
    path('api/tackproduct/track/',get_product_status),

]
