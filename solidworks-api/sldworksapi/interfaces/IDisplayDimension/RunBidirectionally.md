---
type: property
interface: IDisplayDimension
member: RunBidirectionally
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.DisplayAsChain
  - IDisplayDimension.ExtensionLineExtendsFromCenterOfSet
  - IDisplayDimension.Jogged
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - angular
  - running
  - dimensions
  - runbidirectionally
  - idisplaydimension
  - display
  - run
  - bidirectionally
  - boolean
  - insert
  - vba
  - vb
  - net
readonly: null
---

# IDisplayDimension.RunBidirectionally

Gets or sets whether each dimension runs in a direction closest to the baseline in this angular running dimension.

## Signature

```csharp
System.Boolean RunBidirectionally {get; set;}
```
## Parameters

None.

## Return Value

True if each dimension runs in a direction closest to the baseline, false if all dimensions run in the same direction (see Remarks )

## Remarks

If this property is...
Then...
True
No angle dimension in the angular running dimension is greater than 180
⁰
from the baseline, and each angle is measured from a direction that is closest to the baseline.
False
The running direction of all angle dimensions is determined by the first angle dimension added. For example, if the user places the baseline dimension at the top of the part, clicking on a feature to the right of the baseline dimension forces all subsequent angular dimensions to be measured clockwise from the baseline.
This property corresponds to the
Run bidirectionally
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
- `IDisplayDimension.ExtensionLineExtendsFromCenterOfSet`
- `IDisplayDimension.Jogged`