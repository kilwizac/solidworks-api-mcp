---
type: method
interface: IExtrudeFeatureData2
member: GetContoursCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.Contours
  - IExtrudeFeatureData2.ISetContours
keywords:
  - contour
  - types
  - features
  - getcontourscount
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - contours
  - count
  - int32
  - create
  - using
  - sketch
  - vb
  - net
  - vba
---

# IExtrudeFeatureData2.GetContoursCount

Gets the number of selected contours for this extrude feature.

## Signature

```csharp
System.Int32 GetContoursCount()
```
## Parameters

None.

## Return Value

Number of selected contours

## Remarks

This method returns the total number of sketch contours and sketch regions used in the base sketch for this feature.
Call this method before calling
IExtrudeFeatureData2::IGetContours
.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Create Extrude Feature Using Sketch Contours (C#) (Create_Extrude_Feature_Using_Sketch_Contours_Example_CSharp.htm)
- Create Extrude Feature Using Sketch Contours (VB.NET) (Create_Extrude_Feature_Using_Sketch_Contours_Example_VBNET.htm)
- Create Extrude Feature Using Sketch Contours (VBA) (Create_Extrude_Feature_Using_Sketch_Contours_Example_VB.htm)

## See Also

- `IExtrudeFeatureData2.Contours`
- `IExtrudeFeatureData2.ISetContours`