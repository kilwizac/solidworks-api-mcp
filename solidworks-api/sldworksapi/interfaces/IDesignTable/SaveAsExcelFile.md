---
type: method
interface: IDesignTable
member: SaveAsExcelFile
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.String
    description: Path and filename for the Microsoft Excel file
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IDesignTable.FileName
  - IDesignTable.SourceType
keywords:
  - saveasexcelfile
  - idesigntable
  - design
  - table
  - save
  - excel
  - file
  - value
  - string
  - boolean
  - microsoft
  - vba
---

# IDesignTable.SaveAsExcelFile

Saves the design table to a Microsoft Excel file.

## Signature

```csharp
System.Boolean SaveAsExcelFile( 
   System.String
Value
)
```
## Parameters

- `Value` (System.String): Path and filename for the Microsoft Excel file

## Return Value

True if the design table is saved to a Microsoft Excel file, false if not

## Examples

- Save Design Table as Microsoft Excel File (VBA) (Save_Design_Table_as_Microsoft_Excel_File_Example_VB.htm)

## See Also

- `IDesignTable.FileName`
- `IDesignTable.SourceType`