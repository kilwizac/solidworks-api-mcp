---
type: property
interface: ISimpleHoleFeatureData2
member: AutoSelectComponents
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - ISimpleHoleFeatureData2.AssemblyFeatureScope
  - ISimpleHoleFeatureData2.PropagateFeatureToParts
keywords:
  - feature
  - scope
  - assemblies
  - see
  - also
  - iassemblydoc
  - autoselectcomponents
  - isimpleholefeaturedata2
  - simple
  - hole
  - data2
  - auto
  - select
  - components
  - boolean
readonly: null
---

# ISimpleHoleFeatureData2.AutoSelectComponents

Gets or sets whether to auto-select all components that this assembly simple hole feature affects in model.

## Signature

```csharp
System.Boolean AutoSelectComponents {get; set;}
```
## Parameters

None.

## Return Value

True to auto-select all affected components, false to not (use the selected components only or set ISimpleHoleFeatureData2::AutoSelect to true)

## See Also

- `ISimpleHoleFeatureData2.AssemblyFeatureScope`
- `ISimpleHoleFeatureData2.PropagateFeatureToParts`