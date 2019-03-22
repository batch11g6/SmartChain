
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from ..Packages.auth_api import insert_number,check_number,delete_number
from ..Packages.auth_api import add_to_spurious_list,add_to_authenticated_pool
from ..Packages.auth_api import get_spurious_list,check_authenticated_pool
from ..Packages.auth_api import get_random_number
from ..Packages.blockdb import get_from_db


@csrf_exempt
def check_validity(request):
    isPresent=False
    status =False
    details=" "
    
    print(request.body)
    
    data=request.body.decode()
    Dict=json.loads(data)
    print(Dict['data'])
    hash_value=Dict['data']

    # Get corresponding random number for a given hash 
    number=str(get_random_number.get_random_number(hash_value))
    print('NUMBER',number)
    if number!=None:
        prod_name,location_lat,location_long,additional_details='Crocin',12.88,77.34,'hd28972'
        status=check_number.is_number_present(str(number))
        
        if status==True:
            delete_number.delete_number(number)
            add_to_authenticated_pool.add_to_pool(number,'valid')
            
            isPresent=True
            # return supply chain details instead 
            try:
                data_json=get_from_db.get_from_rest(hash_value)
            except:
                data_json={'result':'Unable to reach bigchain DB'}

            details="Not counterfeit"
        else:
            isPresent,details=check_authenticated_pool.check_auth_pool(number)
            if isPresent:
                try:
                    data_json=get_from_db.get_from_rest(hash_value)
                except:
                    data_json={'result':'Unable to reach bigchain DB'}
            else:
                print('add to black list')
                add_to_spurious_list.add_to_black_list(prod_name,location_lat,location_long,additional_details)
                # Return a warning message
                details='counterfeit'

                data_json={"result":"invalid product"}
    print(json.dumps(data_json,indent=3))
    return JsonResponse({
                    'isPresent':isPresent,
                    'details':details,
                    'data':data_json['asset']
                    })