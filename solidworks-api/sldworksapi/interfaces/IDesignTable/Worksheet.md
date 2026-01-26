---
type: property
interface: IDesignTable
member: Worksheet
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.Detach
  - IDesignTable.FileName
  - IDesignTable.SaveAsExcelFile
  - IDesignTable.SourceType
keywords:
  - worksheet
  - idesigntable
  - design
  - table
  - object
  - microsoft
  - excel
  - vba
readonly: true
---

# IDesignTable.Worksheet

Gets the Microsoft Excel worksheet for this design table.

## Signature

```csharp
System.Object Worksheet {get;}
```
## Parameters

None.

## Return Value

Microsoft Excel worksheet for this design table

## Remarks

Before you can call this method, you must call
IDesignTable::Attach
.

## Examples

- Get Microsoft Excel Design Table Worksheet (VBA) (Get_Excel_Design_Table_Worksheet_Example_VB.htm)

## See Also

- `IDesignTable.Detach`
- `IDesignTable.FileName`
- `IDesignTable.SaveAsExcelFile`
- `IDesignTable.SourceType`