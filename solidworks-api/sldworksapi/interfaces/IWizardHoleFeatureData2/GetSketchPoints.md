---
type: method
interface: IWizardHoleFeatureData2
member: GetSketchPoints
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IWizardHoleFeatureData2.GetSketchPointCount
  - IWizardHoleFeatureData2.IGetSketchPoints
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - sketch
  - points
  - getsketchpoints
  - wizard
  - hole
  - feature
  - data2
  - object
  - add
  - vb
  - net
  - vba
---

# IWizardHoleFeatureData2.GetSketchPoints

Gets the center-hole sketch points in this Hole Wizard feature.

## Signature

```csharp
System.Object GetSketchPoints()
```
## Parameters

None.

## Return Value

Array of center-hole sketch points

## Remarks

To add or remove sketch points in a Hole Wizard feature sketch (also called a location sketch), you must edit the sketch. After editing the sketch, update the Hole Wizard feature by calling
IModelDoc2::ForceRebuild3
.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Get and Add Sketch Points in Hole Wizard Feature (C#) (Get_Sketch_Points_in_Wizard_Hole_Example_CSharp.htm)
- Get and Add Sketch Points in Hole Wizard Feature (VB.NET) (Get_Sketch_Points_in_Wizard_Hole_Example_VBNET.htm)
- Get and Add Sketch Points in Hole Wizard Feature (VBA) (Get_Sketch_Points_in_Wizard_Hole_Example_VB.htm)

## See Also

- `IWizardHoleFeatureData2.GetSketchPointCount`
- `IWizardHoleFeatureData2.IGetSketchPoints`