---
type: method
interface: IWizardHoleFeatureData2
member: GetEndConditionReference
returns: System.Object
parameters:
  -
    name: ReferenceType
    type: System.Int32
    description: Reference type as defined in swSelectionReferenceTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.EndCondition
  - IWizardHoleFeatureData2.Face
  - IWizardHoleFeatureData2.IFace
  - IWizardHoleFeatureData2.IVertex
  - IWizardHoleFeatureData2.SetEndConditionReference
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
  - getendconditionreference
  - wizard
  - hole
  - feature
  - data2
  - condition
  - reference
  - type
  - int32
  - object
  - create
  - using
  - sketch
  - points
  - vba
---

# IWizardHoleFeatureData2.GetEndConditionReference

Gets the reference entity that defines the end condition for this Hole Wizard feature.

## Signature

```csharp
System.Object GetEndConditionReference( 
   out System.Int32
ReferenceType
)
```
## Parameters

- `ReferenceType` (System.Int32): Reference type as defined in swSelectionReferenceTypes_e

## Return Value

Reference entity

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Create Holes Using Hole Wizard and Sketch Points (VBA) (Create_Holes_using_Hole_Wizard_and_Sketch_Points_Example_VB.htm)

## See Also

- `IWizardHoleFeatureData2.EndCondition`
- `IWizardHoleFeatureData2.Face`
- `IWizardHoleFeatureData2.IFace`
- `IWizardHoleFeatureData2.IVertex`
- `IWizardHoleFeatureData2.SetEndConditionReference`
- `IWizardHoleFeatureData2.Vertex`