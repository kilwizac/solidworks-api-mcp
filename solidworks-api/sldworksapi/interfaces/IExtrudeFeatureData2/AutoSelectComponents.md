---
type: property
interface: IExtrudeFeatureData2
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
  - IExtrudeFeatureData2.AssemblyFeatureScope
  - IExtrudeFeatureData2.PropagateFeatureToParts
keywords:
  - feature
  - scope
  - assemblies
  - see
  - also
  - iassemblydoc
  - autoselectcomponents
  - iextrudefeaturedata2
  - extrude
  - data2
  - auto
  - select
  - components
  - boolean
readonly: null
---

# IExtrudeFeatureData2.AutoSelectComponents

Gets or sets whether to auto-select all components that this assembly extrude feature affects in model.

## Signature

```csharp
System.Boolean AutoSelectComponents {get; set;}
```
## Parameters

None.

## Return Value

True to auto-select all affected components, false to not (use the selected components only or set IExtrudeFeatureData2::AutoSelect to true)

## See Also

- `IExtrudeFeatureData2.AssemblyFeatureScope`
- `IExtrudeFeatureData2.PropagateFeatureToParts`