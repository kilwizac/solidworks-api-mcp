---
type: method
interface: ILayerMgr
member: GetCurrentLayer
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ILayerMgr.SetCurrentLayer
keywords:
  - getcurrentlayer
  - ilayermgr
  - layer
  - mgr
  - current
  - string
  - layers
  - vba
---

# ILayerMgr.GetCurrentLayer

Gets the name of the current (active) layer in this drawing document.

## Signature

```csharp
System.String GetCurrentLayer()
```
## Parameters

None.

## Return Value

Name of the active layer

## Remarks

If an empty string is returned, then there is no active layer and
-None-
is displayed in the Layer toolbar.
To access information about a layer, get the
ILayer
object by passing the layer name to
ILayerMgr::GetLayer
.
To change the currently active layer, use
ILayerMgr::SetCurrentLayer
.

## Examples

- Get Layers (VBA) (Get_Layers_Example_VB.htm)

## See Also

- `ILayerMgr.SetCurrentLayer`