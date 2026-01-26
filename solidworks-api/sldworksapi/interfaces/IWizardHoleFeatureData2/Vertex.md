---
type: property
interface: IWizardHoleFeatureData2
member: Vertex
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IWizardHoleFeatureData2.EndCondition
  - IWizardHoleFeatureData2.GetEndConditionReference
  - IWizardHoleFeatureData2.IVertex
keywords:
  - end
  - conditions
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - vertex
  - ivertex
  - wizard
  - hole
  - feature
  - data2
  - object
readonly: null
---

# IWizardHoleFeatureData2.Vertex

Gets the end-condition vertex for the Hole Wizard feature.

## Signature

```csharp
System.Object Vertex {get; set;}
```
## Parameters

None.

## Return Value

Vertex

## Remarks

To set the end condition to a vertex, use
IWizardHoleFeatureData2::SetEndConditionReference
.

## See Also

- `IWizardHoleFeatureData2.EndCondition`
- `IWizardHoleFeatureData2.GetEndConditionReference`
- `IWizardHoleFeatureData2.IVertex`