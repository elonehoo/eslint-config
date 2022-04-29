import ifNewline from './rule/if-newline'
import importDedupe from './rule/import-dedupe'
import preferInlineTypeImport from './rule/prefer-inline-type-import'

export default {
  rules: {
    'if-newline': ifNewline,
    'import-dedupe': importDedupe,
    'prefer-inline-type-import': preferInlineTypeImport,
  },
}
