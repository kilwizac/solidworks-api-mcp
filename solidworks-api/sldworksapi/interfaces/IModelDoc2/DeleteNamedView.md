---
type: method
interface: IModelDoc2
member: DeleteNamedView
returns: System.Boolean
parameters:
  -
    name: ViewName
    type: System.String
    description: Name of the model view to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.NameView
  - IModelDoc2.ShowNamedView2
  - IModelDocExtension.GetNamedViewRotation
  - IModelDocExtension.IGetNamedViewRotation
keywords:
  - named
  - views
  - view
  - see
  - also
  - iview
  - deletenamedview
  - imodeldoc2
  - model
  - doc2
  - delete
  - name
  - string
  - boolean
---

# IModelDoc2.DeleteNamedView

Deletes the specified model view.

## Signature

```csharp
System.Boolean DeleteNamedView( 
   System.String
ViewName
)
```
## Parameters

- `ViewName` (System.String): Name of the model view to delete

## Return Value

True if the named view is deleted, false if not

## See Also

- `IModelDoc2.NameView`
- `IModelDoc2.ShowNamedView2`
- `IModelDocExtension.GetNamedViewRotation`
- `IModelDocExtension.IGetNamedViewRotation`