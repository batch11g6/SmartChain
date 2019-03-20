from bigchaindb_driver import BigchainDB
import json

# HOST_LOCAL is bigchanin db serve ron the local machine
#
# HOST_GLOBAL is the Bigchain DB runnin gon the Global serve, Ie cloud (maintaiend by Bigchain)
# The Transaction hash has global scope the data can be retrived from any machine by usig 
# tranasction ID

CONFIG_FILE_PATH='./bigchain_config.json'
HOST='HOST_LOCAL'


def get_connection():
    with open(CONFIG_FILE_PATH) as f:
        data = dict(json.load(f))

    print("connecting to ",data[HOST])
    bdb=BigchainDB(data[HOST])
    return bdb


def get_host_name():
    with open(CONFIG_FILE_PATH) as f:
        data = dict(json.load(f))
        
    return data[HOST]