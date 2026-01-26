---
type: method
interface: IModelDoc2
member: GetDesignTable
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IDesignTable
  - IModelDoc2.CloseFamilyTable
  - IModelDoc2.DeleteDesignTable
  - IModelDoc2.IGetDesignTable
  - IModelDoc2.InsertFamilyTableEdit
  - IModelDoc2.InsertFamilyTableNew
  - IModelDoc2.InsertFamilyTableOpen
  - IModelDocExtension.HasDesignTable
keywords:
  - design
  - tables
  - see
  - also
  - idesigntable
  - getdesigntable
  - imodeldoc2
  - model
  - doc2
  - table
  - object
  - add
  - row
  - vba
  - excel
  - worksheet
  - whether
  - edits
  - update
  - vb
  - net
---

# IModelDoc2.GetDesignTable

Gets the design table associated with this part or assembly document.

## Signature

```csharp
System.Object GetDesignTable()
```
## Parameters

None.

## Return Value

Design table

## Remarks

If you call this method from a drawing document, null or Nothing is returned.
To access design tables from a drawing document you must get the
IModelDoc2
object associated with a particular drawing view and then call this method from that IModelDoc2 object. To determine if a drawing view has a design table associated with it, use
IView::HasDesignTable
.

## Examples

- Add Row to Design Table (VBA) (Add_Row_to_Design_Table_Example_VB.htm)
- Get Excel Design Table Worksheet (VBA) (Get_Excel_Design_Table_Worksheet_Example_VB.htm)
- Get or Set Whether Edits Update Design Table (VBA) (Get_or_Set_Whether_Edits_Update_Design_Table_Example_VB.htm)
- Get Design Table (C#) (Get_Design_Table_Example_CSharp.htm)
- Get Design Table (VB.NET) (Get_Design_Table_Example_VBNET.htm)
- Get Design Table (VBA) (Get_Design_Table_Example_VB.htm)

## See Also

- `IDesignTable`
- `IModelDoc2.CloseFamilyTable`
- `IModelDoc2.DeleteDesignTable`
- `IModelDoc2.IGetDesignTable`
- `IModelDoc2.InsertFamilyTableEdit`
- `IModelDoc2.InsertFamilyTableNew`
- `IModelDoc2.InsertFamilyTableOpen`
- `IModelDocExtension.HasDesignTable`