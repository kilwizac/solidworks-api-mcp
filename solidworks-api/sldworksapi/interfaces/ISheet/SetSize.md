---
type: method
interface: ISheet
member: SetSize
returns: System.Boolean
parameters:
  -
    name: Size
    type: System.Int32
    description: Paper size as defined in swDwgPaperSizes_e
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
  - ISheet.GetSize
  - ISheet.IGetProperties
  - ISheet.IPageSetup
  - ISheet.PageSetup
  - ISheet.SetProperties
keywords:
  - sheet
  - see
  - also
  - isheet
  - size
  - setsize
  - int32
  - width
  - double
  - height
  - boolean
  - annotations
  - arrays
  - vb
  - net
  - vba
---

# ISheet.SetSize

Sets the standard sheet size and the size of the sheet so that the drawing looks correct.

## Signature

```csharp
System.Boolean SetSize( 
   System.Int32
Size
,
   System.Double
Width
,
   System.Double
Height
)
```
## Parameters

- `Size` (System.Int32): Paper size as defined in swDwgPaperSizes_e
- `Width` (System.Double): Width of sheet
- `Height` (System.Double): Height of sheet

## Return Value

True if the size of the sheet is set, false if not

## Examples

- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `ISheet.GetProperties`
- `ISheet.GetSize`
- `ISheet.IGetProperties`
- `ISheet.IPageSetup`
- `ISheet.PageSetup`
- `ISheet.SetProperties`