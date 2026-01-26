---
type: method
interface: IModelView
member: GetViewPlaneDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.AddPerspective
  - IModelView.GetEyePoint
  - IModelView.GetIsoPlaneDistance
  - IModelView.HasPerspective
  - IModelView.IGetEyePoint
  - IModelView.ISetEyePoint
  - IModelView.RemovePerspective
  - IModelView.Scale2
  - IModelView.SetEyePoint
keywords:
  - perspective
  - model
  - views
  - getviewplanedistance
  - imodelview
  - view
  - plane
  - distance
  - double
---

# IModelView.GetViewPlaneDistance

Gets the model view plane distance for perspective viewing.

## Signature

```csharp
System.Double GetViewPlaneDistance()
```
## Parameters

None.

## Return Value

Distance from the eye point to the view plane

## Remarks

The value returned is in pixels and represents the distance from the eye point to the view plane (the front of the object). The view plane distance is affected by the view scale.

## See Also

- `IModelView.AddPerspective`
- `IModelView.GetEyePoint`
- `IModelView.GetIsoPlaneDistance`
- `IModelView.HasPerspective`
- `IModelView.IGetEyePoint`
- `IModelView.ISetEyePoint`
- `IModelView.RemovePerspective`
- `IModelView.Scale2`
- `IModelView.SetEyePoint`