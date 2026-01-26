---
type: method
interface: IModelDocExtension
member: AddAngularRunningDim
returns: System.Object
parameters:
  -
    name: DisplayAsChain
    type: System.Boolean
    description: True to chain the angular dimensions together, false to not
  -
    name: RunBidirectionally
    type: System.Boolean
    description: True if each angular dimension runs in a direction closest to the baseline, false if all angular dimensions run in the same direction (see Remarks )
  -
    name: ExtensionLineExtendsFromCenterOfSet
    type: System.Boolean
    description: True to extend the extension lines from the center of the set of angular running dimensions, false to not
  -
    name: LocX
    type: System.Double
    description: X coordinate of baseline dimension (see Remarks )
  -
    name: LocY
    type: System.Double
    description: Y coordinate of baseline dimension (see Remarks )
  -
    name: LocZ
    type: System.Double
    description: Z coordinate of baseline dimension (see Remarks )
  -
    name: Retval
    type: System.Int32
    description: Error as defined by swCreateAngRunDimError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IDrawingDoc.InsertAngularRunningDim
  - IModelDocExtension.AlignRunningDimension
  - IModelDocExtension.ReJogRunningDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - angular
  - running
  - dimensions
  - addangularrunningdim
  - imodeldocextension
  - model
  - doc
  - extension
  - add
  - dim
  - display
  - chain
  - boolean
  - run
  - bidirectionally
  - line
  - extends
  - center
  - loc
  - double
  - retval
  - int32
  - object
  - insert
  - vba
  - vb
  - net
---

# IModelDocExtension.AddAngularRunningDim

Adds the specified angular running dimension for selected entities.

## Signature

```csharp
System.Object AddAngularRunningDim( 
   System.Boolean
DisplayAsChain
,
   System.Boolean
RunBidirectionally
,
   System.Boolean
ExtensionLineExtendsFromCenterOfSet
,
   System.Double
LocX
,
   System.Double
LocY
,
   System.Double
LocZ
,
   out System.Int32
Retval
)
```
## Parameters

- `DisplayAsChain` (System.Boolean): True to chain the angular dimensions together, false to not
- `RunBidirectionally` (System.Boolean): True if each angular dimension runs in a direction closest to the baseline, false if all angular dimensions run in the same direction (see Remarks )
- `ExtensionLineExtendsFromCenterOfSet` (System.Boolean): True to extend the extension lines from the center of the set of angular running dimensions, false to not
- `LocX` (System.Double): X coordinate of baseline dimension (see Remarks )
- `LocY` (System.Double): Y coordinate of baseline dimension (see Remarks )
- `LocZ` (System.Double): Z coordinate of baseline dimension (see Remarks )
- `Retval` (System.Int32): Error as defined by swCreateAngRunDimError_e

## Return Value

Array of IDisplayDimension s

## Remarks

Before calling this method, call
IModelDocExtension::SelectByID2
with Append set to true to select the baseline entity and all entities whose angles from the baseline entity you want to measure and display.
A vertical line is constructed between [LocX, LocY, LocZ] and the baseline entity. The baseline dimension (0
⁰
) is displayed at [LocX, LocY, LocZ].
If RunBidirectionally is...
Then...
True
No angle dimension in the angular running dimension is greater than 180
⁰
from the baseline, and each angle is measured from a direction that is closest to the baseline.
False
The running direction of all angle dimensions is determined by the first angle dimension added. For example, if the user places the baseline dimension at the top of the part, clicking on a feature to the right of the baseline dimension forces all subsequent angular dimensions to be measured clockwise from the baseline.
Selections made after this method is called add angular dimensions to the set. When you have finished adding angular dimensions to the set, call
IModelDoc2::SetPickMode
.

## Examples

- Insert Angular Running Dimension (VBA) (Set_Properties_of_Angular_Running_Dimension_Example_VB.htm)
- Insert Angular Running Dimension (VB.NET) (Set_Properties_of_Angular_Running_Dimension_Example_VBNET.htm)
- Insert Angular Running Dimension (C#) (Set_Properties_of_Angular_Running_Dimension_Example_CSharp.htm)

## See Also

- `IDrawingDoc.InsertAngularRunningDim`
- `IModelDocExtension.AlignRunningDimension`
- `IModelDocExtension.ReJogRunningDimension`