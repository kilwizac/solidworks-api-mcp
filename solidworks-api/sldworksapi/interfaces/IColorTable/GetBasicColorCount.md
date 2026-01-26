---
type: method
interface: IColorTable
member: GetBasicColorCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IColorTable.GetBasicColors
  - IColorTable.GetCount
  - IColorTable.GetCustomColorCount
  - IColorTable.GetStandardCount
  - IColorTable.IGetBasicColors
keywords:
  - getbasiccolorcount
  - icolortable
  - color
  - table
  - basic
  - count
  - int32
---

# IColorTable.GetBasicColorCount

Gets the number of basic colors defined in the color table.

## Signature

```csharp
System.Int32 GetBasicColorCount()
```
## Parameters

None.

## Return Value

Number of basic colors

## Remarks

Call this method before calling
IColorTable::IGetBasicColors
to determine the size of the array for that method.

## See Also

- `IColorTable.GetBasicColors`
- `IColorTable.GetCount`
- `IColorTable.GetCustomColorCount`
- `IColorTable.GetStandardCount`
- `IColorTable.IGetBasicColors`