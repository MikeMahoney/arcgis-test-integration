import { ProgressBarInner, ProgressBarWrapper } from './ProgressBarStyles'

interface IProgressBar {
  progress: number // The percentage of the bar that will fill
}

const ProgressBar: React.FC<IProgressBar> = ({ progress }: IProgressBar) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarInner width={progress} />
    </ProgressBarWrapper>
  )
}

export default ProgressBar
