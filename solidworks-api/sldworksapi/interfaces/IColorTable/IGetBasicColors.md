---
type: method
interface: IColorTable
member: IGetBasicColors
returns: System.Int32
parameters:
  -
    name: ColorCount
    type: System.Int32
    description: Number of basic colors
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IColorTable.GetBasicColors
  - IColorTable.IGetCustomColors
keywords:
  - igetbasiccolors
  - icolortable
  - color
  - table
  - basic
  - colors
  - count
  - int32
---

# IColorTable.IGetBasicColors

Gets the basic colors in the color table.

## Signature

```csharp
System.Int32 IGetBasicColors( 
   System.Int32
ColorCount
)
```
## Parameters

- `ColorCount` (System.Int32): Number of basic colors

## Return Value

in-process, unmanaged C++: Pointer to an array of basic colors of size ColorCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IColorTable::GetBasicColorCount
to determine the size of the array.

## See Also

- `IColorTable.GetBasicColors`
- `IColorTable.IGetCustomColors`