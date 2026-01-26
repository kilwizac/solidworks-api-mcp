---
type: method
interface: IModelDocExtension
member: GetNamedViewRotation
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of the named view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.DeleteNamedView
  - IModelDoc2.GetStandardViewRotation
  - IModelDoc2.IGetStandardViewRotation
  - IModelDoc2.NameView
  - IModelDoc2.ShowNamedView2
  - IModelDocExtension.IGetNamedViewRotation
keywords:
  - view
  - see
  - also
  - iview
  - named
  - views
  - getnamedviewrotation
  - imodeldocextension
  - model
  - doc
  - extension
  - rotation
  - name
  - string
  - object
---

# IModelDocExtension.GetNamedViewRotation

Gets the specified named view orientation matrix with respect to the Front view.

## Signature

```csharp
System.Object GetNamedViewRotation( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the named view

## Return Value

Array of 9 doubles describing the view rotation with respect to the Front view

## Remarks

The end-user may have redefined the Front view to be something other than the X-Y plane.

## See Also

- `IModelDoc2.DeleteNamedView`
- `IModelDoc2.GetStandardViewRotation`
- `IModelDoc2.IGetStandardViewRotation`
- `IModelDoc2.NameView`
- `IModelDoc2.ShowNamedView2`
- `IModelDocExtension.IGetNamedViewRotation`