---
type: method
interface: IModelDoc2
member: IGetStandardViewRotation
returns: System.Double
parameters:
  -
    name: ViewId
    type: System.Int32
    description: View ID that you want to evaluate as defined in swStandardViews_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetStandardViewRotation
  - IModelDocExtension.GetNamedViewRotation
  - IModelDocExtension.IGetNamedViewRotation
keywords:
  - standard
  - views
  - view
  - see
  - also
  - iview
  - orientation
  - igetstandardviewrotation
  - imodeldoc2
  - model
  - doc2
  - rotation
  - id
  - int32
  - double
---

# IModelDoc2.IGetStandardViewRotation

Gets the specified view orientation matrix with respect to the Front view.

## Signature

```csharp
System.Double IGetStandardViewRotation( 
   System.Int32
ViewId
)
```
## Parameters

- `ViewId` (System.Int32): View ID that you want to evaluate as defined in swStandardViews_e

## Return Value

Array describing the view rotation with respect to the Front view; this is an array of 9 doubles

## Remarks

The end-user may have redefined the Front view to be something other than the X-Y plane.

## See Also

- `IModelDoc2.GetStandardViewRotation`
- `IModelDocExtension.GetNamedViewRotation`
- `IModelDocExtension.IGetNamedViewRotation`