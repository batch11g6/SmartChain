from geopy.geocoders import Nominatim


def get_physical_address(lat,longi):
    cords=str(lat)+','+str(longi)
    geolocator = Nominatim(user_agent="specify_your_app_name_here")
    location = geolocator.reverse(cords)
    print(location.address)
    return location.address.split(',')[-4]

