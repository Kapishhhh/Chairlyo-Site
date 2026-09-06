export const loginSelector = {

  email_field: "#email",

  password_field: "//input[@placeholder='•••••••••']",

  signon_button: "button[type='submit']",

};

export const branchSelector = {

  save_changes:
    "//button[normalize-space()='Save Changes']",
  search:
    "//input[@placeholder='Search...']",

  add_branch:
    "(//button[contains(normalize-space(.),'Add Branch')])[1]",

  edit_branch:
    "//tbody/tr[2]//*[name()='svg']//*[name()='path' and contains(@d,'M18.375 2.')]",

  delete_branch:
    "//button[normalize-space()='Delete Branch']",

  icon_delete_branch:
    "//tbody/tr[1]//*[name()='svg']//*[name()='path' and contains(@d,'M19 6v14a2')]",


  type: "//input[@placeholder='Type Delete Branch here']",



  branch_name:
    "//input[@placeholder='e.g. Beauty Salon']",

  slug:
    "//input[@placeholder='e.g. beauty-salon']",

  branch_email:
    "//input[@id='email']",

  branch_phone:
    '[name="phone"]',

  status:
    "/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div/div[5]/button",

  active_status:
    "(//div[@role='option'])[2]",

  address:
    "//input[@id='address']",

  admin_first_name:
    "//input[@id='admin_first_name']",
  admin_last_name:
    "//input[@id='admin_last_name']",

  admin_email:
    "//input[@id='admin_email']",

  admin_password:
    "//input[@placeholder='•••••••••']",

  admin_phone:
    '[name="phone"]',
};


export const addprudct = {
  product:
    "//a[normalize-space()='Products']",
  add_product: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/button[1]",
  product_name: "//input[@id='name']",
  brand_name: "//input[@id='brand']",
  product_category: "/html/body/div/div/div[2]/main/div/div/div[2]/div/section[1]/div[2]/div[3]/div[1]/div/div/button",
  selling_price: "//input[@id='selling_price']",
  stock_quantity: "//input[@id='stock_quantity']",
  save_product: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]",
  catalog: "//span[normalize-space()='Catalog']",

}

export const addservice = {
  catalog: "//span[normalize-space()='Catalog']",

  service: "//a[normalize-space()='Services']",
  add_service: "/html/body/div/div/div[2]/main/div/div[1]/div[1]/div[2]/button",
  service_name: "//input[@id='name']",
  service_category: "/html/body/div/div/div[2]/main/div/div/div[2]/div/div[1]/div[2]/div/div/button/span",
  servicecategory_option: "//span[@class='whitespace-normal break-words']",
  price: "//input[@id='price']",
  duration: "//input[@id='duration']",
  save_service: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]",
}

export const sessionSelector = {
  session: "/html[1]/body[1]/div[1]/div[1]/div[1]/aside[1]/div[2]/div[2]/nav[1]/div[2]/a[1]",
  new_session: "//button[normalize-space()='New Session']",
  search_session: "//input[@placeholder='Enter name or phone number']",
  searchsessionoption: "/html[1]/body[1]/div[3]/form[1]/div[2]/div[1]/div[1]/div[1]/div[2]/button[1]",
  next_button: "//button[normalize-space()='Next']",
  firstaddtosession: "//button[@type='button'][normalize-space()='Add to Session']",
  assign_staff: "/html/body/div/div/div[2]/main/div/div/div[2]/div/form/div[1]/div[2]/div/div/div/button/span",
  staff: "/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]",
  firstservice: "//span[normalize-space()='Aalu Service']",
  price: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/input[1]",
  confirmaddsession: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]",
  lastname: "//input[@id='new_customer_last_name']",
  phone: "//input[@placeholder='Enter phone number']",
  next: "//button[normalize-space()='Next']",
  add_new_customer: "//button[normalize-space()='+ Add as new customer']",
  addservice:"/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[3]/button[1]",
  done:"//button[normalize-space()='Done']",

}

export const waitingSelector = {
  waiting: "/html[1]/body[1]/div[1]/div[1]/div[1]/aside[1]/div[2]/div[2]/nav[1]/div[1]/a[1]",
  addwaiting: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/button[1]",
  search: "//input[@placeholder='Enter name or phone number']",
  firstsearch:"/html[1]/body[1]/div[3]/form[1]/div[2]/div[1]/div[1]/div[1]/div[2]/button[1]",
  next: "//button[normalize-space()='Next']",
  staff:"/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]",
  staffoption:"//span[contains(text(),'SWS WSW')]",
  addtowaiting:"/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]",
  startsession:"//button[normalize-space()='Start Session']",
  completesession:"//button[normalize-space()='Complete Session']",
  completesessionoption:"//button[@type='submit']",
  process:"//button[normalize-space()='Process NRs. 500']",

  addasnewcustomer:"//button[normalize-space()='+ Add as new customer']",
  first:"//input[@id='new_customer_first_name']",
  last:"//input[@id='new_customer_last_name']",
  phone:"//input[@placeholder='Enter phone number']",
  addyourfirstservice: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[3]/button[1]",
  aluservice:"/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/span[1]",
  done:"//button[normalize-space()='Done']",

  startsession:"//button[normalize-space()='Start Session']",
  completesession:"//div//div//div//div//div//div//div[1]//div[2]//div[2]//button[2]",
  completesession1:"//button[@type='submit']",
  process:"/html[1]/body[1]/div[3]/form[1]/div[3]/button[2]",
  delete:"//*[name()='path' and contains(@d,'M19 6v14a2')]",
  process500:"//button[normalize-space()='Process NRs. 500']",
  cross:'svg[data-slot="dialog-close"]',
}


