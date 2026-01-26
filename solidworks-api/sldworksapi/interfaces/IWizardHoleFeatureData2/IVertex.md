---
type: property
interface: IWizardHoleFeatureData2
member: IVertex
returns: Vertex
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
  - IWizardHoleFeatureData2.Vertex
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
readonly: null
---

# IWizardHoleFeatureData2.IVertex

Gets the end-condition vertex for the Hole Wizard feature.

## Signature

```csharp
Vertex IVertex {get; set;}
```
## Parameters

None.

## Return Value

Vertex

## Remarks

To if end condition is to a vertex, use
IWizardHoleFeatureData2::SetEndConditionReference
.

## See Also

- `IWizardHoleFeatureData2.EndCondition`
- `IWizardHoleFeatureData2.GetEndConditionReference`
- `IWizardHoleFeatureData2.Vertex`