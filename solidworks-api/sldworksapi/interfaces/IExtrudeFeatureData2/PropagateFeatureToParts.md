---
type: property
interface: IExtrudeFeatureData2
member: PropagateFeatureToParts
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IExtrudeFeatureData2.AssemblyFeatureScope
  - IExtrudeFeatureData2.AutoSelect
  - IExtrudeFeatureData2.AutoSelectComponents
keywords:
  - feature
  - scope
  - assemblies
  - see
  - also
  - iassemblydoc
  - propagatefeaturetoparts
  - iextrudefeaturedata2
  - extrude
  - data2
  - propagate
  - parts
  - boolean
readonly: null
---

# IExtrudeFeatureData2.PropagateFeatureToParts

Gets whether to propagate this assembly extrude feature to the parts that it affects in this model.

## Signature

```csharp
System.Boolean PropagateFeatureToParts {get; set;}
```
## Parameters

None.

## Return Value

True to propagate this assembly extrude feature to the parts that it affects in the model, false to not

## See Also

- `IExtrudeFeatureData2.AssemblyFeatureScope`
- `IExtrudeFeatureData2.AutoSelect`
- `IExtrudeFeatureData2.AutoSelectComponents`