---
type: method
interface: ILayerMgr
member: GetCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - getcount
  - ilayermgr
  - layer
  - mgr
  - count
  - int32
---

# ILayerMgr.GetCount

Gets the number of layers in this drawing document.

## Signature

```csharp
System.Int32 GetCount()
```
## Parameters

None.

## Return Value

Number of layers

## Remarks

Call this method before calling
ILayerMgr::IGetLayerList
to determine the size of the array.