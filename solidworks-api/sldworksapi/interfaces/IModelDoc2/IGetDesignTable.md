---
type: method
interface: IModelDoc2
member: IGetDesignTable
returns: DesignTable
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
  - IModelDoc2.GetDesignTable
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
  - igetdesigntable
  - imodeldoc2
  - model
  - doc2
  - table
---

# IModelDoc2.IGetDesignTable

Gets the design table associated with this part or assembly document.

## Signature

```csharp
DesignTable IGetDesignTable()
```
## Parameters

None.

## Return Value

Design table

## Remarks

If you call this method from a drawing document, NULL is returned.
To access design tables from a drawing document you must get the
IModelDoc2
object associated with a particular drawing view and then call this method from that IModelDoc2 object. To determine if a drawing view has a design table associated with it, use
IView::HasDesignTable
.

## See Also

- `IDesignTable`
- `IModelDoc2.CloseFamilyTable`
- `IModelDoc2.DeleteDesignTable`
- `IModelDoc2.GetDesignTable`
- `IModelDoc2.InsertFamilyTableEdit`
- `IModelDoc2.InsertFamilyTableNew`
- `IModelDoc2.InsertFamilyTableOpen`
- `IModelDocExtension.HasDesignTable`