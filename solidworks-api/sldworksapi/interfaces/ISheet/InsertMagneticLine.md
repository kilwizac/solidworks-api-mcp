---
type: method
interface: ISheet
member: InsertMagneticLine
returns: MagneticLine
parameters:
  -
    name: StartPoint
    type: MathPoint
    description: IMathPoint
  -
    name: EndPoint
    type: MathPoint
    description: IMathPoint
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetMagneticLines
  - ISheet.GetMagneticLinesCount
  - ISheet.IGetMagneticLines
keywords:
  - magneticline
  - see
  - imagneticline
  - insertmagneticline
  - isheet
  - sheet
  - insert
  - magnetic
  - line
  - start
  - point
  - math
  - end
  - vb
  - net
  - vba
---

# ISheet.InsertMagneticLine

Inserts a magnetic line at the specified start and end points on this drawing sheet.

## Signature

```csharp
MagneticLine InsertMagneticLine( 
   MathPoint
StartPoint
,
   MathPoint
EndPoint
)
```
## Parameters

- `StartPoint` (MathPoint): IMathPoint
- `EndPoint` (MathPoint): IMathPoint

## Return Value

IMagneticLine

## Examples

- Insert Magnetic Line (C#) (Insert_Magnetic_Line_Example_CSharp.htm)
- Insert Magnetic Line (VB.NET) (Insert_Magnetic_Line_Example_VBNET.htm)
- Insert Magnetic Line (VBA) (Insert_Magnetic_Line_Example_VB.htm)

## See Also

- `ISheet.GetMagneticLines`
- `ISheet.GetMagneticLinesCount`
- `ISheet.IGetMagneticLines`