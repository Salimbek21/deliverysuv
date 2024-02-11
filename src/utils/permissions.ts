const permissions = localStorage.getItem('permissions')

export default function filterByPermission(permission: any) {
  return permissions?.includes(permission)
}
