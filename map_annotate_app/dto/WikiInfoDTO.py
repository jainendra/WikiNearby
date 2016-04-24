class WikiInfoDTO:
    def __init__(self):
        """
        Constructor to initialize this object.
        """
        self.location = None
        self.title = ""
        self.link = ""
        self.info = ""
        self.pageid = ""

    def json_dict(self):
        """
        Returns dictionary to be used for building JSON response.
        :return: A python dictionary.
        """
        return_dict = dict()
        return_dict['title'] = self.title
        return_dict['link'] = self.link
        return_dict['info'] = self.info
        return_dict['pageid'] = self.pageid
        return_dict['location'] = self.location.json_dict()
        return return_dict