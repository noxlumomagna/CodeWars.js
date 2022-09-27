write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

function findAdmin(list, lang) {
  return list.filter(e=>e.language === lang && e.githubAdmin ==='yes')
}
