import type { RuleItemBO } from './constants'

// 所有数据 添加key
export function setKey(data: RuleItemBO): RuleItemBO {
  return {
    ...data,
    key: `${Date.now()}`,
    children: data?.children?.map((v: RuleItemBO) => setKey(v)) || null,
  }
}

// 所有数据 移除key
export function removeKey(data: RuleItemBO): RuleItemBO {
  const newData = {
    ...data,
    children: data?.children?.map((v: RuleItemBO) => removeKey(v)) || null,
  }
  delete newData.key
  return newData
}

// 采集点 点位类型、加工点 点位类型 转 为运维项目可用类型（且首字母大写，其余字母小写）
export function capitalizeFirstLetter(str: string) {
  const type
    = {
      LONG: 'DOUBLE',
      INT: 'DOUBLE',
      SHORT: 'DOUBLE',
      BYTE: 'DOUBLE',
      DOUBLE: 'DOUBLE',
      FLOAT: 'DOUBLE',
      STRING: 'STRING',
      BOOLEAN: 'BOOL',
    }[str] || str
  return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
}
