---
type: property
interface: IExtrudeFeatureData2
member: Contours
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetContoursCount
  - IExtrudeFeatureData2.IGetContours
  - IExtrudeFeatureData2.ISetContours
keywords:
  - contour
  - types
  - features
  - contours
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - object
  - determine
  - sketch
  - region
  - vba
  - create
  - using
  - vb
  - net
readonly: null
---

# IExtrudeFeatureData2.Contours

Gets and sets the selected contours in this extrude feature.

## Signature

```csharp
System.Object Contours {get; set;}
```
## Parameters

None.

## Return Value

Array of contours (see Remarks )

## Remarks

The array passed to or returned by this property can contain both
ISketchContour
and
ISketchRegion
objects. This method returns an emtpy array if sketch contours or sketch regions do not exist.
NOTE:
An extrude feature has one, and only one, sketch. If the sketch does not contain sketch contours or sketch regions, then an empty array is returned. To get the sketch of an extrude feature that does not contain sketch contours or sketch regions, you can traverse the FeatureManager design tree to get the parent sketch of the extrude feature.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Determine If Sketch Contour or Sketch Region (VBA) (Determine_if_Sketch_Contour_or_Sketch_Region_Example_VB.htm)
- Create Extrude Feature Using Sketch Contours (C#) (Create_Extrude_Feature_Using_Sketch_Contours_Example_CSharp.htm)
- Create Extrude Feature Using Sketch Contours (VB.NET) (Create_Extrude_Feature_Using_Sketch_Contours_Example_VBNET.htm)
- Create Extrude Feature Using Sketch Contours (VBA) (Create_Extrude_Feature_Using_Sketch_Contours_Example_VB.htm)

## See Also

- `IExtrudeFeatureData2.GetContoursCount`
- `IExtrudeFeatureData2.IGetContours`
- `IExtrudeFeatureData2.ISetContours`