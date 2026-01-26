---
type: method
interface: IModelDoc2
member: InsertProjectedSketch2
returns: System.Object
parameters:
  -
    name: Reverse
    type: System.Int32
    description: 1 to reverse the projected direction, 0 to not reverse the projected direction
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.IInsertProjectedSketch2
keywords:
  - insertprojectedsketch2
  - imodeldoc2
  - model
  - doc2
  - insert
  - projected
  - sketch2
  - reverse
  - int32
  - object
  - curve
  - feature
  - data
  - vb
  - net
  - vba
---

# IModelDoc2.InsertProjectedSketch2

Obsolete. See IProjectionCurveFeatureData and IFeatureManager::CreateDefinition.

## Signature

```csharp
System.Object InsertProjectedSketch2( 
   System.Int32
Reverse
)
```
## Parameters

- `Reverse` (System.Int32): 1 to reverse the projected direction, 0 to not reverse the projected direction

## Return Value

Newly created feature or Nothing or null if the operation fails

## Remarks

You can reverse the direction in which the curve is projected. This is necessary only when the selected face wraps around the plane of the curve. For example, if the sketch being projected is surrounded by a cylindrical face, then two possible projections exist. The reverse argument switches the direction based on the normal vector of the sketch. The default direction is along the sketch normal.

## Examples

- Get Projected Curve Feature Data (C#) (Get_Projected_Curve_Feature_Data_Example_CSharp.htm)
- Get Projected Curve Feature Data (VB.NET) (Get_Projected_Curve_Feature_Data_Example_VBNET.htm)
- Get Projected Curve Feature Data (VBA) (Get_Projected_Curve_Feature_Data_Example_VB.htm)

## See Also

- `IModelDoc2.IInsertProjectedSketch2`