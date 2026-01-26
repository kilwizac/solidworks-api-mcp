---
type: method
interface: IModelDoc2
member: NameView
returns: void
parameters:
  -
    name: VName
    type: System.String
    description: Name for the new view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.DeleteNamedView
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
  - nameview
  - imodeldoc2
  - model
  - doc2
  - name
  - string
  - void
---

# IModelDoc2.NameView

Creates a named view using the current view.

## Signature

```csharp
void NameView( 
   System.String
VName
)
```
## Parameters

- `VName` (System.String): Name for the new view

## Return Value

Unknown.

## See Also

- `IModelDoc2.DeleteNamedView`
- `IModelDoc2.ShowNamedView2`
- `IModelDocExtension.GetNamedViewRotation`
- `IModelDocExtension.IGetNamedViewRotation`