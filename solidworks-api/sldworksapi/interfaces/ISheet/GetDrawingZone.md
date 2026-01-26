---
type: method
interface: ISheet
member: GetDrawingZone
returns: System.String
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate
  -
    name: Y
    type: System.Double
    description: y coordinate
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingDoc.NewSheet4
  - IDrawingDoc.SetupSheet6
keywords:
  - sheet
  - see
  - also
  - isheet
  - drawing
  - zones
  - sheets
  - getdrawingzone
  - zone
  - double
  - string
  - name
  - vb
  - net
  - vba
---

# ISheet.GetDrawingZone

Gets the name of the drawing zone for the specified x and y coordinates on the sheet.

## Signature

```csharp
System.String GetDrawingZone( 
   System.Double
X
,
   System.Double
Y
)
```
## Parameters

- `X` (System.Double): x coordinate
- `Y` (System.Double): y coordinate

## Return Value

Name of the drawing zone

## Examples

- Get Name of Drawing Zone (C#) (Get_Name_of_Drawing_Zone_Example_CSharp.htm)
- Get Name of Drawing Zone (VB.NET) (Get_Name_of_Drawing_Zone_Example_VBNET.htm)
- Get Name of Drawing Zone (VBA) (Get_Name_of_Drawing_Zone_Example_VB.htm)

## See Also

- `IDrawingDoc.NewSheet4`
- `IDrawingDoc.SetupSheet6`