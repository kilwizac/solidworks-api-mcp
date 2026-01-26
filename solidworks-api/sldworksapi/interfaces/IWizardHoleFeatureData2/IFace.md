---
type: property
interface: IWizardHoleFeatureData2
member: IFace
returns: Face2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IWizardHoleFeatureData2.EndCondition
  - IWizardHoleFeatureData2.Face
  - IWizardHoleFeatureData2.GetEndConditionReference
keywords:
  - end
  - conditions
  - face
  - see
  - also
  - iface2
  - holes
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - iface
  - wizard
  - hole
  - feature
  - data2
  - face2
readonly: null
---

# IWizardHoleFeatureData2.IFace

Gets the end-condition face of the Hole Wizard feature.

## Signature

```csharp
Face2 IFace {get; set;}
```
## Parameters

None.

## Return Value

Face

## Remarks

To set the end condition to a face, use
IWizardHoleFeatureData2::SetEndConditionReference
.

## See Also

- `IWizardHoleFeatureData2.EndCondition`
- `IWizardHoleFeatureData2.Face`
- `IWizardHoleFeatureData2.GetEndConditionReference`