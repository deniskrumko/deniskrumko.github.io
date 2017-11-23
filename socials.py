from life.society import Messenger, WebSite


class ProfileLinks(object):
    """Links to my profile on different websites (they are clickable!)."""
    github = WebSite(url='github.com/deniskrumko')
    gitlab = WebSite(url='gitlab.com/deniskrumko')
    stackoverflow = WebSite(url='stackoverflow.com/cv/deniskrumko')

    telegram = Messenger(user='@deniskrumko')

    class Meta:
        prefered_communication_way = 'telegram'
