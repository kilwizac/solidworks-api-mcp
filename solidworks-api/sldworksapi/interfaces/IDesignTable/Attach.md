---
type: method
interface: IDesignTable
member: Attach
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - attach
  - idesigntable
  - design
  - table
  - boolean
  - microsoft
  - excel
  - worksheet
  - vba
  - save
  - file
  - vb
  - net
---

# IDesignTable.Attach

Activates the design table within the part or assembly document.

## Signature

```csharp
System.Boolean Attach()
```
## Parameters

None.

## Return Value

True if the design table is successfully activated, false if not

## Remarks

If you want SOLIDWORKS to run in the background, then do not use this method. Using this method will cause SOLIDWORKS to become visible.
Do not use this method and
IDesignTable::EditTable2
in the same macro. Using IDesignTable::EditTable2 is preferable because it returns a pointer to the Microsoft Excel worksheet being operated on.
If you use IDesignTable::Attach, then you must call this method before calling any of the other IDesignTable methods. When your application is finished extracting data from the design table, use
IDesignTable::Detach
to detach the IDesignTable object from the Microsoft Excel object.

## Examples

- Get Microsoft Excel Design Table Worksheet (VBA) (Get_Excel_Design_Table_Worksheet_Example_VB.htm)
- Save Design Table as Microsoft Excel File (VBA) (Save_Design_Table_as_Microsoft_Excel_File_Example_VB.htm)
- Get Design Table (C#) (Get_Design_Table_Example_CSharp.htm)
- Get Design Table (VB.NET) (Get_Design_Table_Example_VBNET.htm)
- Get Design Table (VBA) (Get_Design_Table_Example_VB.htm)