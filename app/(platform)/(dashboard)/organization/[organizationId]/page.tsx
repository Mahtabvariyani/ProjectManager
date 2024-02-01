import { OrganizationSwitcher, auth } from "@clerk/nextjs"


const OrganizationIDPage = () => {
    const {userId, orgId} = auth()
  return <div> id </div>
}

export default OrganizationIDPage