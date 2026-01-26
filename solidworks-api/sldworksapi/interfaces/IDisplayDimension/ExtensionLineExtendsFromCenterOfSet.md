---
type: property
interface: IDisplayDimension
member: ExtensionLineExtendsFromCenterOfSet
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.DisplayAsChain
  - IDisplayDimension.ExtensionLineSameAsLeaderStyle
  - IDisplayDimension.ExtensionLineUseDocumentDisplay
  - IDisplayDimension.Jogged
  - IDisplayDimension.ResetExtensionLineStyle
  - IDisplayDimension.RunBidirectionally
  - IDisplayDimension.SetLineFontExtensionStyle
  - IDisplayDimension.SetLineFontExtensionThickness
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - extensionlineextendsfromcenterofset
  - idisplaydimension
  - display
  - extension
  - line
  - extends
  - center
  - boolean
  - insert
  - angular
  - running
  - vba
  - vb
  - net
readonly: null
---

# IDisplayDimension.ExtensionLineExtendsFromCenterOfSet

Gets or sets whether extension lines extend from the center of this set of angular running dimensions.

## Signature

```csharp
System.Boolean ExtensionLineExtendsFromCenterOfSet {get; set;}
```
## Parameters

None.

## Return Value

True if extension lines extend from the center of the set of angular running dimensions, false if they extend from the selection point

## Remarks

This property corresponds to the
Extension line extends from center of set
check box in the
Witness/Leader Display
panel of the
Leaders
tab of the
Dimension
PropertyManager page that appears when you right-click in a drawing and select
More Dimensions > Angular Running Dimension
.

## Examples

- Insert Angular Running Dimension (VBA) (Set_Properties_of_Angular_Running_Dimension_Example_VB.htm)
- Insert Angular Running Dimension (VB.NET) (Set_Properties_of_Angular_Running_Dimension_Example_VBNET.htm)
- Insert Angular Running Dimension (C#) (Set_Properties_of_Angular_Running_Dimension_Example_CSharp.htm)

## See Also

- `IDisplayDimension.DisplayAsChain`
- `IDisplayDimension.ExtensionLineSameAsLeaderStyle`
- `IDisplayDimension.ExtensionLineUseDocumentDisplay`
- `IDisplayDimension.Jogged`
- `IDisplayDimension.ResetExtensionLineStyle`
- `IDisplayDimension.RunBidirectionally`
- `IDisplayDimension.SetLineFontExtensionStyle`
- `IDisplayDimension.SetLineFontExtensionThickness`