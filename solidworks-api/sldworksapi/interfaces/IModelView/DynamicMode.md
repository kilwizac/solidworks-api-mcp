---
type: property
interface: IModelView
member: DynamicMode
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.HlrQuality
  - IModelView.StartDynamics
  - IModelView.StopDynamics
keywords:
  - dynamicmode
  - imodelview
  - model
  - view
  - dynamic
  - mode
  - int32
readonly: true
---

# IModelView.DynamicMode

Gets the dynamic mode.

## Signature

```csharp
System.Int32 DynamicMode {get;}
```
## Parameters

None.

## Return Value

Dynamic mode state as defined in swDynamicMode_e

## Remarks

If there is no geometry in the part or assembly, then this method returns swNoDynamics regardless of whether spinning, panning, zooming.

## See Also

- `IModelView.HlrQuality`
- `IModelView.StartDynamics`
- `IModelView.StopDynamics`