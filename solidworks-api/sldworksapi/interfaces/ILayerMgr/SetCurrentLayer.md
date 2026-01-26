---
type: method
interface: ILayerMgr
member: SetCurrentLayer
returns: System.Int32
parameters:
  -
    name: NameIn
    type: System.String
    description: Name of the layer to become the active layer
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ILayerMgr.GetCurrentLayer
keywords:
  - setcurrentlayer
  - ilayermgr
  - layer
  - mgr
  - current
  - name
  - string
  - int32
---

# ILayerMgr.SetCurrentLayer

Sets the current (or active) layer in this drawing document.

## Signature

```csharp
System.Int32 SetCurrentLayer( 
   System.String
NameIn
)
```
## Parameters

- `NameIn` (System.String): Name of the layer to become the active layer

## Return Value

1 if the active layer was changed to the specified layer, 0 if not

## See Also

- `ILayerMgr.GetCurrentLayer`