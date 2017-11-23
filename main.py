from django.db.models import Backend, User
from geolocation.google_maps import GoogleMaps


class DenisKrumko(object):
    """Some information about one person (me).

    Welcome to my small web page, guys! I hope you understand something here.
    Yes, this is Python. If you don't want to read this mess - <click_here>.

    """
    user = User(name='Denis Krumko', email='dkrumko@gmail.com')
    user.location = GoogleMaps(town='Saint Petersburg', country='Russia')

    user.stack = ('Python', 'Django', 'Django Rest Framework')
    user.likes = ('Good code + PEP8', 'Making tests', 'Documentation')
    user.places = {
        '2016 - 2017': Backend(at='Saritasa'),
        '2017 - ... ': Backend(at='Home Credit Bank'),
    }
