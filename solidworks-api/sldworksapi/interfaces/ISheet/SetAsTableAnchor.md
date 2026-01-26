---
type: method
interface: ISheet
member: SetAsTableAnchor
returns: System.Object
parameters:
  -
    name: TableType
    type: System.Int32
    description: Table for which an anchor is required as defined in swTableAnnotationType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.TableAnchor
keywords:
  - sheet
  - see
  - also
  - isheet
  - table
  - anchor
  - setastableanchor
  - type
  - int32
  - object
  - anchors
  - formats
  - vba
  - vb
  - net
---

# ISheet.SetAsTableAnchor

Sets the anchor for the specified table at a selected point in the sheet format.

## Signature

```csharp
System.Object SetAsTableAnchor( 
   System.Int32
TableType
)
```
## Parameters

- `TableType` (System.Int32): Table for which an anchor is required as defined in swTableAnnotationType_e

## Return Value

ITableAnchor

## Remarks

Before calling this method, you must call:
IDrawingDoc::EditTemplate
to edit the sheet format.
IModelDoc2::EditSketch
to create a sketch.
ISketchManager::CreatePoint
to create a sketch point where to position the table anchor.
If an anchor already exists for the table, then this method moves the anchor of that table to the selected position.
After calling this method you must call:
IDrawingDoc::EditSheet
IModelDoc2::EditSketch
IModelDoc2::ForceRebuild3

## Examples

- Set Table Anchors in Sheet Formats (VBA) (Set_Table_Anchors_Example_VB.htm)
- Set Table Anchors in Sheet Formats (VB.NET) (Set_Table_Anchors_Example_VBNET.htm)
- Set Table Anchors in Sheet Formats (C#) (Set_Table_Anchors_Example_CSharp.htm)

## See Also

- `ISheet.TableAnchor`