---
type: method
interface: IModelDocExtension
member: IGetNamedViewRotation
returns: System.Double
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
  - IModelDocExtension.GetNamedViewRotation
keywords:
  - named
  - views
  - view
  - see
  - also
  - iview
  - igetnamedviewrotation
  - imodeldocextension
  - model
  - doc
  - extension
  - rotation
  - name
  - string
  - double
---

# IModelDocExtension.IGetNamedViewRotation

Gets the specified named view orientation matrix with respect to the Front view.

## Signature

```csharp
System.Double IGetNamedViewRotation( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the named view

## Return Value

Unknown.

## Remarks

Array of 9 doubles describing the view rotation with respect to the Front view

## See Also

- `IModelDoc2.DeleteNamedView`
- `IModelDoc2.GetStandardViewRotation`
- `IModelDoc2.IGetStandardViewRotation`
- `IModelDoc2.NameView`
- `IModelDoc2.ShowNamedView2`
- `IModelDocExtension.GetNamedViewRotation`