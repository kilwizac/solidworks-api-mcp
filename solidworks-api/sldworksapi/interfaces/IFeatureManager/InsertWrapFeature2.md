---
type: method
interface: IFeatureManager
member: InsertWrapFeature2
returns: Feature
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of wrap as defined in swWrapSketchType_e
  -
    name: Thickness
    type: System.Double
    description: Thickness; 0.00001 (thinnest) - 10000 (thickest)
  -
    name: ReverseDir
    type: System.Boolean
    description: True to reverse the direction of the wrap, false to not
  -
    name: Method
    type: System.Int32
    description: Type of wrap method as defined in swWrapMethods_e
  -
    name: MeshFactor
    type: System.Int32
    description: Accuracy of flattened triangle mesh; 1 (lowest) - 10 (highest)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWrapSketchFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - wrap
  - wrapsketchfeaturedata
  - iwrapsketchfeaturedata
  - insertwrapfeature2
  - ifeaturemanager
  - manager
  - insert
  - feature2
  - type
  - int32
  - thickness
  - double
  - reverse
  - dir
  - boolean
  - mesh
  - factor
  - create
  - multiple
  - faces
  - vb
  - net
  - vba
---

# IFeatureManager.InsertWrapFeature2

Inserts a wrap feature.

## Signature

```csharp
Feature InsertWrapFeature2( 
   System.Int32
Type
,
   System.Double
Thickness
,
   System.Boolean
ReverseDir
,
   System.Int32
Method
,
   System.Int32
MeshFactor
)
```
## Parameters

- `Type` (System.Int32): Type of wrap as defined in swWrapSketchType_e
- `Thickness` (System.Double): Thickness; 0.00001 (thinnest) - 10000 (thickest)
- `ReverseDir` (System.Boolean): True to reverse the direction of the wrap, false to not
- `Method` (System.Int32): Type of wrap method as defined in swWrapMethods_e
- `MeshFactor` (System.Int32): Accuracy of flattened triangle mesh; 1 (lowest) - 10 (highest)

## Return Value

Wrap feature

## Remarks

To select...
Use
IModelDocExtension::SelectByID2
or
IModelDocExtension::SelectByRay
and specify a Mark of...
One or more faces on which to place the wrap feature
1
Pull direction entity if Type is:
swWrapSketchType_e.swWrapSketchType_Emboss
- or -
swWrapSketchType_e.swWrapSketchType_Engrave
For a line or linear edge, the pull direction is the direction of the selected entity. For a plane, the pull direction is normal to the plane. To wrap the sketch normal to the sketch plane, do not select a pull direction entity.
2
2D sketch containing no open contours; 3D sketches are not supported
4
NOTE:
The difference between this method and the now obsolete
IFeatureManager::InsertWrapFeature
is that IFeatureManager::InsertWrapFeature2 can create a wrap feature on one or more faces and IFeatureManager::InsertWrapFeature creates a wrap feature on one face only.

## Examples

- Create Wrap Feature on Multiple Faces (C#) (Create_Wrap_Feature_on_Multiple_Faces_Example_CSharp.htm)
- Create Wrap Feature on Multiple Faces (VB.NET) (Create_Wrap_Feature_on_Multiple_Faces_Example_VBNET.htm)
- Create Wrap Feature on Multiple Faces (VBA) (Create_Wrap_Feature_on_Multiple_Faces_Example_VB.htm)

## See Also

- `IWrapSketchFeatureData`