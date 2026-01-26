---
type: method
interface: IDisplayDimension
member: SupplementaryAngle
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IModelDoc2.AddDimension2
  - IModelDocExtension.AddDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - supplementary
  - angle
  - angles
  - display
  - dimensions
  - idisplaydimension
  - supplementaryangle
  - boolean
  - change
  - vb
  - net
  - vba
---

# IDisplayDimension.SupplementaryAngle

Changes the angle in the selected angular dimension to its supplementary angle.

## Signature

```csharp
System.Boolean SupplementaryAngle()
```
## Parameters

None.

## Return Value

True if the angle in the selected angular dimension changes to its supplementary angle, false if not

## Remarks

If the angle in the selected angular dimension is...
Then the supplementary angle is its...
>180 degrees (i.e., exterior)
Interior angle
<180 degrees (i.e., interior)
Exterior angle

## Examples

- Change Angle to Supplementary Angle (C#) (Change_Angle_to_Supplementary_Angle_Example_CSharp.htm)
- Change Angle to Supplementary Angle (VB.NET) (Change_Angle_to_Supplementary_Angle_Example_VBNET.htm)
- Change Angle to Supplementary Angle (VBA) (Change_Angle_to_Supplementary_Angle_Example_VB.htm)

## See Also

- `IModelDoc2.AddDimension2`
- `IModelDocExtension.AddDimension`