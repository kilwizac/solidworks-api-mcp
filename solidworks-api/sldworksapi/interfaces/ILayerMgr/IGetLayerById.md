---
type: method
interface: ILayerMgr
member: IGetLayerById
returns: Layer
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
  - ILayerMgr.GetLayerById
keywords:
  - igetlayerbyid
  - ilayermgr
  - layer
  - mgr
  - id
  - int16
---

# ILayerMgr.IGetLayerById

Gets the layer using the specified layer ID in this drawing document.

## Signature

```csharp
Layer IGetLayerById( 
   System.Int16
LayerId
)
```
## Parameters

- `LayerId` (System.Int16): Layer ID

## Return Value

ILayer object

## Remarks

You can get the layer ID from several places.
IView::IGetUserPoints2
and
IView::IGetLines4
(and similar functions) return the LayerId as part of the array of return information.
IAnnotation::IGetVisualProperties
also returns the LayerId as part of the array of return information.

## See Also

- `ILayerMgr.GetLayerById`