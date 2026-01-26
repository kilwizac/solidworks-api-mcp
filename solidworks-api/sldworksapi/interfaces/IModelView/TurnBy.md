---
type: method
interface: IModelView
member: TurnBy
returns: void
parameters:
  -
    name: XAngle
    type: System.Double
    description: Angle by which to rotate the camera about its x axis
  -
    name: YAngle
    type: System.Double
    description: Angle by which to rotate the camera about its y axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.Camera
keywords:
  - camera
  - see
  - also
  - icamera
  - model
  - views
  - imodelview
  - imodelviewmanager
  - interfaces
  - turnby
  - view
  - turn
  - angle
  - double
  - void
---

# IModelView.TurnBy

Rotates the camera by the specified angles about the camera's x and y axes.

## Signature

```csharp
void TurnBy( 
   System.Double
XAngle
,
   System.Double
YAngle
)
```
## Parameters

- `XAngle` (System.Double): Angle by which to rotate the camera about its x axis
- `YAngle` (System.Double): Angle by which to rotate the camera about its y axis

## Return Value

Unknown.

## Remarks

The model view must have an active camera.

## See Also

- `IModelView.Camera`