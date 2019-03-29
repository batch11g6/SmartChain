
from django.contrib import admin
from django.urls import path
from django.conf.urls import url


from .API.testConnection.test_connection import test_conn
from .API.Product.product_is_valid import check_validity
from .API.ProductDetails.collect_details import details_collector
from .API.ProductDetails.get_product_details import get_product_information
from .API.ValidateProduct.validate_product import pharma_validity
from .API.ProductReport.counterfeit_list import get_counterfeit_list


urlpatterns = [

    path('testconnection/', test_conn),
    path('api/productdetails/collectdetails/', details_collector),
    path('api/productdetails/getdetails', get_product_information),

    path('api/product/isvaild/', check_validity),
    path('api/validityproduct/pharmavalidity/', pharma_validity),
    path('api/counterfeitlist/counterfeiltcount/', get_counterfeit_list),

]
