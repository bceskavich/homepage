from pymongo import MongoClient

class DB(object):

    def __init__(self, db_name, collection):
        """
        Initiates w/ connection to Mongo & specified DB/Collection
        """
        self.connection = MongoClient()

        self.db = self.connection[db_name]
        self.coll = self.db[collection]

    def insert(self, doc):
        """
        Inserts provided document into established DB connection
        """
        try:
            self.coll.insert(doc)
            status = 1
        except:
            status = 0

        resp = {'status': status}

        return resp

    def get_work_list(self):
        """
        Returns list of work items for the portfolio (work.html) page
        """
        items = self.coll.find()

        if items:
            status = 1
            work_list = [item for item in items]
            work_list = sorted(work_list, key=lambda item: item['inserted'])
        else:
            status = 0
            work_list = None

        resp = {
            'status': status,
            'data'  : work_list
        }

        return resp

    def get_bio(self):
        """
        Returns info for homepage
        """
        bio = self.coll.find_one({'module': 'bio'})

        if bio:
            status = 1
            bio_text = bio['text']
        else:
            status = 0
            bio = None

        resp = {
            'status': status,
            'bio'   : bio_text
        }

        return resp

