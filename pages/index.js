import Amplify from 'aws-amplify'
import { Select } from 'antd'

import Link from 'next/link'
export default () => (
  <div>
    <Link href='/about'><a>About</a></Link>
    <Select />
  </div>
)
