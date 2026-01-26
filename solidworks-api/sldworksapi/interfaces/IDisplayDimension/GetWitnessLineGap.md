---
type: method
interface: IDisplayDimension
member: GetWitnessLineGap
returns: System.Boolean
parameters:
  -
    name: WitnessIndex
    type: System.Int16
    description: Index of the extension line whose gap to get
  -
    name: UseDoc
    type: System.Boolean
    description: True if using the document default value of the gap, false if not (see Remarks )
  -
    name: Gap
    type: System.Double
    description: Gap value in system units (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.SetWitnessLineGap
  - IView.GetDimensionInfo6
  - IView.IGetDimensionInfo6
keywords:
  - extension
  - lines
  - gap
  - dimension
  - see
  - also
  - idimension
  - getwitnesslinegap
  - idisplaydimension
  - display
  - witness
  - line
  - index
  - int16
  - use
  - doc
  - boolean
  - double
  - vba
---

# IDisplayDimension.GetWitnessLineGap

Gets the gap of the specified dimension extension line.

## Signature

```csharp
System.Boolean GetWitnessLineGap( 
   System.Int16
WitnessIndex
,
   out System.Boolean
UseDoc
,
   out System.Double
Gap
)
```
## Parameters

- `WitnessIndex` (System.Int16): Index of the extension line whose gap to get
- `UseDoc` (System.Boolean): True if using the document default value of the gap, false if not (see Remarks )
- `Gap` (System.Double): Gap value in system units (see Remarks )

## Return Value

True if the operation succeeds, false if not

## Remarks

The UseDoc argument is dependent on the detailing standard. You can retrieve the document default value using the
document-level user-preference swDetailingWitnessLineGap
.
The Gap argument is the document default value if UseDoc is true; otherwise, the value returned is the locally set value.

## Examples

- Get and Set Dimension Extension Lines Gap (VBA) (Get_and_Set_Dimension_Extension_Lines_Gaps_Example_VB.htm)

## See Also

- `IDisplayDimension.SetWitnessLineGap`
- `IView.GetDimensionInfo6`
- `IView.IGetDimensionInfo6`