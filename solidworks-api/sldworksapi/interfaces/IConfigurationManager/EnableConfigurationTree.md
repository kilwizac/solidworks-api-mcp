---
type: property
interface: IConfigurationManager
member: EnableConfigurationTree
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - update
  - configurationmanager
  - tree
  - enableconfigurationtree
  - iconfigurationmanager
  - configuration
  - manager
  - enable
  - boolean
readonly: null
---

# IConfigurationManager.EnableConfigurationTree

Gets or sets whether to update the ConfigurationManager tree.

## Signature

```csharp
System.Boolean EnableConfigurationTree {get; set;}
```
## Parameters

None.

## Return Value

True to update the ConfigurationManager tree, false to not (see Remarks )

## Remarks

This property is set to true by default. Setting this property to false will increase the performance of SOLIDWORKS when performing multiple operations that affect the ConfigurationManager tree, such as deleting configurations. However, set this property back to true after performing such operations so that the ConfigurationManager tree will update thereafter.