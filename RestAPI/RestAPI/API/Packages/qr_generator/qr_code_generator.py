import pyqrcode
import argparse
import os

CWD=os.path.dirname(os.path.realpath(__file__))
FOLDER_PATH= CWD+'/qrcodes/svg/'


def create_svg_qr_code(encode_string,filename):
    url = pyqrcode.create(encode_string)
    url.svg(FOLDER_PATH+filename+'.svg', scale=8)


if __name__=='__main__':
    parser = argparse.ArgumentParser(description="QR code generator")
    parser.add_argument('-i', '--inputstring', type=str, required=True ,help="Input string")
    parser.add_argument('-f', '--filename', type=str, required=True,help="Name of SVG file")
    args = parser.parse_args()

    inputstring = args.inputstring
    filename=args.filename

    create_svg_qr_code(inputstring,filename)