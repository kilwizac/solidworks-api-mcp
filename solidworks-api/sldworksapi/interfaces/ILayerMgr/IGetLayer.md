---
type: method
interface: ILayerMgr
member: IGetLayer
returns: Layer
parameters:
  -
    name: NameIn
    type: System.String
    description: Layer name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ILayerMgr.GetLayer
keywords:
  - igetlayer
  - ilayermgr
  - layer
  - mgr
  - name
  - string
---

# ILayerMgr.IGetLayer

Gets the specified layer in this drawing document.

## Signature

```csharp
Layer IGetLayer( 
   System.String
NameIn
)
```
## Parameters

- `NameIn` (System.String): Layer name

## Return Value

ILayer object

## Remarks

You can get the layer name by calling
ILayerMgr::GetCurrentLayer
, create a new layer calling
ILayerMgr::AddLayer
, or obtain a list of layer names by calling
ILayerMgr::IGetLayerList
.

## See Also

- `ILayerMgr.GetLayer`