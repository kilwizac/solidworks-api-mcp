---
type: method
interface: IColorTable
member: GetCustomColorCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IColorTable.GetBasicColorCount
  - IColorTable.GetCount
  - IColorTable.GetCustomColors
  - IColorTable.GetStandardCount
keywords:
  - getcustomcolorcount
  - icolortable
  - color
  - table
  - custom
  - count
  - int32
---

# IColorTable.GetCustomColorCount

Gets the number of custom colors in the color table.

## Signature

```csharp
System.Int32 GetCustomColorCount()
```
## Parameters

None.

## Return Value

Number of custom colors

## Remarks

Call this method before calling
IColorTable::IGetCustomColors
to determine the size of the array for that method.

## See Also

- `IColorTable.GetBasicColorCount`
- `IColorTable.GetCount`
- `IColorTable.GetCustomColors`
- `IColorTable.GetStandardCount`