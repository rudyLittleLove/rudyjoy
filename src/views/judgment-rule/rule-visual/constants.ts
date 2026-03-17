export interface RuleGroup {
  value: string
}

export enum AndOr {
  Or = 'Or',
  And = 'And',
}

export const AndOrLabel = {
  [AndOr.Or]: '||',
  [AndOr.And]: '&&',
}

export interface RuleItemBO {
  key?: string
  parentRuleGroupId: string | null
  ruleGroupId: string | null
  ruleListAndor: AndOr | null
  ruleGroupAndor: string | null
  children: RuleItemBO[] | null
  ruleGroupList: RuleGroup[] | null
}
