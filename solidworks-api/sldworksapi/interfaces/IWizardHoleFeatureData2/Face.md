---
type: property
interface: IWizardHoleFeatureData2
member: Face
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
  - IWizardHoleFeatureData2.IFace
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
  - wizard
  - hole
  - feature
  - data2
  - object
  - create
  - using
  - sketch
  - points
  - vba
readonly: null
---

# IWizardHoleFeatureData2.Face

Gets the end-condition face of the Hole Wizard feature.

## Signature

```csharp
System.Object Face {get; set;}
```
## Parameters

None.

## Return Value

Face

## Remarks

To set the end condition to a face, use
IWizardHoleFeatureData2::SetEndConditionReference
.
See
Accessing Selections that Define Features
for additional details on using this property

## Examples

- Create Holes Using Hole Wizard and Sketch Points (VBA) (Create_Holes_using_Hole_Wizard_and_Sketch_Points_Example_VB.htm)

## See Also

- `IWizardHoleFeatureData2.EndCondition`
- `IWizardHoleFeatureData2.GetEndConditionReference`
- `IWizardHoleFeatureData2.IFace`