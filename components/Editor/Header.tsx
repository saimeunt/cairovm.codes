import { useMemo, useContext } from 'react'

import Image from 'next/image'
import cairoLogo from 'public/cairo_logo.png'
import Select, { OnChangeValue } from 'react-select'

import { CodeType, AppUiContext } from '../../context/appUiContext'

type Props = {
  codeType: string | undefined
  onCodeTypeChange: (option: OnChangeValue<any, any>) => void
}

const codeLangOptions = Object.keys(CodeType).map((lang) => ({
  value: lang,
  label: lang,
}))

const EditorHeader = ({ codeType, onCodeTypeChange }: Props) => {
  const { isFullScreen } = useContext(AppUiContext)

  const codeTypeValue = useMemo(
    () => ({
      value: codeType,
      label: codeType,
    }),
    [codeType],
  )

  return (
    <div className="flex justify-between items-center w-full">
      {isFullScreen ? (
        <Image src={cairoLogo} width={20} height={20} alt="cairo" />
      ) : (
        <h3 className="font-semibold text-md hidden xl:inline-flex items-center">
          <span>Cairo VM Playground</span>
        </h3>
      )}
      <div className="flex items-center justify-between w-full xl:w-auto">
        <Select
          onChange={onCodeTypeChange}
          options={codeLangOptions}
          value={codeTypeValue}
          isSearchable={false}
          classNamePrefix="select"
          menuPlacement="auto"
          instanceId="headerSelect"
        />
      </div>
    </div>
  )
}

export default EditorHeader
