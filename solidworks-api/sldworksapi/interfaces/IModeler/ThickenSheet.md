---
type: method
interface: IModeler
member: ThickenSheet
returns: Body2
parameters:
  -
    name: Sheet
    type: Body2
    description: Sheet body that defines the profile for the temporary thickened body
  -
    name: Thickness
    type: System.Double
    description: Thickness of the temporary thickened body
  -
    name: Direction
    type: System.Int32
    description: Direction in which to thicken the sheet body as defined in swThickenDirection_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - thickensheet
  - imodeler
  - modeler
  - thicken
  - sheet
  - body2
  - thickness
  - double
  - direction
  - int32
  - body
  - vba
---

# IModeler.ThickenSheet

Thickens a sheet body.

## Signature

```csharp
Body2 ThickenSheet( 
   Body2
Sheet
,
   System.Double
Thickness
,
   System.Int32
Direction
)
```
## Parameters

- `Sheet` (Body2): Sheet body that defines the profile for the temporary thickened body
- `Thickness` (System.Double): Thickness of the temporary thickened body
- `Direction` (System.Int32): Direction in which to thicken the sheet body as defined in swThickenDirection_e

## Return Value

Temporary thickened body

## Remarks

If you set Direction to swThickenDirection_Both, then the value set for Thickness is used in both directions.

## Examples

- Thicken Sheet Body (VBA) (Thicken_Sheet_Body_Example_VB.htm)