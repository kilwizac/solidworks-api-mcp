---
type: property
interface: IWizardHoleFeatureData2
member: MinorDiameter
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.MajorDiameter
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - diameter
  - tapered
  - minordiameter
  - wizard
  - hole
  - feature
  - data2
  - minor
  - double
  - create
  - using
  - sketch
  - points
  - vba
readonly: null
---

# IWizardHoleFeatureData2.MinorDiameter

Gets or sets the Hole Wizard feature minor diameter for a tapered hole.

## Signature

```csharp
System.Double MinorDiameter {get; set;}
```
## Parameters

None.

## Return Value

Minor diameter for a tapered hole

## Remarks

This property is relevant only for swTapered and swTaperedDrilled holes.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Create Holes Using Hole Wizard and Sketch Points (VBA) (Create_Holes_using_Hole_Wizard_and_Sketch_Points_Example_VB.htm)

## See Also

- `IWizardHoleFeatureData2.MajorDiameter`