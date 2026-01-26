---
type: method
interface: IModelDoc2
member: GetStandardViewRotation
returns: System.Object
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
  - IModelDoc2.IGetStandardViewRotation
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
  - getstandardviewrotation
  - imodeldoc2
  - model
  - doc2
  - rotation
  - id
  - int32
  - object
  - show
  - named
  - vba
---

# IModelDoc2.GetStandardViewRotation

Gets the specified view orientation matrix with respect to the Front view.

## Signature

```csharp
System.Object GetStandardViewRotation( 
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

## Examples

- Show Named View (VBA) (Show_Named_View_Example_VB.htm)

## See Also

- `IModelDoc2.IGetStandardViewRotation`
- `IModelDocExtension.GetNamedViewRotation`
- `IModelDocExtension.IGetNamedViewRotation`