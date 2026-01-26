---
type: method
interface: IExtrudeFeatureData2
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: Top-level document (see Remarks )
  -
    name: Component
    type: System.Object
    description: Component in which the feature is to be modified (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IExtrudeFeatureData2.IAccessSelections
keywords:
  - accessselections
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - determine
  - sketch
  - contour
  - region
  - vba
  - create
  - using
  - contours
  - vb
  - net
---

# IExtrudeFeatureData2.AccessSelections

Gains access to the selections used to define the extrusion feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   System.Object
TopDoc
,
   System.Object
Component
)
```
## Parameters

- `TopDoc` (System.Object): Top-level document (see Remarks )
- `Component` (System.Object): Component in which the feature is to be modified (see Remarks )

## Return Value

True if the selections were accessed successfully, false if not

## Remarks

To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is NULL
Assembly
TopDoc is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
if you modified the feature
IExtrudeFeatureData2::ReleaseSelectionAccess
if you did not

## Examples

- Determine If Sketch Contour or Sketch Region (VBA) (Determine_if_Sketch_Contour_or_Sketch_Region_Example_VB.htm)
- Create Extrude Feature Using Sketch Contours (C#) (Create_Extrude_Feature_Using_Sketch_Contours_Example_CSharp.htm)
- Create Extrude Feature Using Sketch Contours (VB.NET) (Create_Extrude_Feature_Using_Sketch_Contours_Example_VBNET.htm)
- Create Extrude Feature Using Sketch Contours (VBA) (Create_Extrude_Feature_Using_Sketch_Contours_Example_VB.htm)

## See Also

- `IExtrudeFeatureData2.IAccessSelections`