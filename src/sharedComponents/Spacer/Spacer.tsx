import { SpacerWrapper } from './SpacerStyles'

interface ISpacer {
  height: number
}

const Spacer: React.FC<ISpacer> = ({ height }: ISpacer) => {
  return <SpacerWrapper height={height} />
}

export default Spacer
