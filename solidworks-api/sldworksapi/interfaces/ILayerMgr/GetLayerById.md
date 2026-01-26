---
type: method
interface: ILayerMgr
member: GetLayerById
returns: System.Object
parameters:
  -
    name: LayerId
    type: System.Int16
    description: Layer ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ILayerMgr.IGetLayerById
keywords:
  - getlayerbyid
  - ilayermgr
  - layer
  - mgr
  - id
  - int16
  - object
---

# ILayerMgr.GetLayerById

Gets the layer using the specified layer ID in this drawing document.

## Signature

```csharp
System.Object GetLayerById( 
   System.Int16
LayerId
)
```
## Parameters

- `LayerId` (System.Int16): Layer ID

## Return Value

Layer

## Remarks

You can get the layer ID from several places.
IView::GetUserPoints2
and
IView::GetLines4
(and similar functions) return the LayerId as part of the array of return information.
IAnnotation::GetVisualProperties
also returns the LayerId as part of the array of return information.

## See Also

- `ILayerMgr.IGetLayerById`