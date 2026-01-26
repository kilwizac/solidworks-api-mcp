---
type: enum
name: swAddComponentConfigOptions_e
description: Options for adding components to an assembly.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swAddComponentConfigOptions_e

Options for adding components to an assembly.

## Values

| Member | Value | Description |
|---|---|---|
| `swAddComponentConfigOptions_CurrentSelectedConfig` | 0 | = Add a part or assembly in its last saved configuration. (See IAssemblyDoc::AddComponent5 ) |
| `swAddComponentConfigOptions_NewConfigWithAllReferenceModels` | 1 | = Add an assembly with all of its components resolved. (See IAssemblyDoc::AddComponent5) |
| `swAddComponentConfigOptions_NewConfigWithAsmStructure` | 2 | = Add an assembly with all of its components suppressed. (See IAssemblyDoc::AddComponent5) |