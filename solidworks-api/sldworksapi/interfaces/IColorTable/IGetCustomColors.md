---
type: method
interface: IColorTable
member: IGetCustomColors
returns: System.Int32
parameters:
  -
    name: ColorCount
    type: System.Int32
    description: Number of custom colors
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IColorTable.GetCustomColors
  - IColorTable.SetCustomColor
keywords:
  - igetcustomcolors
  - icolortable
  - color
  - table
  - custom
  - colors
  - count
  - int32
---

# IColorTable.IGetCustomColors

Gets the number of custom colors in the color table.

## Signature

```csharp
System.Int32 IGetCustomColors( 
   System.Int32
ColorCount
)
```
## Parameters

- `ColorCount` (System.Int32): Number of custom colors

## Return Value

in-process, unmanaged C++: Pointer to an array of custom colors of size ColorCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IColorTable::GetCustomColorCount
to determine the size of the array.

## See Also

- `IColorTable.GetCustomColors`
- `IColorTable.SetCustomColor`