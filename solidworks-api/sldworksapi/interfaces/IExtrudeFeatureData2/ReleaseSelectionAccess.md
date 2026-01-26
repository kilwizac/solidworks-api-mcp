---
type: method
interface: IExtrudeFeatureData2
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - release
  - selection
  - access
  - void
  - create
  - extruded
  - thin
  - vba
  - determine
  - sketch
  - contour
  - region
  - using
  - contours
  - vb
  - net
---

# IExtrudeFeatureData2.ReleaseSelectionAccess

Releases access to the selections used to define the extrude feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IExtrudeFeatureData2::AccessSelections
or
IExtrudeFeatureData2::IAccessSelections
puts the model into a rollback state to allow access to the selections that define this feature. Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Create Extruded Thin Feature (VBA) (Create_Extruded_Thin_Feature_Example_VB.htm)
- Determine if Sketch Contour or Sketch Region (VBA) (Determine_if_Sketch_Contour_or_Sketch_Region_Example_VB.htm)
- Create Extrude Feature Using Sketch Contours (C#) (Create_Extrude_Feature_Using_Sketch_Contours_Example_CSharp.htm)
- Create Extrude Feature Using Sketch Contours (VB.NET) (Create_Extrude_Feature_Using_Sketch_Contours_Example_VBNET.htm)
- Create Extrude Feature Using Sketch Contours (VBA) (Create_Extrude_Feature_Using_Sketch_Contours_Example_VB.htm)