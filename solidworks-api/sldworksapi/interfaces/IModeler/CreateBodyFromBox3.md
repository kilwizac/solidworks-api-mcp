---
type: method
interface: IModeler
member: CreateBodyFromBox3
returns: Body2
parameters:
  -
    name: BoxDimArray
    type: System.Object
    description: Array of 9 doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFeature.ISetBody3
  - IFeature.SetBody2
keywords:
  - temporary
  - bodies
  - createbodyfrombox3
  - imodeler
  - modeler
  - create
  - body
  - box3
  - box
  - dim
  - array
  - object
  - body2
  - multibody
  - macro
  - feature
  - vba
  - vb
  - net
---

# IModeler.CreateBodyFromBox3

Creates a temporary body from the specified box dimensions.

## Signature

```csharp
Body2 CreateBodyFromBox3( 
   System.Object
BoxDimArray
)
```
## Parameters

- `BoxDimArray` (System.Object): Array of 9 doubles (see Remarks )

## Return Value

Body

## Remarks

The input parameter is the following array of doubles:
[
boxFaceCenter
[3],
boxAxis
[3],
boxWidth, boxLength
,
boxHeight
]
where:
boxFaceCenter
[3]
XYZ location that represents the center of one of the box faces.
boxAxis
[3]
XYZ direction. The box will be extruded along this vector from the
boxFaceCenter
location
,
a distance of
boxHeight.
boxWidth
Box width. If
boxAxis
is parallel to the Z axis (0,0,1), then this value represents the dimension that is parallel to the X-axis; the new body is rotated to the input
boxAxis
direction and translates it to the
boxFaceCenter
.
boxLength
Box length. If
boxAxis
is parallel to the Z axis (0,0,1), then this value represents the dimension that is parallel to the Y axis; the new body is rotated to the input
boxAxis
direction and translates it to the
boxFaceCenter
.
boxHeight
Height to extrude along the
boxAxis
direction. If
boxHeight
is 0, a sheet body and whose normal is defined by
boxAxis
.

## Examples

- Create Multibody Macro Feature (VBA) (Create_Multibody_Macro_Feature_Example_VB.htm)
- Create Multibody Macro Feature (VB.NET) (Create_Multibody_Macro_Feature_Example_VBNET.htm)
- Create Multibody Macro Feature (C#) (Create_Multibody_Macro_Feature_Example_CSharp.htm)

## See Also

- `IFeature.ISetBody3`
- `IFeature.SetBody2`