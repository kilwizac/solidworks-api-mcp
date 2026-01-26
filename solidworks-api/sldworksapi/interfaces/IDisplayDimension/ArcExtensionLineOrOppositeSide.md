---
type: property
interface: IDisplayDimension
member: ArcExtensionLineOrOppositeSide
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IModelDoc2.AddRadialDimension2
keywords:
  - dimension
  - see
  - also
  - idimension
  - radial
  - display
  - dimensions
  - idisplaydimension
  - arcextensionlineoroppositeside
  - arc
  - extension
  - line
  - opposite
  - side
  - boolean
  - leader
  - vb
  - net
  - vba
readonly: null
---

# IDisplayDimension.ArcExtensionLineOrOppositeSide

Gets or sets whether to attach or extend the radial dimension leader on this radial display dimension.

## Signature

```csharp
System.Boolean ArcExtensionLineOrOppositeSide {get; set;}
```
## Parameters

None.

## Return Value

If... Then... True Attach the radial dimension leader to the arc extension line. - or - If the radial dimension leader encounters arc geometry, then extend the radial dimension leader to the opposite side of the arc. False Neither attach nor extend the radial dimension leader.

## Remarks

This property is only valid for radial display dimensions.

## Examples

- Set Radial Dimension Leader (C#) (Edit_Radial_Dimension_Example_CSharp.htm)
- Set Radial Dimension Leader (VB.NET) (Edit_Radial_Dimension_Example_VBNET.htm)
- Set Radial Dimension Leader (VBA) (Edit_Radial_Dimension_Example_VB.htm)

## See Also

- `IModelDoc2.AddRadialDimension2`