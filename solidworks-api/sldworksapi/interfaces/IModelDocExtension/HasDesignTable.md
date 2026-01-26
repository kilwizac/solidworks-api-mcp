---
type: method
interface: IModelDocExtension
member: HasDesignTable
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - design
  - tables
  - see
  - also
  - idesigntable
  - document
  - table
  - hasdesigntable
  - imodeldocextension
  - model
  - doc
  - extension
  - has
  - boolean
  - delete
  - vba
---

# IModelDocExtension.HasDesignTable

Gets whether a document has a design table.

## Signature

```csharp
System.Boolean HasDesignTable()
```
## Parameters

None.

## Return Value

True if document has a design table, false if not (see Remarks )

## Remarks

This method always returns false for drawing documents because in drawing documents the design table is attached to the drawing view and not the document. Use
IView::HasDesignTable
to determine if a drawing view in a drawing document has a design table.

## Examples

- Delete Design Table (VBA) (Delete_Design_Table_Example_VB.htm)