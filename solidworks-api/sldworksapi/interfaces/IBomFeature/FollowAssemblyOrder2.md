---
type: property
interface: IBomFeature
member: FollowAssemblyOrder2
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - drawings
  - features
related:
  - IBomFeature.KeepCurrentItemNumbers
keywords:
  - followassemblyorder2
  - ibomfeature
  - bom
  - feature
  - follow
  - assembly
  - order2
  - boolean
readonly: null
---

# IBomFeature.FollowAssemblyOrder2

Gets or sets whether the order of the item numbers in the BOM follows the order in which the assembly appears in the FeatureManager design tree.

## Signature

```csharp
System.Boolean FollowAssemblyOrder2 {get; set;}
```
## Parameters

None.

## Return Value

True for the item numbers in the BOM to follow the order in which the assembly appears in the FeatureManager design tree, false to not

## See Also

- `IBomFeature.KeepCurrentItemNumbers`