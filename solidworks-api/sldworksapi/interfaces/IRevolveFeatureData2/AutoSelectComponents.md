---
type: property
interface: IRevolveFeatureData2
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
  - IRevolveFeatureData2.AssemblyFeatureScope
  - IRevolveFeatureData2.PropagateFeatureToParts
keywords:
  - feature
  - scope
  - assemblies
  - see
  - also
  - iassemblydoc
  - autoselectcomponents
  - irevolvefeaturedata2
  - revolve
  - data2
  - auto
  - select
  - components
  - boolean
readonly: null
---

# IRevolveFeatureData2.AutoSelectComponents

Gets or sets whether to auto-select all components that this assembly revolve feature affects in model.

## Signature

```csharp
System.Boolean AutoSelectComponents {get; set;}
```
## Parameters

None.

## Return Value

True to auto-select all affected components, false to not (use the selected components only or set IRevolveFeatureData2::AutoSelect to true)

## See Also

- `IRevolveFeatureData2.AssemblyFeatureScope`
- `IRevolveFeatureData2.PropagateFeatureToParts`