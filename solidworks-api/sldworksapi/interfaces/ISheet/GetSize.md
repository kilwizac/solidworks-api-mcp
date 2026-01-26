---
type: method
interface: ISheet
member: GetSize
returns: System.Int32
parameters:
  -
    name: Width
    type: System.Double
    description: Width of sheet
  -
    name: Height
    type: System.Double
    description: Height of sheet
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetProperties
  - ISheet.IGetProperties
  - ISheet.IPageSetup
  - ISheet.PageSetup
  - ISheet.SetProperties
  - ISheet.SetSize
keywords:
  - sheet
  - see
  - also
  - isheet
  - size
  - getsize
  - width
  - double
  - height
  - int32
  - number
  - lines
  - flat
  - pattern
  - drawing
  - view
  - boundary
  - box
  - sketch
  - vb
  - net
  - vba
---

# ISheet.GetSize

Gets the size of the sheet and the corresponding standard sheet size.

## Signature

```csharp
System.Int32 GetSize( 
   out System.Double
Width
,
   out System.Double
Height
)
```
## Parameters

- `Width` (System.Double): Width of sheet
- `Height` (System.Double): Height of sheet

## Return Value

Paper size as defined in swDwgPaperSizes_e

## Examples

- Get the Number of Lines Flat-pattern Drawing View's Boundary-box Sketch (C#) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_CSharp.htm)
- Get the Number of Lines Flat-pattern Drawing View's Boundary-box Sketch (VB.NET) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VBNET.htm)
- Get the Number of Lines Flat-pattern Drawing View's Boundary-box Sketch (VBA) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VB.htm)

## See Also

- `ISheet.GetProperties`
- `ISheet.IGetProperties`
- `ISheet.IPageSetup`
- `ISheet.PageSetup`
- `ISheet.SetProperties`
- `ISheet.SetSize`