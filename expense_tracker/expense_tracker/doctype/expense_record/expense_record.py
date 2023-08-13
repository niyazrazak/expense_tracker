# Copyright (c) 2023, niyasibnurazak@gmail.com and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ExpenseRecord(Document):
	def before_save(self):
		self.formatted_amount = self.amount if self.type == "Credit" else self.amount * -1
